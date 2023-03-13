import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import StatusModal from "../pages/StatusModal";

function PatientRegister(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [date_of_birth, setDateofbirth] = useState('');
    const [gender, setGender] = useState('');
    const [aadhaar, setAadhaar] = useState('');
    const [marital_status, setMartialStatus] = useState('');
    const [address_line_1, setAddressLine1] = useState('');
    
    const [city, setCity] = useState('');
    const [user_state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const [occupation, setOccupation] = useState('')

    
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [title,setTitle] = useState()
    const [body,setBody] = useState()

    function submitPatient(e) {
        e.preventDefault();
        try {
            let data = {
                fname, lname, mobile, email, pwd, occupation,
                date_of_birth, gender, aadhaar, marital_status, address_line_1, city, user_state, country, pincode
            }
            const result = axios.post("http://localhost:4001/patient/register", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if(response)
                handleStatusModal("Registration Status","Successfull !!")
                else
                handleStatusModal("Registration Status","Unsuccessfull !!")
            })
        } catch (error) {
            
        }
        
        
        
    }

    const handleStatusModal = (title,body) => {
        setTitle(title)
        setBody(body)
        setModalShow(true)
        
    }

    const genders = {
        Male: 'M',
        Female: 'F',
        
    }
    const martials = {
        Married: 'M',
        Single: 'U'
    }


    return (
        <div>
            <Navbar />
            <div className="container signin-panel">
                <div className="reghead">
                    <h4>{props.name} Registeration</h4>
                    <h6>Already have an account? <Link to="/Patient/Login">Sign in here</Link></h6>
                </div><hr />

                <form className="row g-3" onSubmit={submitPatient}>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="FirstName" placeholder="First Name" required
                            value={fname} onChange={p => { setFname(p.target.value) }} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="LastName" placeholder="Last Name" required
                            value={lname} onChange={p => { setLname(p.target.value) }} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" id="mob" placeholder="Mobile Number" required
                            value={mobile} onChange={p => { setMobile(p.target.value) }} />
                    </div>
                    <div className="col-md-3">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email Id" required
                            value={email} onChange={p => { setEmail(p.target.value) }} />
                    </div>
                    <div className="col-md-3">
                        <input type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>
                    <div className="col-md-3">
                        <input type="password" name="pwd" className="form-control" id="confirmpassword" placeholder="Confirm Password" required
                            value={pwd} onChange={p => { setPwd(p.target.value) }} />
                        <div className="form-text confirm-message"></div>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address Line 1" required
                            value={address_line_1} onChange={p => { setAddressLine1(p.target.value) }} />
                    </div>

                    <div className="col-md-4">
                        <input type="text" className="form-control" id="inputCity" placeholder="City" required
                            value={city} onChange={p => { setCity(p.target.value) }} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="inputState" placeholder="State" required
                            value={user_state} onChange={p => { setState(p.target.value) }} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="country" placeholder="Country" required
                            value={country} onChange={p => { setCountry(p.target.value) }} />
                    </div>

                    <div className="col-md-4">
                        <input type="number" className="form-control" id="pincode" placeholder="Pincode" required
                            value={pincode} onChange={p => { setPincode(p.target.value) }} />
                    </div>

                    <div className="col-md-4" id='divlabel'>
                        <label htmlFor="year" >Date of Birth:</label>
                        <input type="date" className="form-control" id="dateofbirth" placeholder="DD/MM/YYYY" required
                            value={date_of_birth} onChange={p => { setDateofbirth(p.target.value) }} />
                    </div>
                    <div className="col-md-4">
                        <select id="inputState" className="form-control" required
                            value={gender} onChange={p => setGender(p.target.value)}>
                            {
                                Object.entries(genders).map(g => (<option value={g[1]}>{g[0]}</option>))
                            }
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input type="number" className="form-control" id="aadhaar" placeholder="Aadhaar Number" required
                            value={aadhaar} onChange={(p) => { setAadhaar(p.target.value) }} />
                    </div>

                    <div className="col-md-4">
                        <select id="inputState" className="form-control" required
                            value={marital_status} onChange={p => setMartialStatus(p.target.value)}>
                            {
                                Object.entries(martials).map(m => (<option value={m[1]}>{m[0]}</option>))
                            }
                        </select>
                    </div>
                    
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="occupation" placeholder="Occupation" required
                            value={occupation} onChange={p => { setOccupation(p.target.value) }} />
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit"  className="btn btn-success" style={{ marginRight: '10px' }}>Sign Up</button>
                        <input className="btn btn-danger" type="reset" value="Reset"></input>
                    </div>

                </form>
            </div>
            <StatusModal
            show={modalShow}
            onHide={() => {setModalShow(false);navigate("/Patient/Login")}}
            title={title}
            body={body}
          />
        </div>
    );
}

export default PatientRegister;
