import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../frame/Frame.css'
import Header from '../frame/Header'
import Sidebar from '../frame/Sidebar'

function CreateUser() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [isSuccess, setIsSuccess] = useState(false);
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
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    setUsername("");
                    setRegistrationNo("");
                    setEmail("");
                    setPassword("");
                }, 2500);
            }
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div className='homeBody'>

            {
                isSuccess &&
                <div class="alert alert-success d-flex align-items-center" role="alert" style={{ position: "absolute", width: "100%", marginTop: "1%" }}>
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill" /></svg>
                    <div>
                        User Created Successfgully!
                    </div>
                </div>
            }
            <div className='home-container'>
                <Header OpenSidebar={OpenSidebar} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                <main className='main-container'>
                    <div className='main-title'>
                        <div><h3>CREATE USRE</h3></div>
                        <form class="row g-3" onSubmit={(e) => { handleSubmit(e) }}>
                            <div class="col-md-12">
                                <label for="inputEmail4" class="form-label">Name</label>
                                <input type="text" class="form-control" id="inputEmail4" required
                                    value={userName} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            {
                                alreadyUsedRegistrationNumber.status &&
                                <div class="col-md-12">
                                    <label htmlFor="registrationNo" class="form-label">Registration No</label>
                                    <input type="text" class="form-control is-invalid" id="registrationNo" required
                                        value={registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} />
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
                                        value={registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} />
                                </div>
                            }

                            <div class="col-md-12">
                                <label htmlFor="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" required
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="col-md-6">
                                <label for="inputState" class="form-label">Faculty</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputState" class="form-label">User State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" required
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default CreateUser