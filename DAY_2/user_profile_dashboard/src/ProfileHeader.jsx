function ProfileHeader({ name, title, avatar }) {
    return (
        <div className="header">
            <img className="avatar" src={avatar} alt="avatar"></img>
            <h2>{name}</h2>
            <p>{title}</p>

        </div>
    )
}

export default ProfileHeader;