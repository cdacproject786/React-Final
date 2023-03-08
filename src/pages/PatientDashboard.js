import Sidebar from '../components/Sidebar'
import React from 'react'
import PatientDetails from '../components/PatientDetails'

 function PatientDashboard() {
  return (
    <div>
    <Sidebar details={<PatientDetails/>}/>
    </div>
  )
}





export default PatientDashboard
