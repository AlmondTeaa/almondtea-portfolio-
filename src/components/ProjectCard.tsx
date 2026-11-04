type ProjectCardProps = {
    title: String,
    description: String,
    stack: String
}

const ProjectCard = ({
    title,
    description,
    stack
}: ProjectCardProps) => {
    return (
        <article className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="project-stack">{stack}</p>
        </article>
    )
}

export default ProjectCard