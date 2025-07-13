import React, { useState, useRef } from "react"
import type { ChangeEvent } from "react"
import "./PlanetInput.css"

const planetNames = [
    "Abandoned",
    "Barren",
    "Bleak",
    "Desert",
    "Desolate",
    "Dusty",
    "Parched",
    "Rocky",
    "Wind-swept",
    "Infected Dustbowl",
    "Tainted",
    "Terrorsphere",
    "Abandoned Desert",
    "Ruined",
    "Ruined Dustbowl",
]

const WordInput: React.FC = () => {
    const [inputValue, setInputValue] = useState("")
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [isValid, setIsValid] = useState(true)
    const suggestionBoxRef = useRef<HTMLUListElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)

        const filtered = planetNames.filter((word) =>
            word.toLowerCase().startsWith(value.toLowerCase())
        )

        setSuggestions(filtered.slice(0, 5)) // Limit to 5 suggestions
        setIsValid(planetNames.includes(value))
    }

    const handleSelect = (word: string) => {
        setInputValue(word)
        setSuggestions([])
        setIsValid(true)
    }

    return (
        <div style={{ position: "relative", width: "300px" }}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                style={{
                    borderColor: isValid ? "white" : "red",
                }}
                placeholder="Start typing..."
            />
            {suggestions.length > 0 && inputValue && (
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
