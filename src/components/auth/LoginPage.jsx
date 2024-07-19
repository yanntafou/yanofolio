import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const userData = await UserService.login(email, password)
            console.log(userData)
            if (userData.token) {
                localStorage.setItem('token', userData.token)
                localStorage.setItem('role', userData.role)
                navigate('/profile')
                window.location.reload()
            }else{
                setError(userData.message)
            }
            
        } catch (error) {
            console.log(error)
            setError(error.message)
            setTimeout(()=>{
                setError('');
            }, 5000);
        }
    }
        return(
            <div className="container py-5">
                <div className="col-lg-6 mx-auto rounded border p-4">
                    <h2>Login</h2>

                    {error && <p className="error-message">{error}</p>}

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label className='form-label'>Email: </label>
                            <input className='form-control' id="username" name="username" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label className='form-label'>Password: </label>
                            <input className="form-control" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-primary mt-2">Login</button>
                    </form>
                </div>
                
            </div>
        )
    
    }
    
    export default LoginPage;