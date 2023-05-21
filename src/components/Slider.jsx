import { useState } from 'react'
import dibujo1 from '../assets/img/dibujo1.png'
import dibujo2 from '../assets/img/dibujo2.jpg'
import dibujo3 from '../assets/img/dibujo3.png'
import dibujo4 from '../assets/img/dibujo4.jpg'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Slider = () => {
  let picture = [dibujo1,dibujo2,dibujo3,dibujo4]
  const [item, setItem] = useState(3)


  const previous = () => {
    let newItem= item
    if(newItem === 0){
        newItem = picture.length-1 
        setItem(newItem)
    }else {
        newItem= item - 1
        setItem(newItem)
    }
  }
  const next = () => {
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
            <div className=' h-96 w-full m-auto flex max-w-[1500px] justify-center items-center  relative'>
                <div className="duration-500 h-full w-3/4  lg:w-2/4 bg-cover bg-center" style={{backgroundImage:`url(${picture[item]})`}}>
                </div>
                <FaAngleLeft onClick={previous} className="cursor-pointer flex-none text-marron font-bold stroke-2 hover:text-marron2 w-8 h-16 absolute  top-1/2 -translate-x-0 -translate-y-[50%] left-1" />
                <FaAngleRight onClick={next} className="cursor-pointer flex-none text-marron font-bold stroke-2 hover:text-marron2 w-8 h-16 absolute  top-1/2 -translate-y-[50%] right-1"/>
                
            </div>
    </>



  )
}
