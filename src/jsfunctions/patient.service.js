import axios from "axios";


const baseURL = 'http://localhost:4001/';

class PatientService{
    
    //registeration link
    addPatient(patient){
        console.log(patient)
        return axios.post(baseURL+"patient/register",patient,{headers:{
            'Content-Type':'application/json'
        }}).then(response => {
            console.log(response.data);
        })
    }

    patientLogin(patient_email_pwd){
        return axios.post(baseURL+"patient/login",patient_email_pwd,{headers:{
            'Content-Type':'application/json'
        }}).then(response => {
            console.log(response);
        })
    }
}

export default new PatientService();