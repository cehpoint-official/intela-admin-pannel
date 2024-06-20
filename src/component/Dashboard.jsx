import React from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from '../config/firebase';

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
        window.location.href = '/';
    };

    return (
        <div className="w-full sticky top-0 z-50">
            <div className="flex justify-between items-center p-3">
                <div className="flex gap-5 mx-5 w-2/6">
                    <button className="text-white" onClick={toggle}>
                        <i className="bi text-xl bi-list"></i>
                    </button>
                </div>
                <div className="flex gap-5 items-center text-white text-lg">
                    <i className="bi bi-bell-fill relative text-2xl"></i>
                    <div>
                        <div className="flex items-center gap-3">
                            <p className="text-white bg-blue-700 px-5 p-2 text-lg rounded-full font-semibold">
                                {user ? user.email[0] : 'A'}
                            </p>
                            <span
                                onClick={handleLogout}
                                className="cursor-pointer bg-blue-700 p-2 rounded-lg text-sm font-semibold"
                            >
                                LOGOUT
                            </span>
                            {/* <Avatar className="" /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Uncomment and modify if needed
            <div className='border-b-2'>
                <div className='mx-5 flex gap-3 p-3'>
                    <h4><a href="">Home</a></h4>
                    <span>/</span>
                    <h4>Dashboard</h4>
                </div>
            </div>
            */}
        </div>
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
