export const setLogin =(data)=>{
    return{
      type:'IS_LOGEDIN',
      data:data
    }
  }

  
export const logout =()=>{
    return{
      type:'LOGOUT'
    }
  }