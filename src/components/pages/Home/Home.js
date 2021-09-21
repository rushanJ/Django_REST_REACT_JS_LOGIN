
import React from 'react';
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {setLogin} from '../../../Actions';
import Theme from '../../CommenComponent/Theme';

function Login() {
  const isLogedin =useSelector(state=>state.isLogedinReducer.isLogedin.name);
  const dispatch=useDispatch();
  const role =localStorage.getItem('isLogedin_role');
  return (
        <Theme>
          
        </Theme>
  );
}

export default Login;
