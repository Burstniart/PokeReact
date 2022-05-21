import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import SearchParams from "./SearchParams";


const Content = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    requestPokemon()
  }, [])

  async function requestPokemon() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/282/`
    )
    const json = await res.json()

    console.log(json)

    console.log(json.name)
    console.log(json.sprites.other["official\-artwork"].front_default)
    // console.log(json.types)
    const letype = json.types.map((typelol) => {
      return typelol.type.name.toString()
    });

    // console.log(letype.toString())
    const lmao = {
      name: json.name,
      types: letype,
      image: json.sprites.other["official\-artwork"].front_default
    }

    setPokemons(lmao)
    
  }
  
  return (

    <section className="section is-small ">
        <SearchParams/>
      <h1 className="title">This is a Pokémon</h1>
      <h2 className="subtitle">
        ~~~ Pokemon goes here ~~~
      </h2>
      <div className="columns">
      <Pokemon name="Gardevoir" 
      type="Psychic" 
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png" 
      />

      {console.log(pokemons)}

      <Pokemon name={pokemons.name}
      type={pokemons.types}
      image={pokemons.image}
      />
      </div>
    </section>

  )
}

export default Content;