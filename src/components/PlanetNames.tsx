import { type PlanetInfoProps } from "../planets/PlanetInfo"

export type PlanetEntry = {
    name: string
    props: PlanetInfoProps
}

class PlanetNames {
    private static instance: PlanetNames

    private constructor() {}

    static getInstance(): PlanetNames {
        PlanetNames.instance ??= new PlanetNames()
        return PlanetNames.instance
    }

    private barrenPlanetNames = [
        "Barren",
        "Desert",
        "Rocky",
        "Bleak",
        "Parched",
        //"Abandoned",
        "Dusty",
        "Desolate",
        "Wind-swept",
    ]

    private deadPlanetNames = [
        "Dead",
        "Airless",
        //"Abandoned",
        "Desolate",
        "Empty",
        "Forsaken",
        "Life-Incompatible",
        "Lifeless",
        "Low Atmosphere",
        "Terraforming Catastrophe",
    ]

    getAllPlanets(): PlanetEntry[] {
        const barren: PlanetEntry[] = this.barrenPlanetNames.map((name) => ({
            name,
            props: {
                planetType: "Barren Planet",
                planetImage: (
                    <img src={`/${name}.jpg`} alt={"Barren Planet Image"} />
                ),
                planetDescription:
                    "Barren Planets lack vegetation and are dominated by rock and dust, offering wide-open vistas and sparse life.",
                link: `https://nomanssky.fandom.com/wiki/Biome_-_Barren`,
            },
        }))

        const dead: PlanetEntry[] = this.deadPlanetNames.map((name) => ({
            name,
            props: {
                planetType: "Dead Planet",
                planetImage: (
                    <img src={`/${name}.jpg`} alt={"Dead Planet Image"} />
                ),
                planetDescription:
                    "Dead Planets are completely lifeless — no atmosphere, weather, or fauna — but often good for mining resources.",
                link: `https://nomanssky.fandom.com/wiki/Biome_-_Dead`,
            },
        }))

        return [...barren, ...dead]
    }
}

export default PlanetNames
