import React from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from './TopBar';

function ConditionalTopbar() {
  const location = useLocation();
  const hideTopbarPaths = ['/login', '/register','/']; // Paths where the Navbar should not be displayed

  return !hideTopbarPaths.includes(location.pathname) && <Topbar />;
}

export default ConditionalTopbar;