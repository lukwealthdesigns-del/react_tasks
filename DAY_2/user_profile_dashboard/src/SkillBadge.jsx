function SkillBadge({ skill, level}) {

    function getLevel() {
        if (level === "Beginner") {
            return "#9d9d9dff"
        } else if (level === "Intermediate") {
            return "#0831c4ff"
        } else if (level === "Expert") {
            return "#006c0dff"
        } else {
            return "#fff"
        };

    }


    return (
        
            <div className="skillBadge" style={{backgroundColor: getLevel()}}>{skill} - {level}</div>         
    )
}

export default SkillBadge;