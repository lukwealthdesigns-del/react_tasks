function Header() {
    return(
        <div className="header">
            <h1>My React App</h1>
            <nav>
                <a className="home" href="#Home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}

export default Header;