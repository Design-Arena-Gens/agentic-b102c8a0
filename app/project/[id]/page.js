export default function ProjectPage({ params }) {
  const { id } = params;
  const projectUrl = `https://lovable.dev/projects/${id}`;

  return (
    <main className="container">
      <section className="project">
        <h1>Project</h1>
        <div className="card">
          <div className="row">
            <span className="label">Project ID:</span>
            <code className="value">{id}</code>
          </div>
          <div className="row">
            <span className="label">Lovable URL:</span>
            <a href={projectUrl} target="_blank" rel="noreferrer" className="link">
              {projectUrl}
            </a>
          </div>
        </div>
        <p className="note">
          For security reasons, the Lovable page cannot be embedded here. Use the link above to open it in a new tab.
        </p>
      </section>
    </main>
  );
}
