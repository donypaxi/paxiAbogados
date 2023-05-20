
export const VentanaEditar = () => {
        

  return (
    <>
        <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-5
                    absolute top-20 h-52 bg-slate-400  border-2 border-black">
            <div>
                <label className="pr-2">Ingrese el Expediente</label>
                <input
                    // onWheel={(e) => e.target.blur()}
                    onChange={(e)=>setExpediente(e.target.value)} className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="number"/>
            </div>
            <div>
                <label className="pr-2">Ingrese el Cliente</label>
                <input
                    onChange={(e)=>setCliente(e.target.value)}
                    className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="text"/>
            </div>
            <div>
                <label className="pr-2">Seleccione el Proceso</label>
                <select className="cursor-pointer bg-slate-200 rounded-lg p-2" onChange={(e)=>setProceso(e.target.value)}>
                    <option value="">Seleccione Proceso</option>
                    <option value="Civiles">Civiles</option>
                    <option value="Penales">Penales</option>
                    <option value="Laborales">Laborales</option>
                    <option value="Municipales">Municipales</option>
                    <option value="Regionales">Regionales</option>
                    <option value="Sunat">Sunat</option>
                    <option value="Procesos Ejecutivos">Procesos Ejecutivos</option>
                </select>
            </div>
            <div>
                <label className="pr-2">Ingrese la fecha inicio</label>
                <input
                    className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="number"/>
            </div>
            <div>
                <label className="pr-2">Ingrese la fecha fin</label>
                <input
                    className="border-2 bg-slate-100 text-black px-2 border-slate-200 placeholder-slate-400 " type="number"/>
            </div>
            <br />
            <input className="text-white font-semibold p-2 rounded-lg cursor-pointer bg-green-700" type="button" value="guardar" />
            <input onClick={()=>handleCancelar()} className="text-white font-semibold p-2 rounded-lg cursor-pointer bg-red-700" type="button" value="cancelar" />
        </div>
    </>
  )
}
