
const Navbar = () => {
  return ( 
    <section class="hero is-dark is-medium">
      <div class="hero-head">
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              PokéReact
            </a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://twitter.com/lex_gace" target={"blank"}>
              By Alejandro Garia
            </a>
          </div>
        </nav>
  </div>

    
  <div class="hero-body">
    <div class="container">
      <figure className="image Pikachu">
        <img className="is-rounded has-ratio" 
        src="https://cdn.lowgif.com/small/7a07bc139a45c07d-.gif"/>
      </figure>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
    
  )
}

export default Navbar;