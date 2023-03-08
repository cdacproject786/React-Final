import React from 'react'
import Signin from '../components/Signin'

function DoctorSignin() {
  return (
    <div>
      <Signin name="Doctor" register="/Doctor/Register"/>
    </div>
  )
}

export default DoctorSignin
