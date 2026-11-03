const Hero = () => {
    return (
        <section className = "hero">
            <p className = "hero-greeting"> Hi, my name is</p>
            <h1>Jos Almonte.</h1>
            <h2>I build software that solves problems.</h2>
            <p className = "hero-description">
                I'm a software developer with experience building APIs, working with databases, and
                creating web applications
            </p>

            <a className = "hero-button" href = "#projects">
                View my projects
            </a>
        </section>
    )
}

export default Hero