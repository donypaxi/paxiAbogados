import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const DerechoCivilPage = () => {
  return (
    <>
      <Navbar/>    
      <h2 className="py-5 text-center text-white text-3xl bg-black">ABOGADOS ESPECIALISTAS EN DERECHO CIVIL</h2>
      <div className=" mx-auto px-5 py-7 bg-primary">
        <h2 className="text-white">REALIZAMOS TODO TIPO DE TRÁMITES ANTE EL PODER JUDICIAL EN PROCESOS CIVILES, COMO SER:</h2>
        <ul className="text-yellow-600">
          <li>ADQUISICIÓN, ARRENDAMIENTO, DESALOJO. REIVINDICACIÓN, PRESCRIPCIÓN, DIVISIÓN, PARTICIÓN Y SANEAMIENTO DE PROPIEDADES.</li>
          <li>FILIACIONES EXTRAMATRIMONIALES, ALIMENTOS. RECONOCIMIENTO DE UNIONES DE HECHO Y DIVORCIO.</li>
          <li>SUCESIONES INTESTADAS Y PETICIONES DE HERENCIA.</li>
          <li>PRESTAMOS BANCARIOS, EJECUCIÓN DE GARANTÍAS HIPOTECARIAS, EMBARGOS Y MEDIDAS CAUTELARES.</li>
          <li>RESOLUCIÓN Y NULIDAD DE CONTRATOS</li>
        </ul>
        <p className="text-white">ADEMÁS REALIZAMOS TRÁMITES ADMINISTRATIVOS ANTE MUNICIPALIDADES, GOBIERNO REGIONAL, SUNAT, SAND, REGISTROS PÚBLICOS, ELECTROSUR, EPS-TACNA Y OTRAS INSTITUCIONES PÚBLICAS Y PRIVADAS, COMO SER:</p>
        <p className="text-yellow-600">RECLAMACIONES, RECONSIDERACIONES, APELACIONES Y OTROS</p>
      </div>
      <Footer/>
    </>
  )
}
