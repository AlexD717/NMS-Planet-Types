import { type PlanetInfoProps } from "../planets/PlanetInfo"
import DeadPlanet from "../assets/planet-images/DeadPlanet.jpg"
import LushPlanet from "../assets/planet-images/LushPlanet.jpg"
import FrozenPlanet from "../assets/planet-images/FrozenPlanet.jpg"
import BarrenPlanet from "../assets/planet-images/BarrenPlanet.jpg"
import IrradiatedPlanet from "../assets/planet-images/IrradiatedPlanet.jpg"
import ToxicPlanet from "../assets/planet-images/ToxicPlanet.jpg"
import MarshPlanet from "../assets/planet-images/MarshPlanet.jpg"
import ScorchedPlanet from "../assets/planet-images/ScorchedPlanet.jpg"
import VolcanicPlanet from "../assets/planet-images/VolcanicPlanet.jpg"

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

    private irradiatedPlanetNames = [
        "Irradiated",
        "Contaminated",
        "Radioactive",
        "Nuclear",
        "Isotopic",
        "Decaying Nuclear",
        "Gamma-Intensive",
        "High Radio Source",
        "Supercritical",
        "High Energy",
    ]

    private marshPlanetNames = [
        "Marsh",
        "Swampy",
        "Tropical",
        "Foggy",
        "Misty",
        "Boggy",
        "Endless Morass",
        "Quagmire",
        "Hazy",
        "Cloudy",
        "Vapour",
        "Reeking",
        "Murky",
        "Damp",
    ]

    private scorchedPlanetNames = [
        "Charred",
        "Arid",
        "Volcanic",
        "Scorched",
        "Hot",
        "Fiery",
        "Boiling",
        "High Temperature",
        "Torrid",
        "Incandescent",
        "Scalding",
    ]

    private toxicPlanetNames = [
        "Toxic",
        "Poisonous",
        "Noxious",
        "Corrosive",
        "Acidic",
        "Caustic",
        "Acrid",
        "Blighted",
        "Miasmatic",
        "Rotting",
    ]

    private volcanicPlanetNames = [
        "Lava",
        "Magma",
        "Erupting",
        "Volcanic",
        "Ash-Shrouded",
        "Ashen",
        "Tectonic",
        "Unstable",
        "Violent",
        "Molten",
        "Flame-Ruptured",
        "Imminent Core Detonation",
        "Obsidian Bead",
        "Basalt",
    ]

    getAllPlanets(): PlanetEntry[] {
        const barren: PlanetEntry[] = this.barrenPlanetNames.map((name) => ({
            name,
            props: {
                planetType: "Barren Planet",
                planetImage: (
                    <img src={BarrenPlanet} alt={"Barren Planet Image"} />
                ),
                planetDescription:
                    "Barren Planets lack vegetation and are dominated by rock and dust, offering wide-open vistas and sparse life.",
                resources: "Star Bulb (rare), Ferrite Dust, Deuterium",
                link: `https://nomanssky.fandom.com/wiki/Biome_-_Barren`,
            },
        }))

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

        const lushPlanet: PlanetEntry[] = this.lushPlanetNames.map((name) => ({
            name,
            props: {
                planetType: "Lush Planet",
                planetImage: <img src={LushPlanet} alt={"Lush Planet Image"} />,
                planetDescription:
                    "Lush Planets are characterized by colorful grass covering most of the surface. Flora and fauna are abundant on lush planets, and they often feature vibrant colors, mild weather, and diverse ecosystems, making them ideal for exploration and base-building.",
                resources: "Common Resources and Paraffinium",
                link: `https://nomanssky.fandom.com/wiki/Biome_-_Lush`,
            },
        }))

        const frozenPlanet: PlanetEntry[] = this.frozenPlanetNames.map(
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
                        "Frost Crystal (primary) and Condensed Carbon in caves",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Frozen`,
                },
            })
        )

        const irradiatedPlanet: PlanetEntry[] = this.irradiatedPlanetNames.map(
            (name) => ({
                name,
                props: {
                    planetType: "Irradiated Planet",
                    planetImage: (
                        <img
                            src={IrradiatedPlanet}
                            alt={"Irradiated Planet Image"}
                        />
                    ),
                    planetDescription:
                        "Highly radioactive surfaces and frequent radiation storms make survival difficult. Protective gear is highly recommended, but rare materials are often found here.",
                    resources: "Gamma Root (primary), Uranium, Cobalt",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Irradiated`,
                },
            })
        )

        const marshPlanet: PlanetEntry[] = this.marshPlanetNames.map(
            (name) => ({
                name,
                props: {
                    planetType: "Marsh Planet",
                    planetImage: (
                        <img src={MarshPlanet} alt={"Marsh Planet Image"} />
                    ),
                    planetDescription:
                        "Swampy and wet worlds with murky ground, thick vegetation, and high humidity. Rich in life and visually unique, but often toxic or hazardous.",
                    resources: "Fungal Mould (primary), Sodium, Ferrite Dust",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Marsh`,
                },
            })
        )

        const scorchedPlanet: PlanetEntry[] = this.scorchedPlanetNames.map(
            (name) => ({
                name,
                props: {
                    planetType: "Scorched Planet",
                    planetImage: (
                        <img
                            src={ScorchedPlanet}
                            alt={"Scorched Planet Image"}
                        />
                    ),
                    planetDescription:
                        "Blistering hot surfaces, volcanic rock, and frequent heat storms define these fiery worlds. Valuable for their thermal and metallic resources.",
                    resources: "Solanium (primary) and Sodium",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Scorched`,
                },
            })
        )

        const toxicPlanet: PlanetEntry[] = this.toxicPlanetNames.map(
            (name) => ({
                name,
                props: {
                    planetType: "Toxic Planet",
                    planetImage: (
                        <img src={ToxicPlanet} alt={"Toxic Planet Image"} />
                    ),
                    planetDescription:
                        " Hazardous worlds with corrosive atmospheres and aggressive storms, requiring strong protection gear to survive.",
                    resources: "Fungal Mould (primary) and Sodium-rich caves",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Toxic`,
                },
            })
        )

        const volcanicPlanet: PlanetEntry[] = this.volcanicPlanetNames.map(
            (name) => ({
                name,
                props: {
                    planetType: "Volcanic Planet",
                    planetImage: (
                        <img
                            src={VolcanicPlanet}
                            alt={"Volcanic Planet Image"}
                        />
                    ),
                    planetDescription:
                        "Volcanic Planets are unstable and feature magma flows and violent eruptions, posing significant environmental threats.",
                    resources:
                        "Activated Indium (in blue star systems) and Ferrite Dust",
                    link: `https://nomanssky.fandom.com/wiki/Biome_-_Volcanic`,
                },
            })
        )

        return [
            ...barren,
            ...dead,
            ...lushPlanet,
            ...frozenPlanet,
            ...irradiatedPlanet,
            ...marshPlanet,
            ...scorchedPlanet,
            ...toxicPlanet,
            ...volcanicPlanet,
        ]
    }
}

export default PlanetNames
