import { useState } from "react"
import "./App.css"
import PlanetInput from "./components/PlanetInput"
import PlanetInfo from "./planets/PlanetInfo"
import type { PlanetInfoProps } from "./planets/PlanetInfo"

function App() {
    const [planetProps, setPlanetProps] = useState<PlanetInfoProps | null>(null)

    const handlePlanetSelected = (planet: PlanetInfoProps) => {
        console.log("Selected Planet:", planet)
        setPlanetProps(planet)
    }

    return (
        <div className="main-container">
            <h1>No Mans Sky Planet Types</h1>
            <div className="input-container">
                <p style={{ marginRight: "1rem" }}>
                    Planet Name Modifier (Prefix/Suffix):
                </p>
                <PlanetInput onPlanetSelected={handlePlanetSelected} />
            </div>
            <p style={{ marginTop: "0.1rem", marginBottom: "0.1rem" }}>
                Note:{" "}
                <i>
                    If the planet name is not found, that planet is most likely
                    exotic (exotic planets vary greatly from one another).
                </i>
            </p>
            {planetProps && <PlanetInfo {...planetProps} />}
        </div>
    )
}

export default App
