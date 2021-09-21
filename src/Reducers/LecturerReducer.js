import {loadLecturers} from '../HTTP/Lecturer';
const initialState={
       tblColumn:[
           
        {
          Header: 'Students',
          columns: [
            {
              Header: 'ID',
              accessor: 'index',
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
            {
              Header: 'Faculty',
              accessor: 'faculty',
              filter: 'includes',
            
            },
            
          ],
        },
      ],
      isLoaded:false,
      data:[]
  }


const LecturerReducer=(state=initialState,action)=>{
    const newState={...state};
    switch (action.type){
      case 'IS_LOADED' :
        // //console.log("Running on LecturerReducer");
        newState.isLoaded=true;
        newState.data=action.data;
        // //console.log(loadLecturers(5545))
      
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

export default LecturerReducer;