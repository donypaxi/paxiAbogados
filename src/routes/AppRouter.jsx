import { Route, Routes } from "react-router-dom"
import { InicioPage,NosotrosPage,DerechoPenalPage,DerechoCivilPage,ContactenosPage,SesionPage, Dashboard } from "../pages"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InicioPage/>}/>
        <Route path="/nosotros" element={<NosotrosPage/>}/>
        <Route path="/derechopenal" element={<DerechoPenalPage/>}/>
        <Route path="/derechocivil" element={<DerechoCivilPage/>}/>
        <Route path="/contactenos" element={<ContactenosPage/>}/>
        <Route path="/login" element={<SesionPage/>}/>
      </Routes>
      <Routes>
        <Route path="/admin" element={<Dashboard/>}/>
      </Routes>

      
    </>

  )
}
