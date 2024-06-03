import React from 'react'
import Sidebar, { Stat } from './component/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CyberSecurity from './pages/CyberSecurity'
import AppDev from './pages/AppDev'
import WebDev from './pages/WebDev'
import Service from './pages/Service'
import BlogManager from './pages/BlogManager'
import Company from './pages/Company'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import NewPost from './pages/NewPost'
import DraftPost from './pages/DraftPost'
import Leads from './pages/Leads'

const App = () => {
  return <div className='bg-blue-900'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Service />} >
          <Route index element={<Stat />} />
          <Route path='webdev' element={<WebDev />} />
          <Route path='appdev' element={<AppDev />} />
          <Route path='cyber' element={<CyberSecurity />} />
          <Route path='leads' element={<Leads/>} />
          <Route path='manager' element={<BlogManager />} />
          <Route path='newpost' element={<NewPost />} />
          <Route path='draftpost' element={<DraftPost />} />
          <Route path='company' element={<Company />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='contact' element={<ContactUs />} />
          {/* <Route path='order' element={<Order />} /> */}
          {/* <Route path='login' element={<Login />} /> */}
          {/* <Route path='register' element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App