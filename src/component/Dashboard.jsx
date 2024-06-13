import { Outlet } from "react-router-dom";
import { auth } from "../config/firebase";

const Dashboard = ({ toggle }) => {
    return (
        <div className="w-full">
            <TopNav toggle={toggle} />
            <Outlet />
        </div>
    );
};

const TopNav = ({ toggle }) => {
    const user = auth.currentUser;

    const handleLogout = async () => {
        await auth.signOut();
        window.location.href = '/login'; // Redirect to login page after logout
    };

    return (
        <div className='w-full sticky top-0 z-50'>
            <div className='justify-between items-center flex p-3 '>
                <div className='flex gap-5 mx-5  w-2/6'>
                    <button className="text-white sticky" onClick={toggle}>
                        <i className="bi text-xl bi-list"></i>
                    </button>
                    {/* Uncomment and use if you want a search form */}
                    {/* <form className="w-full">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required />
                        </div>
                    </form> */}
                </div>
                <div className='flex gap-5 items-center text-white text-lg'>
                    <i className="bi bi-bell-fill relative text-2xl"></i>
                    <div className="flex">
                        <p onClick={handleLogout} className="text-white bg-blue-700 px-4 p-2 text-lg rounded-full font-semibold">
                            {user ? user.email[0] : 'logout'}
                        </p>
                        {/* <Avatar className="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Stat = () => {
    return <div className="bg-blue-900">{/* dashboard home */}</div>;
};

export default Dashboard;
