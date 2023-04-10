import { Link } from "react-router-dom";
import fondo1 from '../img/fondo1.jpg'
import portada from '../img/portada.png'
import { FaAlignJustify } from "react-icons/fa";
import { BtnLlamar } from './BtnLlamar';
import { Facebook } from './Facebook';
import { useState } from "react";
export const Encabezado = () => {
    const [open, setOpen] = useState(false)

  return (
    <>
        <div className='relative h-screen bg-cover bg-center' style={{backgroundImage:`url(${fondo1})`}}>
            {/* celular y correo */}
            <div className='text-sm md:text-lg lg:text-xl flex justify-center items-center bg-black  w-full container mx-auto h-10 gap-1  text-white'>
                <BtnLlamar color="green" text="952693693"/>
                <Facebook/>
            </div>
            {/* navbar */}
            <div className='h-auto bg-primary-color  px-8 flex justify-between items-center '>
                <img className='w-40 min-w-[25%]   ' src={portada} alt="" />
                <FaAlignJustify onClick={()=>setOpen(!open)} size={25} className='cursor-pointer text-marron '/>
            </div>
            {/* texto */}
            <div className={`flex justify-center flex-col space-y-1.5 font-semibold  absolute py-4 right-0 text-white bg-primary-color ${open ? 'w-56 ' : 'w-0 pl-0'} duration-1000`}>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">INICIO</Link>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">SOBRE NOSOTROS</Link>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">DERECHO PENAL</Link>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">LEY CIVIL</Link>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">ABOGADO FEDERAL DE AVIACIÓN</Link>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">TESTIMONIAL</Link>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">BLOG</Link>
                <Link className="hover:text-marron hover:border-marron ml-5 border-b pb-3">CONTÁCTENOS</Link>
            </div>


            <div className='h-96 flex justify-end items-center mr-12 min-w-24 '>
                <div className=' text-white'>
                    <p className='text-2xl '>LA FIRMA DE ABOGADOS PAXI</p>
                </div>
            </div>
        </div>
    
    </>




  )
}


