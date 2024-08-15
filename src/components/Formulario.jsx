import React, { useState } from 'react'
import Card from './Card'
import styleForm from '../styles/styleForm.module.css'

const Formulario = () => {
    const[customer, setCustomer]=useState({
        nombre:"",
        libro:"",
    })

    const[show, setShow]=useState(false)
    const[error, setError]=useState(false)

    const handleNombre=(e)=>{
        setCustomer({...customer, nombre: e.target.value})
    }
    const handleBook=(e)=>{
        setCustomer({...customer, libro: e.target.value})
    }
    const handdleSubmit=(e)=>{
        e.preventDefault();
        const noNumbersRegex= /^[^\d]*$/;
        if(customer.nombre.trim().length >3 && customer.libro.trim().length > 3 && noNumbersRegex.test(customer.nombre))
        {
            setShow(true)
            setError(false)
        }
        else{
            setError(true)
        }
    }
   
  return (
    <>
       {show ?(<Card informacion={customer}/>): (
        <div>
            <form className={styleForm.formContainer} onSubmit={handdleSubmit}>
                <label className={styleForm.labelContainer}>Nombre</label>
                <input placeholder="Ingresa tu nombre" type="text" value={customer.nombre} className={styleForm.inputContainer} 
                onChange={handleNombre} />
                <label className={styleForm.labelContainer} >Libro favorito</label>
                <input placeholder="Ingresa tu libro favorito" type="text" value={customer.libro} className={styleForm.inputContainer}  onChange={handleBook} />
                <button className={styleForm.button}>enviar</button>
            </form>
        </div>)} 
        {error && (
         <h4 style={{ color: "red" }}>Por favor, verifique su información</h4>
      )}
    </>
  )
}

export default Formulario