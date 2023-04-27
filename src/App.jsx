import { Route, Routes } from "react-router-dom"
import { InicioPage,NosotrosPage,DerechoPenalPage,DerechoCivilPage,ContactenosPage,SesionPage } from "./pages"



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InicioPage/>}/>
        <Route path="/nosotros" element={<NosotrosPage/>}/>
        <Route path="/derechopenal" element={<DerechoPenalPage/>}/>
        <Route path="/derechocivil" element={<DerechoCivilPage/>}/>
        <Route path="/contactenos" element={<ContactenosPage/>}/>
        <Route path="/autenticacion" element={<SesionPage/>}/>
      </Routes>
    </>

  )
}
