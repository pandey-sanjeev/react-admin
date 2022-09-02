import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Userlist from "./pages/Userlist";
import Adduser from "./pages/Adduser";
import Dashboard from "./pages/Dashboard";
import Resetpassword from "./pages/Resetpassword";
import Updateuser from "./pages/Updateuser";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="Userlist" element={<Userlist />} />
          <Route path="Adduser" element={<Adduser />} />
          <Route path="Resetpassword" element={<Resetpassword />} />  
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="/Updateuser/:userid" element={<Updateuser />} />



      </Routes>
    </BrowserRouter>
  );
}