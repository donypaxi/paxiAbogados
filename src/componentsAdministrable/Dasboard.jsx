import { Link } from 'react-router-dom'
import dibujo2 from '../assets/img/dibujo2.jpg'


export const Dasboard = () => {
  return (
    <>
      <div className=' h-full w-72'>
          <div className='bg-cover bg-center h-full w-full' style={{backgroundImage:`url(${dibujo2})`}}>
            <div className=' border-2 text-black bg-black/70 h-full w-full '>
              <div className=' flex flex-col m-5 gap-5  text-white font-semibold border-2'>
                <Link to="/administrador/procesos">Procesos</Link>
                <Link>Civiles</Link>
                <Link>Penales</Link>
                <Link>Laborales</Link>
                <Link>Municipales</Link>
                <Link>Regionales</Link>
                <Link>Sunat</Link>
                <Link>Procesos Ejecutivos</Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
