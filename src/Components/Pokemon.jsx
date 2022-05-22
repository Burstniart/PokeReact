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
    
    setLepokemon(json)
  }
    
    
  return (
    <div className="Pokemon">
      I am a pokemon!

        <div className="column">
          <div className="card" >
            <div className="card-image is-128x128" >
              <figure className="image is-square ">
                <img src={props.image} alt="Pokemon Image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">  
                <div className="media-content">
                  <p className="title is-4">{lePokemon.name}</p>
                  {/* fix relative path to get image, maybe try another path */}
                  {/* <p className="subtitle is-6">{lePokemon.sprites.other["official\-artwork"].front_default}</p>  */}
                  {console.log(lePokemon.sprites.other["official\-artwork"].front_default)}
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Pokemon;