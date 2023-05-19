import { VscAccount } from "react-icons/vsc";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import {  Link } from "react-router-dom";

export const IniciarSesion = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const btnEnviar =async (e) => {
        e.preventDefault()
        let newUsuario = {username,password}
        console.log(newUsuario)
        

        const url = "http://localhost:3000/login"
        const resp = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newUsuario)
        });
        const data = await resp.json()
        console.log(data)

        console.log('funcionandin')
        setUser('')
        setPassword('')

        
      }
  return (
    <>
        <div className="bg-black h-screen py-10 ">
        <div  className="relative  pt-10 pb-5 mt-20 border-y w-56 mx-auto flex flex-col justify-center">
            <VscAccount className="text-white bg-black rounded-full absolute left-1/2 -translate-x-1/2 -top-10 mx-auto h-12 w-12 my-3"/>
            <form className=" flex flex-col items-center gap-2">
            <div className="px-2 w-full border-2 rounded-md  border-black flex items-center bg-white">
                <div className="mr-2">
                <FaUserAlt className="text-black border-2 stroke-slate-500"/>
                </div>
                <input onChange={(e)=>setUsername(e.target.value)} value={username} className="focus:outline-none" type="text" placeholder="username"/>      
            </div>
            <div className="px-2 w-full border-2 rounded-md border-black flex items-center bg-white">
                <div className="mr-2"><FaLock/></div>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className="focus:outline-none" type="password" placeholder="password"/>
            </div>
                <input  className="cursor-pointer w-full rounded-md text-white bg-red-800 hover:bg-red-500" type="submit" onClick={btnEnviar}  value="LOGIN"/>
            </form>
            <Link to="/administrador">
                <button className="text-white py-5 border-2 border-red-500 rounded-xl mt-10 mx-auto w-full">ADMINISTRADOR</button>
            </Link>

        </div>
        </div>
    </>
    
  )
}
