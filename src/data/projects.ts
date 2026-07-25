// Edit this file to add, remove, or reorder projects.
// Each project shows a thumbnail, title, description, tags, and link buttons.
// - thumbnail: put an image in /public (e.g. /course-atlas.png) and reference it
//   here as "/course-atlas.png". Leave it undefined to get a generated placeholder.
// - links: any number of buttons. kind controls the icon ("live" | "repo" | "other").

export type ProjectLink = {
  label: string;
  url: string;
  kind: "live" | "repo" | "other";
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Course Atlas",
    description:
      "An interactive course-prerequisite explorer built with React, TypeScript, Vite, and the Canvas API. It transforms complex university catalog requirements into readable dependency maps, helping students understand prerequisite chains, corequisites, minimum grades, and possible course pathways.",
    tags: ["React", "TypeScript", "Vite", "Canvas API"],
    thumbnail: "src/data/courseatlasimg.jpg",
    links: [
      { label: "Live Demo", url: "https://gmucourseatlas.com", kind: "live" },
      { label: "Repository", url: "https://github.com/Jakovage/gmu-course-atlas", kind: "repo" },
    ],
  },
  {
    title: "GMUGuessr",
    description:
      "A real-time multiplayer Android location-guessing game built with Java, Firebase, Firestore, and Python Cloud Functions. Inspired by GeoGuessr and set on the George Mason University campus, it synchronizes multiplayer lobbies, rounds, timers, and scoring through a server-authoritative backend.",
    tags: [
      "Java",
      "Android",
      "Firebase",
      "Firestore",
      "Python Cloud Functions",
    ],
    thumbnail: "src/data/Screenshot 2026-07-24 220741.jpg",
    links: [
      { label: "Releases", url: "https://github.com/radecri/GMUGuessr/releases/tag/v1.0", kind: "live" },
      { label: "Repository", url: "https://github.com/radecri/GMUGuessr", kind: "repo" },
    ],
  },
  {
    title: "UPMAXXING",
    description:
      "A cross-platform endless vertical platformer developed with Unity and C#. Procedural, chunk-based level generation creates a replayable experience, while a Firebase Realtime Database leaderboard accessed through REST APIs synchronizes scores across PC and mobile.",
    tags: ["Unity", "C#", "Firebase", "REST API"],
    thumbnail: "src/data/upmaxxingthunm.jpg",
    links: [
      { label: "Releases", url: "https://github.com/yyonathan/UPMAXXING/releases", kind: "live" },
      { label: "Repository", url: "https://github.com/yyonathan/UPMAXXING", kind: "repo" },
    ],
  },
  {
    title: "NarraBot",
    description:
      "A real-time Discord text-to-speech bot built with Python, discord.py, asyncio, FFmpeg, and gTTS. It narrates text-channel conversations in voice channels while supporting multiple communities through isolated queues, configurable voices, and non-blocking audio processing.",
    tags: ["Python", "discord.py", "asyncio", "FFmpeg", "gTTS"],
    thumbnail: "src/data/discord-logo-icon-editorial-free-vector.jpg",
    links: [{ label: "Repository", url: "https://github.com/Jakovage/narrabot", kind: "repo" }],
  },
  {
    title: "PatriotWeb Course Scraper",
    description:
      "A course-data library built with Python, Requests, BeautifulSoup, regular expressions, and Flask. It converts difficult-to-navigate PatriotWeb pages into structured course records containing sections, instructors, meeting times, capacity, available seats, and waitlist information.",
    tags: ["Python", "Requests", "BeautifulSoup", "Flask"],
    links: [{ label: "Repository", url: "https://github.com/Jakovage/gmu-course-checker", kind: "repo" }],
  },
  {
    title: "Unix Task Manager",
    description:
      "A Unix process-management system written in C using POSIX processes, signals, pipes, and file descriptors. It provides shell-like control over foreground and background jobs, including suspension, resumption, termination, piping, and input/output redirection.",
    tags: ["C", "Unix", "POSIX", "Processes", "Signals"],
    links: [{ label: "Repository", url: "#", kind: "repo" }],
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio built with React, Vite, and Node.js to present my software-engineering experience, technical projects, live demonstrations, and source repositories in a more visual and interactive format than a traditional résumé.",
    tags: ["React", "Vite", "Node.js", "Netlify"],
    links: [
      {
        label: "Live",
        url: "https://jacobaldana.dev",
        kind: "live",
      },
      {
        label: "Repository",
        url: "#",
        kind: "repo",
      },
    ],
  },
];

export const profile = {
  name: "Jacob Aldana",
  tagline: "Software Engineer & Computer Science Student",
  blurb:
    "Computer Science student at George Mason University with experience building full-stack engineering tools, DevOps automation, data visualizations, multiplayer applications, and developer-focused platforms.",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/Jakovage",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/jacobaldana",
    },
    {
      label: "Email",
      url: "mailto:jaaldana805@gmail.com",
    },
  ],
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Incoming Software Engineering Co-op – DevOps",
    company: "Collins Aerospace (RTX)",
    location: "Remote",
    dates: "Jul 2026 – Dec 2026",
    description:
      "Building a Jenkins-orchestrated pipeline that automates avionics software-certification reporting and replaces manual Grafana dashboard assembly. The pipeline uses Python, Dockerized Linux services, Jama, version control, Java traceability tooling, REST APIs, and PostgreSQL to collect certification evidence, generate traceability data, and continuously update reports for engineering and program teams.",
    tags: [
      "Jenkins",
      "Python",
      "Docker",
      "Linux",
      "Grafana",
      "PostgreSQL",
      "REST APIs",
      "Jama",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Collins Aerospace (RTX)",
    location: "Cedar Rapids, IA",
    dates: "May 2026 – Aug 2026",
    description:
      "Co-developed a full-stack repository risk-analysis platform using React, TypeScript, Flask, Python, D3.js, and PixiJS. The platform combines defect density, code churn, cyclomatic complexity, and dependency data into configurable health scores, helping engineering teams identify and prioritize high-risk systems, files, and functions.",
    tags: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "D3.js",
      "PixiJS",
      "Software Analytics",
    ],
  },
];