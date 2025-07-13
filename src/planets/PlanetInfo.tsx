import type { JSX } from "react"

export type PlanetInfoProps = {
    planetType: string
    planetImage: JSX.Element
    planetDescription: string
    link: string
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({
    planetType,
    planetImage,
    planetDescription,
    link,
}) => {
    return (
        <div className={`planet-info`}>
            <h2>{planetType}</h2>
            {planetImage}
            <p>{planetDescription}</p>
            <a href={link} target="_blank" rel="external noreferrer">
                More Info
            </a>
        </div>
    )
}

export default PlanetInfo
