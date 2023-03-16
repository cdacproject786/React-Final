import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function OTPvalidation() {
    const{patient} = useAuth();
    const navigate = useNavigate()
    const[otp,setOTP] = useState("");

    const validateOTP = (e) => {
        e.preventDefault();
        axios
        .post(`http://localhost:9010/doctor/validatepatient/${otp}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response)
          if (response?.status===200) {
            document.getElementById("OTPBtn").innerHTML="Done"
            document.getElementById("check").innerHTML = "";
            navigate("/DoctorOk/patientDetails")
           
          }
        })
        .catch((error) => {
          if (error?.response?.status === 404||401)
            document.getElementById("check").innerHTML = "Invalid OTP";
        });
    
    
      };

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
               Verify OTP
              </h4>
              <form onSubmit={validateOTP} id="myForm">
                <div class="form-group">
                  <label htmlFor="email">Enter Patient Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    required
                    value={patient.emailID}
                    readOnly
                  />
                <div id='addOTP'> <p>OTP sent successfully please check email!</p> <label htmlFor='otp'>Enter OTP</label>
                        <input
                            type="number"
                            class="form-control"
                            id="otp"
                            placeholder="Enter otp"
                            value={otp}
                            onChange={p=>setOTP(p.target.value)}
                            required
                           
                        /></div>
                        <span id='check' style={{color:"red",fontSize:"smaller"}}></span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  id="btn1"
                >
                  <button
                    type="submit"
                    class="btn btn-primary bg-success"
                    id="OTPBtn"
                   
                  >
                    Validate OTP
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

export default OTPvalidation
