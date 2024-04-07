import React, { useEffect, useState } from 'react';
// import React from 'react';
import {Link} from "react-router-dom";
import '../frame/Frame.css'
import Header from '../frame/Header'
import Sidebar from '../frame/Sidebar'
import axios, { Axios } from 'axios';

function User() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [users, setUsers] = useState([
   
  ]);
  useEffect(()=> {
    axios.get('http://localhost:3000/auth/vive')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  })
  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/deleteUser/'+id)
    .then(res => {console.log(res) 
    window.location.reload()})
    .catch(err => console.log(err))
  }

  return (
    <div className='homeBody'>
      <div className='home-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main className='main-container'>
          <div className='main-title'>
            <h3>USER</h3>
            </div>
            {/* <Link to="/createUser" className='btn btn-success'>Add</Link> */}
            <div className="-flex vh-100 bg-primary justify-content-center align-items-center">
              <div className="w-50 gb-whitw rounded p-3">
              <Link to="/createUser" className='btn btn-success'>Add</Link>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Registration No</th>
                      <th>Email</th>
                      <th>User Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.userName}</td>
                        <td>{user.registrationNo}</td>
                        <td>{user.email}</td>
                        <td>{user.position}</td>
                        <td><Link to="/updateUser" className='btn btn-success'>Edit</Link>
                        <button type="button" class="btn btn-danger" onClick={(e) => handleDelete (user._id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          {/* </div> */}
        </main>
      </div>
    </div>
  );
}

export default User;
