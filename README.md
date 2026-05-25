# For You

A heartfelt single-page letter — built with HTML, CSS, and JavaScript for [GitHub Pages](https://pages.github.com/).

## Personalize

Edit `index.html` for hero, memories, photos, and closing. **Rotating letter sections** live in `data/content.json` (see below).

**Media:** Put photos in `media/images/` and videos in `media/videos/` — these stay static on the page.

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

## Dynamic letter content (every 4 days)

These sections rotate automatically — **no API keys**, same pattern as songs:

- **Why I Love You** (quote + cards)
- **Today I Love You Because…** (rotating line + list + inside jokes)
- **Messages I Never Sent**
- **What I Needed to Say** (apology)
- **Future With You**

Content is stored in `data/content.json` as **batches**. The site picks which batch to show from today’s date:

- `rotationDays`: `4` (change to `7` for weekly, etc.)
- `epoch`: start date for the rotation clock
- `batches`: array of content sets — add a new object to the array whenever you want fresh words

After all batches have been shown, it cycles back to the first.

### Add a new batch

1. Open `data/content.json`.
2. Copy the last object inside `"batches": [ ... ]`.
3. Edit the text (keep the same JSON shape: `why`, `today`, `unsent`, `apology`, `future`).
4. Commit and push — GitHub Pages will serve the update.

Each section shows a small line like **Set 2 of 3 · May 9 – May 12 · new words every 4 days**.

### Change how often it rotates

```json
"rotationDays": 4,
"epoch": "2026-01-01"
```

Set `rotationDays` to `1` for daily rotation, `7` for weekly, etc.

## Structure

```
├── index.html
├── css/style.css
├── js/main.js
├── data/
│   ├── content.json         # Letter sections (rotates every 4 days)
│   └── songs.json           # Auto-generated playlist
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
- Rotating letter sections (every 4 days) + “Today I love you because…” carousel
- Nostalgic memory sections
- Mature apology block
- Fully responsive (mobile menu included)
- Respects `prefers-reduced-motion`

No frameworks. No autoplay audio.
