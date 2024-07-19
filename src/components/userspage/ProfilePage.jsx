import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';




function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});
    const navigate = useNavigate();

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.appUser);
            
        } catch (error) {
            console.error('Error fetching profile information:', error);
            
        }
    };

    useEffect(() => {
        fetchProfileInfo();
    }, [navigate]);
    

    return (
        <div id="layoutSidenav">        
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="/profile">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>                                                                                  
                            {profileInfo.role === "ADMIN" && (
                        <>
                            <div className="sb-sidenav-menu-heading">Manage Users</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Add Users
                            </a>
                            <a className="nav-link" href='/admin/user-management'>
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                List of Users
                            </a>
    
                        </>   
                            )}
                            
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        {profileInfo.firstName}  {profileInfo.lastName}
                    </div>
                </nav>
            </div>

            <div id="layoutSidenav_content">
                <div className='container-fluid px-4'>
                    <h1 className="mt-4">Profile Information</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Profile Information</li>
                        </ol>
                    <div className='profil-info'>
                        <p className='info-1'>Frist Name: {profileInfo.firstName}</p>
                        <p className='info-2'>Last Name: {profileInfo.lastName}</p>
                        <p className='info-3' >Email: {profileInfo.email}</p>
                        <p className='info-4'>Phone: {profileInfo.phone}</p>
                    </div>
                    
                    {profileInfo.role === "ADMIN" && (
                        <>
                        <div className='container-fluid'>
                            <Link to="{`/update-user/${profileInfo.id}`}" className="btn btn-info mx-2 px-2">Update This Profile</Link>
                            <Link to="/admin/user-management" className="btn btn-info">Manage Users</Link>
                        </div>
                        
    
                        </>   
                    )}
                </div>
                
            </div>   
            
        </div>
    );
}

export default ProfilePage;