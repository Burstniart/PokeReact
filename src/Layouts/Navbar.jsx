import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <section className="hero is-dark is-medium ">
      <div className="hero-head">
        <nav className="navbar is-dark " role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              PokéReact
            </a>
          </div>
          <nav className="navbar-item">
            Pokémons
          </nav>
          <nav className="navbar-item">
            Types
          </nav>

          <div className="navbar-end">
            <a className="navbar-item" href="https://twitter.com/lex_gace" target={"blank"}>
              By Alejandro Garia
            </a>
          </div>
        </nav>
  </div>
</section>
    
  )
}

export default Navbar;