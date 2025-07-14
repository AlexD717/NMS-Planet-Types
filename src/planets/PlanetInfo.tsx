import type { JSX } from "react"
import React from "react"
import "./PlanetInfo.css"

export type PlanetInfoProps = {
    planetType: string
    planetImage: JSX.Element
    planetDescription: string
    resources: string
    link: string
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({
    planetType,
    planetImage,
    planetDescription,
    resources,
    link,
}) => {
    return (
        <div className={`planet-info`}>
            <h2>{planetType}</h2>
            {React.cloneElement(planetImage, {
                style: { width: "auto", height: "30vw" },
            })}
            <p className="planet-description">{planetDescription}</p>
            <p className="planet-description">Resources: {resources}</p>
            <a
                className="planet-description"
                href={link}
                target="_blank"
                rel="external noreferrer"
            >
                More Info
            </a>
        </div>
    )
}

export default PlanetInfo
