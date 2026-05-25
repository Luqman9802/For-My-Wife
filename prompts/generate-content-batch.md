# LLM prompt: generate a new `content.json` batch

Copy everything inside the fenced block below into ChatGPT, Claude, Gemini, etc. Fill in the **YOUR INPUT** section first.

---

```
You are helping me write content for a romantic personal website ("For Kinza"). I need valid JSON that my static site loads from `data/content.json`. The site rotates through "batches" every 4 days — each batch is one object with fresh text for 5 sections.

## YOUR INPUT (fill this in before sending)

- Partner's name: Kinza
- My name / how I sign off: [e.g. Luqman / "Yours, always"]
- Relationship tone: [warm, honest, mature — not cheesy influencer love quotes]
- Language: English
- Inside jokes (KEEP EXACTLY in every batch — do not rewrite or sanitize):
  1. "You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha."
  2. "Whats in there? My Legs? What's else in there?"
- Specific memories or traits to weave in (optional):
  - [e.g. late-night calls, voice notes, Punjabi songs, long distance, etc.]
- Batch number to write: [e.g. "batch 4" — must be NEW, not repeat prior batches]
- How many batches to generate in this reply: [1 recommended]

## EXISTING BATCHES (paste prior batch text here so the model avoids repetition)

[Paste previous batches from data/content.json, or write "none — first batch"]

---

## OUTPUT RULES (strict)

1. Return **only** valid JSON — no markdown fences, no commentary before or after.
2. If generating **one new batch**, output a **single JSON object** with keys: `why`, `today`, `unsent`, `apology`, `future` (not the full file wrapper).
3. If generating a **full file**, output the complete structure with `rotationDays`, `epoch`, and `batches` array.
4. Use straight double quotes `"` only. Escape internal quotes as `\"`.
5. No trailing commas. No comments. No `undefined` or `null` placeholders.
6. Do not change `insideJokes` — copy them verbatim in every batch.
7. `apology` titles must be exactly these four strings (in this order):
   - "I'm sorry for…"
   - "I understand it made you feel…"
   - "I'm trying to do better by…"
   - "You deserve…"
8. `today.rotating` — every line MUST start with: `Today I love you because `
9. `today.reasons` — lowercase start, no leading "Today I love you because" (they render as list items after "because…")
10. `why.quote` — one sentence, no surrounding quote marks in the string (the site adds quotes in HTML).
11. `unsent` — exactly **5** strings, first-person, feel like unsent texts / diary lines.
12. `why.cards` — exactly **6** objects, each with `title` (short, 2–5 words) and `body` (1–3 sentences).
13. `today.rotating` — exactly **7** strings.
14. `today.reasons` — exactly **5** strings.
15. `today.insideJokes` — exactly **2** strings (the jokes above, with escaped quotes).
16. `apology` — exactly **4** blocks with fixed titles above.
17. `future` — exactly **4** objects with `icon`, `title`, `body`. Icons: single Unicode symbol (e.g. ◐ ✦ ☽ ◇ ☕ ✈ ♡ ☀ ⌂ ✧ ∞).
18. All content must be **original** for this batch — do not recycle phrases from pasted prior batches.
19. Voice: intimate, specific, grounded — like a real partner wrote it. Avoid clichés ("soulmate", "you complete me", "to the moon and back").
20. Include at least 2–3 references to her name "Kinza" across the batch (not every line).

---

## JSON SCHEMA (one batch object)

{
  "why": {
    "quote": "string — one heartfelt line",
    "cards": [
      { "title": "string", "body": "string" }
    ]
  },
  "today": {
    "rotating": [
      "Today I love you because ..."
    ],
    "insideJokes": [
      "\"You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha.\"",
      "\"Whats in there? My Legs? What's else in there?\""
    ],
    "reasons": [
      "lowercase reason without leading Today I love you because"
    ]
  },
  "unsent": [
    "string",
    "string",
    "string",
    "string",
    "string"
  ],
  "apology": [
    { "title": "I'm sorry for…", "body": "string" },
    { "title": "I understand it made you feel…", "body": "string" },
    { "title": "I'm trying to do better by…", "body": "string" },
    { "title": "You deserve…", "body": "string" }
  ],
  "future": [
    { "icon": "◐", "title": "string", "body": "string" },
    { "icon": "✦", "title": "string", "body": "string" },
    { "icon": "☽", "title": "string", "body": "string" },
    { "icon": "◇", "title": "string", "body": "string" }
  ]
}

---

## FULL FILE SCHEMA (only if asked for entire file)

{
  "rotationDays": 4,
  "epoch": "2026-01-01",
  "batches": [
    { ... batch object ... },
    { ... batch object ... }
  ]
}

---

## SECTION GUIDE (what each part is for on the website)

| Section | Website heading | Purpose |
|--------|------------------|---------|
| why | Why I Love You | Pull quote + 6 cards in a grid |
| today | Today I Love You Because… | Carousel (rotating) + inside jokes + bullet list |
| unsent | Messages I Never Sent | 5 sticky-note style messages |
| apology | What I Needed to Say | 4-part mature apology |
| future | Future With You | 4 dream cards with icons |

---

## EXAMPLE (structure only — write NEW content, do not copy)

{
  "why": {
    "quote": "Example quote sentence here.",
    "cards": [
      { "title": "Card one", "body": "Two or three sentences about her." },
      { "title": "Card two", "body": "..." },
      { "title": "Card three", "body": "..." },
      { "title": "Card four", "body": "..." },
      { "title": "Card five", "body": "..." },
      { "title": "Card six", "body": "..." }
    ]
  },
  "today": {
    "rotating": [
      "Today I love you because ...",
      "Today I love you because ...",
      "Today I love you because ...",
      "Today I love you because ...",
      "Today I love you because ...",
      "Today I love you because ...",
      "Today I love you because ..."
    ],
    "insideJokes": [
      "\"You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha.\"",
      "\"Whats in there? My Legs? What's else in there?\""
    ],
    "reasons": [
      "reason one.",
      "reason two.",
      "reason three.",
      "reason four.",
      "reason five."
    ]
  },
  "unsent": [
    "First unsent message.",
    "Second.",
    "Third.",
    "Fourth.",
    "Fifth."
  ],
  "apology": [
    { "title": "I'm sorry for…", "body": "..." },
    { "title": "I understand it made you feel…", "body": "..." },
    { "title": "I'm trying to do better by…", "body": "..." },
    { "title": "You deserve…", "body": "..." }
  ],
  "future": [
    { "icon": "◐", "title": "Dream one", "body": "..." },
    { "icon": "✦", "title": "Dream two", "body": "..." },
    { "icon": "☽", "title": "Dream three", "body": "..." },
    { "icon": "◇", "title": "Dream four", "body": "..." }
  ]
}

---

## AFTER YOU GENERATE

I will paste your JSON object as a new item inside `"batches": [ ... ]` in `data/content.json`, then commit and push to GitHub Pages.

Now generate **one new batch** following all rules. Output JSON only.
```

---

## How to use the result

1. Run the prompt in your LLM.
2. Copy the JSON object it returns.
3. Open `data/content.json`.
4. Add a comma after the last batch, paste the new object, validate JSON (VS Code or jsonlint).
5. Save, refresh http://localhost:8080

To generate **3 batches at once**, change the last line to:

`Now generate **3 new batch objects** as a JSON array `[{...},{...},{...}]` following all rules. Output JSON only.`

Then paste all three into `batches`.
