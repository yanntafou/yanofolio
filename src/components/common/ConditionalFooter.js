import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

function ConditionalFooter() {
  const location = useLocation();
  const hideTopbarPaths = ['/login', '/register', '/admin/user-management', '/admin/get-users/{userId}', '/profile']; // Paths where the footer should not be displayed

  return !hideTopbarPaths.includes(location.pathname) && <Footer />;
}

export default ConditionalFooter;