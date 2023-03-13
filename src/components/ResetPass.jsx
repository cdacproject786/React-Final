import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
import StatusModal from "../pages/StatusModal";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function ResetPass() {
    const [pwd, setPwd] = useState('')
    const [confirmpwd, setConfirmPwd] = useState('')

    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const { patient } = useAuth()
    const email = patient.email
    const resetPass = (e) => {
        e.preventDefault()
        const data = { confirmpwd, email }
        axios.post('http://localhost:4001/patient/resetPassword', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response)
                handleStatusModal("Password Reset Status", "Your Password Reseted Successfully !!")
        }).catch((error) => {
            if (error?.response?.status === 500)
                handleStatusModal("Password Reset Status", "Internal Server Error !!")
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
                                        Add New Password
                                    </h4>
                                    <form onSubmit={resetPass}>
                                        <div class="form-group">
                                            <label for="pwd">Password</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="pwd"
                                                placeholder="Password"
                                                required
                                                value={pwd} onChange={p => { setPwd(p.target.value) }}
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Confirm Password</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="confirmpwd"
                                                placeholder="Confirm Password"
                                                required
                                                value={confirmpwd} onChange={p => {
                                                    /* if (pwd === p.target.value)
                                                        
                                                    else
                                                        document.getElementById('wrongpwd').innerHTML = "Password do not match" */
                                                        setConfirmPwd(p.target.value)
                                                }}
                                            />
                                            <span id="wrongpwd" />
                                        </div>

                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <button type="submit" class="btn btn-primary bg-success">
                                                Submit
                                            </button>
                                        </div>
                                    </form>

                                    <StatusModal
                                        show={modalShow}
                                        onHide={() => { setModalShow(false); navigate("/Patient/Login") }}
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
