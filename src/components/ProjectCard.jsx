function ProjectCard({ project }) {

  return (
    <article className="project-card">

      <div className="project-number">
        {project.number}
      </div>


      <div className="project-main">

        <p className="project-type">
          {project.type}
        </p>


        <h3>
          {project.title}
          <span>{project.subtitle}</span>
        </h3>


        <p className="project-description">
          {project.description}
        </p>


        <div className="project-tech">

          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>


       <a
  className="project-link"
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
>
  VIEW PROJECT ↗
</a>

      </div>


      <div className={`project-visual ${project.visualClass}`}>

        {project.visual === "ai" && (
          <div className="visual-circle">
            AI
          </div>
        )}


        {project.visual === "java" && (
          <div className="code-symbol">
            {"{ }"}
          </div>
        )}


        {project.visual === "web" && (
          <div className="browser-window">

            <div className="browser-top">
              ● ● ●
            </div>

            <div className="browser-content">
              STORE
            </div>

          </div>
        )}

      </div>

    </article>
  )
}

export default ProjectCard