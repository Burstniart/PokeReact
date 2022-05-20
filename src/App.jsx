import { useState } from 'react'
import './App.css'
import Page from './Components/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Page/>
        
    </div>
  )
}

export default App
