import React, { useEffect } from "react";
import { useState } from "react";
import { render } from "react-dom";

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
    <div className="Pokemon">
      I am a pokemon!
        <div className="column">
          <div className="card" >
            <div className="card-image is-128x128" >
              <figure className="image is-square ">
                <img src={lePokemon.leImage} alt="Pokemon Image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">  
                <div className="media-content">
                  <p className="title is-2 capitalize">{lePokemon.name}</p>
                  <p className="title is-4 capitalize">{lePokemon.leType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pokemon;