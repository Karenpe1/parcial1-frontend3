import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Libro favorito </h1>
      <Formulario/>

    </div>
  )
}

export default App
