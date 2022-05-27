import { useState, useEffect } from "react";
import CardTest from "./CardTest";
import Pokemon from "./Pokemon";
import SearchParams from "./SearchParams";


const Content = () => {

  // const [pokemons, setPokemons] = useState([])

  // useEffect(() => {
  //   requestPokemon()
  // }, [])

  // async function requestPokemon() {
  //   const res = await fetch(
  //     `https://pokeapi.co/api/v2/type/fairy/`
  //   )
  //   const json = await res.json()

  //   // console.log(json)

   

  //   setPokemons(json)
    
  // }

  
  return (

    <section className="section is-small ">
        <SearchParams />
      {/* <h1 className="title">This is a Pokémon</h1>
      <h2 className="subtitle">
        ~~~ Pokemon goes here ~~~
      </h2> */}
      <div className="columns is-multiline">
       

      <Pokemon url={"https://pokeapi.co/api/v2/pokemon/282/"}/>
 
      </div>
    </section>

  )
}

export default Content;