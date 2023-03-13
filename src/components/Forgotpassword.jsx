import Navbar from "./Navbar";
import StatusModal from "../pages/StatusModal";
import { useEffect, useState } from "react";
import axios from "axios";
import ValidateOTP from '../components/ValidateOTP'
import  {useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function Forgotpassword() {

    const [email, setEmail] = useState('')
    const { setPatient } = useAuth();
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [title,setTitle] = useState()
    const [body,setBody] = useState()
    
    const verifyEmail = (e) => {
        e.preventDefault()
        const data = { email }
        setPatient({email})
        axios.post('http://localhost:4001/patient/forgotPassword', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response){
                
                handleStatusModal("Email Verify Status", "OTP is sent on your email. Check your Email !!")
                
            }
        }).catch((error) => {
            if (error?.response?.status === 404)
                handleStatusModal("Email Verify Status", "Email not found !!")
        })
    }
    const handleStatusModal = (title,body) => {
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
                                        Password Reset
                                    </h4>
                                    <form onSubmit={verifyEmail}>
                                        <div class="form-group">
                                            <label for="email">Enter Your Email address</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="email"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter email"
                                                required
                                                value={email} onChange={p => { setEmail(p.target.value) }}
                                            />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <button type="submit" class="btn btn-primary bg-success">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    <StatusModal
                                        show={modalShow}
                                        onHide={() => { setModalShow(false);navigate("/Patient/ValidateOTP")  }}
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

export default Forgotpassword


