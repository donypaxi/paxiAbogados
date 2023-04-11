import { Route, Routes } from "react-router-dom"
import { InicioPage } from "./pages/InicioPage"
import { NosotrosPage } from "./pages/NosotrosPage"
import { DerechoPenalPage } from "./pages/DerechoPenalPage"
import { ContactenosPage } from "./pages/ContactenosPage"
import { DerechoCivilPage } from "./pages/DerechoCivilPage"


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InicioPage/>}/>
        <Route path="/nosotros" element={<NosotrosPage/>}/>
        <Route path="/derechopenal" element={<DerechoPenalPage/>}/>
        <Route path="/derechocivil" element={<DerechoCivilPage/>}/>
        <Route path="/contactenos" element={<ContactenosPage/>}/>
      </Routes>
    </>

  )
}
