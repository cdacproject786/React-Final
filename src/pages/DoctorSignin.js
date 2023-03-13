import React, { useState } from 'react'
import Signin from '../components/Signin'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function DoctorSignin() {

  let navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [pwd,setPwd] = useState(''); 
  const [modalShow, setModalShow] = useState(false);
  const [title,setTitle] = useState();
  const [body,setBody] = useState();

  const siginDoc =async (e) =>{
    e.preventDefault();
    try{ 
      let data = {email,pwd}
      console.log(data)  
       const result = await axios.post("http://localhost:9010/doctor/login",data, {
       
       headers: {
           'Content-Type': 'application/json'
       }
   }).then(response => {
    console.log(response.data)
     console.log("After axios");
       if(response.data){
         console.log("IN Response")
       handleStatusModal("Registration Status","Successfull !!")
       navigate("/DoctorOk")}
       else{
       handleStatusModal("Registration Status","Unsuccessfull !!")
       navigate("/Doctor")
       }
   })
 } catch (error) {
   
 }
  }
  const handleStatusModal = (title,body) => {
    setTitle(title)
    setBody(body)
    setModalShow(true)
    
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
                      value={email}
                      onChange={(p)=>{setEmail(p.target.value)}}
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
