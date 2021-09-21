import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './App.css';
import Theme from '../../CommenComponent/Theme';
import Tables from "../../CommenComponent/Table"
const axios = require('axios');

function Student() {

   const [name, setName] = useState('');
   const [index, setIndex] = useState('');
   const [password, setPassword] = useState('');
   const [faculty, setFaculty] = useState('');
   const [degree, setDegree] = useState('');
   const [batch, setBatch] = useState('');
   const [email, setEmail] = useState('');
 
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:
  let { id } = useParams();
  const loadData=()=>{
    
  }

  

 
 
  useEffect(() => { 
    loadData();
    
  });


  return (
    <div>
       <Theme>
        
               <div className="card text-center">
                <div className="card-header">
                  Student
                </div>
                <div className="card-body">
                  <div className="form-group row">
                      <label for="staticEmail" className="col-sm-2 col-form-label">Index Number</label>
                      <div className="col-sm-10">
                      <input type="text" className="form-control" id="exampleInputEmail1" value={index} aria-describedby="emailHelp" placeholder="Enter Index Number"onChange={e => setIndex(e.target.value)}/>
                      </div>
                  </div>
                  <div className="form-group row">
                      <label for="staticEmail" className="col-sm-2 col-form-label">Name</label>
                      <div className="col-sm-10">
                      <input type="text" className="form-control" id="exampleInputEmail1" value={name}  aria-describedby="emailHelp" placeholder="Enter Name" onChange={e => setName(e.target.value)}/>
                      </div>
                  </div>
                  <div className="form-group row">
                      <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-10">
                      <input type="text" className="form-control" id="exampleInputEmail1" value={email}  aria-describedby="emailHelp" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}/>
                      </div>
                  </div>
                  
                  
               
                
                  
       
                </div>
                <div className="card-footer text-muted">
              
                </div>
              </div>
               </Theme>
     
    </div>
  );
}

export default Student;