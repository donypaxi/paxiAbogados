import { Mail, PhoneCall } from "./Heroicons"

export const Footer = () => {
  return (
    <>    
    <div className=" bg-third-color text-white py-5">
        <div className="w-[90%] mx-auto">
            <p className="text-xl">About The Kron Law Firm</p>
            <p>The Kron Law Firm has more than a decade and a half of experience practicing law and is licensed in New York and New Jersey.</p>
            <div>
                iconos redes sociales
            </div>
            <p className="text-xl">Our Practice Areas</p>
            <ul>
                <li>Criminal law</li>
                <li>Civil law</li>
                <li>Federal Aviation attorney</li>
            </ul>
            <p className="text-xl">Keep In Touch</p>
            <p>1123 Avenue Z Brooklyn, New York, 11235</p>
            <p className="flex gap-2"> <PhoneCall/> 212-335-1487</p>                
            <p className="border-2 flex items-center gap-2"><Mail/>paxiabogados@gmail.com</p>
            <div className="border-b"></div>
            <p className="text-center">Copyright © 2023 The Kron Law Firm. All rights reserved.</p>
        </div>
    </div>
    </>
  )
}
