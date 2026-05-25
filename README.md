# For You

A heartfelt single-page letter — built with HTML, CSS, and JavaScript for [GitHub Pages](https://pages.github.com/).

## Personalize

Edit `index.html` to replace placeholder dates, messages, and song titles with your own story.

**Media:** Put photos in `media/images/` and videos in `media/videos/`.

**Songs (dynamic):** Top **5** tracks from this [YouTube playlist](https://www.youtube.com/playlist?list=PLdSCVZbBP-Pw6YVFQwzSe5g_MmNgUn11m) are saved to `data/songs.json` via a simple script. **No Spotify. No API keys. No accounts.**

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch `main` (or `master`) and folder **`/ (root)`**.
5. Save. Your site will be live at `https://<username>.github.io/For-My-Wife/` (or your repo name).

## Dynamic songs (no setup required)

Playlist: [TOP 50 PUNJABI SONGS 2026](https://www.youtube.com/playlist?list=PLdSCVZbBP-Pw6YVFQwzSe5g_MmNgUn11m)

The script reads YouTube’s **public RSS feed** for that playlist and saves the **top 5** videos to `data/songs.json`. Your site loads that file and plays them with the built-in audio-style player.

### Refresh the list

```bash
node scripts/fetch-songs.mjs
git add data/songs.json && git commit -m "Update top 5 songs"
```

**On GitHub:** Actions → **Update top Punjabi songs** → **Run workflow** (runs automatically every **Monday at 06:00 UTC**).

### Change playlist or count

```bash
YOUTUBE_PLAYLIST_ID=PLdSCVZbBP-Pw6YVFQwzSe5g_MmNgUn11m TRACK_COUNT=5 node scripts/fetch-songs.mjs
```

No accounts or API keys needed. **Songs open on YouTube** in a new tab (labels block in-page embeds for many music videos — this always works).

## Structure

```
├── index.html
├── css/style.css
├── js/main.js
├── data/songs.json          # Auto-generated playlist
├── scripts/fetch-songs.mjs  # YouTube playlist → songs.json
├── .github/workflows/       # Weekly update job
└── media/
    ├── images/
    └── videos/
```

## Features

- Dark romantic theme with subtle starfield
- Fixed navigation with smooth scrolling
- Scroll-reveal fade-in animations
- Rotating “Today I love you because…” lines
- Nostalgic memory sections
- Mature apology block
- Fully responsive (mobile menu included)
- Respects `prefers-reduced-motion`

No frameworks. No autoplay audio.
