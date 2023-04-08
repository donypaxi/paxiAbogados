import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare,FaChevronCircleRight } from "react-icons/fa";
import { Mail, PhoneCall } from "./Heroicons"

export const Footer = () => {
  return (
    <>    
    <div className=" bg-third-color text-white py-5">
        <div className="w-[90%] mx-auto">
            <p className="text-xl mb-3">About The Kron Law Firm</p>
            <p>The Kron Law Firm has more than a decade and a half of experience practicing law and is licensed in New York and New Jersey.</p>
            <div className="flex gap-2 my-3">
                <FaFacebookSquare size="1.5rem" color="#c38848"/>
                <FaTwitterSquare size="1.5rem" color="#c38848"/>
                <FaInstagramSquare size="1.5rem" color="#c38848"/>
            </div>
            <p className="text-xl my-2">Our Practice Areas</p>
            <ul>
                <li className="flex items-center gap-2"><FaChevronCircleRight/> Criminal law</li>
                <li className="flex items-center gap-2"><FaChevronCircleRight/>Civil law</li>
                <li className="flex items-center gap-2"><FaChevronCircleRight/>Federal Aviation attorney</li>
            </ul>
            <p className="my-5 text-xl">Keep In Touch</p>
            <div className="space-y-1 bg-mar">
                <p className=" flex items-center gap2"><IoLocation/> 1123 Avenue Z Brooklyn, New York, 11235</p>
                <p className="flex items-center gap-2"> <PhoneCall/> 212-335-1487</p>
                <p className="flex items-center gap-2"><Mail/>paxiabogados@gmail.com</p>
            </div>
            <div className="border-b mt-8"></div>
            <p className="text-center text-xs">creado por donypaxi@gmailcom.</p>
        </div>
    </div>
    </>
  )
}
