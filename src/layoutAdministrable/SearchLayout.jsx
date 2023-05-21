import { Search } from "../componentsAdministrable/Search"
import { TableLayout } from "../componentsAdministrable/TableLayout"

export const SearchLayout = () => {
  return (
    <>
        <div className="relativa w-full p-10">
            <Search/>
            <TableLayout/>
        </div>
        
    </>
  )
}
