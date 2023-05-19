import { Dasboard } from '../componentsAdministrable/Dasboard'
import { Header } from '../componentsAdministrable/Header'
import { ProcesosLayout } from '../layoutAdministrable/ProcesosLayout'

export const Procesos = () => {
  return (
    <>
        <div className='flex flex-col h-screen'>
        <Header/>
        <div className='flex h-full w-full'>
          <Dasboard/>
          <ProcesosLayout/>
        </div>
        </div>
    </>
  )
}
