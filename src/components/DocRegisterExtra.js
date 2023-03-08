import React from 'react'
import { useState } from 'react';

function DocRegisterExtra() {

    const [maxYear, setMaxYear] = useState('');

  const handleYearChange = (event) => {
    const year = event.target.value;
    setMaxYear(year);
  };

  const currentYear = new Date().getFullYear();

  return (
   <>
    <div className="col-md-4">
    <input type="text" className="form-control" id="docdegree" placeholder="Highest Degree"/>
  </div>
  <div className="col-md-8">
    <input type="text" className="form-control" id="collegename" placeholder="College Name"/>
  </div>
  <div className="col-md-4">
    <input type="text" className="form-control" id="regcouncil" placeholder="Regitsration Council"/>
  </div>
  <div className="col-md-4" id='divlabel'>
  <label htmlFor="year" >Registration Year:</label>
  <input type="number" className="form-control" id="year" name="year" min="1900"  max={maxYear || currentYear.toString()}/>
  </div>
  <div className="col-md-4" id='divlabel'>
  <label htmlFor="year" >Completion Year:</label>
  <input type="number" className="form-control" id="year" name="year" min="1900"  max={maxYear || currentYear.toString()}/>
  </div>
  <div className="col-md-4">
  <select id="estabtype" className="form-control">
        <option>Establishment type</option>
      <option>Government</option>
      <option>Clinic</option>
      <option>Private</option>
    </select>
  </div>
  <div className="col-md-4">
    <input type="text" className="form-control" id="estabname" placeholder="Establishment Type"/>
  </div>
  <div className="col-md-4">
    <input type="number" className="form-control" id="pincode" placeholder="Pincode"/>
  </div>
  <div className="col-md-9">
    <input type="text" className="form-control" id="establocality" placeholder="Establishment Locality"/>
  </div>
  <div className="col-md-3">
    <input type="number" className="form-control" id="fees" placeholder="Fees"/>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="timeslot" placeholder="Available Time Slots (E.g: 10 am to 1 pm ,6pm to 10 pm, etc.)"/>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="docday" placeholder="Available Days (E.g: Monday,Tuesday,Thursday etc.)"/>
  </div>
   </>
  )
}

export default DocRegisterExtra
