import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function DoctorRegistration() {

  let navigate = useNavigate();

  const [maxYear, setMaxYear] = useState("");
  const currentYear = new Date().getFullYear();
  const handleYearChange = (event) => {
    const year = event.target.value;
    setMaxYear(year);
  };
  const genders = {
    Gender: '',
    Male: 'M',
    Female: 'F',
    NotDisclosed: 'N'
  }
  const maritals = {
    "Marital Status": '',
    Married: 'M',
    Single: 'S',
    Divorced: 'D',

  }
  const EstabType = {
    "Establishment Type": "",
    Clinic: 'C',
    Private: 'P',
    Government: 'G',

  }

  const SecurityQuestions = {
    "Security Questions": "",
    "Sequrity question 1": "Sequrity question 1",
    "Sequrity question 2": "Sequrity question 2",
    "Sequrity question 3": "Sequrity question 3",

  }

  //same as DB
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [gender, setGender] = useState("");
  const [adhaarCard, setadhaarCard] = useState("");
  const [maritalstatus, setMaritalstatus] = useState("Martial Status");
  const [securityQuestion, setsecurityQuestion] = useState("");
  const [securityQuestionsAnswer, setsecurityQuestionsAnswer] = useState("");
  const [addressLine1, setaddressLine1] = useState("");
  // const [addressline2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [userState, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [panCard, setpanCard] = useState("");
  const [degree, setdegree] = useState("");
  const [college, setcollege] = useState("");
  const [registrationCouncil, setregistrationCouncil] = useState("");
  const [registrationYear, setregistrationYear] = useState("");
  const [yearOfCompletion, setyearOfCompletion] = useState("");
  const [establishment, setestablishment] = useState("");
  const [establishmentName, setestablishmentName] = useState("");
  const [establishmentPin, setEstablishmentPin] = useState("");
  const [establishmentLocation, setestablishmentLocation] = useState("");
  const [fees, setFees] = useState("");
  const [doctorAvailTime, setdoctorAvailTime] = useState("");
  const [doctorAvailDay, setdoctorAvailDay] = useState("");
  const [medicalRegId, setMedicalRegId] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [establishmentCity, setEstablishmentCity] = useState("");
  const [yearOfExperience, setYearOfExperience] = useState("");
  const establishmentProof = "tfuqbfiugbf84154+8514+15goyuvb";
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const submitDoctor = async (e) => {
    e.preventDefault();
    try {
      let data = {
        fname, lname, phoneNumber, email, pwd, dateofbirth, gender, adhaarCard, maritalstatus, securityQuestion,
        securityQuestionsAnswer, addressLine1, city, userState, country, pinCode, panCard, degree, college,
        registrationCouncil, registrationYear, yearOfCompletion, establishment, establishmentName, establishmentPin,
        establishmentLocation, fees, doctorAvailTime, doctorAvailDay, medicalRegId, specialization, establishmentCity, yearOfExperience, establishmentProof
      }
      console.log(data)
      const result = await axios.post("http://localhost:9010/doctor/register", data, {

        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log("After axios");
        if (response) {
          console.log("IN Response")
          handleStatusModal("Registration Status", "Successfull !!")
          navigate("/Doctor")
        }
        else
          handleStatusModal("Registration Status", "Unsuccessfull !!")
      })
    } catch (error) {

    }


  }
  const handleStatusModal = (title, body) => {
    setTitle(title)
    setBody(body)
    setModalShow(true)

  }

  // const myFunction =()=> {
  //   document.getElementById("myform").reset();
  // }
  return (
    <div>
      <Navbar />
      <div className="container signin-panel">
        <div className="reghead">
          <h4>Doctors Registeration</h4>
          <h6>
            Already have an account? <Link to="/Doctor/Login">Sign In</Link>
          </h6>
        </div>
        <hr />

        <form className="row g-3" onSubmit={(e) => submitDoctor(e)} id="myForm">
          <div className="col-md-6"> {/* FirstName */}
            <input
              type="text"
              className="form-control"
              id="FirstName"
              placeholder="First Name"
              value={fname}
              onChange={(p) => {
                setfname(p.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-6"> {/* LastName */}
            <input
              type="text"
              className="form-control"
              id="LastName"
              placeholder="Last Name"
              value={lname}
              onChange={(p) => {
                setlname(p.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-3"> {/* mob */}
            <input
              type="text"
              className="form-control"
              id="mob"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(p) => {
                setphoneNumber(p.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-3"> {/* email */}
            <input
              type="email"
              className="form-control"
              id="inputemail4"
              placeholder="Email Id"
              value={email}
              onChange={(p) => {
                setemail(p.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-3"> {/* password */}
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="col-md-3"> {/* confirmpassword */}
            <input
              type="password"
              name="pwd"
              className="form-control"
              id="confirmpassword"
              placeholder="Confirm Password"
              value={pwd}
              onChange={(p) => {
                setpwd(p.target.value);
              }}
              required
            />
            <div className="form-text confirm-message"></div>
          </div>
          <div className="col-12"> {/* inputAddress */}
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Address Lane 1"
              value={addressLine1}
              onChange={(p) => {
                setaddressLine1(p.target.value);
              }}
              required
            />
          </div>
          {/* <div className="col-12"> inputAddress2 
             <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Address Lane 2"
              value={addressline2}
              onChange={(p) => {
                setAddressLine2(p.target.value);
              }}
              
            ></input> 
           </div> */}
          <div className="col-md-4"> {/* inputCity */}
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="City"
              value={city}
              onChange={(p) => {
                setCity(p.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-4"> {/* inputState */}
            <input
              type="text"
              className="form-control"
              id="inputState"
              placeholder="State"
              value={userState}
              onChange={(p) => {
                setState(p.target.value);
              }}
              required
            />
          </div>
          <div className="col-md-4"> {/* country */}
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Country"
              value={country}
              onChange={(p) => {
                setCountry(p.target.value);
              }}
              required
            />
          </div>

          <div className="col-md-4"> {/* pinCode */}
            <input
              type="number"
              className="form-control"
              id="pinCode"
              placeholder="pinCode"
              value={pinCode}
              onChange={(p) => {
                setpinCode(p.target.value);
              }}
              required
            />
          </div>

          <div className="col-md-4" id="divlabel"> {/* dateofbirth */}
            <label htmlFor="year">Date of Birth:</label>
            <input
              type="date"
              className="form-control"
              id="dateofbirth"
              placeholder="DD/MM/YYYY"
              value={dateofbirth}
              onChange={(p) => {
                setDateofbirth(p.target.value);
              }}
              required
            />
          </div>

          <div className="col-md-4"> {/* gender */}
            <select
              id="gender"
              className="form-control"
              value={gender}
              onChange={(p) => setGender(p.target.value)}
              required
            >
              {Object.entries(genders).map((g) => (
                <option value={g[1]}>{g[0]}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4"> {/* adhaarCard */}
            <input
              type="number"
              className="form-control"
              id="adhaarCard"
              placeholder="Adhaar Card Number"
              value={adhaarCard}
              onChange={(p) => setadhaarCard(p.target.value)}
              required
            />
          </div>

          <div className="col-md-4"> {/* maritalstatus */}
            <select
              id="maritalstatus"
              className="form-control"
              required
              value={maritalstatus}
              onChange={(p) => setMaritalstatus(p.target.value)}
            >
              {Object.entries(maritals).map((m) => (
                <option value={m[1]}>{m[0]}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4"> {/* panCard */}
            <input
              type="text"
              className="form-control"
              id="panCard"
              placeholder="Pan Card Number"
              value={panCard}
              onChange={(p) => setpanCard(p.target.value)}
              required
            />
          </div>

          <div className="col-md-4"> {/* specialization */}
            <input
              type="text"
              className="form-control"
              id="specialization"
              placeholder="Specialization"
              value={specialization}
              onChange={p => setSpecialization(p.target.value)}
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
              onChange={p => setdegree(p.target.value)}
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
              onChange={p => setcollege(p.target.value)}
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
              onChange={p => setYearOfExperience(p.target.value)}
              required
            />
          </div>

          <div className="col-md-4" id="divlabel"> {/* Medical Registration Id */}
            <label htmlFor="yearOfExperience">Medical Registration Id:</label>
            <input
              type="number"
              className="form-control"
              id="medicalRegId"
              name="medicalRegId"
              value={medicalRegId}
              onChange={p => setMedicalRegId(p.target.value)}
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
              onChange={p => setregistrationCouncil(p.target.value)}
              required
            />
          </div>
          <div className="col-md-4" id="divlabel"> {/* Registration Year */}
            <label htmlFor="year">Registration Year:</label>
            <input
              type="number"
              className="form-control"
              id="registrationYear"
              name="year"
              min="1900"
              max={maxYear || currentYear.toString()}
              value={registrationYear}
              onChange={p => setregistrationYear(p.target.value)}
              required
            />
          </div>
          <div className="col-md-4" id="divlabel"> {/* Completion Year */}
            <label htmlFor="year">Completion Year:</label>
            <input
              type="number"
              className="form-control"
              id="yearOfCompletion"
              name="year"
              min="1900"
              max={maxYear || currentYear.toString()}
              value={yearOfCompletion}
              onChange={p => setyearOfCompletion(p.target.value)}
              required
            />
          </div>
          <div className="col-md-4"> {/* establishmentType */}
            <select id="establishment" className="form-control" required value={establishment} onChange={p => setestablishment(p.target.value)}>
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
              onChange={p => setestablishmentName(p.target.value)}
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
              onChange={p => setEstablishmentPin(p.target.value)}
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
              onChange={p => setFees(p.target.value)}
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
              onChange={p => setestablishmentLocation(p.target.value)}
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
              onChange={p => setdoctorAvailTime(p.target.value)}
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
              onChange={p => setdoctorAvailDay(p.target.value)}
              required
            />
          </div>

          <div className="col-12"> {/* securityQuestion */}
            <select id="securityQuestion" className="form-control" required value={securityQuestion} onChange={p => setsecurityQuestion(p.target.value)}>
              {Object.entries(SecurityQuestions).map((g) => (
                <option value={g[1]}>{g[0]}</option>
              ))}
            </select>
          </div>
          <div className="col-12"> {/* sequrityanswer */}
            <input
              type="text"
              className="form-control"
              id="sequrityanswer"
              placeholder="Security Answer"
              value={securityQuestionsAnswer}
              onChange={(p) => setsecurityQuestionsAnswer(p.target.value)}
              required
            />
          </div>

          <div className="col-12 text-center"> {/* submit */}
            <button
              type="submit"
              className="btn btn-success"
              style={{ marginRight: "10px" }}
            >
              Sign Up
            </button>
            {/* <input
              className="btn btn-danger"
              type="reset"
              value="Reset"
              onClick={myFunction}
            ></input> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorRegistration;
