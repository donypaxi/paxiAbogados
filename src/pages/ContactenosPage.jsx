import { useState } from "react";
import { BtnLlamar } from "../components/BtnLlamar";
import { Navbar } from "../components/Navbar";
import fondo1 from '../img/fondo1.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const ContactenosPage = () => {
  const [formulario, setFormulario] = useState(false)
  const [name, setName] = useState('')
  const [textarea, setTextarea] = useState('')
  return (
    <>
      <Navbar/>
      <div className="bg-cover bg-center text-white " style={{backgroundImage:`url(${fondo1})`}}>
        <div className=" bg-black bg-opacity-50">
          <h2 className="text-center py-5 text-4xl "  >Contáctenos</h2>
          <p className="text-center mb-5 text-2xl">Póngase en contacto con nosotros para una consulta</p>
          <div className='inline-block '>
              <div className=' text-xl ml-5 mb-5 py-2 px-5 bg-marron2 hover:bg-marron'>
                <BtnLlamar color="white" text="Llamar ahora 952693693"/>
              </div>
              <button onClick={()=>setFormulario(!formulario) } className='text-xl flex items-center gap-3 ml-5 mb-5 py-2 px-5 bg-marron2 hover:bg-marron'>
                <FaWhatsapp/>
                Mensajear ahora 
              </button>
          </div>
          <form className={`${formulario ? '': 'hidden'} duration-500 w-[90%] mx-auto`}>
              <div className='grid grid-cols-2 gap-3'>
                  <div className='col-span-1'>
                      <label className='block' htmlFor="name">Nombre <span>(requerido)</span></label>
                      <input onChange={(e)=>setName(e.target.value)} value={name} className='px-2 text-black w-full' type="text" id="name" />
                  </div>
                  
                  <div className='col-span-2'>
                      <label className='w-full text-white' htmlFor="text-area">¿Cómo podemos ayudarte?</label>
                      <textarea onChange={(e)=>setTextarea(e.target.value)} value={textarea} className='px-2 text-black w-full' name="" id="text-area" cols="50" rows="5"></textarea>
                  </div>
                  <Link to={`https://api.whatsapp.com/send?phone=+51957696996&text=${`Hola mi nombre es ${name} 
                  mi consulta es la siguiente : ${textarea} `}`} target='_blank' className='hover:bg-marron text-xl inline-block mb-5 py-2 px-5 bg-marron2'>Enviar</Link>
              </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}
