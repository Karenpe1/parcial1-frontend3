import React from 'react'
import styleCard from '../styles/styleCard.module.css'

const Card = ({informacion}) => {
  const{nombre, libro}= informacion;
  return (
    <div className={styleCard.container}>
        <p style={{color:"black"}}>Hola {nombre} <br/> sabemos que tu libro favorito es: </p>
        <button onClick={(e)=> e.preventDefault()}  className={styleCard.text}>{libro} </button>
    </div>
  )
}

export default Card