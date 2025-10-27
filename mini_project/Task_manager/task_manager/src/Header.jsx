function Header() {
    const today = new Date().toLocaleDateString('en-Ng', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="header">
            <h1>My Task Manager</h1>
            <p>{today}</p>
        </header>
    )
}

export default Header;
