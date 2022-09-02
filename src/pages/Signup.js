import React, { useState } from "react";
import swal from 'sweetalert';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Signup =()=> {
    let Navigate= useNavigate();
    const[admin,setadmin]=useState({ name: '',  dob: '',email: '',password: '',})

    const handleChange = (e) =>{
        setadmin({...admin,[e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const sendadminData={
            name:admin.name,
            dob:admin.dob,
            email:admin.email,
            password:admin.password,
        }      
        console.log(sendadminData); 
    axios.post('http://localhost/backend/admin/insertdata',sendadminData)
        .then(response => {
            if (JSON.stringify(response.data)) {
                console.log(response.data);
                swal('Success!', response.data.msg, 'success');

                // alert("user")
            }
            if (response.data.success == "0") {
                swal('Error!', response.data.msg, 'error');
                Navigate('/login');
            }       
        })
}
  return (
    <React.Fragment> 
    <hr/> 
<form className="form-horizontal" onSubmit={handleSubmit} method="">                   
              <div className="container ">
              <Link className="btn btn-danger" to="/">Home</Link>
              <Link className="btn btn-primary" to="/Login">Login</Link>

              <hr/>  
                  <h1>Please Signup</h1>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                              <label className="control-label ">Name</label>
                              <input type="text" className="form-control" name="name" placeholder="Enter Name" value={admin.name} onChange={handleChange} />
                          </div>
                      </div>
                  </div>                      
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                              <label className="control-label ">Date Of Birth</label>
                              <input type="date" className="form-control" name="dob" placeholder="Date Of Birth" value={admin.dob} onChange={handleChange} />
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                              <label className="control-label ">Email</label>
                              <input type="email" className="form-control" name="email" placeholder="Enter email" value={admin.email} onChange={handleChange} />
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                              <label className="control-label ">Password</label>
                              <input type="password" className="form-control" name="password" placeholder="Enter Password" value={admin.password} onChange={handleChange} />
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
  
  export default Signup;
  