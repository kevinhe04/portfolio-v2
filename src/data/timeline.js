/*
  ─────────────────────────────────────────────────────────────────────────
  LIFE TIMELINE — things you've done, won, built, and where you've been.
  Add an entry anywhere; it auto-sorts newest-first and groups by year.

  How an entry behaves when clicked depends on its fields:
    • has video / youtube / images  →  opens its own page at /timeline/<slug>
    • has link (and no media)        →  opens that URL in a new tab (no page)
    • none of the above              →  not clickable, opens nothing

  Fields:
    slug     unique id (used for the media-page URL)
    date     "May 12, 2026" · "May 2026" · or "2023"
    dateISO  sort key: "2026-05-12" · "2026-05" · "2023-05"
    event    the headline
    tag      optional → Award · Travel · Work · Launch · Hackathon · Life
    link     optional external URL (used only when there's no media)
    video    optional local file  →  "/videos/Foo.mp4"
    youtube  optional embed URL   →  "https://www.youtube.com/embed/ID"
    images   optional array of photos → ["/images/Foo.jpg", ...]
    body     optional text for the media page (currently unused — left off on purpose)
  ─────────────────────────────────────────────────────────────────────────
*/

export const timeline = [
  {
    slug: "awl-electricity",
    date: "June 29, 2026",
    dateISO: "2026-06-29",
    event: "Started as a Systems Integration Engineer Intern at AWL-Electricity",
    tag: "Work",
  },
  {
    slug: "seoul",
    date: "March 25, 2026",
    dateISO: "2026-03-25",
    event: "Visited Seoul, South Korea",
    tag: "Travel",
  },
  {
    slug: "chiang-mai",
    date: "March 22, 2026",
    dateISO: "2026-03-22",
    event: "Visited Chiang Mai, Thailand",
    tag: "Travel",
    video: "/videos/ChiangMai.mp4",
  },
  {
    slug: "ha-giang-loop",
    date: "March 18, 2026",
    dateISO: "2026-03-18",
    event: "Rode the Hà Giang Loop, Vietnam",
    tag: "Travel",
    video: "/videos/HaGiangLoop.mp4",
  },
  {
    slug: "hanoi",
    date: "March 7, 2026",
    dateISO: "2026-03-07",
    event: "Visited Hanoi, Vietnam",
    tag: "Travel",
    images: ["/images/hanoi.jpg"],
  },
  {
    slug: "ho-chi-minh",
    date: "March 3, 2026",
    dateISO: "2026-03-03",
    event: "Visited Ho Chi Minh City, Vietnam",
    tag: "Travel",
    images: ["/images/saigon.jpg"],
  },
  {
    slug: "treehacks",
    date: "February 13, 2026",
    dateISO: "2026-02-13",
    event: "Competed at TreeHacks (Stanford)",
    tag: "Hackathon",
    link: "https://devpost.com/software/clove-ga6v5p",
  },
  {
    slug: "shenzhen",
    date: "February 1, 2026",
    dateISO: "2026-02-01",
    event: "Visited Shenzhen, China",
    tag: "Travel",
    images: ["/images/Shenzhen.jpg"],
  },
  {
    slug: "chongqing",
    date: "January 28, 2026",
    dateISO: "2026-01-28",
    event: "Visited Chongqing, China",
    tag: "Travel",
    video: "/videos/CQ.mp4",
    images: ["/images/CQ.jpg"],
  },
  {
    slug: "bangkok",
    date: "January 26, 2026",
    dateISO: "2026-01-26",
    event: "Visited Bangkok, Thailand",
    tag: "Travel",
    images: ["/images/BK.jpg"],
  },
  {
    slug: "bali",
    date: "April 20, 2026",
    dateISO: "2026-04-20",
    event: "Explored Bali, Indonesia",
    tag: "Travel",
    images: ["/images/Life/DSC00494.jpeg", "/images/Life/DSC00502.jpeg"],
  },
  {
    slug: "kuala-lumpur",
    date: "January 24, 2026",
    dateISO: "2026-01-24",
    event: "Visited Kuala Lumpur, Malaysia",
    tag: "Travel",
    images: ["/images/KL.jpg"],
  },
  {
    slug: "singapore",
    date: "January 20, 2026",
    dateISO: "2026-01-20",
    event: "Explored Singapore",
    tag: "Travel",
    video: "/videos/Singapore.mp4",
    images: ["/images/GBB.jpg"],
  },
  {
    slug: "hong-kong",
    date: "January 6, 2026",
    dateISO: "2026-01-06",
    event: "Settled in Hong Kong for exchange",
    tag: "Travel",
    images: ["/images/HK.jpg", "/images/MaOnShan.jpg", "/images/clubHK.jpg"],
  },
  {
    slug: "exchange-start",
    date: "December 19, 2025",
    dateISO: "2025-12-19",
    event: "Went on exchange across Asia",
    tag: "Travel",
    youtube: "https://www.youtube.com/embed/biLJelWQ-AQ",
  },
  {
    slug: "hack-the-north",
    date: "September 14, 2025",
    dateISO: "2025-09-14",
    event: "Won Best Voice Assistant at Hack The North with Stacy",
    tag: "Award",
    link: "https://devpost.com/software/stacy-g7zptj",
  },
  {
    slug: "autodesk",
    date: "September 2, 2025",
    dateISO: "2025-09-02",
    event: "Started my internship at Autodesk",
    tag: "Work",
  },
  {
    slug: "sun-life",
    date: "May 5, 2025",
    dateISO: "2025-05-05",
    event: "Started my internship at Sun Life",
    tag: "Work",
  },
  {
    slug: "bagelhacks",
    date: "March 2025",
    dateISO: "2025-03",
    event: "Won BagelHacks with ZenOS",
    tag: "Award",
    link: "https://www.youtube.com/watch?v=3vmHrCJ-nJs",
  },
  {
    slug: "pickyeats",
    date: "November 1, 2024",
    dateISO: "2024-11-01",
    event: "Launched PickyEats",
    tag: "Launch",
    link: "https://picky-eats.vercel.app/",
  },
  {
    slug: "schulich-leader",
    date: "May 3, 2023",
    dateISO: "2023-05-03",
    event: "Named a Schulich Leader",
    tag: "Award",
    link: "https://johnabbott.qc.ca/john-abbott-college-student-awarded-canadas-largest-undergraduate-scholarship/",
  },
];
