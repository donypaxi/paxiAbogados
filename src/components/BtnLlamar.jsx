import { FaWhatsapp } from "react-icons/fa";

export const BtnLlamar = () => {


    const btnLlamar = () => {
        window.location.href = "tel:+51957696996";
    }
  return (
    <>
        <button onClick={btnLlamar} className="flex gap-2 items-center">
            <FaWhatsapp color='green'/>
            <p className='font-semibold mr-10 '>952693693</p>
        </button>
    </>
  )
}
