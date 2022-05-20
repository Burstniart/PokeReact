import Pokemon from "./Pokemon";


const Content = () => {
  
  return (

    <section className="section is-medium">
      <h1 className="title">This is a Pokémon</h1>
      <h2 className="subtitle">
        ~~~ Pokemon goes here ~~~
      </h2>
      <Pokemon name="Gardevoir" type="Psychic" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png" />
    </section>

  )
}

export default Content;