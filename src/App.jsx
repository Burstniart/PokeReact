import { useState } from 'react'
import Welcome from './Components/Welcome'
import './App.css'
import Footer from './Layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Welcome/>
        <Footer/>
    </div>
  )
}

export default App
