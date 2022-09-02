import React, { useState } from "react";
import swal from 'sweetalert';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Resetpassword =()=>{    
    let Navigate= useNavigate();
    const[admin,setadmin]=useState({ email: ''})
    

const handleChange = (e) =>{
    setadmin({...admin,[e.target.name]: e.target.value});
};

 const handleSubmit = (e) => {
    e.preventDefault();
    const sendData={
        email:admin.email,
    }      
    console.log(sendData);
}
  return (
      <React.Fragment> 
          <hr/>
      <form className="form-horizontal" onSubmit={handleSubmit} method="">                   
                    <div className="container ">
                    <Link className="btn btn-primary" to="/Login">Login</Link> 
                    <hr/> 
                        <h1>Please Provide Details</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter email" value={admin.email} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="submit" className="btn btn-info" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
    </React.Fragment>
    );
  }
  
  export default Resetpassword;
  