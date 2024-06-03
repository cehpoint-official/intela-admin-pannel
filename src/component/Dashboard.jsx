import { Outlet } from "react-router-dom"

const Dashboard = ({ toggle }) => {

    return <div className="w-full">
        <TopNav toggle={toggle} />
        <Outlet />
    </div>
}

const TopNav = ({ toggle }) => {

    return <>
        <div className='w-full sticky top-0 z-50'>
            <div className='justify-between items-center flex p-3 '>
                <div className='flex gap-5 mx-5  w-2/6'>
                    <button className="text-white sticky" onClick={toggle}><i class="bi text-xl bi-list"></i></button>

                    {/* <form class="w-full">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required />
                        </div>
                    </form> */}

                </div>
                <div className='flex gap-5 items-center text-white text-lg'>
                    <i class="bi bi-bell-fill relative text-2xl"></i>
                    <div>
                        <div className=" flex">
                            <p className="text-white bg-blue-700 px-4 p-2 text-lg rounded-full font-semibold">A</p>
                            {/* <Avatar className="" /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=' border-b-2'>
                <div className='mx-5 flex gap-3 p-3'>

                    <h4> <a href="">Home</a></h4>
                    <span>/</span>
                    <h4>Dashboard</h4>
                </div>
            </div> */}

        </div>
    </>

}

export const Stat = () => {
    return <div className="bg-blue-900">
        {/* dashboard home */}
    </div>
}

export default Dashboard