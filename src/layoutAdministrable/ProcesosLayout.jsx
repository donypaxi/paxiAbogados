import { Search } from "../componentsAdministrable/Search"
import { TableLayout } from "./TableLayout"

export const ProcesosLayout = () => {
  return (
    <>
        <div className="relativa w-full p-10">
            <Search/>
            <TableLayout/>
        </div>
        
    </>
  )
}
