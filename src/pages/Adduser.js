import React, { useState } from "react";
import swal from 'sweetalert';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Adduser = () => {
    let Navigate= useNavigate();
    const[user,setuser]=useState({ name: '',  dob: '',email: '',password: '' ,about: '',})

    const handleChange = (e) =>{
        setuser({...user,[e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const senduserData={
            name:user.name,
            dob:user.dob,
            email:user.email,
            password:user.password,
            about:user.about,
        }      
        console.log(senduserData); 
    axios.post('http://localhost/backend/admin/adduser',senduserData)
        .then(response => {
            if (JSON.stringify(response.data)) {
                console.log(response.data);
                swal('Success!', response.data.msg, 'success');
                Navigate('/dashboard');
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
              <Link className="btn btn-success" to="/Dashboard">Dashboard</Link>
                  <hr/>  
                      <h1>Add New User</h1>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label className="control-label ">Name</label>
                                  <input type="text" className="form-control" name="name" placeholder="Enter Name" value={user.name} onChange={handleChange} />
                              </div>
                          </div>
                      </div>                   
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label className="control-label ">Date Of Birth</label>
                                  <input type="date" className="form-control" name="dob" placeholder="Date Of Birth" value={user.dob} onChange={handleChange} />
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label className="control-label ">Email</label>
                                  <input type="email" className="form-control" name="email" placeholder="Enter email" value={user.email} onChange={handleChange} />
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label className="control-label ">Password</label>
                                  <input type="password" className="form-control" name="password" placeholder="Enter Password" value={user.password} onChange={handleChange} />
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                  <label className="control-label ">About</label>
                                  <textarea className="form-control" rows="4" cols="40" placeholder="about" name="about" value={user.fathername} onChange={handleChange} ></textarea>
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
        )
}

export default Adduser;