function GreetingCard({ name, message, color}) {
    return (
        <div className="container" style={{ background: color}}>
            <h1 className="greeting">Hello, {name}</h1>
            <p className="message">{message}</p>
        </div>
    )
}

export default GreetingCard;