import Pokemon from "./Pokemon";

const Results = ({lePokemons}) => {
  return (
    <div>
<section className="section is-small ">
        <h1 className="title">This is a Pokémon</h1>
        <h2 className="subtitle">
          ~~~ Pokemon goes here ~~~
        </h2>
        <div className="columns is-multiline">
          {!lePokemons.length ? (
            <h1 className="title">Try searching by type</h1>
          ) : (
            
              lePokemons.map(lePokemon => (
                <Pokemon url={lePokemon.pokemon.url} key={lePokemon.pokemon.name}/>
              ))
            
          
          )
          }
        </div>
    </section>
    </div>
  )
}

export default Results;
