import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../service/UserService';


function Topbar() {
    const isAuthenticated = UserService.isAuthenticated();
    const isAdmin = UserService.isAdmin();
    const [firstName, setFirstName] = useState('');


    const handleLogout = () => {
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            UserService.logout();
        }
    };

    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        
            setFirstName(storedFirstName);

    }, []);

    window.addEventListener('DOMContentLoaded', event => {

      // Toggle the side navigation
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
          // Uncomment Below to persist sidebar toggle between refreshes
          // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          //     document.body.classList.toggle('sb-sidenav-toggled');
          // }
          sidebarToggle.addEventListener('click', event => {
              event.preventDefault();
              document.body.classList.toggle('sb-sidenav-toggled');
              localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
          });
      }
  
  });

    return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DASHBOARD</a>

          <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"  id="sidebarToggle" href="#!">
            <i className="fas fa-bars fa-fw"></i></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>


            <form className="d-flex" role="search">
                {isAuthenticated && <Link to="/" className="btn btn-danger" onClick={handleLogout}>Logout</Link>}
                {!isAuthenticated && <Link to="/auth/login" className="btn btn-outline-primary me-2">Login</Link>}
                {!isAuthenticated && <Link to="/auth/register" className="btn btn btn-primary me-2">Register</Link>}   
            </form>
            
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        {isAuthenticated && <li><Link to="/" className="dropdown-item" onClick={handleLogout}>Logout</Link></li>}
                    </ul>
                </li>
            </ul>

          </div>
        </div>
      </nav>
    
    );
}

export default Topbar;