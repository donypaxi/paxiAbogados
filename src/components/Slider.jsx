import { useState } from 'react'
import dibujo1 from '../img/dibujo1.png'
import dibujo2 from '../img/dibujo2.jpg'
import dibujo3 from '../img/dibujo3.png'
import dibujo4 from '../img/dibujo4.jpg'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Slider = () => {
  let dibujos = [dibujo1,dibujo2,dibujo3,dibujo4]
  const [item, setItem] = useState(3)


  const anterior = () => {
    let newItem= item
    if(newItem === 0){
        newItem = dibujos.length-1 
        setItem(newItem)
    }else {
        newItem= item - 1
        setItem(newItem)
    }
  }
  const siguiente = () => {
    let newItem = item
    if(newItem===3){
        setItem(0)
    }else{
        newItem = item + 1
        setItem(newItem)
    }

}

  return (
    <>
            <div className='border-2 h-96 w-full m-auto flex flex-col max-w-[1400px] justify-center items-center  relative'>
                <div className="duration-500 h-full w-3/4 lg:w-2/4 bg-cover bg-center" style={{backgroundImage:`url(${dibujos[item]})`}}>
                </div>
                <FaAngleLeft onClick={anterior} className="text-marron font-bold stroke-2 hover:text-marron2 w-12 h-20 absolute  top-1/2 -translate-x-0 -translate-y-[50%] left-5" />
                <FaAngleRight onClick={siguiente} className="text-marron font-bold stroke-2 hover:text-marron2 w-12 h-20 absolute  top-1/2 -translate-y-[50%] right-0"/>
                
            </div>
    </>



  )
}
