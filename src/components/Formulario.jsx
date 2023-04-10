import { useState } from 'react'
import fondo2 from '../img/fondo2.jpg'
import { BtnLlamar } from './BtnLlamar'
export const Formulario = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,phone,email,textarea)
    }
  return (
    <>
        <div className="text-white bg-cover bg-center h-full w-full bg-repeat" style={{backgroundImage:`url(${fondo2})`}}>
            <div className=' h-full bg-black bg-opacity-50 py-5'>                
                <div className='w-[90%] mx-auto'>
                    <p className=' text-3xl'>Solicitar una consulta</p>
                    <div className='mt-5 border-b border-marron w-2/4'></div>
                    <p className='py-3'>Póngase en contacto con el equipo en Nueva York que luchará por usted</p>
                    <div className='inline-block gap-3 '>
                        <div className='text-xl flex items-center gap-3 ml-5 mb-5 py-2 px-5 bg-marron2'>
                            <BtnLlamar color="white" text="Llamar ahora 952693693"/>
                        </div>
                    </div>
                    <form>
                        <div className='grid grid-cols-2 gap-3'>
                            <div className='col-span-1'>
                                <label className='block' htmlFor="name">Nombre <span>(requerido)</span></label>
                                <input onChange={(e)=>setName(e.target.value)} value={name} className='text-black w-full' type="text" id="name" />
                            </div>
                            <div className='col-span-1 ' >
                                <label className='block' htmlFor="phone" >celular</label>
                                <input onChange={(e)=>setPhone(e.target.value)} value={phone} className='text-black w-full' type="number" id="phone" />

                            </div>
                            <div className='col-span-2 ' >
                                <label className='block' htmlFor="email">Email <span>(requerido)</span></label>
                                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='text-black w-full'  type="email" id="email" />
                            </div>
                            <div className='col-span-2'>
                                <label className='w-full text-white' htmlFor="text-area">¿Cómo podemos ayudarte?</label>
                                <textarea onChange={(e)=>setTextarea(e.target.value)} value={textarea} className='text-black w-full' name="" id="text-area" cols="50" rows="5"></textarea>
                            </div>
                            <input onClick={handleSubmit} className='bg-marron2 col-span-2 p-2 '  type="submit" value="ENVIAR" />
                        
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </>
  )
}
