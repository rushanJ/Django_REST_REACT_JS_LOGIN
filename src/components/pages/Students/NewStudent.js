import React, { useState, useEffect } from 'react';
import './App.css';
import Theme from '../../CommenComponent/Theme';
import Tables from "../../CommenComponent/Table"
const axios = require('axios');


function Student() {

   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
  // Similar to componentDidMount and componentDidUpdate:
  
  const submitData=()=>{
   
  }
 
  useEffect(() => { 
   //  loadData();
   // //console.log(degree);
  });


  return (
    <div>
      <Theme>
               <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Student</h1>
                  {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                           className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
               </div>
               <div className="card shadow mb-4">
                  <div className="card-header py-3">
                     <h6 className="m-0 font-weight-bold text-primary">New Student</h6>
                  </div>
                  <div className="card-body">
                        <div className="form-group">
                           <label for="exampleInputEmail1"> Name</label>
                           <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                           <label for="exampleInputEmail1"> Email</label>
                           <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                       
         
                       

                        <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
                  

                              </div>
                           </div>
               
             </Theme>
     
    </div>
  );
}

export default Student;