import React from 'react'
import { Link } from "react-router-dom";
import Userlist from "./Userlist";

const Dashboard = () => {
    return (
        <div> 
          <hr/> 
          <Link className="btn btn-success" to="/Adminprofile">Admin Profile</Link>
          <Link className="btn btn-success" to="/Adduser">Add User</Link> 
          <Link className="btn btn-danger" to="/">Log out</Link> 
          <hr/> 
          <Userlist /> 
       </div> 
)
}

export default Dashboard;