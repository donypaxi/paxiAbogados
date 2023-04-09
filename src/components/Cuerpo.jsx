import {ChevronRight} from './Heroicons'
export const Cuerpo = () => {
  return (
    <>
        <div className="bg-secondary-color text-white py-10 px-10">
            <div>
                <p className='mb-2 text-xl'>ABOUT US</p>
                <p className="text-marron font-bold text-3xl">We’re in this together.Your Team and Ours </p>
                <div className="my-5 w-3/4 border-b border-marron"></div>
                <p>The Kron Law Firm has more than a decade and a half of experience practicing law and is licensed in New York and New Jersey.They believe in taking as much time as necessary to achieve the most favorable outcome in each case they handle, even if it means taking fewer cases than they otherwise could.</p>
            </div>
            <div className="inline-block text-sm px-4 py-2 mt-5 border border-marron">
                <div className='flex'>
                    <p>Read More</p>
                    <ChevronRight stroke= {2} />
                </div>
            </div>

            <img src="https://thekronlawfirm.com/wp-content/uploads/2023/01/daniel-kron-3-541x400.jpg" alt="" />
        </div>

    
    </>
  )
}
