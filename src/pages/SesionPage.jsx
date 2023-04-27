import { VscAccount } from "react-icons/vsc";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Navbar } from "../components/Navbar";

export const SesionPage = () => {


  const btnEnviar = (e) => {
    e.preventDefault()
    console.log('funcionandin')
  }

  return (
    <>
    <Navbar/>
    <div className="bg-black h-screen py-10 ">
      <div  className="relative  pt-10 pb-5 mt-20 border-y w-56 mx-auto flex flex-col justify-center">
        <VscAccount className="text-white bg-black rounded-full absolute left-1/2 -translate-x-1/2 -top-10 mx-auto h-12 w-12 my-3"/>
        <form className=" flex flex-col items-center gap-2">
          <div className="px-2 w-full border-2 rounded-md  border-black flex items-center bg-white">
            <div className="mr-2">
              <FaUserAlt className="text-black border-2 stroke-slate-500"/>
            </div>
            <input className="focus:outline-none" type="text" placeholder="username"/>      
          </div>
          <div className="px-2 w-full border-2 rounded-md border-black flex items-center bg-white">
            <div className="mr-2"><FaLock/></div>
            <input className="focus:outline-none" type="password" placeholder="password"/>
          </div>
          <input className="cursor-pointer w-full rounded-md text-white bg-red-800 hover:bg-red-500" type="submit" onClick={btnEnviar}  value="LOGIN"/>
        </form>
      </div>
    </div>
    </>
  )
}
 