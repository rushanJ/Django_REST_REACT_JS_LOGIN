import React , { useState } from 'react';
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {setLogin} from '../../../Actions';
const axios = require('axios');

function Login() {
  const isLogedin =useSelector(state=>state.isLogedinReducer.isLogedin.name);
  const dispatch=useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login =(email,password) =>{
      
  }

  return (
    <div> 
          {/* <h3>Hello</h3>*/}
          <h3>{isLogedin}</h3>
          <button onClick={()=> dispatch(setLogin({name:"ADMIN",id:0,role:"ADMIN"}))}>ADMIN</button>
          <button onClick={()=> dispatch(setLogin({name:"LECTURER 001",id:2,role:"LECTURER"}))}>LECTURER</button>
          <button onClick={()=> dispatch(setLogin({name:"USER 001",id:4,role:"USER"}))} >USER</button> 



          <div className="container h-100">
    <div className="login_name_wrapper">
        <div className="d-flex justify-content-center">MY LMS</div>
    </div>
<div className="d-flex justify-content-center h-50" >
    <div className="user_card">
        <div className="d-flex justify-content-center">
            <div className="login_logo_container"> <img src="https://crezzur.com/img/projects/27-home_default.png" className="login_logo" alt="Logo"/> </div>
        </div>
        <div className="d-flex justify-content-center form_container">
            <form >
                <div id="msgcont" className="d-flex justify-content-center" >
                    <div id="msg" className="alert alert-danger py-1 px-2" role="alert"></div>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-append"> <span className="input-group-text"><i className="fas fa-user"></i></span> </div>
                    <input id="email" type="text" name="" className="form-control input_user" placeholder="info@crezzur.com" required onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="input-group mb-4">
                    <div className="input-group-append"> <span className="input-group-text"><i className="fas fa-key"></i></span> </div>
                    <input id="pass" type="password" name="" className="form-control input_pass" placeholder="*********" required onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                    <button type="button" name="button" className="btn login_btn" onClick={() => login(email,password)}>Login</button>
                </div>
            </form>
        </div>
        <div className="mt-4">
            <div className="d-flex justify-content-center links"><a href="#">Forgot your password?</a> </div>
        </div>
    </div>
</div>
</div>

          
         </div>
  );
}

export default Login;

