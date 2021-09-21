import React , { useState, useEffect }from 'react';
import {useDispatch,useSelector} from 'react-redux';



function SlideDrawer() {
    const role =localStorage.getItem('isLogedin_role');
    const name =useSelector(state=>state.isLogedinReducer.isLogedin.name);
    const [slideDrawer, SlideDrawer] = useState();
    //console.log(role);
    // if (role=="ADMIN")
    // SlideDrawer(<hr className="sidebar-divider"></hr>) ;
    // else  SlideDrawer(<hr className="sidebar-divider"></hr>) ;

  return (
    <div>
 {role=="ADMIN" ? 
<ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">
                SB Admin <sup>2</sup>
              </div>
              

          
            </a>

          
            {/* {slideDrawer} */}
           
            <hr className="sidebar-divider"></hr>
           
            <div className="sidebar-heading">Master Data</div>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>Student</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Student:</h6>
                  <a className="collapse-item" href="/students">
                    Student List
                  </a>
                  <a className="collapse-item" href="/student/New">
                    New Student
                  </a>
                </div>
              </div>
            </li>
            
            
          </ul>
    : ''}


{role=="USER" ? 
<ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">
                SB Admin <sup>2</sup>
              </div>
              

          
            </a>

          
            {/* {slideDrawer} */}
           
            <hr className="sidebar-divider"></hr>
           

            
            
            
          </ul>
    : ''}

     
    </div>
  );
}

export default SlideDrawer;