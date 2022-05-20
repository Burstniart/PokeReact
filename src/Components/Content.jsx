import Pokemon from "./Pokemon";


const Content = () => {
  
  return (

    <section className="section is-medium">
      <h1 className="title">This is a Pokémon</h1>
      <h2 className="subtitle">
        ~~~ Pokemon goes here ~~~
      </h2>
      <div className="columns">
      <Pokemon name="Gardevoir" 
      type="Psychic" 
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png" 
      />

      <Pokemon name="Lopunny" 
      type="Normal" 
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png" 
      />
      </div>

    </section>

  )
}

export default Content;