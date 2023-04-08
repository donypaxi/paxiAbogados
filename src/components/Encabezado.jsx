import fondo1 from '../img/fondo1.jpg'
import portada from '../img/portada.png'
// import { FaFacebookSquare } from "react-icons/fa";
import { BtnLlamar } from './BtnLlamar';
import { Facebook } from './Facebook';
export const Encabezado = () => {
  return (
    <>
        <div className='h-screen bg-cover bg-center' style={{backgroundImage:`url(${fondo1})`}}>
            {/* celular y correo */}
            <div className='text-sm md:text-lg lg:text-xl flex justify-center items-center bg-black  w-full container mx-auto h-10 gap-1  text-white'>
                <BtnLlamar/>
                <Facebook/>
            </div>
            {/* navbar */}
            <div className='h-auto  bg-primary-color  px-8 flex justify-between items-center '>
                <img className='w-40 min-w-[25%]   ' src={portada} alt="" />
                <div>
                    <svg
                        className="text-red-100 w-8 stroke-2"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
            </div>
            {/* texto */}
            <div className='h-96 flex justify-end items-center '>
                <div className=' text-white'>
                    <p className='text-2xl '>THE KRON LAW FIRM</p>
                </div>
            </div>
        </div>
    
    </>




  )
}


