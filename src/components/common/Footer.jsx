import React from 'react'
function Footer() {
    return (
    <div className="Conatiner py-4 px-4">
        <footer className="footer">
                <div className="footer-items">
                    <div className="">
                        
                        Yann Tafou | All Right Reserved &copy; {new Date().getFullYear()}

                    </div>

                    <div className="item-socials">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>

                    <div className="">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
        </footer>
    </div>
    
        
    )
} 

export default Footer