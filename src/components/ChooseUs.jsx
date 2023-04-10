
export const ChooseUs = () => {
  return (
    <>
        <h2 className="text-center text-3xl font-bold"> ¿Por qué elegirnos?</h2>
        <div className="mx-auto border-b w-1/4"></div>

        <div className="w-[90%] mx-auto grid md:grid-cols-3 items-center gap-4 mt-5 my-5">
            <div className="flex flex-wrap items-center ">    
                <img className="bg-marron w-12 h-12 rounded-full mr-2 p-2.5" src="https://thekronlawfirm.com/wp-content/uploads/2023/01/Proven-Results.png" alt="" />
                <p className="text-lg font-bold"> Resultados probados</p>
            </div>

            <div className="flex items-center ">
                <img className="bg-marron w-12 h-12 rounded-full mr-2 p-2.5" src="https://thekronlawfirm.com/wp-content/uploads/2023/01/Free-Consultation.png" alt="" />
                <p className="text-lg font-bold">Consulta gratis</p>
            </div>
            <div className="flex items-center ">
                <img className="bg-marron w-12 h-12 rounded-full mr-2 p-2.5" src="https://thekronlawfirm.com/wp-content/uploads/2023/01/15-Years-of-Experience.png" alt="" />
                <p className="text-lg font-bold">Más de 15 años de experiencia</p>
            </div>
            <div className="flex items-center ">
                <img className="bg-marron w-12 h-12 rounded-full mr-2 p-2.5" src="https://thekronlawfirm.com/wp-content/uploads/2023/01/Trusted-Reputation.png" alt="" />
                <p className="text-lg font-bold">Reputación de confianza</p>
            </div>
            <div className="flex items-center ">
                <img className="bg-marron w-12 h-12 rounded-full mr-2 p-2.5" src="https://thekronlawfirm.com/wp-content/uploads/2023/01/Available.png" alt="" />
                <p className="text-lg font-bold"> Disponible 24/7 </p>
            </div>
            <div className="flex items-center ">
                <img className="bg-marron w-12 h-12 rounded-full mr-2 p-2.5" src="https://thekronlawfirm.com/wp-content/uploads/2023/01/5-Star-Rating-On-Avvo.png" alt="" />
                <p className="text-lg font-bold"> Calificación de 10.0 y 5 estrellas en Avvo</p>
            </div>

        </div>
            

    </>
  )
}
