import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


function SendOTP() {
//  const [email,setEmail] = useState("");
const navigate = useNavigate();
  const {patient,setPatient} = useAuth();
  const [em,setEm] = useState("");
    const getOTP =(e) =>{
        e.preventDefault();
        axios
        .post(`http://localhost:9010/patient/${patient.emailID}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status===200) {
           document.getElementById("otpcheck").innerHTML="Success" 
          navigate("/DoctorOk/validateOTP")
          
          }
        })
        .catch((error) => {
          if (error?.response?.status === 404||401)
            document.getElementById("otpcheck").innerHTML = "Retry sending OTP";
         
        });
    }

  return (
    <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4
                class="card-title text-center mb-4"
                style={{ color: "#0f583f" }}
              >
                Add Patient
              </h4>
              <form id="myForm">
                <div class="form-group">
                  <label htmlFor="email">Enter Patient Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Email"
                    required
                    value={em}
                     
                    onChange={(p) => {
                      const emailID = p.target.value;
                      setEm(emailID);
                      setPatient({emailID})
                    }}
                  />
                 
                  <span id="otpcheck"></span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  id="btn1"
                >
                  <button
                    type="submit"
                    class="btn btn-primary bg-success"
                    id="OTPBtn"
                  onClick={getOTP}
                  >
                    Send OTP
                  </button>
                </div>
              </form>

              {/* <StatusModal
                              show={modalShow}
                              onHide={() => { setModalShow(false); navigate("/Patient/ResetPass") }}
                              title={title}
                              body={body}
                          /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SendOTP
