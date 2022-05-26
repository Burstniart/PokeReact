
const CardTest = () => {
  return (
    <div className="CardTest column is-3-desktop is-6-tablet is-narrow-mobile">

      
      <div className="Pokemon">
      I am a pokemon!
        <div className=" ">
          <div className="card" >
            <div className="card-image is-128x128" >
              <figure className="image is-square ">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png" alt="Pokemon Image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">  
                <div className="media-content">
                  <p className="title is-4 capitalize">Crabominable</p>
                  <p className="title is-4 capitalize">Fighting Electric</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    
    </div>
  )
}

export default CardTest