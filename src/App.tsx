import { useEffect, useRef, useState } from "react";
import { experience, profile, projects, type Experience, type Project, type ProjectLink } from "./data/projects";


/** Adds "visible" to the element when it scrolls into view (one-way). */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}


function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        // sun
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 1v1.8M8 13.2V15M1 8h1.8M13.2 8H15M3.05 3.05l1.27 1.27M11.68 11.68l1.27 1.27M12.95 3.05l-1.27 1.27M4.32 11.68l-1.27 1.27" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : (
        // moon
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

function LinkIcon({ kind }: { kind: ProjectLink["kind"] }) {
  if (kind === "repo") {
    // git branch glyph
    return (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="4" cy="3.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="4" cy="12.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="5.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 5.3v5.4M12 7.3c0 2.5-4 2.2-6.2 3.6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  // external arrow for live/releases/other
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article className="project-card reveal" ref={ref}>
      <div className="thumb-wrap">
        {project.thumbnail ? (
          <img className="thumb" src={project.thumbnail} alt={`${project.title} thumbnail`} />
        ) : (
          <div className="thumb-placeholder" aria-hidden="true">
            {project.title.toLowerCase().replace(/\s+/g, "-")}.png
          </div>
        )}
      </div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="link-row">
          {project.links.map((link) => (
            <a
              key={link.url + link.label}
              className={`link-btn${link.kind === "live" ? " primary" : ""}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon kind={link.kind} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}


function ExperienceItem({ item }: { item: Experience }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article className="exp-item reveal" ref={ref}>
      <div className="exp-meta">
        <span className="exp-dates">{item.dates}</span>
        <span className="exp-location">{item.location}</span>
      </div>
      <div className="exp-body">
        <h3>
          {item.role} <span className="exp-company">· {item.company}</span>
        </h3>
        <p>{item.description}</p>
        <div className="tag-row">
          {item.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function HeroGraph() {
  // small DAG motif — a nod to graph work
  return (
    <svg className="hero-graph" viewBox="0 0 220 220" aria-hidden="true">
      <line x1="50" y1="40" x2="110" y2="100" />
      <line x1="170" y1="40" x2="110" y2="100" />
      <line x1="110" y1="100" x2="60" y2="170" />
      <line x1="110" y1="100" x2="160" y2="170" />
      <line x1="170" y1="40" x2="160" y2="170" />
      <circle cx="50" cy="40" r="9" />
      <circle className="lit" cx="170" cy="40" r="9" />
      <circle cx="110" cy="100" r="9" />
      <circle className="lit lit2" cx="60" cy="170" r="9" />
      <circle cx="160" cy="170" r="9" />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <div className="wrap">
        <header className="site-header">
          <a className="wordmark" href="/">
            jacobaldana<span>.dev</span>
          </a>
          <div className="header-right">
            <nav className="header-links">
              {profile.links.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <section className="hero">
          <div>
            <h1>{profile.name}</h1>
            <p className="tagline">{profile.tagline}</p>
            <p className="blurb">{profile.blurb}</p>
          </div>
          <HeroGraph />
        </section>

        <main>
          <h2 className="section-label">Experience</h2>
          <div className="exp-list">
            {experience.map((item) => (
              <ExperienceItem key={item.role + item.company} item={item} />
            ))}
          </div>

          <h2 className="section-label">Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </main>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React + Vite</span>
        </footer>
      </div>
    </>
  );
}
