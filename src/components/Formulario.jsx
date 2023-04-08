import fondo2 from '../img/fondo2.jpg'
import {PhoneCall} from './Heroicons'
export const Formulario = () => {
  return (
    <>
        <div className="text-white bg-cover bg-center h-96 w-full" style={{backgroundImage:`url(${fondo2})`}}>
            <div className=' h-full bg-black bg-opacity-50 py-5'>                
                <div className='w-[90%] mx-auto'>
                    <p className=' text-3xl'>Request A Consultation</p>
                    <div className='mt-5 border-b border-marron w-1/4'></div>
                    <p className='py-3'>Contact The Team In New York That Will Fight For You </p>
                    <div className='inline-block gap-3 '>
                        <div className='text-xl flex items-center gap-3 ml-5 py-2 px-5 bg-marron2'>
                            <PhoneCall/>
                            <p>CALL NOW 212-390-5988</p>
                        </div>
                    </div>
                    <div>
                        
                    </div>


                </div>
            </div>
        </div>
    </>
  )
}
