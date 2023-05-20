import { Route, Routes } from "react-router-dom"
import { InicioPage,NosotrosPage,DerechoPenalPage,DerechoCivilPage,ContactenosPage,SesionPage, Administrador } from "../pages"
import { Procesos,NuevoProceso } from "../pagesAdministrable"


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
        <Route path="/administrador" element={<Administrador/>}/>
        <Route path="/administrador/procesos" element={<Procesos/>}/>
        <Route path="/administrador/nuevo" element={<NuevoProceso/>}/>
      </Routes>

      
    </>

  )
}
