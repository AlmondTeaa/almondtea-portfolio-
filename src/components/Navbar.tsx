const Navbar = () => {
    return (
        <header className = "navbar">
            <a className = "navbar-logo" href="#home">
                Jos<span>.</span>
            </a>
            <nav className = "navbar-links" aria-label = "Main navigation">
                <a href = "#about">About</a>
                <a href = "#projects">Projects</a>
                <a href = "#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar