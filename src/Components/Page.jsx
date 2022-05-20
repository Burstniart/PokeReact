import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import Welcome from "./Welcome";



const Page = () => {

  return (
    <div className="Page">
      <Navbar/>
      <Welcome/>
      <Footer/>
    </div>
  )
}

export default Page;