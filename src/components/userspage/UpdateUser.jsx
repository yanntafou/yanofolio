import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../service/UserService';

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adresse: '',
        password: '',
        role: '',
  });

  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await UserService.getUserById(userId, token);
        setUserData(response.appUser);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, role: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmUpdate = window.confirm('Are you sure you want to update this user?');
      if (confirmUpdate) {
        const token = localStorage.getItem('token');
        const res = await UserService.updateUser(userId, userData, token);
        alert('User updated successfully');
        console.log(res)
        // Redirect to profile page or display a success message
        navigate("/admin/user-management")
      }

    } catch (error) {
      console.error('Error updating user profile:', error);
      alert(error)
    }
  };

  return (
    <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 mx-auto rounded border p-4">
                    <h2>Update User</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3 form-group">
                        <label className="col-sm-2 col-form-label">First Name:</label>
                            <div className="col-sm-10">  
                                <input className='form-control' type="text" name="firstName" value={userData.firstName} onChange={handleInputChange}/>
                            </div>
                        </div>

                        <div className="row mb-3 form-group">
                        <label className="col-sm-2 col-form-label">Last Name:</label>
                            <div className="col-sm-10">
                                <input className='form-control' type="text" name="lastName" value={userData.lastName} onChange={handleInputChange}/>
                            </div>  
                        </div>

                        <div className="row mb-3 form-group">
                        <label className="col-sm-2 col-form-label">Email:</label>
                            <div className="col-sm-10">
                                
                                <input className='form-control' type="email" name="email" value={userData.email} onChange={handleInputChange}/>
                            </div>  
                        </div>

                        <div className="row mb-3 form-group">
                        <label className="col-sm-2 col-form-label">Phone:</label>
                            <div className="col-sm-10">
                                
                                <input className='form-control' type="text" name="phone" value={userData.phone} onChange={handleInputChange}/>
                            </div>    
                        </div>

                        <div className="row mb-3 form-group">
                        <label className="col-sm-2 col-form-label">Address:</label>
                            <div className="col-sm-10">
                                
                                <input className='form-control' type="text" name="adresse" value={userData.adresse} onChange={handleInputChange}/>
                            </div>   
                        </div>

                        <div className="row mb-3 form-group">
                        <label className="col-sm-2 col-form-label">Password:</label>
                            <div className="col-sm-10">
                                
                                <input className='form-control' type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                            </div>   
                        </div>

                        <fieldset className="row mb-3">
                                <div className="row mb-2">
                                <legend className="col-form-label col-sm-2 pt-0">Role</legend>
                                    <div className=" col-sm-3 form-check">
                                        <input className="form-check-input " type="radio" name="role" id="gridRadios1" value="USER" onChange={handleOptionChange} checked={userData.role === 'USER'}/>
                                        <label className="form-check-label">USER</label>
                                    </div>
                                    <div className=" col-sm-3 form-check">
                                        <input className="form-check-input" type="radio" name="role" id="gridRadios2" value="ADMIN" onChange={handleOptionChange} checked={userData.role === 'ADMIN'}/>
                                        <label className="form-check-label">ADMIN</label>
                                    </div>
                                </div>
                        </fieldset>

                        <div className="row mb-3">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-sm-4 d-grid">
                          <a href="/admin/user-management" className="btn btn-primary">Cancel</a>
                        </div>
                      </div>
                    </form>
                </div>
            
            </div>
            
        </div>
  );
}

export default UpdateUser;