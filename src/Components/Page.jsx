import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import Content from "./Content";
import Welcome from "./Welcome";



const Page = () => {

  return (
    <div className="Page">
      <Navbar/>
      <Welcome/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Page;