import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { Body } from '../components/Body'
import { PracticeAreas } from '../components/PracticeAreas'
import { ChooseUs } from '../components/ChooseUs'
import { Form } from '../components/Form'
import { Footer } from '../components/Footer'

export const HomePage = () => {
  return (
      <>
        <Header/>
        <Slider/>
        <Body/>
        <PracticeAreas/>
        <ChooseUs/>
        <Form/>
        <Footer/>
      </>
  
    
  )
}
