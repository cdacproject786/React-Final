import React, { Component, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { CDBSidebar, CDBSidebarContent, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact'
function PatientDetails() {

    const { auth } = useAuth();
    const accessT = "Bearer " + auth.accessToken
    const uid = auth.uid

    const [medrecordid, setMed_Record_ID] = useState(4)

    const getData = () => {

        axios.get("http://localhost:4001/patient/getMedRecordDetails/" + uid, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessT
            }
        }).then((response) => {
            console.log(response.data)
            const weight = response?.data?.WEIGHT
            setMed_Record_ID(weight)
        })
    }

    useEffect(() => {
        getData();
    })
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

  const handleLogOutClick = () => {
    setAuth()
    navigate("/")
  }
    return (
        <div>
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
                
            </div>
            

        </div>
    )
}

export default PatientDetails;