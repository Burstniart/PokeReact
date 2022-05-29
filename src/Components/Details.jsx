import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = () => {
  const { name } = useParams();

  const [lePokemon, setLePokemon] = useState([])

  useEffect(() => {
    requestPokemon()
  }, [])

  async function requestPokemon() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    ) 
    const json = await res.json()

    json.leImage=json.sprites.other["official\-artwork"].front_default
    json.leName =json.name
    json.leType = json.types.map((typelol) => {
      return typelol.type.name.toString().concat(" ")
    });

    // create const to call properties in order to avoid error when calling other 
    // pokemons and ther is no response available
    
    console.log(json)
    
    setLePokemon(json)
  }
  
  return (
    <section className="section is-medium">
      <h1 className="title capitalize">{name}</h1>
      
      


    <div className=" columns is-multiline">
      <div className="column is-4">

        <div className="card">
          <div className="card-image">
            <figure className="image is-1by1">
            <img src={lePokemon.leImage} alt="Pokemon image" className=""/>
            </figure>
          </div>
        </div>
      </div>  

      <div classNameName="column">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                {/* <img src={lePokemon.sprites.front_default} alt="Sprite pokemon"/> */}
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4 capitalize">{lePokemon.leType}</p>
            </div>
          </div>
        </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
    </div>
  </div>
</div>
      



    </section>
  )
}

export default Details;