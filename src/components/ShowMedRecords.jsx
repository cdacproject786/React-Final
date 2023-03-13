import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAuth from "../hooks/useAuth";
function ShowMedRecords() {
    const [blood_group, setBlood_Group] = useState('');
    const [blood_pressure, setBlood_Pressure] = useState('');
    const [weight, setWeight] = useState('');
    const [sugar_level, setSugar_Level] = useState('');
    const [insurance_id, setInsuranceId] = useState('');
    const [insurance_name, setInsuranceName] = useState('');
    const [insurance_expire_date, setInsuranceExpiryDate] = useState('');
    const [abha_number, setAbhaa] = useState('');
    const [disability, setDisability] = useState('')
    const [medData, setMedData] = useState('')

    const { auth, patient } = useAuth();
    const accessT = "Bearer " + auth.accessToken;
    const uid = auth.uid;
    
    useEffect(() => {
        axios.get("http://localhost:4001/patient/getMedRecordDetails/" + uid, {
            headers: {
                "Content-Type": "application/json",
                Authorization: accessT,
            }
        }).then((response) => {
            console.log(response.data)
            setMedData(response.data)
        })
    }, [])

    return (
        <div 
            className="modal show"
            style={{ display: 'block', position: 'initial', padding: "25px" }}
        >
            <Modal.Dialog size="lg"style={{marginLeft:"400px"}}>
                <Modal.Header>
                    <Modal.Title>Medical Records</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item><label htmlFor="abha_number">Abha Number :      </label>&nbsp;&nbsp;
                            {medData.ABHA_NUMBER}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="abha_number">Blood Group :      </label>&nbsp;&nbsp;
                            {medData.BLOOD_GROUP}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="blood_pressure">Blodd Pressure :    </label>&nbsp;&nbsp;
                            {medData.BLOOD_PRESSURE}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="weight">Weight :    </label>&nbsp;&nbsp;
                            {medData.WEIGHT}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="sugar_level">Sugar Level :   </label>&nbsp;&nbsp;
                            {medData.SUGAR_LEVEL}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="insurance_name">Insurance Name :     </label>&nbsp;&nbsp;
                            {medData.INSURANCE_NAME}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="insurance_id">Insurance ID :     </label>&nbsp;&nbsp;
                            {medData.INSURANCE_ID}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="insuranceexpirydate" >Expiry Date:      </label>&nbsp;&nbsp;
                            {medData.INSURANCE_EXPIRE_DATE}</ListGroup.Item>
                        <ListGroup.Item><label htmlFor="disability">Disability :    </label>&nbsp;&nbsp;
                            {medData.DISABILITY}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}
export default ShowMedRecords