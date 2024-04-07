import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Singup from './Components/Singup'
import Login from './Components/Login'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'
import User from './Components/User'
import UpdateUser from './Components/UpdateUser'
import CreateUser from './Components/CreateUser'
// import Sidebar from './frame/Sidebar'
// import Headder from './frame/Header'

function App() {
  
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Home />}></Route>
      <Route path = "/signup" element={<Singup />}></Route>
      <Route path = "/login" element={<Login />}></Route>
      <Route path = "/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path = "/User" element={<User/>}></Route>
      <Route path = "/updateUser" element={<UpdateUser/>}></Route>
      <Route path = "/createUser" element={<CreateUser/>}></Route>

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
