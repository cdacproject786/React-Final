import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


function DoctorDetails() {
const {doctor,details} = useAuth();


const [phoneNumber, setphoneNumber] = useState(details.PhoneNumber);

const [gender, setGender] = useState(details.Gender);
const [degree, setdegree] = useState(details.Degree);
const [college, setcollege] = useState(details.College);
const [registrationCouncil, setregistrationCouncil] = useState(details.RegCouncil);
const [registrationYear, setregistrationYear] = useState(details.RegYear);
const [yearOfCompletion, setyearOfCompletion] = useState(details.YearOfComp);
const [establishment, setestablishment] = useState(details.Estab);
const [establishmentName, setestablishmentName] = useState(details.EstabName);
const [establishmentPin, setEstablishmentPin] = useState(details.EstabPin);
const [establishmentLocation, setestablishmentLocation] = useState(details.EstabLoc);
const [fees, setFees] = useState(details.Fees);
const [doctorAvailTime, setdoctorAvailTime] = useState(details.DocAvailTime);
const [doctorAvailDay, setdoctorAvailDay] = useState(details.DocAvailDay);
const [medicalRegId,setMedicalRegId] = useState(details.MedRegId);
const [specialization,setSpecialization] = useState(details.Specialization);
const [establishmentCity,setEstablishmentCity] = useState(details.EstabCity);
const [yearOfExperience, setYearOfExperience] = useState(details.YearOfExp);
const establishmentProof = "tfuqbfiugbf84154+8514+15goyuvb";


const [fname, setfname] = useState(details.FirstName);
const [lname , setlname ] = useState(details.LastName);

 



  const EstabType ={
    "Establishment Type":"",
    Clinic:'C',
    Private:'P',
    Government:'G',
  
  }
  let navigate = useNavigate();

  const [maxYear, setMaxYear] = useState("");
  const currentYear = new Date().getFullYear();
  const handleYearChange = (event) => {
    const year = event.target.value;
    setMaxYear(year);
  };
  return (
    <>
      <form className="row g-3" style={{ padding: "10px" }} >
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="FirstName"
            placeholder="First Name"
            value={fname}
            onChange = {p=>(setfname(p.target.value))}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="LastName"
            placeholder="Last Name"
            value ={lname}
            onChange = {p=>(setlname(p.target.value))}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="mob"
            placeholder="Mobile Number"
            value={phoneNumber}
            onChange = {p=>setphoneNumber(p.target.value)}
            required
          />
        </div>
        {/* <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address Lane 1"
            required
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Address Lane 2"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="City"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="inputState"
            placeholder="State"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Country"
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            id="pincode"
            placeholder="Pincode"
            required
          />
        </div>

        <div className="col-md-4" id="divlabel">
          <label htmlFor="year">Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            id="dateofbirth"
            placeholder="DD/MM/YYYY"
            required
          />
        </div> */}
        <div className="col-md-4">
          <select id="inputState" className="form-control" required value={gender}
          onChange={p=>setGender(p.target.value)}>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Not Disclose</option>
          </select>
        </div>

       

        <div className="col-md-4"> {/* specialization */}
            <input
              type="text"
              className="form-control"
              id="specialization"
              placeholder="Specialization"
              value={specialization}
              onChange={p=>setSpecialization(p.target.value)}
              required
            />
          </div>

          <div className="col-md-4"> {/* degree */}
            <input
              type="text"
              className="form-control"
              id="degree"
              placeholder="Highest Degree"
              value={degree}
              onChange={p=>setdegree(p.target.value)}
              required
            />
          </div>
          <div className="col-md-8"> {/* college */}
            <input
              type="text"
              className="form-control"
              id="college"
              placeholder="College Name"
             value={college}
             onChange={p=>setcollege(p.target.value)}
             required
            />
          </div>

          <div className="col-md-4" id="divlabel"> {/* Year of Experience */}
            <label htmlFor="yearOfExperience">Year of Experience:</label>
            <input
              type="number"
              className="form-control"
              id="yearOfExperience"
              name="yearOfExperience"
              value={yearOfExperience}
              onChange={p=>setYearOfExperience(p.target.value)}
              required
            />
          </div>

          <div className="col-md-4" id="divlabel"> {/* Medical Registration Id */}
            <label htmlFor="medicalRegId">Medical Registration Id:</label>
            <input
              type="number"
              className="form-control"
              id="medicalRegId"
              name="medicalRegId"
              value={medicalRegId}
              onChange={p=>setMedicalRegId(p.target.value)}
              required
            />
          </div>

          <div className="col-md-4"> {/* registrationCouncil */}
            <input
              type="text"
              className="form-control"
              id="registrationCouncil"
              placeholder="Regitsration Council"
              value={registrationCouncil}
              onChange={p=>setregistrationCouncil(p.target.value)}
              required
            />
          </div>
          <div className="col-md-4" id="divlabel"> {/* Registration Year */}
            <label htmlFor="year">Registration Year:</label>
            <input
              type="year"
              className="form-control"
              id="registrationYear"
              name="year"
              min="1900"
              max={maxYear || currentYear.toString()}
              value={registrationYear}
              onChange={p=>setregistrationYear(p.target.value)}
              required
            />
          </div>
          <div className="col-md-4" id="divlabel"> {/* Completion Year */}
            <label htmlFor="year">Completion Year:</label>
            <input
              type="year"
              className="form-control"
              id="yearOfCompletion"
              name="year"
              min="1900"
              max={maxYear || currentYear.toString()}
              value={yearOfCompletion}
              onChange={p=>setyearOfCompletion(p.target.value)}
              required
            />
          </div>
          <div className="col-md-4"> {/* establishmentType */}
            <select id="establishment" className="form-control" required value={establishment} onChange={p=>setestablishment(p.target.value)}>
            {Object.entries(EstabType).map((g) => (
                <option value={g[1]}>{g[0]}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4"> {/* establishmentName */}
            <input
              type="text"
              className="form-control"
              id="establishmentName"
              placeholder="Establishment Name"
              value={establishmentName}
              onChange={p=>setestablishmentName(p.target.value)}
              required
            />
          </div>
          <div className="col-md-4"> {/* establishmentCity */}
            <input
              type="text"
              className="form-control"
              id="establishmentCity"
              placeholder="Establishment City"
              value={establishmentCity}
              onChange={(p) => {
                setEstablishmentCity(p.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-4"> {/* establishmentPin */}
            <input
              type="number"
              className="form-control"
              id="establishmentPin"
              placeholder="Establishment Pin Code"
              value={establishmentPin}
              onChange={p=>setEstablishmentPin(p.target.value)}
              required
            />
          </div>
          <div className="col-md-3"> {/* fees */}
            <input
              type="number"
              className="form-control"
              id="fees"
              placeholder="Fees"
              value={fees}
              onChange={p=>setFees(p.target.value)}
              required
            />
          </div>
          <div className="col-md-9"> {/* establishmentLocation */}
            <input
              type="text"
              className="form-control"
              id="establishmentLocation"
              placeholder="Establishment Locality"
              value={establishmentLocation}
              onChange={p=>setestablishmentLocation(p.target.value)}
              required
            />
          </div>
         
          <div className="col-md-6"> {/* doctorAvailTime */}
            <input
              type="text"
              className="form-control"
              id="doctorAvailTime"
              placeholder="Available Time Slots (E.g: 10 am to 1 pm ,6pm to 10 pm, etc.)"
              value={doctorAvailTime}
              onChange={p=>setdoctorAvailTime(p.target.value)}
              required
            />
          </div>
          <div className="col-md-6"> {/* doctorAvailDay */}
            <input
              type="text"
              className="form-control"
              id="doctorAvailDay"
              placeholder="Available Days (E.g: Monday,Tuesday,Thursday etc.)"
              value={doctorAvailDay}
              onChange={p=>setdoctorAvailDay(p.target.value)}
              required
            />
          </div>

        <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-success"
              style={{ marginRight: "10px" }}
            >
              Update
            </button>
          
          </div>
      </form>
    </>
  );
}

export default DoctorDetails;
