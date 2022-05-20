import React from "react";
import { render } from "react-dom";

const  Pokemon = props => {
  return (
    <div className="Pokemon">
      I am a pokemon, horray!... Or am I????
      <div className="columns">
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
                  <p className="title is-4">{props.name}</p>
                  <p className="subtitle is-6">{props.type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon;