import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/scrollspy';
import React, { useEffect } from 'react';


function Navbar() {

    useEffect(() => {
        const navbarShrink = () => {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
            }
        };

        navbarShrink();

        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', navbarShrink);

            // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }

            });
        });

        // Cleanup function
        return () => {
            document.removeEventListener('scroll', navbarShrink);
        };

    }, []);

    return (
    <div id='page-top'>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top  " id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top">YanoFolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars ms-1"></i>
            </button>
            <div className=" collapse navbar-collapse" id="navbarResponsive">

                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><a className="nav-link " href="#page-top">Accueil</a></li>
                    <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">A propos</a></li> 
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                      
                </ul>
                
            </div>
        </div>
    </nav>
    </div>
    
    );

    
}

export default Navbar;


