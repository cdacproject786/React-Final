import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";



function PatientDetails(props) {
  const { auth, setPatient, setAddress, patient } = useAuth();
  const accessT = "Bearer " + auth.accessToken;
  const uid = auth.uid;
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()


  const getData = async () => {
    const result = await axios.get("http://localhost:4001/patient/getPatientPrimaryDetails/" + uid, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessT,
      }
    }).then((response) => {
      console.log(response.data)
      const fname = response?.data?.FNAME
      const lname = response?.data?.LNAME
      const profilephoto = response?.data?.PROFILE_PHOTO
      const dateofbirth = response?.data?.DATE_OF_BIRTH
      const adhaarcard = response?.data?.ADHAAR_CARD
      const phone = response?.data?.PHONE
      const gender = response?.data?.GENDER
      const maritalstatus = response?.data?.MARITAL_STATUS
      const occupation = response?.data?.OCCUPATION
      const addressid = response?.data?.ADDRESS_ID
      const email = response?.data?.EMAIL
      
      setFname(fname)
      setLname(lname)
      setPatient({ email,fname, lname, profilephoto, dateofbirth, adhaarcard, phone, gender, maritalstatus, occupation, addressid })
    })
   
  };

  const getADDData = async () => {
    const result = await axios.get("http://localhost:4001/patient/getaddressDetails/" + patient.addressid, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessT,
      }
    }).then((response) => {
      console.log(response.data)
      const addressline1 = response?.data?.Address_line_1
      const city = response?.data?.City
      const state = response?.data?.User_State
      const country = response?.data?.Country
      const pincode = response?.data?.PinCode
      
      setAddress({ addressline1,city,state,country,pincode })
    })
   
  };

  useEffect(() => {
    getData()
    getADDData()
  }, []);

  const [editProfile, setEditProfile] = useState(false);
  const [showMedLogs, setShowMedLogs] = useState(false);
  const [addMedDetails, setAddMedDetails] = useState(false)

  const [showMedDetails, setShowMedDetails] = useState(false)
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handleProfileClick = () => {
    setEditProfile(true);
    setAddMedDetails(false)

    setShowMedDetails(false)
    setShowMedLogs(false)
  };

  /*  const handleMedlogClick = () => {
     setShowProfile(false);
     setShowMedlog(true);
   }; */

  const handleAddMedDetailsClick = () => {
    setEditProfile(false);
    setAddMedDetails(true)

    setShowMedDetails(false)
    setShowMedLogs(false)
  };



  const handleShowMedDetailsClick = () => {
    setEditProfile(false);
    setAddMedDetails(false)

    setShowMedDetails(true)
    setShowMedLogs(false)
  };

  const handleShowMedlogClick = () => {
    setEditProfile(false);
    setAddMedDetails(false)

    setShowMedDetails(false)
    setShowMedLogs(true)
  };

  const handleLogOutClick = () => {
    setAuth();
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }} >
        <CDBSidebar textColor="#0f583f" backgroundColor="#f4f4f4">
          <FaUserCircle size={150} className="rounded-circle" />
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <CDBSidebarMenuItem className="sidebaritem" >
                <h4>{fname} {lname}</h4>
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="user" className="sidebaritem" role="tablist" onClick={handleProfileClick} >
                Edit Profile
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="table" onClick={handleAddMedDetailsClick}>
                Add Med Details
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="table" onClick={handleShowMedDetailsClick}>
                Show Med Details
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="table" onClick={handleShowMedlogClick}>
                Show Medlog
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem onClick={handleLogOutClick}>
                Logout
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>

        <div>
          {editProfile && <div style={{ flex: 1 }}>{props.editProfileDetails}</div>}
          {addMedDetails && <div style={{ flex: 1 }}>{props.addMedicalDetails}</div>}

          {showMedDetails && <div style={{ flex: 1 }}>{props.showMedicalDetails}</div>}
          {showMedLogs && <div style={{ flex: 1 }}>{props.showMedicalLogs}</div>}
        </div>
      </div>

    </div>
  );
}

export default PatientDetails;
