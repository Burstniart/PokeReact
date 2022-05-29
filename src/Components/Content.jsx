import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import CardTest from "./CardTest";
import useTypeList from "./useTypeList";
import Pokemon from "./Pokemon";
import SearchParams from "./SearchParams";


const Content = () => {
  
  return (

    <section className="section is-small ">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/details/:name" element={<Details/>} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter> */}

      
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