import { Dasboard } from '../componentsAdministrable/Dasboard'
import { Header } from '../componentsAdministrable/Header'

export const Administrador = () => {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Header/>
        <Dasboard/>
      </div>
    </>
  )
}
