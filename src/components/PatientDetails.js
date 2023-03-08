import React from 'react'
import PatientRegisterExtra, { Address, Basic } from './RegisterExtra'

function PatientDetails() {
  return (
    <>
     <form className="row g-3" style={{padding:'10px'}}>
        <Basic/>
        <PatientRegisterExtra/>
        <Address/>
        <div className="col-12 text-center">
    <button type="submit" className="btn btn-success" style={{ marginRight:'10px'}}>Update</button>
    <input className="btn btn-danger" type="reset" value="Reset"></input>
  </div>
        
    </form>
    </>
  )
}

export default PatientDetails
