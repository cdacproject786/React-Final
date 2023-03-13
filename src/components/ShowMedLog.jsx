import Table from "react-bootstrap/Table";


import { useEffect } from 'react';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import useAuth from "../hooks/useAuth";
import axios from 'axios';
import Prescription from "../pages/Prescription";
import LabReport from "../pages/LabReport";

function ShowMedLog() {
  const { auth, patient } = useAuth();
  const accessT = "Bearer " + auth.accessToken;
  const uid = auth.uid;

  const [logData, setLogData] = useState([])
  const [prescShow, setPrescShow] = useState(false);
  const [labShow, setLabShow] = useState(false);
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  useEffect(() => {
    axios.get("http://localhost:4001/patient/getMedLogDetails/" + uid, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessT,
      }
    }).then((response) => {
      console.log(response.data)
      setLogData(response.data)
    })
  }, [])

  const handlePrescription = (pres) => {
    handlePrescriptionModal("Prescription", pres)
  }

  const handleLabReport = (labrep) => {
    handleLabModal("Lab Report", labrep)
  }
  const handlePrescriptionModal = (title, body) => {
    setTitle(title)
    setBody(body)
    setPrescShow(true)

  }
  const handleLabModal = (title, body) => {
    setTitle(title)
    setBody(body)
    setLabShow(true)

  }

  return (
    <div className="row g-3" style={{ width: "1230px" }}>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial', padding: "15px", width: "1200px", marginLeft: "30px" }}
      >
        <Modal.Dialog size="xl">
          <Modal.Header>
            <Modal.Title>Old Medical Logs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover style={{ padding: "10px" }}>
              <thead>
                <tr>
                  <th>Prescription</th>
                  <th>Lab_Report</th>
                  <th>Drug Name</th>
                  <th>Morning</th>
                  <th>Afternoon</th>
                  <th>Evening</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {logData.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <button type="button" className="btn btn-primary" onClick={() => handlePrescription(item.PRESCRIPTION)} >Prescription</button>
                      </td>
                      <td>
                        <button type="button" className="btn btn-primary" onClick={() => handleLabReport(item.LAB_REPORT)} >Lab Report</button>
                      </td>
                      <td>{item.DRUG_NAME}</td>
                      <td>{item.MORNING}</td>
                      <td>{item.AFTERNOON}</td>
                      <td>{item.EVENING}</td>
                      <td>{item.LAST_UPDATED}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal.Dialog>
      </div>
      <Prescription
        show={prescShow}
        onHide={() => { setPrescShow(false) }}
        title={title}
        body
        ={body}
      />
      <LabReport
        show={labShow}
        onHide={() => { setLabShow(false) }}
        title={title}
        body={body}
      />
    </div>
  );
}
export default ShowMedLog;