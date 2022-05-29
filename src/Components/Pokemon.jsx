import React, { useEffect } from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

const  Pokemon = props => {

  const [lePokemon, setLepokemon] = useState([])

  useEffect(() => {
    requestPokemon()
  }, [])
  
  async function requestPokemon() {
    const res = await fetch(
      props.url
    )
    const json = await res.json()

    json.leImage=json.sprites.other["official\-artwork"].front_default
    json.leName =json.name
    json.leType = json.types.map((typelol) => {
      return typelol.type.name.toString().concat(" ")
    });

    setLepokemon(json)
  }
    
  return (
    <div className="column is-3-desktop is-6-tablet is-narrow-mobile">
      <div className="Pokemon ">
        I am a pokemon!
        {/* <Link></Link> */}
          {/* <a href={`/details/${lePokemon.name}`}> */}
          <Link to={`/details/${lePokemon.name}`} >
            <div className="card" >
              <div className="card-image is-128x128" >
                <figure className="image is-square ">
                  <img src={lePokemon.leImage} alt="Pokemon Image"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">  
                  <div className="media-content">
                    <p className="title is-3 is-4-desktop capitalize">{lePokemon.name}</p>
                    <p className="title is-4 capitalize">{lePokemon.leType}</p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          {/* </a> */}
      </div>
    </div>
  )
}

export default Pokemon;