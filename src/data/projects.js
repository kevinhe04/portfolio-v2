/*
  ─────────────────────────────────────────────────────────────────────────
  PROJECTS — the tabbed Projects section on the homepage, and the detail
  page each row opens at /projects/<slug>.

  The section shows one category at a time; `categories` below sets the tab
  order, and the first one is the default (currently Robotics).

  Fields:
    slug      unique id → the page URL, /projects/<slug>
    category  "robotics" | "software" — which tab it appears under
    logo      optional image beside the row title, sized to the title height
    title     the row headline
    dates     right-aligned on the row, same format as the other sections
    blurb     one line, shown under the title on the detail page
    meta      stack chips on the detail page (not shown on the row)
    bullets   the detail — always visible, keep each one concrete
    links     [{ label, href }] — external links on the detail page
    body      optional prose; blank lines split paragraphs

  Media works exactly like the timeline: add `images: ["/images/foo.jpg"]`,
  `video: "/videos/foo.mp4"`, or `youtube: "https://youtube.com/embed/ID"`
  and the detail page renders it above the text.

  For a build log, add `build: { title, clips: [{ src, poster, title,
  caption }] }`. The clips play in order as one muted reel below the
  bullets. Encode them to 720p H.264 MP4 and keep each one under 30s.
  ─────────────────────────────────────────────────────────────────────────
*/

// Tab order. The first entry is the default tab.
export const categories = [
  { key: "robotics", label: "Robotics" },
  { key: "software", label: "Software" },
];

export const projects = [
  // ── Robotics ───────────────────────────────────────────────────────────
  {
    slug: "robotic-arm",
    category: "robotics",
    title: "Robotic Arm",
    dates: "Sep 2026 — Present",
    blurb:
      "A 4-DOF arm that autonomously completes Duolingo lessons on a physical phone.",
    meta: ["C++", "ESP32-S3", "ROS 2", "MuJoCo", "OpenCV", "Python"],
    bullets: [
      "Closed-form inverse kinematics and hand-eye calibration map a fixed-frame camera into the phone's plane; a VLM chooses the tap target.",
      "Custom ESP32-S3 firmware in C++ drives 4 daisy-chained servos over a 1 Mbps half-duplex serial bus.",
      "Validated in MuJoCo before touching hardware; teleoperated demonstrations logged as synchronized frames and joint states, with VLM tap accuracy benchmarked against a labeled eval set.",
    ],
    // TODO (Kevin): a demo clip does more here than any paragraph.
    // video: "/videos/robot-arm.mp4",
    build: {
      title: "Assembling the robotic arm",
      clips: [
        {
          src: "/videos/robot-arm/assembly-bench.mp4",
          poster: "/images/robot-arm/assembly-bench.jpg",
          title: "Joint by joint",
          caption:
            "Horns, screws and servos, following the assembly guide one joint at a time.",
        },
        {
          src: "/videos/robot-arm/assembly-together.mp4",
          poster: "/images/robot-arm/assembly-together.jpg",
          title: "Four hands on the last joints",
          caption:
            "Seating the final servos with a friend, until the arm stands on its own.",
        },
      ],
    },
    links: [],
  },
  {
    slug: "esp32-lyrics-display",
    category: "robotics",
    title: "Lyrics Display",
    dates: "Sep 2026",
    blurb:
      "Time-synced lyrics for whatever is playing on the host machine, on a 128×64 I2C OLED.",
    meta: ["C++", "PlatformIO", "I2C", "USB serial"],
    bullets: [
      "The host rasterises each screen with a real Windows font and ships a 1024-byte framebuffer; the firmware draws no text, which is what makes Chinese, Japanese, Korean and Cyrillic render at all.",
      "An onboard RGB LED encodes bus and link state — no OLED on I2C, frames stalled, frames arriving — so the board is debuggable without a serial terminal.",
      "No Spotify API, no OAuth, no keys: it reads the OS media session and pulls timestamped .lrc files.",
    ],
    links: [],
  },

  // ── Software ───────────────────────────────────────────────────────────
  {
    slug: "clove",
    logo: "/images/logos/clove-logo.png",
    category: "software",
    title: "Clove — TreeHacks (Stanford Hackathon)",
    dates: "Feb 2026",
    blurb: "Built at TreeHacks, Stanford's hackathon.",
    // TODO (Kevin): what Clove does, and what you built. One paragraph is plenty.
    links: [
      { label: "Devpost", href: "https://devpost.com/software/clove-ga6v5p" },
    ],
  },
  {
    slug: "stacy",
    logo: "/images/logos/stacy.png",
    category: "software",
    title: "Stacy — Hack The North Winner",
    dates: "Sep 2025",
    blurb: "Won Best Voice Assistant at Hack The North.",
    // TODO (Kevin): what Stacy does, and which part was yours.
    links: [
      { label: "Devpost", href: "https://devpost.com/software/stacy-g7zptj" },
    ],
  },
  {
    slug: "zenos",
    logo: "/images/logos/zenos_logo.png",
    category: "software",
    title: "ZenOS — BagelHacks Winner",
    dates: "Mar 2025",
    blurb: "Won BagelHacks.",
    // TODO (Kevin): what ZenOS does.
    youtube: "https://www.youtube.com/embed/3vmHrCJ-nJs",
    links: [
      {
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=3vmHrCJ-nJs",
      },
    ],
  },
  {
    slug: "pickyeats",
    logo: "/images/logos/pickyeats_logo.jpg",
    category: "software",
    title: "PickyEats — 10k+ downloads",
    dates: "2024 — 2025",
    blurb:
      "A restaurant recommender app, launched on the App Store and Google Play.",
    meta: ["React Native", "Expo", "Flask", "PostgreSQL", "Firebase", "AWS"],
    bullets: [
      "Launched to 12,000+ downloads across the App Store and Google Play Store.",
      "Partnered with RestoMontreal.ca to integrate a catalog of 10,000+ restaurants across Quebec.",
    ],
    links: [{ label: "Website", href: "https://picky-eats.vercel.app/" }],
  },
  {
    slug: "cheri",
    logo: "/images/logos/cherimtl_logo.jpg",
    category: "software",
    title: "Chéri",
    dates: "Sep 2024",
    blurb: "",
    // TODO (Kevin): what Chéri is — this one has no description anywhere yet.
    links: [{ label: "Website", href: "https://www.cherimtl.com/" }],
  },
];
