import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ show, toggle }) => {
    const links = [
        { icon: "bi-tools", label: "Service", to: "/" },
        { label: "Web Development", to: "webdev" },
        { label: "App Development", to: "appdev" },
        { label: "Cyber Security", to: "cyber" },
        { icon: "bi-person-fill", label: "Leads", to: "leads" },
        // { icon: "bi-chat-left-text-fill", label: "Chat", to: "" },
        // { icon: "bi-check-square-fill", label: "Visual Editor for page", to: "" },
        { icon: "bi-person-fill", label: "Company Pages", to: "/" },
        { icon: "", label: "About Us", to: "about" },
        { icon: "", label: "Contact Us", to: "contact" },
        { icon: "bi-person-fill", label: "Blog Manager", to: "manager" },
        { icon: "", label: "Create a new post", to: "newpost" },
        { icon: "", label: "Draft post", to: "draftpost" },
        // { icon: "bi-person-fill", label: "Cyber Security consultation info", to: "" },
        // { icon: "bi-person-fill", label: "Manage Deltapath Product", to: "" },
    ];

    const LINK_LIST = (
        <>
            {links.map(item => (
                <div
                    className='h-full flex justify-between items-center my-5
                     hover:text-black px-3 text-white text-lg'
                    key={item.label}
                >
                    <Link to={item.to}>
                        <i className={`bi ${item.icon} `}></i>
                        <span className='ms-3'>{item.label}</span>
                    </Link>
                    {item.badge && (
                        <span className='p-1 text-slate-50 rounded-lg'>{item.badge}</span>
                    )}
                </div>
            ))}
        </>
    );

    return show && (
        <>
            <div className='w-[300spx] sticky top-0 h-screen bg-blue-800 flex flex-col'>
                {/* Sidebar Header */}
                {/* <div className='bg-slate-500 p-3 mb-1'>
                    <h1>SKILLHUB</h1>
                </div> */}
                {/* Sidebar Body */}
                <div className='flex-grow overflow-y-auto'>
                    <div className='my-20'>{LINK_LIST}</div>
                </div>
                {/* Sidebar Footer */}
                {/* <div className='bg-slate-500 p-3 text-center'>
                    <h1>Settings</h1>
                </div> */}
            </div>
        </>
    );
};

export default Sidebar;
