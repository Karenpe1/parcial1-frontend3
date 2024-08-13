import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './complements/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Carga de estudiantes</h1>
      
      <Card/>
    </div>
  )
}

export default App
