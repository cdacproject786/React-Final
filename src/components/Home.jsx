import React from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div className="container signin-panel">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-4" id='word'>
            <h1>You must identify yourself as?</h1>
          </div>
          <div className="row d-flex justify-content-center" >
            <div className="col-sm-6 col-md-3 mb-3">
              <button type="button" className="btn btn-success btn-block" onClick={() => { navigate("/Patient/Login") }}>I am a Patient !</button>
            </div>
            <div className="col-sm-12 col-md-3 mb-3">
              <button type="button" className="btn btn-success btn-block" onClick={() => { navigate("/Doctor") }}>I am a Doctor !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home



