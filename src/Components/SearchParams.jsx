import { useState } from "react"

const SearchParams = () => {
  const type = "psychic"
  // const pokemon= "garde"
  const [pokemon, setPokemon] = useState("")
  return (
    <div className="search-params">
      <div className="field">
        <label className="label" htmlFor="pokemon">
          Pokémon {pokemon}
          </label>
        <div className="control">
          <input className="input" 
          id="pokemon"
          value={pokemon}
          type="text"
          placeholder="Pokémon"
          onChange={(e) => setPokemon(e.target.value)}
          />

        </div>
      </div>
      <div className="field">
        <label className="label">Type</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Psychic</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchParams;