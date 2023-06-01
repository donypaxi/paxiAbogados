import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link } from "react-router-dom";
import { useForm } from "../hooks";
import { VscAccount } from "react-icons/vsc";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { checkingAuthentication, startGoogleSignIn } from "../store/auth/thunks";

export const Login = () => {

    const dispath = useDispatch()
    const {status} =useSelector(state => state.auth)

    const isAuthenticating = useMemo(()=> status === 'checking', [status])

    const {email, password, onInputChange}= useForm({
        email:'donypaxi@gmail.com',
        password: '123456'
    })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({email,password})
        dispath(checkingAuthentication())
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        console.log('ongoogle')
        dispath(startGoogleSignIn())
    }
    
  return (
    <>
        <div className="bg-black h-screen py-10 ">
            <div  className="relative  pt-10 pb-5 mt-20 border-y w-56 mx-auto flex flex-col justify-center">
                <VscAccount className="text-white bg-black rounded-full absolute left-1/2 -translate-x-1/2 -top-10 mx-auto h-12 w-12 my-3"/>
                <form onSubmit={onSubmit} className=" flex flex-col items-center gap-2">
                    <div className="px-2 w-full border-2 rounded-md  border-black flex items-center bg-white">
                        <div className="mr-2">
                            <FaUserAlt className="text-black border-2 stroke-slate-500"/>
                        </div>
                        <input 
                        onChange={onInputChange} 
                        name="email" 
                        value={email} 
                        className="focus:outline-none" type="text" placeholder="username"/>      
                    </div>
                    <div className="px-2 w-full border-2 rounded-md border-black flex items-center bg-white">
                        <div className="mr-2"><FaLock/></div>
                        <input 
                        onChange={onInputChange} 
                        name="password" 
                        value={password}
                        className="focus:outline-none" type="password" placeholder="password"/>
                    </div>
                    <button
                        disabled={isAuthenticating} 
                        className="cursor-pointer w-full rounded-md text-white bg-red-800 hover:bg-red-500" type="submit">
                        Login
                    </button>
                    <button 
                        disabled={isAuthenticating}
                        onClick={onGoogleSignIn} 
                        className="cursor-pointer w-full rounded-md text-white bg-red-800 hover:bg-red-500" >
                        Google
                    </button>
                </form>
                <Link to="/administrador">
                    <button className="text-white py-5 border-2 border-red-500 rounded-xl mt-10 mx-auto w-full">ADMINISTRADOR</button>
                </Link>

            </div>
        </div>
    </>
    
  )
}
