import { Dasboard } from '../componentsAdministrable/Dasboard'
import { Header } from '../componentsAdministrable/Header'
import { NewProcessLayout} from '../layoutAdministrable'

export const NewProcessPage = () => {
  return (
    <>
        <div className='flex flex-col h-screen'>
          <Header/>
          <div className='flex h-full w-full'>
            <Dasboard/>
            <NewProcessLayout/>
          </div>
        </div>
    </>
  )
}
