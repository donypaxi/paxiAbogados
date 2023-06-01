import { Route, Routes } from "react-router-dom"
import { Administrador, HomePage,AboutUsPage,DerechoPenalPage,DerechoCivilPage,ContactUsPage,LoginPage,RegisterPage } from "../pages"
import { SearchPage,NewProcessPage } from "../pagesAdministrable"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/nosotros" element={<AboutUsPage/>}/>
        <Route path="/derechopenal" element={<DerechoPenalPage/>}/>
        <Route path="/derechocivil" element={<DerechoCivilPage/>}/>
        <Route path="/contactenos" element={<ContactUsPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registrar" element={<RegisterPage/>}/>

        <Route path="/administrador" element={<Administrador/>}/>
        <Route path="/administrador/procesos" element={<SearchPage/>}/>
        <Route path="/administrador/nuevo" element={<NewProcessPage/>}/>
      </Routes>

      
    </>

  )
}
