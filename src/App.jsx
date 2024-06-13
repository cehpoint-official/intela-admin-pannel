import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import Dashboard, { Stat } from './component/Dashboard';
import CyberSecurity from './pages/CyberSecurity';
import AppDev from './pages/AppDev';
import WebDev from './pages/WebDev';
import Service from './pages/Service';
import BlogManager from './pages/BlogManager';
import Company from './pages/Company';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NewPost from './pages/NewPost';
import DraftPost from './pages/DraftPost';
import Leads from './pages/Leads';
import Register from './auth/Register';
import Loginpage from './auth/Loginpage';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='bg-blue-900'>
      <BrowserRouter>
        <Routes>
          <Route path='/service' element={user ? <Dashboard /> : <Navigate to="/login" />}>
            <Route index element={<Stat />} />
            <Route path='webdev' element={<WebDev />} />
            <Route path='appdev' element={<AppDev />} />
            <Route path='cyber' element={<CyberSecurity />} />
            <Route path='leads' element={<Leads />} />
            <Route path='manager' element={<BlogManager />} />
            <Route path='newpost' element={<NewPost />} />
            <Route path='draftpost' element={<DraftPost />} />
            <Route path='company' element={<Company />} />
            <Route path='about' element={<AboutUs />} />
            <Route path='contact' element={<ContactUs />} />
          </Route>
          <Route path="/register" element={user ? <Navigate to="/service" /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/service" /> : <Loginpage />} />
          <Route path="/webdev" element={user ? <WebDev /> : <Navigate to="/login" />} />
          <Route path="*" element={<div>Page Not Found. <a href="/">Back to our site</a></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
