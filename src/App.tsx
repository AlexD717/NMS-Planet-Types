import "./App.css"
import PlanetInput from "./components/PlanetInput"

function App() {
    return (
        <div className="main-container">
            <h1>No Mans Sky Planet Types</h1>
            <div className="input-container">
                <p style={{ marginRight: "1rem" }}>
                    Planet Name Modifier (Prefix/Suffix):
                </p>
                <PlanetInput />
            </div>
        </div>
    )
}

export default App
