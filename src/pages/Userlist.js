import React,{useState, useEffect} from 'react'
import axios from "axios";
import swal from 'sweetalert';
import { Link } from "react-router-dom";


function Userlist() {
  const [data, getData]= useState([])

  useEffect(()=> {
    fetchData()
  },[])

  function fetchData()
  {
    fetch('http://localhost/backend/admin/userlist')
    .then((res)=>
      res.json())

    .then((response) => {
      console.log(response)
      getData(response);
    })
  }

  function deleteuser(userid){
    console.log(userid)
    axios.post('http://localhost/backend/Admin/deleteuser', {
      userid: userid
  })
      .then(response => {
        console.log(response);
        fetchData()
      })
      .catch(err => {
          swal('Error!', 'Something went wrong', 'error')
      })
  }
  return (
    <div className="container">
    <div className="py-4">
      <h3 className="mb-3 text-center">All User List</h3>
      <table className="table border shadow">
        <thead className="thead-primary">
          <tr>
            <th scope="col">Serial No</th>
            <th scope="col">Name</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.about}</td>

              <td><Link className="btn btn-success" to={`/Updateuser/${item.userid}`}>Update User</Link> </td>
              <td><button className="btn btn-danger" onClick={()=>deleteuser(item.userid)}>Delete</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  </div>  )
}

export default Userlist;