    const NavBar = () => {
        return (
            <div className="navbar">
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a href="/" className="navbar__link">About Me</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/about" className="navbar__link">Contact</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/services" className="navbar__link">Portfolio</a>
                        </li>
                        <li className="navbar__item">
                            <a href="/Resume" className="navbar__link">Resume</a>
                        </li>
                    </ul>
                </div>
        )
    }

    export default NavBar;