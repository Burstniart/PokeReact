import { useState, useEffect } from "react"
import Pokemon from "./Pokemon"

const TYPES =["normal", "fighting", "flying", "poison","ground", "rock", "bug", "ghost", "steel", "fire", "water", 
"grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"] 

const SearchParams = () => {
  const [pokemon, setPokemon] = useState("")
  const [type, setType] = useState("")
  const types = []
  const [lePokemons, setLePokemons] = useState([])

  

  useEffect(() => {
    requestLePokemons()
  }, [])

  async function requestLePokemons() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/type/${type}/`
    )
    const json = await res.json()

    console.log(json.pokemon)

    
    setLePokemons(json.pokemon)
    
  }
  
  return (
    <div className="search-params">
      <form
      onSubmit={(e) => {
        e.preventDefault();
        requestLePokemons();
      }}
      >
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
          <label htmlFor="type" className="label">Type
            <div className="control">
              <div className="select">
                <select
                  id="type"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value)

                    }}
                  onBlur={(e) => {
                    setType(e.target.value)
                    }}
                >
                    <option/>
                    
                    {TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option> 
                    ))
                    }
                </select>
              </div>
            </div>
          </label>
        </div>
        <div className="field is-grouped">
          <div className="control">
        
            <button className="button is-link">Search</button>
          </div>
        </div>
      </form>
       
       {/* delete cardtest, configure so that content recieves the list of pokemons and creates the Pokemon elements,
        since that layout works better, or try to fx the layout inside search params, your call, and fix the type list,
        currently only works the first time, should change every time to push search and have selected a new type
        */}
        {/* <div className="columns is-multiline">

        {
        
        lePokemons.map(lePokemon => (
          <Pokemon url={lePokemon.pokemon.url} />
        ))
        
        }
        </div> */}
  
      
      
      
    </div>
  )
}

export default SearchParams;