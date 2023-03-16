// import React from 'react'
// import Navbar from './Navbar'
// import { FaUserCircle } from 'react-icons/fa';

// function Sidebar() {
//   return (
//     <>
//       <Navbar/>
//     <div class="row">
//     <div class="col-md-2">
//       <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//       <FaUserCircle size={150} className="rounded-circle" />
//         <a class="nav-link" id="v-pills-b-tab" data-toggle="pill" href="#v-pills-b" role="tab" aria-controls="v-pills-b" aria-selected="false">EDIT PROFILE</a>
//         <a class="nav-link" id="v-pills-c-tab" data-toggle="pill" href="#v-pills-c" role="tab" aria-controls="v-pills-c" aria-selected="false">SHOW MEDICAL LOG</a>
//         <a class="nav-link" id="v-pills-d-tab" data-toggle="pill" href="#v-pills-d" role="tab" aria-controls="v-pills-d" aria-selected="false">LOGOUT</a>
//       </div>
//     </div>
//     <div class="col-md-10">
//       <div class="tab-content" id="v-pills-tabContent">

//         <div class="tab-pane fade" id="v-pills-b" role="tabpanel" aria-labelledby="v-pills-b-tab">

//         </div>
//         <div class="tab-pane fade" id="v-pills-c" role="tabpanel" aria-labelledby="v-pills-c-tab">
//           <h4>Section C</h4>
//           <p>Content for section C goes here...</p>
//         </div>
//         <div class="tab-pane fade" id="v-pills-d" role="tabpanel" aria-labelledby="v-pills-d-tab">
//           <h4>Section D</h4>
//           <p>Content for section D goes here...</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   </>
//   )
// }

// export default Sidebar

// import React from "react";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
// import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
// import { FaUserCircle } from "react-icons/fa";

// const Sidebar = () => {
//   return (
//     <>
//       <Navbar />
//       <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
//         <CDBSidebar textColor="#0f583f" backgroundColor="#f4f4f4">
//           <FaUserCircle size={150} className="rounded-circle" />
//           <CDBSidebarContent className="sidebar-content">
//             <CDBSidebarMenu>
//               <NavLink exact to="#v-pills-b" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="user" className="sidebaritem" role="tablist">
//                   EDIT PROFILE
//                 </CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/tables" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem icon="table">
//                   SHOW MEDICAL LOG
//                 </CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/profile" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem>LOGOUT</CDBSidebarMenuItem>
//               </NavLink>
//             </CDBSidebarMenu>
//           </CDBSidebarContent>
//         </CDBSidebar>
//         <div class="row">
//           <div class="col-md-10">
//               <div class="tab-content" id="v-pills-tabContent">
//                 <div class="tab-pane fade" id="v-pills-b" role="tabpanel" aria-labelledby="v-pills-b-tab">hi</div>
//               </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
// import React from "react";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
// import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
// import { FaUserCircle } from "react-icons/fa";

// function Sidebar() {
//    return (
//      <>
//        <Navbar/>
//      <div class="row">
//        <div class="col-md-2" style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
//        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//           <CDBSidebar class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" textColor="#0f583f" backgroundColor="#f4f4f4">
//             <FaUserCircle size={150} className="rounded-circle" />
//   	          <CDBSidebarContent className="sidebar-content">
// 	              <CDBSidebarMenu>
//  	                <NavLink exact to="#v-pills-b" activeClassName="activeClicked">
//                       <CDBSidebarMenuItem icon="user" className="sidebaritem" role="tablist" id="v-pills-b-tab" data-toggle="pill" href="#v-pills-b" role="tab" aria-controls="v-pills-b" aria-selected="false">
//                                 EDIT PROFILE
//                       </CDBSidebarMenuItem>
// 	                </NavLink>
//                           {/* <a class="nav-link" id="v-pills-b-tab" data-toggle="pill" href="#v-pills-b" role="tab" aria-controls="v-pills-b" aria-selected="false">EDIT PROFILE</a> */}
//                   <NavLink exact to="/tables" activeClassName="activeClicked" id="v-pills-c-tab" data-toggle="pill" href="#v-pills-c" role="tab" aria-controls="v-pills-c" aria-selected="false">
//                                 <CDBSidebarMenuItem icon="table">
//                                   SHOW MEDICAL LOG
//                                 </CDBSidebarMenuItem>
//                   </NavLink>        

//                            {/* <a class="nav-link" id="v-pills-c-tab" data-toggle="pill" href="#v-pills-c" role="tab" aria-controls="v-pills-c" aria-selected="false">SHOW MEDICAL LOG</a> */}
//                   <NavLink exact to="/profile" activeClassName="activeClicked" id="v-pills-d-tab" data-toggle="pill" href="#v-pills-d" role="tab" aria-controls="v-pills-d" aria-selected="false">
//                     <CDBSidebarMenuItem>LOGOUT</CDBSidebarMenuItem>
//                   </NavLink>
//                 </CDBSidebarMenu>
//               </CDBSidebarContent>
//             </CDBSidebar>


//                         {/* <a class="nav-link" id="v-pills-d-tab" data-toggle="pill" href="#v-pills-d" role="tab" aria-controls="v-pills-d" aria-selected="false">LOGOUT</a> */}
//             </div>
//      <div class="col-md-10">
//        <div class="tab-content" id="v-pills-tabContent">

//          <div class="tab-pane fade" id="v-pills-b" role="tabpanel" aria-labelledby="v-pills-b-tab">

//          </div>
//          <div class="tab-pane fade" id="v-pills-c" role="tabpanel" aria-labelledby="v-pills-c-tab">
//            <h4>Section C</h4>
//            <p>Content for section C goes here...</p>
//          </div>
//          <div class="tab-pane fade" id="v-pills-d" role="tabpanel" aria-labelledby="v-pills-d-tab">
//            <h4>Section D</h4>
//            <p>Content for section D goes here...</p>
//          </div>
//        </div>
//      </div>
//    </div>
//    </div>
//    </>
//  );
// };

// export default Sidebar;

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Navbar from './Navbar';
import PatientDetails from './PatientDetails';




function Sidebar  (props)  {
  const [showProfile, setShowProfile] = React.useState(false);
  const [medsection, setMedsection] = React.useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
    setMedsection(false);
  };

  const handleMedlogClick = () => {
    setShowProfile(false);
    setMedsection(true);
  };

 

  return (
    <>
    <Navbar/>
    <div style={{ display: "flex", height:'150vh', overflow: "scroll initial" }}>
      <CDBSidebar textColor="#0f583f" backgroundColor="#f4f4f4">
        <FaUserCircle size={150} className="rounded-circle" />
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="user" className="sidebaritem" role="tablist" onClick={handleProfileClick}>
              Edit Profile
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="table" onClick={handleMedlogClick}>
              {props.section}
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <a href={props.logout}>Logout</a>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      {showProfile && (
        < div style={{ flex: 1 }}>
         {props.details}
        </div>
      )}
      {medsection && <div style={{ flex: 1 }}>{props.medsection}</div> }
      
    </div>
    </>
  );
};

export default Sidebar;
