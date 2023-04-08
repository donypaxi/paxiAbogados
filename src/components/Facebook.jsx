import { FaFacebookSquare } from "react-icons/fa";

export const Facebook = () => {

    const btnFacebook = () => {
        window.open("https://www.facebook.com/PaxiAbogadosTacna");
    }
  return (
    <>
        <button onClick={btnFacebook} className="flex gap-2 items-center">
            <FaFacebookSquare />
            <p className='font-semibold'>www.fb.com/paxiabogados</p>
        </button>
    </>
  )
}
