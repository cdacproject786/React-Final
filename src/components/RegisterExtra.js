import React, { useState } from 'react'

export function PatientRegisterExtra() {
  const [blood_group, setBlood_Group] = useState('');
  const [blood_pressure, setBlood_Pressure] = useState('');
  const [weight, setWeight] = useState('');
  const [sugar_level, setSugar_Level] = useState('');
  return (
    <>

  <div className="col-md-2">
    <input type="text" className="form-control" id="bloodgroup" placeholder="Blood group" required
    value={blood_group} onChange={ p => {setBlood_Group(p.target.value)}}/>
  </div>
  <div className="col-md-2">
    <input type="text" className="form-control" id="bloodpressure" placeholder="Blood pressure" required
    value={blood_pressure} onChange={ p => {setBlood_Pressure(p.target.value)}}/>
  </div>
  <div className="col-md-2">
    <input type="number" className="form-control" id="weight" placeholder="Weight" step="any" required
    value={weight} onChange={ p => {setWeight(p.target.value)}}/>
  </div>
  <div className="col-md-2">
    <input type="text" className="form-control" id="sugarlevel" placeholder="Sugar Level" required
    value={sugar_level} onChange={ p => {setSugar_Level(p.target.value)}}/>
  </div>
  <Insurance/>
    </>
  )
}

export function Basic(){
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [mobile, setMobile] = useState('');
  
   const basicData = {fname,lname,mobile}
   //props.basicSubmit(basicData);
  return (
    <>
    <div className="col-md-6">
    <input type="text" className="form-control" id="FirstName" placeholder="First Name" required
    value={fname} onChange={ p => {setFname(p.target.value)}}/>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="LastName" placeholder="Last Name" required
    value={lname} onChange={ p => {setLname(p.target.value)}}/>
  </div>
  <div className="col-md-3">
    <input type="text" className="form-control" id="mob" placeholder="Mobile Number" required 
    value={mobile} onChange={ p => {setMobile(p.target.value)}}/>
  </div>
  </>
  )
}

export function Address(){
  const [addressline1, setAddressLine1] = useState('');
  const [addressline2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  return(
    <>
    <div className="col-12">
    <input type="text" className="form-control" id="inputAddress" placeholder="Address Lane 1" required
    value={addressline1} onChange={ p => {setAddressLine1(p.target.value)}}/>
  </div>
  <div className="col-12">
    <input type="text" className="form-control" id="inputAddress2" placeholder="Address Lane 2"
    value={addressline2} onChange={ p => {setAddressLine2(p.target.value)}}/>
  </div>
  <div className="col-md-4">
    <input type="text" className="form-control" id="inputCity" placeholder="City" required
    value={city} onChange={ p => {setCity(p.target.value)}}/>
  </div>
  <div className="col-md-4">
    <input type="text" className="form-control" id="inputState" placeholder="State" required
    value={state} onChange={ p => {setState(p.target.value)}}/>
  </div>
  <div className="col-md-4">
    <input type="text" className="form-control" id="country" placeholder="Country" required
    value={country} onChange={ p => {setCountry(p.target.value)}}/>
  </div>

  <div className="col-md-4">
    <input type="number" className="form-control" id="pincode" placeholder="Pincode" required
    value={pincode} onChange={ p => {setPincode(p.target.value)}}/>
  </div>
    </>
  )
}

export function Insurance(){
  const [insuranceid, setInsuranceId] = useState('');
  const [insurancename, setInsuranceName] = useState('');
  const [insuranceexpirydate, setInsuranceExpiryDate] = useState('');

  return(
    <>
      <div className="col-md-3">
    <input type="text" className="form-control" id="insurancename" placeholder="Insurance Name"
    value={insurancename} onChange={ p => {setInsuranceName(p.target.value)}}/>
  </div>
  <div className="col-md-3">
    <input type="text" className="form-control" id="insuranceid" placeholder="Insurance Id"
    value={insuranceid} onChange={ p => {setInsuranceId(p.target.value)}}/>
  </div>
  <div className="col-md-3" id='divlabel'>
  <label htmlFor="year" >Expiry Date:</label>
    <input type="date" className="form-control" id="insuranceexpirydate" placeholder="Expiry date"
    value={insuranceexpirydate} onChange={ p => {setInsuranceExpiryDate(p.target.value)}}/>
  </div>
    </>
  )
}

export function Aabha()
{
  const [abhaa, setAbhaa] = useState('');
  return(
    <>
    <div className="col-md-3">
    <input type="number" className="form-control" id="aabhaa" placeholder="Aabha Number"
    value={abhaa} onChange={ p => {setAbhaa(p.target.value)}}/>
  </div>
    </>
  )
}
export default PatientRegisterExtra
