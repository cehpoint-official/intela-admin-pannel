import React, { useState } from 'react'
import Dashboard from '../component/Dashboard'
import Sidebar from '../component/Sidebar'
import WebDev from './WebDev'

const Service = () => {

    const [show, setShow] = useState(window.innerWidth >= 600 ? true : false)
    const toggle = e => setShow(!show)
    return <div className='flex items-start'>
        <Sidebar toggle={toggle} show={show} />
        <Dashboard toggle={toggle} show={show} />
        {/* <WebDev/> */}
    </div>


}

export default Service