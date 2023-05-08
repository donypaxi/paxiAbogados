import { Navbar } from "../components/Navbar"
import { FaCheck } from "react-icons/fa";
import dibujo2 from "../img/dibujo2.jpg"
import paxi1 from  '../img/paxi1.jpg'
import { Footer } from "../components/Footer";


export const NosotrosPage = () => {
  return (
    <>
      <Navbar/>
      <img src={dibujo2} className="w-full"  alt="dibujo 2 abogados" />
      <div className="mx-36 lg:mx-80 text-black">
        <h2 className="font-semibold text-3xl mt-14">Acerca del bufete de Paxi</h2>
        <p className="text-lg mt-5">El bufete de Paxi Abogados tiene más de una década y media de experiencia en la práctica de la ley y tiene licencia en la ciudad de Tacna. Creen en tomarse todo el tiempo que sea necesario para lograr el resultado más favorable en cada caso que manejan, incluso si eso significa tomar menos casos de los que de otro modo podrían.</p>
      </div>
      {/* FUNDADOR */}
      <h2 className="m-10 text-3xl font-semibold">Fundadores</h2>
      <div className="grid grid-cols-3 gap-8 mx-10 mb-12">
          <div className="mx-auto ">
            <div className="hover:underline hover:cursor-pointer ">
              <img src={paxi1} className="rounded-xl hover:scale-105 duration-300" alt="" />
              <p className="my-2">Teodoro Paxi</p>
            </div>
            <p>Cofundador y director ejecutivo de Paxi Abogados</p>
          </div>
          <div className="mx-auto ">
            <div className="hover:underline hover:cursor-pointer">
              <img src={paxi1} className="rounded-xl hover:scale-105 duration-300" alt="" />
              <p className="my-2">Teodoro Paxi</p>
            </div>
            <p>Cofundador y director ejecutivo de Paxi Abogados</p>
        </div>
          <div className="mx-auto ">
            <div className="hover:underline hover:cursor-pointer">
              <img src={paxi1} className="rounded-xl hover:scale-105 duration-300" alt="" />
              <p className="my-2">Teodoro Paxi</p>
            </div>
            <p>Cofundador y director ejecutivo de Paxi Abogados</p>
          </div>
      </div>
      
      <Footer/>
    </>

    
  )
}
