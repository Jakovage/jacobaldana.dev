import { profile, projects, type Project, type ProjectLink } from "./data/projects";

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
  return (
    <article className="project-card">
      {project.thumbnail ? (
        <img className="thumb" src={project.thumbnail} alt={`${project.title} thumbnail`} />
      ) : (
        <div className="thumb-placeholder" aria-hidden="true">
          {project.title.toLowerCase().replace(/\s+/g, "-")}.png
        </div>
      )}
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
          <nav className="header-links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </nav>
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
