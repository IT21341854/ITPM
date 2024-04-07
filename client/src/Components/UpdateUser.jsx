import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import '../frame/Frame.css';
import Header from '../frame/Header';
import Sidebar from '../frame/Sidebar';

function UpdateUser() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [userName, setUsername] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [email, setEmail] = useState('');
    const [position] = useState('Student'); 
    const navigate = useNavigate();

    useEffect(() => {
        const id = getUserId(); 
        axios.get('http://localhost:3000/auth/update/'+id) 
            .then(response => {
                const userData = response.data;
                setUsername(userData.userName);
                setRegistrationNo(userData.registrationNo);
                setEmail(userData.email);
                // Assuming you have other fields to set as well
            })
            .catch(error => console.log(error));
    }, []);

    const getUserId = () => {
        return 'user_id'; 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
    };

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='homeBody'>
            <div className='home-container'>
                <Header OpenSidebar={OpenSidebar} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                <main className='main-container'>
                    <div className='main-title'>
                        <h3>UPDATE USER</h3>
                        </div>
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-12">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputName" value={userName} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputRegNo" className="form-label">Registration No</label>
                                <input type="text" className="form-control" id="inputRegNo" value={registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputFaculty" className="form-label">Faculty</label>
                                <select id="inputFaculty" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputUserState" className="form-label">User State</label>
                                <select id="inputUserState" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    {/* </div> */}
                </main>
            </div>
        </div>
    );
}

export default UpdateUser;
