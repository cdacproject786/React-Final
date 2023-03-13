import React from "react";
import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PatientSignin from "./components/PatientLogin";
import PatientRegister from "./components/PatientRegister";
import Aboutus from "./pages/Aboutus";
import DoctorRegistration from "./pages/DoctorRegistration";
import PatientDashboard from "./pages/PatientDashboard";
import PatientDetails from "./components/PatientDetails";
import Forgotpassword from "./components/Forgotpassword";
import ValidateOTP from "./components/ValidateOTP";
import ResetPass from "./components/ResetPass";
import DoctorSignin from "./pages/DoctorSignin";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Patient/Login" element={<PatientSignin />} />
          <Route path="/Doctor/Login" element={<DoctorSignin/>}/>
          <Route path="/Patient/Register" element={<PatientRegister />} />
          <Route path="/Doctor/Register" element={<DoctorRegistration/>}/>
          <Route path="/Patient/ForgotPass" element={<Forgotpassword/>}/>
          <Route path="/Patient/ValidateOTP" element={<ValidateOTP/>}/>
          <Route path="/Patient/ResetPass" element={<ResetPass/>}/>
          <Route path="/PatientOK" element={<PatientDashboard />} />
          <Route path="/DoctorOK" element={<PatientDashboard />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          {/* <Route path="/PatientDetails" element={<PatientDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;