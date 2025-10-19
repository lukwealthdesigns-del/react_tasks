function ProfileStats({ projects, followers, following }) {
    return (
        <div className="profileStats">
            <div>Projects: {projects}</div>
            <div>Followers: {followers}</div>
            <div>Following: {following}</div>
        </div>
    )
}

export default ProfileStats;