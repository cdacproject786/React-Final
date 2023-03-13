
import React from 'react'
import PatientDetails from '../components/PatientDetails'
import ShowMedLog from '../components/ShowMedLog'
import ShowMedRecords from '../components/ShowMedRecords'
import PatientEditDetails from '../components/PatientEditDetails'
import PatientAddMedRecords from '../components/PatientAddMedRecords'

 function PatientDashboard() {
  return (
    <div>
    <PatientDetails editProfileDetails={<PatientEditDetails/>} 
                    addMedicalDetails={<PatientAddMedRecords/>} 
                     
                    showMedicalDetails={<ShowMedRecords/>} 
                    showMedicalLogs={<ShowMedLog/>} />
    </div>
  )
}





export default PatientDashboard
