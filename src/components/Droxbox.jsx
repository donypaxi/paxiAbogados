import {useState } from 'react'
export const Droxbox = () => {
  const url ='http://localhost:5173/guardar'
    let persona ={}
    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')
    const [dato, setDato] = useState('')
    const handlePersona =  (event) => {
      event.preventDefault();
      persona={name,apellido}
      // console.log(persona)
      fetch('http://localhost:5173/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(persona)
      }).then(res => res.json())
        .then(data => setDato(data))
        .catch(error => console.error(error));
        console.log('datos enviados')
      }
    
  return (
    <>
      <div>Droxbox</div>
      <form>
        <label htmlFor="">Ingrese Su nombre</label>
        <input onChange={(e)=>setName(e.target.value)} className='border-2 border-black' type="text" /> 
        <br />
        <br />
        <label htmlFor="">Ingrese Su Apellido</label>
        <input onChange={(e)=>setApellido(e.target.value)} className='border-2 border-black' type="text" />
        <br />
        <input className='border-2 border-black rounded-lg p-2 ' type="submit" value="enviar" onClick={handlePersona} />
      </form>


      {dato && (
        <div>
          <h1>Datos enviados por POST</h1>
          <p> Nombre: {dato.nombres} </p>
          <p> Nombre: {dato.apellidos} </p>
        </div>
      )}
    </>

  )
}
