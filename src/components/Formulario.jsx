import { useState } from 'react'
import fondo2 from '../img/fondo2.jpg'
import { BtnLlamar } from './BtnLlamar'
import {Link} from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";

export const Formulario = () => {
    const [formulario, setFormulario] = useState(true)
    const [name, setName] = useState('')
    const [textarea, setTextarea] = useState('')

  return (
    <>
        <div className="text-white bg-cover bg-center h-full w-full bg-repeat" style={{backgroundImage:`url(${fondo2})`}}>
            <div className=' h-full bg-black bg-opacity-50 py-5'>                
                <div className='w-[90%] mx-auto'>
                    <p className=' text-3xl'>Solicitar una consulta</p>
                    <div className='mt-5 border-b border-marron w-2/4'></div>
                    <p className='py-3'>Póngase en contacto con el equipo en Nueva York que luchará por usted</p>
                    <div className='inline-block gap-3 '>
                        <div className='text-xl flex items-center gap-3 ml-5 mb-5 py-2 px-5 bg-marron2 hover:bg-marron'>
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
                            mi consulta es la siguiente : ${textarea} `}`} target='_blank' className='hover:bg-marron text-xl flex items-center gap-3 ml-5 mb-5 py-2 px-5 bg-marron2'>Enviar</Link>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </>
  )
}
