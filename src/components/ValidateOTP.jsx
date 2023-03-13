import axios from "axios";
import StatusModal from "../pages/StatusModal";
import { useState } from "react";
import Navbar from "./Navbar";
import ResetPass from "./ResetPass";
import  {useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function OTPValidate() {
    const [otp, setOTP] = useState('')
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [title,setTitle] = useState()
    const [body,setBody] = useState()

    const {patient} = useAuth()
    const email = patient.email
    
    const validateotp = (e) => {
        e.preventDefault()
        const data = { otp, email }
        axios.post('http://localhost:4001/patient/otpValidate', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response)
                handleStatusModal("OTP Verify Status", "Your OTP is validated !!")
        }).catch((error) => {
            if (error?.response?.status === 404)
                handleStatusModal("OTP Verify Status", "Wrong OTP not found !!")
        })
    }
    const handleStatusModal = (title, body) => {
        setTitle(title)
        setBody(body)
        setModalShow(true)

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container signin-panel">
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4
                                        class="card-title text-center mb-4"
                                        style={{ color: "#0f583f" }}
                                    >
                                        Validate OTP
                                    </h4>
                                    <form onSubmit={validateotp}>
                                        <div class="form-group">
                                            <label for="email">Enter OTP</label>
                                            <input
                                                type="number"
                                                class="form-control"
                                                id="otp"
                                                
                                                placeholder="Enter otp"
                                                required
                                                value={otp} onChange={p => { setOTP(p.target.value) }}
                                            />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <button type="submit" class="btn btn-primary bg-success">
                                                Verify
                                            </button>
                                        </div>
                                    </form>

                                     <StatusModal
                                        show={modalShow}
                                        onHide={() => { setModalShow(false); navigate("/Patient/ResetPass") }}
                                        title={title}
                                        body={body}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}