// components/UserManagementPage.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

function UserManagementPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data when the component mounts
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getAllUsers(token);
      //   console.log(response);
      setUsers(response.appUserList); // Assuming the list of users is under the key 'appUsersList'
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

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


  const deleteUser = async (userId) => {
    try {
      // Prompt for confirmation before deleting the user
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (confirmDelete) {
        await UserService.deleteUser(userId, token);
        // After deleting the user, fetch the updated list of users
        fetchUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

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
                          
                            <div className="sb-sidenav-menu-heading">Manage Users</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Add Users
                            </a>
                            <a className="nav-link" href='/admin/user-management'>
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                List of Users
                            </a>
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
                    <h1 className="mt-4">Users Management</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Users Management</li>
                        </ol>
                        
                        <Link to="/register" className="btn btn-primary">Add User</Link>
                    
                    <table className="table table-hover">
                    <thead>
                      <tr>
                          <th>ID</th>
                          <th>Frist Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(user => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                              <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button>
                              <Link className='btn btn-info ms-2' to={`/update-user/${user.id}`}>Update</Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>  
                </div>    
            </div>     
        </div>
    
  );
}

export default UserManagementPage;