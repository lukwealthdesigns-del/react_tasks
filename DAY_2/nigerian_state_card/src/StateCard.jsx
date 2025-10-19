function StateCard({ state, capital, region, population, children}) {
    
            function getRegionColor(region) {
                if (region === "North"){
                    return "#8B4513"
                } else if (region === "South") {
                    return "#008751"
                } else if (region === "East") {
                    return "#c7a900ff"
                } else if (region === "West") {
                    return "#4169E1"
                } else {
                    return "#fff"
                }

            }

            return (
                <div className="main" style={{ backgroundColor: getRegionColor(region)}}>
                    <h1>{state}</h1>
                    <p>Capital: {capital}</p>
                    <p>Region: {region}</p>
                    <p>Population: {population}</p>
                    <p>{children}</p>
                </div>
            )


}

export default StateCard;