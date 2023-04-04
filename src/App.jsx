import paxiPortada from './img/portada.png'
import fondo1 from './img/fondo1.jpg'


export const App = () => {
  return (
    <>
      {/* parte Superior */}
      <div className='container mx-auto pt-4'>
        <div className=' flex justify-center	gap-x-5 text-xs'>
          <div className='flex items-center	gap-x-1'>
            <svg className='border rounded-full border-red-900  fill-current text-red-900 w-3 h-3' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke="currentColor">
              <path  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <p className='font-semibold'>952696996</p>
          </div>

        <div className='flex gap-x-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" 
           className=" text-red-900  w-3 h-3">
            <path  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <p className='font-semibold'>paxiabogados@gmail.com</p>
        </div>


      </div>
      </div>
      {/* cabecera */}
      <div className='bg-primary-color mt-3 px-8 flex justify-between items-center '>
        <img className='w-40' src={paxiPortada} alt="" />
        <div>
          <svg 
          className="text-red-100 w-8 stroke-2"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
      </div>

      <div className='relative'>
        <img className='opacity-95'  src={fondo1} alt="" />
        <div className='text-sm w-24 absolute top-0 right-5 text-white text-right'>
          <p className=''>La firma de Abogados de Tacna</p>
          <p>Un bufete de abogados con pasión por el éxito</p>
        </div>
      </div>

    </>
  )
}
