import React from "react";
import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientSignin from "./components/PatientLogin";
import PatientRegister from "./components/PatientRegister";
import Aboutus from "./pages/Aboutus";
import Sidebar from "./components/Sidebar"
import PatientDashboard from "./pages/PatientDashboard";
import PatientDetails from "./ncomponents/PatientDetails";



const App = () => {
  return (
    // <div>
    // {/* <Home/> */}
    // {/* <Signin name="Patients"/> */}
    // <Signin name="Doctors"/>
    // </div>



    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Patient" element={<PatientSignin />} />
          <Route path="/Patient/Register" element={<PatientRegister />} />
          <Route path="/PatientOK" element={<PatientDashboard />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/PatientDetails" element={<PatientDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;