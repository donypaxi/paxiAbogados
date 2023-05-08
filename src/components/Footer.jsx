import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaChevronCircleRight } from "react-icons/fa";
import { Mail, PhoneCall } from "./Heroicons"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>    
    <div className=" bg-third-color text-white py-5">
        <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-4 ">
            <div className="w-[90%]">
                <p className="text-xl mb-3">Acerca del bufete de Paxi Abogados</p>
                <p>El bufete de paxi abogados tiene más de una década de experiencia en la práctica de la ley y tiene licencia en Perú.</p>
                <div className="flex gap-2 my-3">
                    <Link to="https://www.facebook.com/PaxiAbogadosTacna" target="_blank">
                        <FaFacebookSquare size="1.5rem" color="#c38848"/>
                    </Link>
                    <Link to="https://twitter.com/" target="_blank">
                        <FaTwitterSquare size="1.5rem" color="#c38848"/>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                        <FaInstagramSquare size="1.5rem" color="#c38848"/>
                    </Link>
                </div>
            </div>
            <div className="w-[90%]">
                <p className="text-xl mb-3">Nuestras Áreas de Práctica</p>
                <ul>
                    <li className="flex items-center gap-2"><FaChevronCircleRight/> Derecho penal</li>
                    <li className="flex items-center gap-2"><FaChevronCircleRight/>Ley civil</li>
                    <li className="flex items-center gap-2"><FaChevronCircleRight/>Abogado Federal de Aviación</li>
                </ul>
            </div>
        </div>
            <div>
                <p className="my-4 text-center text-2xl">Ubicanos en</p>
                <div className="w-[90%] mx-auto space-y-1 flex flex-col items-center">
                    <div className="flex text-center text-xl gap-2">
                    <p className="mb-5 text-center "> Calle presbitero Andia Edificios Jorge Basadre Grohomann Bloque B Departamento 101 oficina 01 (frente al poder judicial) </p>
                    </div>
                
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1783.5261355478349!2d-70.2552420584689!3d-18.010533198391013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf334e2a9129%3A0xc92e4742df3a3b7e!2sPAXI%20ABOGADOS!5e1!3m2!1ses!2spe!4v1681418597370!5m2!1ses!2spe"
                    className="w-3/4 h-96">
                    </iframe>
                    {/* <div className="flex gap-2" ><PhoneCall/><p> 952693693</p></div>
                    <div className="flex gap-2"><Mail/><p>paxiabogados@gmail.com</p></div> */}
                </div>
            </div>
            <div className="border-b mt-8"></div>
            <p className="text-center text-xs">creado por donypaxi@gmailcom.</p>
    </div>
    </>
  )
}
