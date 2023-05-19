import { AiOutlineCheckCircle } from "react-icons/ai";


export const DerechoCivil = () => {
    const Especialidades = ['ADQUISICIÓN','DESALOJO','ARRENDAMIENTO','REIVINDICACIÓN','PRESCRIPCIÓN','DIVISIÓN','PARTICIÓN Y SANEAMIENTO DE PROPIEDADES']
  
    const Especialidades2 = ['FILIACIONES EXTRAMATRIMONIALES','ALIMENTOS','RECONOCIMIENTO DE UNIONES DE HECHO Y DIVORCIO']
        console.log(Especialidades)
    const Especialidades3 = ['SUCECIONES INTESTADAS','PETICIONES DE HERENCIA']
    const Especialidades4 = ['PRESTAMOS BANCARIOS','EJECUCIÓN DE GARANTÍAS HIPOTECARIAS','EMBARGOS Y MEDIDAS CAUTELARES']
    const Especialidades5 = ['RESOLUCION','NULIDAD DE CONTRATOS']

  return (
    <>
        <h2 className="font-bold text-center py-5 text-black text-xl ">ABOGADOS ESPECIALISTAS EN DERECHO CIVIL</h2>
      <h2 className="font-bold text-2xl text-center mb-5">REALIZAMOS TODO TIPO DE TRÁMITES ANTE EL PODER JUDICIAL EN PROCESOS CIVILES, COMO SER:</h2>
      <div className="grid lg:grid-cols-3 gap-5 ">
        <div className="border-2  w-[90%] mx-auto">
          <img className="" src="https://thekronlawfirm.com/wp-content/uploads/2023/02/shutterstock_1664392150-scaled.jpg" alt="" />
            <ul className="flex flex-col flex-wrap gap-2 py-5">
              {Especialidades.map((especialidad)=> (
                <li className="flex items-center text-primary text-xl" key={especialidad}>
                  <AiOutlineCheckCircle/>
                  {especialidad}
                </li>
              ))}
            </ul>
        </div>
        <div className="w-[90%] mx-auto">
          <img className="" src="https://thekronlawfirm.com/wp-content/uploads/2023/02/shutterstock_1664392150-scaled.jpg" alt="" />
            <ul className="flex flex-col flex-wrap gap-2 py-5">
              {Especialidades2.map((especialidad2)=> (
                <li className="flex items-center text-primary text-xl" key={especialidad2}>
                  <AiOutlineCheckCircle/>
                  {especialidad2}
                </li>
              ))}
            </ul>
        </div>
        <div className="w-[90%] mx-auto">
          <img className="" src="https://thekronlawfirm.com/wp-content/uploads/2023/02/shutterstock_1664392150-scaled.jpg" alt="" />
            <ul className="flex flex-col flex-wrap gap-2 py-5">
              {Especialidades3.map((especialidad3)=> (
                <li className="flex items-center text-primary text-xl" key={especialidad3}>
                  <AiOutlineCheckCircle/>
                  {especialidad3}
                </li>
              ))}
            </ul>
        </div>
        <div className="w-[90%] mx-auto">
          <img className="" src="https://thekronlawfirm.com/wp-content/uploads/2023/02/shutterstock_1664392150-scaled.jpg" alt="" />
            <ul className="flex flex-col flex-wrap gap-2 py-5">
              {Especialidades4.map((especialidad4)=> (
                <li className="flex items-center text-primary text-xl" key={especialidad4}>
                  <AiOutlineCheckCircle/>
                  {especialidad4}
                </li>
              ))}
            </ul>
        </div>
        <div className="w-[90%] mx-auto">
          <img className="" src="https://thekronlawfirm.com/wp-content/uploads/2023/02/shutterstock_1664392150-scaled.jpg" alt="" />
            <ul className="flex flex-col flex-wrap gap-2 py-5">
              {Especialidades5.map((especialidad5)=> (
                <li className="flex items-center text-primary text-xl" key={especialidad5}>
                  <AiOutlineCheckCircle/>
                  {especialidad5}
                </li>
              ))}
            </ul>
        </div>
      </div>


          <p className="text-center text-3xl py-5 font-extrabold">ADEMÁS REALIZAMOS TRÁMITES ADMINISTRATIVOS ANTE MUNICIPALIDADES, GOBIERNO REGIONAL, SUNAT, SAND, REGISTROS PÚBLICOS, ELECTROSUR, EPS-TACNA Y OTRAS INSTITUCIONES PÚBLICAS Y PRIVADAS, COMO SER:</p>
          <p className="text-yellow-600 text-2xl text-center py-6 font-bold">RECLAMACIONES, RECONSIDERACIONES, APELACIONES Y OTROS</p>
    </>
  )
}
