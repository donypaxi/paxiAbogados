
export const BtnCallMe = (props) => {


    const btnLlamar = () => {
        window.location.href = "tel:+51952693693";
    }
  return (
    <>
        <button onClick={btnLlamar} >
            <p className='font-semibold '>{props.text}</p>
        </button>
    </>
  )
}
