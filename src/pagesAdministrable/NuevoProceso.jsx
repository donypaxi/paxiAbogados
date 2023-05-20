import { Dasboard } from '../componentsAdministrable/Dasboard'
import { Header } from '../componentsAdministrable/Header'
import { NuevoProcesoLayout} from '../layoutAdministrable'

export const NuevoProceso = () => {
  return (
    <>
        <div className='flex flex-col h-screen'>
          <Header/>
          <div className='flex h-full w-full'>
            <Dasboard/>
            <NuevoProcesoLayout/>
          </div>
        </div>
    </>
  )
}
