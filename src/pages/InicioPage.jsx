import { Encabezado } from '../components/Encabezado'
import { Slider } from '../components/Slider'
import { Cuerpo } from '../components/Cuerpo'
import { DerechoCivil } from '../components/DerechoCivil'
import { ChooseUs } from '../components/ChooseUs'
import { Formulario } from '../components/Formulario'
import { Footer } from '../components/Footer'

export const InicioPage = () => {
  return (
      <>
        <Encabezado/>
        <Slider/>
        <Cuerpo/>
        <DerechoCivil/>
        <ChooseUs/>
        <Formulario/>
        <Footer/>
      </>
  
    
  )
}
