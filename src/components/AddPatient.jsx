import axios from "axios";
import React, { useState } from "react";

function AddPatient() {
  const [email, setEmail] = useState("");
  const[otp,setOTP] = useState('');
  const enterOTP = (e) => {
    e.preventDefault();
console.log(email)
    axios
      .post(`http://localhost:9010/patient/${email}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response) {
          const divbtn = document.getElementById("btn1");
          divbtn.removeChild(divbtn.childNodes[0]);
          document.getElementById(
            "addOTP"
          ).innerHTML = `<p>OTP sent successfully please check email!</p> <label htmlFor='otp'>Enter OTP</label>
                        <input
                            type="number"
                            class="form-control"
                            id="otp"
                            placeholder="Enter otp"
                            value={otp}
                            onChange={p=>setOTP(p.target.value)}
                            required
                           
                        />
                        <div style={{ display: "flex", justifyContent: "center" }} id="btn1">
                                                    <button type="submit" class="btn btn-primary bg-success" id='OTPBtn' >
                                                        Verify OTP
                                                    </button>
                                                </div>`;
        }
      })
      .catch((error) => {
        if (error?.response?.status === 404)
          document.getElementById("addOTP").innerHTML = "Retry sending OTP";
      });
  };

  const validateOTP = (e) => {
    e.preventDefault();
    axios
    .post(`http://localhost:9010/validatepatient/${otp}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response)
      if (response) {
        const divbtn = document.getElementById("btn1");
       
      }
    })
    .catch((error) => {
      if (error?.response?.status === 404)
        document.getElementById("addOTP").innerHTML = "Invalid OTP";
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
                  Add Patient
                </h4>
                <form onSubmit={validateOTP} id="myForm">
                  <div class="form-group">
                    <label htmlFor="email">Enter Patient Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter Email"
                      required
                      value={email}
                      onChange={(p) => {
                        setEmail(p.target.value);
                      }}
                    />
                    <span id="addOTP"></span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "center" }}
                    id="btn1"
                  >
                    <button
                      type="button"
                      class="btn btn-primary bg-success"
                      id="OTPBtn"
                      onClick={enterOTP}
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
  );
}

export default AddPatient;
