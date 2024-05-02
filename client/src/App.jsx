import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Singup from './Components/Singup'
import Login from './Components/Login'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'
import User from './Components/User'
import UpdateUser from './Components/UpdateUser'
import CreateUser from './Components/CreateUser'

import 'bootstrap/dist/css/bootstrap.min.css';
import AddMarksPage from "./Components/AddMarksPage";
import Listmarks from "./Components/ListOfMarksPage";
import Viewgroupno from "./Components/ViewGroupNo";
import VeiwGroupDetails from "./Components/ViewStudentsDetails";
// import Sidebar from './frame/Sidebar'
// import Headder from './frame/Header'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Singup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/updateUser" element={<UpdateUser />}></Route>
        <Route path="/createUser" element={<CreateUser />}></Route>

        <Route path="/addmarks" element={<AddMarksPage />} />
        <Route path="/listmarks" element={<Listmarks />} />
        <Route path="/viewgroupno" element={< Viewgroupno />} />
        <Route path="/veiwgroupdetails" element={<VeiwGroupDetails />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
