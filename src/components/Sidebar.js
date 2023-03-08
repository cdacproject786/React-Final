import React, { useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Navbar from './Navbar';
import PatientDetails from './PatientDetails';
import useAuth from '../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';




function Sidebar(props) {
  const [showProfile, setShowProfile] = React.useState(false);
  const [showMedlog, setShowMedlog] = React.useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handleProfileClick = () => {
    setShowProfile(true);
    setShowMedlog(false);
  };

  const handleMedlogClick = () => {
    setShowProfile(false);
    setShowMedlog(true);
  };
  /* 
    useEffect(()=> {
      handleLogOutClick();
      setAuth()
    },[]) */
  const handleLogOutClick = () => {
    setAuth()
    navigate("/")
  }



  return (
    <>
      <Navbar />
      <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
        <CDBSidebar textColor="#0f583f" backgroundColor="#f4f4f4">
          <FaUserCircle size={150} className="rounded-circle" />
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="user" className="sidebaritem" role="tablist" onClick={handleProfileClick}>
                Edit Profile
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="table" onClick={handleMedlogClick}>
                Show Medlog
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem onClick={handleLogOutClick}>
                Logout
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
        {showProfile && (
          < div style={{ flex: 1 }}>
            {props.details}
          </div>
        )}
        {showMedlog && <div style={{ flex: 1 }}>{props.medsection}</div>}
      </div>
    </>
  );
};

export default Sidebar;
