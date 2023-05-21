import { Dasboard } from '../componentsAdministrable/Dasboard'
import { Header } from '../componentsAdministrable/Header'
import { SearchLayout } from '../layoutAdministrable'

export const SearchPage = () => {
  return (
    <>
        <div className='flex flex-col h-screen'>
          <Header/>
          <div className='flex h-full w-full'>
            <Dasboard/>
            <SearchLayout/>
          </div>
        </div>
    </>
  )
}
