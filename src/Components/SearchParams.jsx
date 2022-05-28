import { useState, useEffect } from "react"
import useTypeList from "./useTypeList"
import Pokemon from "./Pokemon"

const TYPES =["normal", "fighting", "flying", "poison","ground", "rock", "bug", "ghost", "steel", "fire", "water", 
"grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]

const SearchParams = () => {
  const [pokemon, setPokemon] = useState("")
  const [type, setType] = useState("")
  // const [types] = useTypeList[type]
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
        
            <button className="button is-link"
            // onClick={console.log("clicked me: ",lePokemons)}
            // onClick={() => lePokemon(lePokemons)}
            >Search</button>
          </div>
        </div>
      </form>
       
      <section className="section is-small ">
        <h1 className="title">This is a Pokémon</h1>
        <h2 className="subtitle">
          ~~~ Pokemon goes here ~~~
        </h2>
        <div className="columns is-multiline">
          {
            lePokemons.map(lePokemon => (
              <Pokemon url={lePokemon.pokemon.url} key={lePokemon.pokemon.name}/>
            ))
          }
        </div>
    </section>
  
      
      
      
    </div>
  )
}

export default SearchParams;