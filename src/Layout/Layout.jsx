// Layout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';  // Import your Navbar component
import Footer from '../Footer/footer';  // Import your Footer component
import { Outlet } from 'react-router-dom';  // Outlet renders the matched child route element


const Layout = () => {
  return (
    <div className=" ">
      <Navbar className="" />
      <main className="pb-10">
        {/* This is where the dynamic content will be rendered */}
        <Outlet />
       
      </main>
      <Footer />
      
    </div>
  );
};

export default Layout;
