import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function ConditionalNavbar() {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register','/profile','/admin/user-management']; // Paths where the Navbar should not be displayed

  return !hideNavbarPaths.includes(location.pathname) && <Navbar />;
}

export default ConditionalNavbar;
