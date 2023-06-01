import {  Link } from "react-router-dom";
import { useForm } from "../hooks";
import { VscAccount } from "react-icons/vsc";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Navbar } from "../components/Navbar";

export const RegisterPage = () => {


    const formDate = {
        email:'donypaxi@gmail.com',
        password: '123456',
        displayName:'Dony paxi'

    }

    const {displayName, email, password, onInputChange,formState}= useForm(formDate)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }
    
  return (
    <>
        <Navbar/>

        <div className="bg-black h-screen py-10 ">
            <div  className="relative  pt-10 pb-5 mt-20 border-y w-1/2 mx-auto flex flex-col justify-center">
                <VscAccount className="text-white bg-black rounded-full absolute left-1/2 -translate-x-1/2 -top-10 mx-auto h-12 w-12 my-3"/>
                <form onSubmit={onSubmit} className="flex flex-col items-center gap-2">
                    <div className="px-2 w-full border-2 rounded-md  border-black flex items-center bg-white">
                        <div className="mr-2">
                            <FaUserAlt className="text-black border-2 stroke-slate-500"/>
                        </div>
                        <input 
                        onChange={onInputChange} 
                        name="displayName"
                        value={displayName} 
                        className=" focus:outline-none" type="text" placeholder="Nombre Completo"/>      
                    </div>
                    <div className="px-2 w-full border-2 rounded-md  border-black flex items-center bg-white">
                        <div className="mr-2">
                            <FaUserAlt className="text-black border-2 stroke-slate-500"/>
                        </div>
                        <input 
                        onChange={onInputChange} 
                        name="email"
                        value={email}  
                        className=" focus:outline-none" type="text" placeholder="email"/>      
                    </div>
                    <div className="px-2 w-full border-2 rounded-md border-black flex items-center bg-white">
                        <div className="mr-2"><FaLock/></div>
                        <input 
                        onChange={onInputChange} 
                        name="password"
                        value={password} 
                        className="focus:outline-none" type="password" placeholder="password"/>
                    </div>
                    <div className="flex w-full gap-2 my-2">
                        <button
                            type="submit"
                            className="cursor-pointer w-full rounded-md text-white bg-red-700	 hover:bg-red-500" >
                            Crear Cuenta
                        </button>
                    </div>
                    <p className="self-end text-white">¿Ya tienes cuenta?</p>
                    <Link to="/login" className="cursor-pointer self-end border-b border-b-white text-white">Ingresar</Link> 
                </form>
                <button className="text-white py-5 border-2 border-red-500 rounded-xl mt-10 mx-auto w-full">
                    <Link to="/administrador">
                    ADMINISTRADOR
                    </Link>
                </button>

            </div>
        </div>
    </>
    
  )
}
