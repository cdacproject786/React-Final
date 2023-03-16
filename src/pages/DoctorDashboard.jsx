import Sidebar from '../components/Sidebar'
import React, { useEffect } from 'react'

import DoctorDetails from '../components/DoctorDetails'
import AddPatient from '../components/AddPatient'
import useAuth from '../hooks/useAuth'
import axios from 'axios'


 function DoctorDashboard(props) {
  const {doctor,setDetails} = useAuth();
  useEffect( ()=>{ try{ 
    const email = doctor.emails;
    // console.log("In try")
     const result =   axios.get(`http://localhost:9010/doctor/data/${email}`, {
     headers: {
         'Content-Type': 'application/json'
     }
  }).then(response => {
  console.log(response?.data)
  
      //  console.log("IN Response")
      const FirstName = response.data.fname
      const LastName  = response.data.lname
      const PhoneNumber = response.data.phoneNumber
      const College= response.data.college
      const Degree= response.data.degree
      const DocAvailDay= response.data.doctorAvailDay
      const DocAvailTime= response.data.doctorAvailTime
      const Estab= response.data.establishment
      const EstabCity= response.data.establishmentCity
      const EstabLoc= response.data.establishmentLocation
      const EstabName= response.data.establishmentName
      const EstabPin= response.data.establishmentPin
      const Fees= response.data.fees
      const Gender= response.data.gender
      const MedRegId= response.data.medicalRegId
      const RegCouncil= response.data.registrationCouncil
      const RegYear= response.data.registrationYear
      const Specialization= response.data.specialization
      const YearOfComp= response.data.yearOfCompletion
      const YearOfExp= response.data.yearOfExperience
      setDetails({FirstName,LastName,PhoneNumber,College,Degree,DocAvailDay,DocAvailTime,Estab,EstabCity,EstabLoc,EstabName,EstabPin,
      Fees, Gender,MedRegId,RegCouncil,RegYear,Specialization,YearOfComp,YearOfExp})
     
   
    
  })
  } catch (error) {
  console.log(error.response)
  //  if(error.response.status===401||400){
  //   console.log("IN error")
    
  //  }
  }},[])
  return (
     
    <Sidebar details={<DoctorDetails/>} medsection={props.page} logout="/Doctor" section="Add Patient"/>
  
  )
}





export default DoctorDashboard
