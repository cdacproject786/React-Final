import React from "react";
import { useNavigate } from "react-router-dom";

const PrescriptionDisplay = () => {
  const navigate = useNavigate();
  const back = () =>{
    navigate("/DoctorOk ")
  }
  let img3= "https://images.unsplash.com/photo-1504860708171-19abd233ec3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  let img4= "https://images.unsplash.com/photo-1504860708171-19abd233ec3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <div>
      <button
              type="button"
              className="btn btn-success"
              style={{ marginRight: "10px" }}
              onClick={back}
            >
              Back
            </button>
      <figure class="text-center">
        <h1>Prescription Form Display</h1>
      </figure>
      <div class="container">
        <img
          src={img4}
          class="rounded float-start"
          alt="..."
          style={{ borderStyle: "dashed", height: "620px", width: "547px" }}
        ></img>
        <img
          src={img3}
          class="rounded float-end"
          alt="..."
          style={{ borderStyle: "dashed", height: "620px", width: "547px" }}
        ></img>
        <br></br>
        <img
          src={img3}
          class="rounded float-start"
          alt="..."
          style={{ borderStyle: "dashed", height: "620px", width: "547px" }}
        ></img>
        <img
          src={img4}
          class="rounded float-end"
          alt="..."
          style={{ borderStyle: "dashed", height: "620px", width: "547px" }}
        ></img>
        
            
            <button
              type="button"
              className="btn btn-success"
              style={{ marginRight: "10px" }}
            >
              Add Prescription
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={{ marginRight: "10px" }}
              onClick={back}
            >
              Back
            </button>
      </div>
    </div>
  );
};

export default PrescriptionDisplay;
