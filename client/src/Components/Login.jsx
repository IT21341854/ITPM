import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [registrationNo, setRegistrationNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("triggered handle submit");
        console.log(registrationNo);
        console.log(password);
        Axios.post('http://localhost:3000/auth/login', {
            registrationNo,
            password,
        }).then(response => {
            if (response.status === 200) {
                // Navigate after successful login
                console.log("Login successful");
                navigate('/')
            }
        }).catch(err => {
            console.log(err);
            setError("Failed to login. Please check your credentials.");
        });
    };

    return (
        <div className="loginWrapper">
            <div className='loginWarapper2'>
            </div>
            <div className="container loginmain">
                <div className="loginrow loginwrapper-row">
                    <div className="col-md-6 loginright">
                        <div className="logininput-box">
                            <form className="row g-3" onSubmit={handleSubmit}>

                                <center><h1>Login to your Account</h1></center>

                                <div className="col-md-12">
                                    <label htmlFor="registrationNo" className="form-label">Registration No</label>
                                    <input type="text" className="form-control" id="registrationNo" required
                                        onChange={(e) => setRegistrationNo(e.target.value)} />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" required
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                {error && <div className="error-message">{error}</div>}

                                <div className="button">
                                    <input type="submit" className="submit" value="Login" />
                                </div>
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal">Forgot Password?</Link>
                                <p>Don't Have Account? <Link to="/signup">Registration</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Forgot Password Modal */}
            <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="forgotPasswordModalLabel">Forgot Password</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Add your forgot password form or content here */}
                            <p>Forgot password content goes here...</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;