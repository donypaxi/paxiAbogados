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
        <div className='relative w-full h-screen bg-cover bg-center' style={{backgroundImage:`url(${fondo1})`}}>
            {/* celular y correo */}
            <div className='text-sm md:text-lg lg:text-xl flex justify-center items-center bg-black  w-full container mx-auto h-10 gap-1  text-white'>
                <BtnLlamar color="green" text="952693693"/>
                <Facebook/>
            </div>
            {/* navbar */}
            <div className=' h-auto bg-primary-color px-8 flex justify-between items-center '>
                <img className='w-48 min-w-[25%]   ' src={portada} alt="" />
                <FaAlignJustify onClick={()=>setOpen(!open)} size={25} className='md:hidden cursor-pointer text-marron '/>

                <div className="hidden md:flex text-[12px] md:text-none lg:text-sm xl:text-lg justify-center gap-4 font-semibold py-4 text-white bg-primary-color">
                    <Link to="/" className="hover:text-marron hover:border-marron ">INICIO</Link>
                    <Link to="/nosotros" className="hover:text-marron hover:border-marron ">SOBRE NOSOTROS</Link>
                    <Link to="/derechopenal" className="hover:text-marron hover:border-marron ">DERECHO PENAL</Link>
                    <Link to="/derechocivil" className="hover:text-marron hover:border-marron ">DERECHO CIVIL</Link>
                    <Link to="/contactenos" className="hover:text-marron hover:border-marron ">CONTÁCTENOS</Link>
                    <Link to="/autenticacion" className="hover:text-marron hover:border-marron ">INICIA SESION</Link>
                </div>
            </div>      
            <div className="flex justify-end">
                <div className={` flex  justify-center  flex-col space-y-1.5 font-semibold  absolute py-4 text-white bg-primary-color 
                ${open ? ' ' : 'hidden'} duration-700`}>
                    <Link to="/" className="hover:text-marron hover:border-marron ml-5 border-b pb-3">INICIO</Link>
                    <Link to="/nosotros" className="hover:text-marron hover:border-marron ml-5 border-b pb-3">SOBRE NOSOTROS</Link>
                    <Link to="/derechopenal" className="hover:text-marron hover:border-marron ml-5 border-b pb-3">DERECHO PENAL</Link>
                    <Link to="/derechocivil" className="hover:text-marron hover:border-marron ml-5 border-b pb-3">DERECHO CIVIL</Link>
                    <Link to="/contactenos" className="hover:text-marron hover:border-marron ml-5 border-b pb-3">CONTÁCTENOS</Link>
                    <Link to="/autenticacion" className="hover:text-marron hover:border-marron ml-5 border-b pb-3">INICIA SESION</Link>
                </div>
            </div>


            <div className='h-96 flex justify-end items-center mr-12 min-w-24 '>
                <div className=' text-white'>
                    <p className='text-2xl '>LA FIRMA DE PAXI ABOGADOS</p>
                </div>
            </div>
        </div>
    
    </>




  )
}


