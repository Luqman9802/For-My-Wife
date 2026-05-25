/**
 * For You — romantic single-page site
 * Lightweight interactions: stars, scroll reveal, rotating text, nav, typewriter
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     Starfield canvas
     -------------------------------------------------------------------------- */
  function initStars() {
    const canvas = document.getElementById("stars");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let stars = [];
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const count = Math.min(120, Math.floor((width * height) / 12000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const t = Date.now() * 0.001;

      stars.forEach((star) => {
        let opacity = star.opacity;
        if (!prefersReduced) {
          opacity = star.opacity * (0.6 + 0.4 * Math.sin(t * star.speed * 60 + star.twinkle));
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 242, 247, ${opacity})`;
        ctx.fill();
      });

      if (!prefersReduced) {
        requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
  }

  /* --------------------------------------------------------------------------
     Cursor glow (desktop only)
     -------------------------------------------------------------------------- */
  function initCursorGlow() {
    const glow = document.querySelector(".cursor-glow");
    if (!glow || window.matchMedia("(max-width: 768px)").matches) return;

    let active = false;

    document.addEventListener("mousemove", (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      if (!active) {
        document.body.classList.add("cursor-active");
        active = true;
      }
    });

    document.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-active");
      active = false;
    });
  }

  /* --------------------------------------------------------------------------
     Navbar scroll state & mobile menu
     -------------------------------------------------------------------------- */
  function initNav() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");
    const links = document.querySelectorAll(".nav__menu a");

    function onScroll() {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        menu.classList.toggle("open", !open);
      });

      links.forEach((link) => {
        link.addEventListener("click", () => {
          toggle.setAttribute("aria-expanded", "false");
          menu.classList.remove("open");
        });
      });
    }
  }

  /* --------------------------------------------------------------------------
     Scroll reveal
     -------------------------------------------------------------------------- */
  let revealObserver = null;

  function initScrollReveal() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
      );
    }

    observeReveal(document);
  }

  function observeReveal(root) {
    if (!revealObserver) return;
    const scope = root instanceof Element ? root : document;
    scope.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      revealObserver.observe(el);
    });
  }

  /* --------------------------------------------------------------------------
     Typewriter (hero subtitle)
     -------------------------------------------------------------------------- */
  function initTypewriter() {
    const el = document.querySelector(".typewriter");
    if (!el) return;

    const text = el.getAttribute("data-text") || el.textContent;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = text;
      return;
    }

    el.textContent = "";
    let i = 0;
    const speed = 32;

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i += 1;
        setTimeout(type, speed);
      }
    }

    const heroObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          type();
          heroObserver.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    heroObserver.observe(el);
  }

  /* --------------------------------------------------------------------------
     Rotating "Today I love you because..."
     -------------------------------------------------------------------------- */
  let rotatingIntervalId = null;

  function initRotatingText(reasons) {
    const line = document.getElementById("rotating-reason");
    if (!line || !reasons?.length) return;

    if (rotatingIntervalId) {
      clearInterval(rotatingIntervalId);
      rotatingIntervalId = null;
    }

    let index = 0;
    line.textContent = reasons[0];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function cycle() {
      line.classList.add("fade-out");
      setTimeout(() => {
        index = (index + 1) % reasons.length;
        line.textContent = reasons[index];
        line.classList.remove("fade-out");
      }, 500);
    }

    rotatingIntervalId = setInterval(cycle, 4500);
  }

  /* --------------------------------------------------------------------------
     Photo lightbox
     -------------------------------------------------------------------------- */
  function initLightbox() {
    const dialog = document.getElementById("lightbox");
    const lightboxImg = dialog?.querySelector(".lightbox__img");
    const closeBtn = dialog?.querySelector(".lightbox__close");
    const triggers = document.querySelectorAll(".photo-card__trigger");

    if (!dialog || !lightboxImg || !triggers.length) return;

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "Photo";
      dialog.showModal();
      document.body.style.overflow = "hidden";
    }

    function close() {
      dialog.close();
      lightboxImg.removeAttribute("src");
      document.body.style.overflow = "";
    }

    triggers.forEach((btn) => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-full");
        const img = btn.querySelector("img");
        if (src) open(src, img?.alt);
      });
    });

    closeBtn?.addEventListener("click", close);

    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) close();
    });

    dialog.addEventListener("cancel", () => {
      document.body.style.overflow = "";
    });
  }

  /* --------------------------------------------------------------------------
     Dynamic letter content — rotates every N days (data/content.json)
     -------------------------------------------------------------------------- */
  function getContentBatchIndex(config) {
    const batches = config.batches ?? [];
    if (!batches.length) return 0;

    const rotationDays = config.rotationDays || 4;
    const epoch = new Date(config.epoch || "2026-01-01T00:00:00Z").getTime();
    const msPerDay = 86400000;
    const daysSinceEpoch = Math.floor((Date.now() - epoch) / msPerDay);
    const period = Math.floor(daysSinceEpoch / rotationDays);

    return ((period % batches.length) + batches.length) % batches.length;
  }

  function formatContentPeriod(config, batchIndex) {
    const rotationDays = config.rotationDays || 4;
    const epoch = new Date(config.epoch || "2026-01-01T00:00:00Z").getTime();
    const msPerDay = 86400000;
    const daysSinceEpoch = Math.floor((Date.now() - epoch) / msPerDay);
    const period = Math.floor(daysSinceEpoch / rotationDays);
    const start = new Date(epoch + period * rotationDays * msPerDay);
    const end = new Date(start.getTime() + rotationDays * msPerDay - 1);

    const fmt = { month: "short", day: "numeric" };
    const range = `${start.toLocaleDateString(undefined, fmt)} – ${end.toLocaleDateString(undefined, fmt)}`;
    const total = config.batches?.length ?? 1;

    return { range, batchNumber: batchIndex + 1, total };
  }

  function setContentStatus(id, message, ready) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = message;
    el.classList.toggle("is-ready", Boolean(ready));
  }

  function renderWhy(batch) {
    const quoteEl = document.querySelector("#why-quote p");
    const cardsEl = document.getElementById("why-cards");
    if (!quoteEl || !cardsEl || !batch?.why) return;

    quoteEl.textContent = `"${batch.why.quote}"`;

    cardsEl.innerHTML = (batch.why.cards ?? [])
      .map(
        (card) => `
          <article class="love-card reveal">
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.body)}</p>
          </article>`
      )
      .join("");

    observeReveal(cardsEl);
  }

  function renderToday(batch) {
    const jokesEl = document.getElementById("today-jokes");
    const reasonsEl = document.getElementById("today-reasons");
    if (!batch?.today) return;

    if (jokesEl) {
      const jokes = batch.today.insideJokes ?? [];
      jokesEl.innerHTML =
        `<p class="inside-joke__label">If you know, you know</p>` +
        jokes
          .map((joke) => `<p class="inside-joke__line">${escapeHtml(joke)}</p>`)
          .join("");
      observeReveal(jokesEl);
    }

    if (reasonsEl) {
      reasonsEl.innerHTML = (batch.today.reasons ?? [])
        .map((reason) => `<li>${escapeHtml(reason)}</li>`)
        .join("");
      observeReveal(reasonsEl);
    }

    initRotatingText(batch.today.rotating ?? []);
  }

  function renderUnsent(batch) {
    const wall = document.getElementById("unsent-notes");
    if (!wall) return;

    const tiltClasses = ["", " handwritten-note--tilt", "", " handwritten-note--tilt-alt", ""];
    const messages = batch.unsent ?? [];

    wall.innerHTML = messages
      .map(
        (text, i) => `
          <article class="handwritten-note${tiltClasses[i % tiltClasses.length] || ""} reveal">
            <p>${escapeHtml(text)}</p>
          </article>`
      )
      .join("");

    observeReveal(wall);
  }

  function renderApology(batch) {
    const container = document.getElementById("apology-blocks");
    if (!container) return;

    container.innerHTML = (batch.apology ?? [])
      .map(
        (block) => `
          <div class="apology-block reveal">
            <h3>${escapeHtml(block.title)}</h3>
            <p>${escapeHtml(block.body)}</p>
          </div>`
      )
      .join("");

    observeReveal(container);
  }

  function renderFuture(batch) {
    const grid = document.getElementById("future-dreams");
    if (!grid) return;

    grid.innerHTML = (batch.future ?? [])
      .map(
        (dream) => `
          <article class="dream-card reveal">
            <span class="dream-card__icon" aria-hidden="true">${escapeHtml(dream.icon || "✦")}</span>
            <h3>${escapeHtml(dream.title)}</h3>
            <p>${escapeHtml(dream.body)}</p>
          </article>`
      )
      .join("");

    observeReveal(grid);
  }

  async function loadDynamicContent() {
    const statusIds = ["why-status", "today-status", "unsent-status", "apology-status", "future-status"];

    try {
      const res = await fetch(`data/content.json?t=${Date.now()}`);
      if (!res.ok) throw new Error("Could not load content");

      const config = await res.json();
      const batches = config.batches ?? [];
      if (!batches.length) throw new Error("No content batches");

      const index = getContentBatchIndex(config);
      const batch = batches[index];
      const { range, batchNumber, total } = formatContentPeriod(config, index);
      const rotationDays = config.rotationDays || 4;

      const statusMsg = `Set ${batchNumber} of ${total} · ${range} · new words every ${rotationDays} days`;

      renderWhy(batch);
      renderToday(batch);
      renderUnsent(batch);
      renderApology(batch);
      renderFuture(batch);

      statusIds.forEach((id) => setContentStatus(id, statusMsg, true));
    } catch {
      statusIds.forEach((id) =>
        setContentStatus(id, "Letter content not loaded — check data/content.json", false)
      );
    }
  }

  /* --------------------------------------------------------------------------
     Dynamic songs: load data/songs.json (YouTube playlist, link-out playback)
     -------------------------------------------------------------------------- */
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function formatUpdated(iso) {
    if (!iso) return "";
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "";
    }
  }

  function renderSongTracks(tracks) {
    return tracks
      .map((track, index) => {
        const title = escapeHtml(track.title);
        const artist = escapeHtml(track.artist);
        const note = escapeHtml(track.note || "Romantic Punjabi — for you, today.");
        const youtubeId = escapeHtml(track.youtubeId);
        const thumb =
          track.albumArt ||
          `https://img.youtube.com/vi/${track.youtubeId}/mqdefault.jpg`;

        const watchUrl = `https://www.youtube.com/watch?v=${track.youtubeId}${
          track.playlistId ? `&list=${track.playlistId}` : ""
        }`;

        return `
          <a class="audio-track reveal visible" href="${escapeHtml(watchUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Listen to ${title} on YouTube">
            <span class="audio-track__art">
              <img class="audio-track__thumb" src="${escapeHtml(thumb)}" alt="" width="56" height="56" loading="lazy">
              <span class="audio-track__icon" aria-hidden="true"></span>
            </span>
            <span class="audio-track__info">
              <span class="audio-track__title">${title}</span>
              <span class="audio-track__artist">${artist}</span>
              <span class="audio-track__note">${note}</span>
            </span>
            <span class="audio-track__action">Listen</span>
          </a>`;
      })
      .join("");
  }

  async function loadDynamicSongs() {
    const container = document.getElementById("dynamic-songs");
    const status = document.getElementById("songs-status");
    const hint = document.getElementById("songs-hint");

    if (!container || !status) return;

    container.classList.add("is-loading");

    try {
      const res = await fetch(`data/songs.json?t=${Date.now()}`);
      if (!res.ok) throw new Error("Could not load songs");

      const data = await res.json();
      const tracks = data.tracks?.filter((t) => t.youtubeId && t.title) ?? [];

      if (!tracks.length) throw new Error("No tracks in playlist yet");

      const playlistUrl =
        data.playlistUrl ||
        (data.playlistId
          ? `https://www.youtube.com/playlist?list=${data.playlistId}`
          : "");

      const playlistCta = playlistUrl
        ? `<a class="songs-playlist-cta reveal visible" href="${escapeHtml(playlistUrl)}" target="_blank" rel="noopener noreferrer">Play full playlist on YouTube</a>`
        : "";

      container.innerHTML =
        playlistCta +
        renderSongTracks(tracks.map((t) => ({ ...t, playlistId: data.playlistId })));
      container.classList.remove("is-loading");

      const dateLabel = formatUpdated(data.updated);
      const playlistName = data.playlistName ? ` · ${data.playlistName}` : "";
      status.textContent = dateLabel
        ? `Updated ${dateLabel}${playlistName}`
        : `Top ${tracks.length} romantic Punjabi picks${playlistName}`;
      status.classList.add("is-ready");

      if (hint) hint.hidden = false;
    } catch {
      container.classList.remove("is-loading");
      container.innerHTML = `
        <p class="audio-playlist__empty reveal visible">
          Songs aren’t ready yet. Run <code>node scripts/fetch-songs.mjs</code> once (see README), then refresh.
        </p>`;
      status.textContent = "Playlist not available yet.";
      status.classList.add("is-error");
    }
  }

  /* --------------------------------------------------------------------------
     Pause other videos when one plays
     -------------------------------------------------------------------------- */
  function initVideos() {
    const videos = document.querySelectorAll(".video-gallery video");
    if (!videos.length) return;

    videos.forEach((video) => {
      video.addEventListener("play", () => {
        videos.forEach((other) => {
          if (other !== video && !other.paused) {
            other.pause();
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     Smooth anchor offset for fixed nav
     -------------------------------------------------------------------------- */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),
          10
        ) || 72;

        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }

  /* --------------------------------------------------------------------------
     Init
     -------------------------------------------------------------------------- */
  async function init() {
    initStars();
    initCursorGlow();
    initNav();
    initScrollReveal();
    initTypewriter();
    initLightbox();
    initVideos();
    initSmoothAnchors();

    await loadDynamicContent();
    loadDynamicSongs();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
