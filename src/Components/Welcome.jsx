
import Navbar from "../Layouts/Navbar";

const Welcome = () => {

  return (
  <div className="">
   <Navbar/>


    
    <div className="columns is-mobile">
      <div className="column is-half">
        <figure className= "image is-128x128" >
          <img className="is-rounded" src="https://i.ya-webdesign.com/images/monika-chibi-png-11.png"/>
        </figure>
      </div>
      <div class="column ">
        <p class="has-text-rigth">Hello, I'm Monika and I'll be showing you around</p>
      </div>
    </div>
    
  </div>
  )

}

export default Welcome;
