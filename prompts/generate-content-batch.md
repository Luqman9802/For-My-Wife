# LLM prompt: generate a new `content.json` batch

Copy everything inside the fenced block below into ChatGPT, Claude, Gemini, etc. Fill in the **YOUR INPUT** section first.

---

```
You are helping me write content for a romantic personal website ("For Kinza"). I need valid JSON that my static site loads from `data/content.json`. The site rotates through "batches" every 4 days — each batch is one object with fresh text for 5 sections.

## YOUR INPUT (fill this in before sending)

- Partner's name: Kinza Wafa
- My name / how I sign off: Luqman
- Relationship tone: warm, honest, mature, clingy, funny — not cheesy influencer love quotes
- Language: English
- Inside jokes (KEEP EXACTLY in every batch — do not rewrite or sanitize):
  1. "You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha."
  2. "Whats in there? My Legs? What's else in there?"
- Specific memories or traits to weave in (optional): late-night calls, voice notes, Punjabi songs, long distance
- Batch number to write: "batch 6" — must be NEW, not repeat prior batches
- How many batches to generate in this reply: 6

## EXISTING BATCHES

{
  "rotationDays": 4,
  "epoch": "2026-01-01",
  "batches": [
    {
      "why": {
        "quote": "I love how you make ordinary days feel unforgettable.",
        "cards": [
          {
            "title": "How you listen",
            "body": "You don't rush to fix things. You stay — and that makes me feel safe enough to be honest, even when I'm still figuring out what I mean."
          },
          {
            "title": "Small habits",
            "body": "The way you laugh mid-sentence. How you send a voice note when typing feels too cold. The little check-ins that tell me I'm on your mind."
          },
          {
            "title": "Your steadiness",
            "body": "You bring calm without trying to control everything. You remind me that love can be gentle and still be strong."
          },
          {
            "title": "What you changed",
            "body": "I started noticing good things again — mornings, patience, the person I want to become. You didn't fix me. You helped me want better for myself."
          },
          {
            "title": "Your honesty",
            "body": "Even when it's uncomfortable, you speak with care. That kind of truth is rare, and I don't take it for granted."
          },
          {
            "title": "Us, simply",
            "body": "Movie recommendations at midnight. Inside jokes that only we understand. The comfort of knowing there's someone who actually knows me."
          }
        ]
      },
      "today": {
        "rotating": [
          "Today I love you because you always know how to calm me.",
          "Today I love you because your laugh stays in my head all day.",
          "Today I love you because you're Kinza — and that's enough.",
          "Today I love you because you You are Sexually Harassing me, Stop Touching My Wenie, I Got a 9 Incha.",
          "Today I love you because you ask what's in there — my legs? what else in there?",
          "Today I love you because you chose us, even on hard days.",
          "Today I love you because ordinary moments feel brighter with you."
        ],
        "insideJokes": [
          "\"You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha.\"",
          "\"Whats in there? My Legs? What's else in there?\""
        ],
        "reasons": [
          "you always know how to calm me when my mind won't slow down.",
          "your laugh stays in my head long after we've said goodnight.",
          "you say things only Kinza would say — and I love you more for it.",
          "you make effort feel natural, not like a performance.",
          "you chose us even on the days that weren't easy."
        ]
      },
      "unsent": [
        "I missed you more than I admitted — even on days I acted like I was fine.",
        "You mattered to me earlier than I realized. I was just scared to be that vulnerable.",
        "Sometimes I reread our old conversations — not out of doubt, but because they remind me how far we've come.",
        "I wanted to tell you I was proud of you, more than once. I hope you felt it anyway.",
        "There were nights I almost called just to hear your voice. I should have. I will, more often."
      ],
      "apology": [
        {
          "title": "I'm sorry for…",
          "body": "The times I was distant when you needed presence. The moments I let pride speak louder than care. Not always answering with the gentleness you deserved."
        },
        {
          "title": "I understand it made you feel…",
          "body": "Uncertain, unimportant, or like you were carrying more than your share. I see that now — and I don't want to be the reason you feel alone in this."
        },
        {
          "title": "I'm trying to do better by…",
          "body": "Listening without defending. Showing up consistently, not only when it's convenient. Communicating clearly instead of assuming you'll just know."
        },
        {
          "title": "You deserve…",
          "body": "Patience, respect, effort, and a love that feels safe — not perfect, but real. You deserve someone who chooses you in the small moments, every day."
        }
      ],
      "future": [
        {
          "icon": "◐",
          "title": "Movies & slow evenings",
          "body": "Shared blankets, bad subtitles, and debates about which ending was better."
        },
        {
          "icon": "✦",
          "title": "Travel, somewhere new",
          "body": "A place neither of us has been — where the only plan is to wander and eat well."
        },
        {
          "icon": "☽",
          "title": "Late-night calls",
          "body": "When the world is quiet and it's just your voice and mine, like always."
        },
        {
          "icon": "◇",
          "title": "Ordinary Tuesdays",
          "body": "Grocery runs, inside jokes, and coming home to someone who feels like peace."
        }
      ]
    },
    {
      "why": {
        "quote": "You don't have to be loud to be unforgettable — you already are.",
        "cards": [
          {
            "title": "Your patience",
            "body": "You give me room to be human. You don't punish honesty — you make space for it, and that changed how I show up for you."
          },
          {
            "title": "The way you care",
            "body": "Not performative care — the real kind. A check-in when you sense something's off. Remembering small things I said once and never repeated."
          },
          {
            "title": "Your strength",
            "body": "You hold your ground without making love feel like a battlefield. I admire that. I learn from it."
          },
          {
            "title": "How you see me",
            "body": "You notice effort, not just outcomes. You celebrate progress I would have ignored. That makes me want to keep growing — for us."
          },
          {
            "title": "Your humor",
            "body": "The jokes that shouldn't work but do. The way you can turn a heavy day lighter without pretending the weight wasn't real."
          },
          {
            "title": "Choosing each other",
            "body": "We didn't get here by accident. We kept showing up — messy, tired, real — and that's why this feels different."
          }
        ]
      },
      "today": {
        "rotating": [
          "Today I love you because you make hard conversations feel possible.",
          "Today I love you because you're the first person I want to tell good news to.",
          "Today I love you because you remember the little things.",
          "Today I love you because you still make me laugh at the worst times.",
          "Today I love you because you're patient when I'm not at my best.",
          "Today I love you because being with you feels like home, not a performance.",
          "Today I love you because you keep choosing us."
        ],
        "insideJokes": [
          "\"You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha.\"",
          "\"Whats in there? My Legs? What's else in there?\""
        ],
        "reasons": [
          "you text me back like my words actually matter.",
          "you never make love feel like a competition.",
          "you're soft without being weak — and I respect that.",
          "you make me want to be more honest, not more perfect.",
          "you feel like my person, even on ordinary days."
        ]
      },
      "unsent": [
        "I was proud of you before I said it out loud. I should have said it sooner.",
        "There were moments I wanted to hold your hand through a screen and couldn't — I felt that distance.",
        "I kept a screenshot of something sweet you sent. I still look at it sometimes.",
        "I almost told you I was scared of losing you. I wrote it, then deleted it. Not because it wasn't true — because I wasn't ready.",
        "I love you in the quiet ways too — not only the big declarations."
      ],
      "apology": [
        {
          "title": "I'm sorry for…",
          "body": "Replying late when you needed a quick reassurance. Assuming you'd understand instead of explaining. The times tone mattered and I didn't choose mine carefully."
        },
        {
          "title": "I understand it made you feel…",
          "body": "Like you were chasing closeness I should have met halfway. Like your feelings were too much — when they never were."
        },
        {
          "title": "I'm trying to do better by…",
          "body": "Saying what I mean before resentment builds. Apologizing without excuses. Making time intentional, not leftover."
        },
        {
          "title": "You deserve…",
          "body": "Consistency. Someone who doesn't make you guess where you stand. A partner who treats your heart like it matters — because it does."
        }
      ],
      "future": [
        {
          "icon": "☕",
          "title": "Morning routines",
          "body": "Slow starts, shared playlists, and the kind of mornings that don't need to be productive to feel good."
        },
        {
          "icon": "✈",
          "title": "First trip together",
          "body": "New streets, too many photos, and laughing about something small that only we find funny."
        },
        {
          "icon": "♡",
          "title": "Building trust",
          "body": "More honesty, fewer assumptions — the boring, beautiful work that makes love last."
        },
        {
          "icon": "☀",
          "title": "Celebrating you",
          "body": "Your wins, your growth, your hard days — not just the highlight reel, but all of it, together."
        }
      ]
    },
    {
      "why": {
        "quote": "Love with you isn't a performance — it's a place I can breathe.",
        "cards": [
          {
            "title": "Your presence",
            "body": "Even in silence, you feel close. I don't have to fill every gap — you're just there, and that's enough."
          },
          {
            "title": "How you fight fair",
            "body": "You don't weaponize the past. You want understanding, not victory. That makes repair possible."
          },
          {
            "title": "Your tenderness",
            "body": "You can be strong and still gentle. You don't confuse softness with weakness — and neither do I, anymore."
          },
          {
            "title": "The way you grow",
            "body": "You reflect, you adjust, you try again. I see you becoming more yourself — and I love who you're becoming."
          },
          {
            "title": "Shared rhythm",
            "body": "Late replies that still feel warm. Random memes. The language we built that nobody else speaks."
          },
          {
            "title": "My favorite constant",
            "body": "Life changes. Moods change. But you — you feel like the thread I don't want to lose."
          }
        ]
      },
      "today": {
        "rotating": [
          "Today I love you because you make me feel chosen.",
          "Today I love you because you hear what I'm not saying.",
          "Today I love you because your voice calms me down.",
          "Today I love you because you're real — not an idea, not a version, just you.",
          "Today I love you because you forgive without keeping score.",
          "Today I love you because I trust you with the parts of me I hide.",
          "Today I love you because every version of us still feels worth it."
        ],
        "insideJokes": [
          "\"You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha.\"",
          "\"Whats in there? My Legs? What's else in there?\""
        ],
        "reasons": [
          "you don't make me earn affection like it's conditional.",
          "you're consistent when life isn't.",
          "you make me laugh until my stomach hurts.",
          "you're kind even when you're tired.",
          "you're Kinza — and I mean that in every way that matters."
        ]
      },
      "unsent": [
        "I wanted to say thank you for staying when walking away would've been easier for both of us.",
        "I still think about the first time you made me feel truly seen.",
        "I drafted messages I never sent — not because I didn't care, but because I cared too much to get it wrong.",
        "I hope you know how often you cross my mind without me saying it.",
        "If I could redo one thing, it would be telling you sooner how much you matter."
      ],
      "apology": [
        {
          "title": "I'm sorry for…",
          "body": "Letting stress spill into how I spoke to you. Forgetting that you're not responsible for fixing my bad days. The moments I made you feel like an afterthought."
        },
        {
          "title": "I understand it made you feel…",
          "body": "Small. Doubted. Like you had to shrink to keep the peace — and you shouldn't have to."
        },
        {
          "title": "I'm trying to do better by…",
          "body": "Pausing before I react. Owning my part without deflecting. Building habits that match what I say I feel."
        },
        {
          "title": "You deserve…",
          "body": "Love that feels steady. Someone who meets your effort. A future where you don't have to wonder if you're enough — because you always were."
        }
      ],
      "future": [
        {
          "icon": "⌂",
          "title": "A place that's ours",
          "body": "Not fancy — just familiar. Keys, leftovers, and the feeling of belonging somewhere together."
        },
        {
          "icon": "✧",
          "title": "More inside jokes",
          "body": "A whole library of references only we get — the private language of people who really know each other."
        },
        {
          "icon": "☾",
          "title": "Hard seasons, together",
          "body": "Not pretending life is easy — just promising we won't face the heavy parts alone."
        },
        {
          "icon": "∞",
          "title": "Long-term us",
          "body": "Growing older without growing apart. Choosing each other in ways that still feel new."
        }
      ]
    }
  ]
}


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
21. The response MUST be parseable by JSON.parse() with no edits.
22. NEVER nest arrays unless explicitly shown in schema.
Example of INVALID output:
"insideJokes": [[ ... ]]
Example of VALID output:
"insideJokes": [ ... ]
23. Before finishing, internally validate:
- all brackets [] are balanced
- all braces {} are balanced
- every array closes correctly
- every string uses escaped quotes correctly
- no duplicate commas
- no trailing commas
24. Do not pretty-print partial arrays across malformed line breaks.
Every property must fully open and close before the next property begins.
25. insideJokes must EXACTLY match:
"insideJokes": [
  "\"You are sexually Harassing me, Stop touching My Wenie, I Got a 9 Incha.\"",
  "\"Whats in there? My Legs? What's else in there?\""
]
26. After generating the JSON, perform a final schema validation pass and correct any malformed JSON before responding.
27. Output must be STRICT RFC8259-valid JSON only.
28. Never output markdown code fences unless explicitly asked.
29. Never output explanatory text before or after the JSON.
30. If generating multiple batches, ensure every batch object is completely closed before starting the next batch object.
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
