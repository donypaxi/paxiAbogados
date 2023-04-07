import { useState } from 'react'
import figura1 from '../img/figura1.jpg'
import figura2 from '../img/figura2.jpg'
import figura3 from '../img/figura3.jpg'
import figura4 from '../img/figura4.jpg'
export const Slider = () => {
  let dibujos = [figura1,figura2,figura3,figura4]
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
        <div 
        className="h-80 w-full m-auto border-2 border-black flex flex-col max-w-[1400px] justify-center items-center  relative"
        >
            <div className="duration-500 h-full w-full bg-cover bg-center border border-red-500" style={{backgroundImage:`url(${dibujos[item]})`}}>

            </div>

            <svg onClick={anterior} className=" text-white font-bold stroke-2 hover:text-red-400 w-10 h-10 absolute  top-1/2 -translate-x-0 -translate-y-[50%] left-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

            <svg onClick={siguiente} className="text-white font-bold stroke-2 hover:text-red-400 w-10 h-10 absolute  top-1/2 -translate-y-[50%] right-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>



            {/* <svg  onClick={anterior} className=" w-6 h-6 absolute top[50%] -translate-x-0 -translate-y-[50%] left-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" >
                <path   d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg> */}

{/* 
            <svg onClick={siguiente} className="w-6 h-6 absolute top-1/2 -translate-y-[50%] right-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" >
                <path   d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg> */}


        </div>
    
    
    </>



  )
}
