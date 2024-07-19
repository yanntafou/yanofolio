import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

function RegistrationPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adresse: '',
        password: '',
        role: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOptionChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, role: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the register method from UserService
            const token = localStorage.getItem('token');
            await UserService.register(formData, token);

            // Clear the form fields after successful registration
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                adresse: '',
                password: '',
                role: ''
            });
            alert('User registered successfully');
            navigate('/admin/user-management');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 mx-auto rounded border p-4">
                    <h2>Registration</h2>
                    <form  onSubmit={handleSubmit}>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">First Name</label>
                            <div className="col-sm-10">   
                                <input className='form-control' type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Last Name</label>
                            <div className="col-sm-10">  
                                <input className='form-control' type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                            </div>  
                        </div>

                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input className='form-control' type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                            </div>  
                        </div>

                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input className='form-control' type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </div>    
                        </div>

                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input className='form-control'  type="text" name="adresse" value={formData.adresse} onChange={handleInputChange} />
                            </div>   
                        </div>

                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">  
                                <input className='form-control' type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                            </div>   
                        </div>

                        <fieldset className="row mb-3">
                                <div className="row mb-2">
                                <legend className="col-form-label col-sm-2 pt-0">Role</legend>
                                    <div className=" col-sm-3 form-check">
                                        <input className="form-check-input " type="radio" name="role" id="gridRadios1" value="USER" onChange={handleOptionChange} checked={formData.role === 'USER'}/>
                                        <label className="form-check-label">USER</label>
                                    </div>
                                    <div className=" col-sm-3 form-check">
                                        <input className="form-check-input" type="radio" name="role" id="gridRadios2" value="ADMIN" onChange={handleOptionChange} checked={formData.role === 'ADMIN'}/>
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

export default RegistrationPage;