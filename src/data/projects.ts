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
      "Interactive visualizer for university course prerequisites. Renders the full catalog as a DAG with AND/OR logic encoded directly in the graph.",
    tags: ["React", "TypeScript", "elkjs", "React Flow"],
    links: [
      { label: "Live", url: "https://example.com", kind: "live" },
      { label: "Repository", url: "https://github.com", kind: "repo" },
    ],
  },
  {
    title: "Project Two",
    description:
      "Placeholder description. A sentence or two about what it does, what problem it solves, and what makes it interesting.",
    tags: ["Placeholder", "Tags"],
    links: [{ label: "Repository", url: "https://github.com", kind: "repo" }],
  },
  {
    title: "Project Three",
    description:
      "Placeholder description. Swap this out when the project is ready to show.",
    tags: ["Placeholder"],
    links: [
      { label: "Release", url: "https://example.com", kind: "live" },
      { label: "Repository", url: "https://github.com", kind: "repo" },
    ],
  },
];

export const profile = {
  name: "Jacob Aldana",
  tagline: "Software engineer in training.",
  blurb:
    "CS student at George Mason University and software engineering intern. This is my portfolio so far — projects land here as they ship.",
  links: [
    { label: "GitHub", url: "https://github.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Email", url: "mailto:you@jacobaldana.dev" },
  ],
};
