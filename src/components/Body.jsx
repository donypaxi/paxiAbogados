import {ChevronRight} from './Heroicons'
export const Body = () => {
  return (
    <>
        <div className="w-full bg-secondary-color text-white py-10 px-10">
            <div>
                <p className='mb-2 text-xl'>Sobre Nosotros</p>
                <p className="text-marron font-bold text-3xl">Estamos en esto juntos.Tu equipo y el nuestro </p>
                <div className="my-5 w-3/4 border-b border-marron"></div>
                <p>El bufete de abogados Kron tiene más de una década y media de experiencia en la práctica de la ley y tiene licencia en Nueva York y Nueva Jersey.Creen en tomarse todo el tiempo que sea necesario para lograr el resultado más favorable en cada caso que manejan, incluso si eso significa tomar menos casos de los que de otro modo podrían.</p>
            </div>
            <div className="inline-block text-sm px-4 py-2 mt-5 border border-marron">
                <div className='flex'>
                    <p>Leer más</p>
                    <ChevronRight stroke= {2} />
                </div>
            </div>
            <div className='flex justify-center'>
            <img className='' src="https://thekronlawfirm.com/wp-content/uploads/2023/01/daniel-kron-3-541x400.jpg" alt="" />
            </div>
        </div>

    
    </>
  )
}
