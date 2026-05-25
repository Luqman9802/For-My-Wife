/**
 * Fetches top tracks from a public YouTube playlist (RSS feed).
 * No Spotify, no API keys, no accounts required.
 *
 * Playlist: https://www.youtube.com/playlist?list=PLdSCVZbBP-Pw6YVFQwzSe5g_MmNgUn11m
 * Run: node scripts/fetch-songs.mjs
 */

import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_PATH = join(ROOT, "data", "songs.json");

const PLAYLIST_ID =
  process.env.YOUTUBE_PLAYLIST_ID || "PLdSCVZbBP-Pw6YVFQwzSe5g_MmNgUn11m";
const TRACK_COUNT = Number(process.env.TRACK_COUNT || "5");
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

function decodeXml(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function pick(entry, tag) {
  const m = entry.match(new RegExp(`<${tag}>([^<]*)`));
  return m ? decodeXml(m[1].trim()) : "";
}

async function fetchTopTracksFromPlaylist() {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;
  console.log(`Fetching playlist RSS…\n${PLAYLIST_URL}`);

  const res = await fetch(feedUrl, {
    headers: { "User-Agent": "For-My-Wife/1.0 (playlist sync)" },
  });

  if (!res.ok) {
    throw new Error(`YouTube RSS failed: ${res.status} ${await res.text()}`);
  }

  const xml = await res.text();
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

  if (!entries.length) {
    throw new Error("No videos found in playlist feed.");
  }

  const tracks = [];

  for (const match of entries) {
    if (tracks.length >= TRACK_COUNT) break;

    const block = match[1];
    const youtubeId = pick(block, "yt:videoId");
    const title = pick(block, "media:title") || pick(block, "title");
    const artist = pick(block, "name");

    if (!youtubeId || !title) continue;

    tracks.push({
      title,
      artist: artist || "Punjabi",
      youtubeId,
      albumArt: `https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg`,
      note: "Tap to listen on YouTube.",
    });
  }

  if (tracks.length < TRACK_COUNT) {
    throw new Error(`Only found ${tracks.length} tracks (needed ${TRACK_COUNT}).`);
  }

  return tracks;
}

async function main() {
  const tracks = await fetchTopTracksFromPlaylist();

  tracks.forEach((t, i) => console.log(`  ${i + 1}. ${t.title} — ${t.artist}`));

  const output = {
    updated: new Date().toISOString(),
    source: "youtube",
    playlistName: "TOP 50 PUNJABI SONGS 2026 (THIS WEEK)",
    playlistId: PLAYLIST_ID,
    playlistUrl: PLAYLIST_URL,
    tracks,
  };

  writeFileSync(OUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf8");
  console.log(`\nWrote ${tracks.length} tracks to data/songs.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
