const initialState={
    isLogedin:{
      status:false,
      name:"PENDING",
      id:null,
      role:null,
    }
  }


const isLogedinReducer=(state=initialState,action)=>{
    const newState={...state};
    // const SERVER_URL = `https://61m46.sse.codesandbox.io`;
    switch (action.type){
      case 'IS_LOGEDIN' :
        //console.log(action.data.role);
        newState.isLogedin.status=true;
        newState.isLogedin.name=action.data.name;
        newState.isLogedin.id=action.data.id;
        newState.isLogedin.role=action.data.role;

        localStorage.setItem('isLogedin_status', true);
        localStorage.setItem('isLogedin_name', action.data.name);
        localStorage.setItem('isLogedin_id', action.data.id);
        localStorage.setItem('isLogedin_role', action.data.role);
        //console.log(action.data.role);
        
        window.location.href = "/Home";
        // window.location.replace("/Home");
        break;
      case 'LOGOUT' :
          newState.isLogedin.status=false;
          newState.isLogedin.name="";
          newState.isLogedin.id=null;
          newState.isLogedin.role=null;
          break;
        
    }
  
    return newState;
  }

export default isLogedinReducer;