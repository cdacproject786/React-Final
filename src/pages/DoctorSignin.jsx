import React, { useState } from 'react'
import Signin from '../components/Signin'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useAuth from '../hooks/useAuth';

function DoctorSignin() {

  let navigate = useNavigate();
  const {doctor,setDoctor} = useAuth("");
  const [em,setEm] = useState("");
  const [pwd,setPwd] = useState(''); 
  const [modalShow, setModalShow] = useState(false);
  const [title,setTitle] = useState();
  const [body,setBody] = useState();
  //const [setAuth,setID] = useAuth();

  const siginDoc =async (e) =>{
    e.preventDefault();
    try{ 
      const email = doctor.emails;
      console.log()
      let data = {email,pwd}
      console.log(data)  
       const result = await axios.post("http://localhost:9010/doctor/login",data, {
       
       headers: {
           'Content-Type': 'application/json'
       }
   }).then(response => {
    console.log(response?.data)
    console.log(response?.data?.address)

     console.log("After axios");
       if(response.data){
         console.log("IN Response")
       navigate("/DoctorOk")}
      
   })
 } catch (error) {
   if(error.response.status===401||400){
    console.log("IN error")
  
       navigate("/Doctor")
       {document.getElementById('invalidcred').innerHTML=("Invalid credentials. Please try again.")}
   }
 }
  }
  
  return (
    // <div>
    //   <Signin name="Doctor" register="/Doctor/Register"/>
    // </div>

    <div>
    <Navbar></Navbar>
    <div className="container signin-panel" >
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" >
              <div className="card-body">
                <h4
                  className="card-title text-center mb-4"
                  style={{ color: "#0f583f" }}
                >
                  Doctors Sign In
                </h4>
                <form onSubmit={(e)=>siginDoc(e)}>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={em}
                      onChange={(p) => {
                        const emails = p.target.value;
                        setEm(emails);
                        setDoctor({emails})
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={pwd}
                      onChange={(p)=>{setPwd(p.target.value)}}
                      required
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit" className="btn btn-primary bg-success">
                      Sign In
                    </button>
                  </div>
                  <div id='invalidcred' style={{ display: "flex", justifyContent: "center", color:"red" }}></div>
                </form>
                <div className="text-center mt-3">
                  Don't have an account? <a href="/Doctor/Register">Sign up</a>
                  <p>
                    You ain't Doctor? <a href="/">Switch here!</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DoctorSignin
