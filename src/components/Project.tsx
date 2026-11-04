import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="projects-grid">
                <ProjectCard
                    title="Authenticator Web Application"
                    description="Authenticates users or applications and issues JWTs."
                    stack="Rust/Axum, Postgres, Typescript/React"
                />
            </div>
        </section>
    );
}

export default Projects;