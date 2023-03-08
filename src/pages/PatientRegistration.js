import React from 'react'
import PatientRegisterExtra, { Aabha, Insurance } from '../components/RegisterExtra'
import Register from '../components/Register'

function PatientRegistration() {
  
  return (
    <Register name="PATIENT's" changes="Occupation" extra={<PatientRegisterExtra/>} aabha={<Aabha/>} link="/Patient" />
  )
}

export default PatientRegistration
