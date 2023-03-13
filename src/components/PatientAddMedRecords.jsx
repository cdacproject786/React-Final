import PatientRegisterExtra from "./RegisterExtra";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import useAuth from "../hooks/useAuth";
import StatusModal from "../pages/StatusModal";

function PatientAddMedRecords() {
  const [blood_group, setBlood_Group] = useState('');
  const [blood_pressure, setBlood_Pressure] = useState('');
  const [weight, setWeight] = useState('');
  const [sugar_level, setSugar_Level] = useState('');
  const [insurance_id, setInsuranceId] = useState('');
  const [insurance_name, setInsuranceName] = useState('');
  const [insurance_expire_date, setInsuranceExpiryDate] = useState('');
  const [abha_number, setAbhaa] = useState('');
  const [disability, setDisability] = useState('')

  const { auth } = useAuth();
  const accessT = "Bearer " + auth.accessToken;
  const uid = auth.uid;

  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState()
  const [body, setBody] = useState()


  const handleSaveChanges = (e) => {

    const data = {
      blood_group, blood_pressure, weight, sugar_level, insurance_id, insurance_name, insurance_expire_date, uid, disability, abha_number
    }

    axios.post('http://localhost:4001/patient/medrecordINS/', data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessT,
      }
    }).then((response) => {
      if (response?.status === 201)
        handleStatusModal("Med Record Status", "Med Details Added Successfully !!")

    }).catch((error) => {
      if (error?.response?.status === 500)
        handleStatusModal("Med Record Status", "Internal Server error !!")
    })
  }

  const handleStatusModal = (title, body) => {
    setTitle(title)
    setBody(body)
    setModalShow(true)
  }

  const disabilities = {
    Yes: 'Y',
    No: 'N'
  }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial', padding: "15px", width: "1230px" }}
    >
      <Modal.Dialog size="xl">
        <Modal.Header>
          <Modal.Title>ADD MEDICAL DETAILS</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="row g-3" >
            <div className="col-md-10">
              <input type="number" className="form-control" id="aabhaa" placeholder="Aabha Number"
                value={abha_number} onChange={p => { setAbhaa(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" id="bloodgroup" placeholder="Blood group" required
                value={blood_group} onChange={p => { setBlood_Group(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" id="bloodpressure" placeholder="Blood pressure" required
                value={blood_pressure} onChange={p => { setBlood_Pressure(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="number" className="form-control" id="weight" placeholder="Weight" step="any" required
                value={weight} onChange={p => { setWeight(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" id="sugarlevel" placeholder="Sugar Level" required
                value={sugar_level} onChange={p => { setSugar_Level(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" id="insurancename" placeholder="Insurance Name"
                value={insurance_name} onChange={p => { setInsuranceName(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" id="insuranceid" placeholder="Insurance Id"
                value={insurance_id} onChange={p => { setInsuranceId(p.target.value) }} />
            </div>
            <div className="col-md-3" id='divlabel'>
              <label for="insuranceexpirydate" >Expiry Date:</label>
              <input type="date" className="form-control" id="insuranceexpirydate" placeholder="Expiry date"
                value={insurance_expire_date} onChange={p => { setInsuranceExpiryDate(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <select id="inputState" className="form-control" required
                value={disability} onChange={p => setDisability(p.target.value)}>
                {
                  Object.entries(disabilities).map(d => (<option value={d[1]}>{d[0]}</option>))
                }
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges} >Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      <StatusModal
            show={modalShow}
            onHide={() => {setModalShow(false)}}
            title={title}
            body={body}
          />
    </div>
  )
}
export default PatientAddMedRecords