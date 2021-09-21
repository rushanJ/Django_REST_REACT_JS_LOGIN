import React, { useState, useEffect } from 'react';
import './App.css';
import Theme from '../../CommenComponent/Theme';
import Tables from "../../CommenComponent/Table"
const axios = require('axios');


function Lecturer() {
  const [columns, setColumns] = useState([
           
  {
    Header: 'Students',
    columns: [
      {
        Header: 'ID',
        accessor: 'id',
        filter: 'includes',
      },
      {
        Header: 'Name',
        accessor: 'name',
        filter: 'includes',
      },
      {
        Header: 'Email',
        accessor: 'email',
        filter: 'includes',
      },
      
      
       
    ],

  },
]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:
  
  const loadData=()=>{
    
  }
 
  useEffect(() => { 
    loadData();
    
  });


  return (
    <div>
       <Theme>
               
               {isLoaded ? (
                <Tables data={data} columns={columns}/>
                 ) : (
                    <div className="spinner-border text-success" role="status">
                          <span className="sr-only">Loading...</span>
                          </div>
                 )}
             
               </Theme>
     
    </div>
  );
}

export default Lecturer;