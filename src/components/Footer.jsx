import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaChevronCircleRight } from "react-icons/fa";
import { Mail, PhoneCall } from "./Heroicons"

export const Footer = () => {
  return (
    <>    
    <div className=" bg-third-color text-white py-5">
        <div className="w-[90%] mx-auto">
            <p className="text-xl mb-3">Acerca del bufete de Paxi Abogados</p>
            <p>El bufete de paxi abogados tiene más de una década de experiencia en la práctica de la ley y tiene licencia en Perú.</p>
            <div className="flex gap-2 my-3">
                <FaFacebookSquare size="1.5rem" color="#c38848"/>
                <FaTwitterSquare size="1.5rem" color="#c38848"/>
                <FaInstagramSquare size="1.5rem" color="#c38848"/>
            </div>
            <p className="text-xl my-2">Nuestras Áreas de Práctica</p>
            <ul>
                <li className="flex items-center gap-2"><FaChevronCircleRight/> Derecho penal</li>
                <li className="flex items-center gap-2"><FaChevronCircleRight/>Ley civil</li>
                <li className="flex items-center gap-2"><FaChevronCircleRight/>Abogado Federal de Aviación</li>
            </ul>
            <p className="my-5 text-xl">Mantenerse en contacto</p>
            <div className="space-y-1 bg-mar">
                <p className=" flex items-center gap2"><IoLocation/> Calle presbitero Andia Edificios Jorge Basadre Grohomann Bloque B Departamento 101 oficina 01 (frente al poder judicial) </p>
                <p className="flex items-center gap-2"> <PhoneCall/>952693693</p>
                <p className="flex items-center gap-2"><Mail/>paxiabogados@gmail.com</p>
            </div>
            <div className="border-b mt-8"></div>
            <p className="text-center text-xs">creado por donypaxi@gmailcom.</p>
        </div>
    </div>
    </>
  )
}
