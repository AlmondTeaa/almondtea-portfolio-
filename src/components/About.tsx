const About = () => {
    return (
        <section id = "about" className = "about">
            <h2>About me</h2>
            <p>
                I'm a software developer who enjoys building APIs,
                working with database, and solving practical problems.
            </p>
            <p>
                I'm currently strengthening my skills in Rust, Python, Typescript,
                and React by building projects.
            </p>

            <h1> Technologies I work with</h1>
            <ul className = "about-skills">
                <li>Rust / Axum</li>
                <li>Python / FastAPI</li>
                <li>PostgreSQL / MySQL</li>
                <li>React / Typescript</li>
            </ul>
        </section>
    )
}

export default About;