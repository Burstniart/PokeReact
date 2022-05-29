import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Welcome from "./Welcome";
import Content from "./Content";
import Footer from "../Layouts/Footer";
import Details from "./Details";



const Page = () => {

  return (
    <div className="Page">
      <Navbar/>
      <Welcome/>
      <BrowserRouter>
        <Routes>
          <Route path="/details/:name" element={<Details/>} />
          <Route path="/" element={<Content />} />
        </Routes>
      </BrowserRouter>
      {/* <Content/> */}
      <Footer/>
    </div>
  )
}

export default Page;