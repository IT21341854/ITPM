import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


 const Singup = () => {

    const [userName, setUsername] = useState('')
    const [registrationNo, setRegistrationNo] = useState('')
    const [email, setEmail] = useState('')
    const [position] = useState('Studebt')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const [alreadyUsedRegistrationNumber, setAlreadyUsedRegistrationNumber] = useState({
        status: false,
        value: ''
    })
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("trigged hanle submit");
        console.log(userName);
        console.log(registrationNo);
        console.log(email);
        console.log(position);
        console.log(password);
        Axios.post('http://localhost:3000/auth/signup', {
            userName,
            registrationNo,
            position,
            email,
            password,
        }).then(response => {
            console.log(response);
            if (response.status === 200) {
                navigate('/login')
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div class="wrapper">
            <div className='warapper2'>
            </div>
            <div class="container main">
                <div class="row wrapper-row">
                    <div class="col-md-6 side-image">
                    </div>
                    <div class="col-md-6 right">
                        <div class="input-box">
                            <form class="row g-3" onSubmit={(e) => { handleSubmit(e) }}>
                                <center><h1>Registration</h1></center>
                                <div class="col-md-12">
                                    <label htmlFor="userName" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="username" required
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                {
                                    alreadyUsedRegistrationNumber.status &&
                                    <div class="col-md-12">
                                        <label htmlFor="registrationNo" class="form-label">Registration No</label>
                                        <input type="text" class="form-control is-invalid" id="registrationNo" required
                                            onChange={(e) => setRegistrationNo(e.target.value)} />
                                        <div id="registrationNo" class="invalid-feedback">
                                            Already Used Registration Number
                                        </div>
                                    </div>
                                }
                                {
                                    !alreadyUsedRegistrationNumber.status &&
                                    <div class="col-md-12">
                                        <label htmlFor="registrationNo" class="form-label">Registration No</label>
                                        <input type="text" class="form-control" id="registrationNo" required
                                            onChange={(e) => setRegistrationNo(e.target.value)} />
                                    </div>
                                }
                                <div class="col-md-12">
                                    <label htmlFor="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" required
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <fieldset disabled>
                                    <div class="mb-12">
                                        <label htmlFor="position" class="form-label">User Roles</label>
                                        <input type="text" id="position" class="form-control" value="Student" />

                                    </div>
                                </fieldset>
                                <div class="col-md-12">
                                    <label htmlFor="passeord" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="passeord" required
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div class="button">
                                    <input type="submit" class="submit" value="Sign Up" />
                                    {/* <button className='primary' onClick={(e) => {handleSubmit(e)}}>click me</button> */}
                                </div>
                                <p>Have an Account? <Link to= "/login">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;