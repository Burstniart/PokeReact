### PokeReact

This is a project to create a Pokedex with React JS

I'll be using the PokeAPI available online and Vite to create a React porject.

Also the data used for this project is directly consumed from [The PokeApi](https://pokeapi.co/)

![PokeReactScreen](https://user-images.githubusercontent.com/80152145/170839502-4adfaaed-24ce-4c85-99c1-93d6fc2fcc40.gif)

## Alright, let's get started
This project is created with Vite, which handles a lot of the needs to make t easier to work with.

The main.jsx file is where everything get's bundled together, here React is rendered and the CSS is implemented through a CSS file and the Bulma framework

The we have the App.jsx file
Here is where I plan to implement different views but for now it's just a stepping stone.

The Page.jsx file is where different components are bundled together to create the view of the page

The Content.jsx file now contains a component that was part of it's code

The SearchParams.jsx is what used to be just a form, but now handles an async request given by the "type" value of the form, which resolves in an array of elements that are mapped to another component to create the resulting cards.

The Pokemon.jsx file is the component that creates cards given a url from the PokeApi, which is passed as a props "url", it then does an async function that retreieves data for a Pokemon the same way it did it for a type and finally it creates a card.