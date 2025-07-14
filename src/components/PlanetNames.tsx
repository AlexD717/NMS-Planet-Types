import { type PlanetInfoProps } from "../planets/PlanetInfo"
import DeadPlanet from "../assets/planet-images/DeadPlanet.jpg"
import LushPlanet from "../assets/planet-images/LushPlanet.jpg"
import FrozenPlanet from "../assets/planet-images/FrozenPlanet.jpg"

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

    /*
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
    */

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

    private lushPlanetNames = [
        "Rainy",
        "Verdant",
        "Tropical",
        "Viridescent",
        "Paradise",
        "Temperate",
        "Humid",
        "Overgrown",
        "Flourishing",
        "Grassy",
        "Bountiful",
    ]

    private frozenPlanetNames = [
        "Frozen",
        "Icebound",
        "Arctic",
        "Glacial",
        "Sub-zero",
        "Icy",
        "Frostbound",
        "Freezing",
        "Hiemal",
        "Hyperborean",
    ]

    getAllPlanets(): PlanetEntry[] {
        // TODO get barren planet image
        /*
        const barren: PlanetEntry[] = this.barrenPlanetNames.map((name) => ({
            name,
            props: {
                planetType: "Barren Planet",
                planetImage: (
                    <img src={`/${name}.jpg`} alt={"Barren Planet Image"} />
                ),
                planetDescription:
                    "Barren Planets lack vegetation and are dominated by rock and dust, offering wide-open vistas and sparse life.",
                resources: "Star Bulb (rare), Ferrite Dust, Deuterium",
                link: `https://nomanssky.fandom.com/wiki/Biome_-_Barren`,
            },
        }))
            */

        const dead: PlanetEntry[] = this.deadPlanetNames.map((name) => ({
            name,
            props: {
                planetType: "Dead Planet",
                planetImage: <img src={DeadPlanet} alt={"Dead Planet Image"} />,
                planetDescription:
                    "Dead Planets are completely lifeless — no atmosphere, weather, or fauna — but often good for mining resources.",
                resources: "Rich mineral veins; Cobalt and Ferrite Dust",
                link: `https://nomanssky.fandom.com/wiki/Biome_-_Dead`,
            },
        }))

        const lushPlanetNames: PlanetEntry[] = this.lushPlanetNames.map(
            (name) => ({
                name,
                props: {
                    planetType: "Lush Planet",
                    planetImage: (
                        <img src={LushPlanet} alt={"Lush Planet Image"} />
                    ),
                    planetDescription:
                        "Lush Planets are characterized by colorful grass covering most of the surface. Flora and fauna are abundant on lush planets, and they often feature vibrant colors, mild weather, and diverse ecosystems, making them ideal for exploration and base-building.",
                    resources: "Common Resources and Paraffinium",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Lush`,
                },
            })
        )

        const frozenPlanetNames: PlanetEntry[] = this.frozenPlanetNames.map(
            (name) => ({
                name,
                props: {
                    planetType: "Frozen Planet",
                    planetImage: (
                        <img src={FrozenPlanet} alt={"Frozen Planet Image"} />
                    ),
                    planetDescription:
                        "Frozen Planets are icy wastelands with sub-zero temperatures and blizzards, often appearing serene but deadly.",
                    resources:
                        "Frost Crystal (primary) and Condensed Carbon in caves.",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Frozen`,
                },
            })
        )

        return [...dead, ...lushPlanetNames, ...frozenPlanetNames]
    }
}

export default PlanetNames
