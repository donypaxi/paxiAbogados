import { FaWhatsapp } from "react-icons/fa";

export const BtnLlamar = (props) => {


    const btnLlamar = () => {
        window.location.href = "tel:+51957696996";
    }
  return (
    <>
        <button onClick={btnLlamar} className="text-lg flex gap-2 items-center">
            <FaWhatsapp color={props.color}/>
            <p className='font-semibold mr-10 '>{props.text}</p>
        </button>
    </>
  )
}
