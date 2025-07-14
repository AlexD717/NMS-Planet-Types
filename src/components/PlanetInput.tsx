import React, { useState, useRef } from "react"
import type { ChangeEvent } from "react"
import "./PlanetInput.css"
import PlanetNames from "../components/PlanetNames"
import type { PlanetInfoProps } from "../planets/PlanetInfo"

type WordInputProps = {
    onPlanetSelected: (planet: PlanetInfoProps) => void
}

const WordInput: React.FC<WordInputProps> = ({ onPlanetSelected }) => {
    const [inputValue, setInputValue] = useState("")
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [isValid, setIsValid] = useState(true)

    const suggestionBoxRef = useRef<HTMLUListElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)

        const filtered = PlanetNames.getInstance()
            .getAllPlanets()
            .filter((planet) =>
                planet.name.toLowerCase().startsWith(value.toLowerCase())
            )

        setSuggestions(filtered.map((planet) => planet.name).slice(0, 5)) // Limit to 5 suggestions

        const valid = PlanetNames.getInstance()
            .getAllPlanets()
            .some((planet) => planet.name === value)
        setIsValid(valid)
        if (valid) {
            const selectedPlanet = PlanetNames.getInstance()
                .getAllPlanets()
                .find((planet) => planet.name === value)
            if (selectedPlanet) {
                onPlanetSelected(selectedPlanet.props)
            }
        }
    }

    const handleSelect = (word: string) => {
        setInputValue(word)
        setSuggestions([])
        setIsValid(true)
        handleChange({
            target: { value: word } as HTMLInputElement,
        } as ChangeEvent<HTMLInputElement>)
    }

    return (
        <div className="input-wrapper">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                style={{
                    borderColor: isValid ? "white" : "red",
                }}
                placeholder="Start typing..."
            />
            {!isValid && suggestions.length > 0 && inputValue && (
                <ul ref={suggestionBoxRef} className="suggestion-box">
                    {suggestions.map((word) => (
                        <li
                            key={word}
                            onClick={() => handleSelect(word)}
                            className="suggestion-item"
                        >
                            {word}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default WordInput
