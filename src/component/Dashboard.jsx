import { Outlet } from "react-router-dom";
import { auth } from "../config/firebase";
import { useState } from "react";

const Dashboard = ({ toggle }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="w-full">
            <TopNav toggle={toggle} handleToggle={handleToggle} isToggled={isToggled} />
            <Outlet />
        </div>
    );
};

const TopNav = ({ toggle, handleToggle, isToggled }) => {
    const user = auth.currentUser;

    const handleLogout = async () => {
        await auth.signOut();
        window.location.href = '/login'; // Redirect to login page after logout
    };

    return (
        <>
            <div className='w-full sticky top-0 z-50'>
                <div className='justify-between items-center flex p-3'>
                    <div className='flex gap-5 mx-5 w-2/6'>
                        <button className="text-white sticky" onClick={toggle}>
                            <i className="bi text-xl bi-list"></i>
                        </button>
                    </div>
                    <div className='flex gap-5 items-center text-white text-lg'>
                        <i className="bi bi-bell-fill relative text-2xl"></i>
                        <div>
                            <div className="flex">
                                <p onClick={handleToggle} className="text-white bg-blue-700 px-4 p-2 text-lg rounded-full font-semibold">
                                    {user ? user.email[0] : 'Guest'}
                                </p>
                                <button
                                    onClick={handleLogout}
                                    className={`px-4 py-2 rounded ${isToggled ? 'block' : 'hidden'} text-white`}
                                >
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Stat = () => {
    return (
        <div className="bg-blue-900">
            {/* dashboard home */}
        </div>
    );
};

export default Dashboard;
