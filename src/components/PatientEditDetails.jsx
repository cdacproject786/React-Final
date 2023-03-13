import React, { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import useAuth from "../hooks/useAuth";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import profile from "../profile.png"
import StatusModal from "../pages/StatusModal";
function PatientEditDetails() {

  const [validated, setValidated] = useState(false);

  const navigate = useNavigate()
  const { auth, patient } = useAuth();
  const accessT = "Bearer " + auth.accessToken;
  const uid = auth.uid
  const addid = patient.addressid

  const [add_id, setAdd_id] = useState('')
  const [addressData, setAddressData] = useState({})
  const [editProfile, setEditProfile] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const [fname, setFname] = useState(patient.fname);
  const [lname, setLname] = useState(patient.lname);
  const [phone, setMobile] = useState(patient.phone);
  const [email, setEmail] = useState(patient.email);

  const [date_of_birth, setDateofbirth] = useState(patient.dateofbirth);
  const [gender, setGender] = useState(patient.gender);
  const [adhaar_card, setAadhaar] = useState(patient.adhaarcard);
  const [marital_status, setMartialStatus] = useState(patient.maritalstatus);
  const [occupation, setOccupation] = useState(patient.occupation)
  const [photo, , setPhoto] = useState(profile)
  const [image, setImage] = useState({ preview: '', data: '' })

  

  useEffect(() => {
    const result2 = axios.get("http://localhost:4001/patient/getaddressDetails/" + addid, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessT,
      }
    })
      .then((resp) => {
        console.log(resp.data);
        setAddressData(resp.data)
      })

  }, [])

  const [address_line_1, setAddressLine1] = useState(addressData.Address_line_1);

  const [city, setCity] = useState(addressData.City);
  const [user_state, setState] = useState(addressData.User_State);
  const [country, setCountry] = useState(addressData.Country);
  const [pincode, setPincode] = useState(addressData.PinCode);
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  const handleSaveChanges = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('profilephoto', image.data)
    formData.append('fname', fname)
    formData.append('lname', lname)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('occupation', occupation)
    formData.append('date_of_birth', date_of_birth)
    formData.append('gender', gender)
    formData.append('adhaar_card', adhaar_card)
    formData.append('marital_status', marital_status)
    formData.append('address_line_1',address_line_1)
    formData.append('city', city)
    formData.append('user_state', user_state)
    formData.append('country', country)
    formData.append('pincode', pincode)
    formData.append('address_id', addid)
    formData.append('uid', uid)
    /* let data = {
      fname, lname, phone, email, occupation,
      date_of_birth, gender, adhaar_card, marital_status, address_line_1, city, user_state, country, pincode
    } */
    const result = axios.post("http://localhost:4001/patient/updateProfile", formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: accessT,
      }
    }).then((response) => {
      if (response?.status === 201)
        handleStatusModal("Profile Status", "Profile Details Updated Successfully !!")

    }).catch((error) => {
      if (error?.response?.status === 500)
        handleStatusModal("Profile Status", "Internal Server error !!")
    })
  }
  const handleStatusModal = (title, body) => {
    setTitle(title)
    setBody(body)
    setModalShow(true)

  }

  const genders = {
    Male: 'M',
    Female: 'F',
    NotDisclosed: 'N'
  }
  const martials = {
    Married: 'M',
    Single: 'U'
  }

  
  return (

    <div
      className="modal show"
      style={{ display: 'block', position: 'initial', padding: "15px", width: "1230px" }}
    >
      <Modal.Dialog size="xl">
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form className="row g-3" onSubmit={handleSaveChanges}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                roundedCircle={true}
                src={patient.profilephoto}
              />
              <Figure.Caption>
                Profile Photo
              </Figure.Caption>
            </Figure>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Photo</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <div className="col-md-6">
              <input type="text" className="form-control" id="FirstName" placeholder="First Name" required
                value={fname} onChange={p => { setFname(p.target.value) }} />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" id="LastName" placeholder="Last Name" required
                value={lname} onChange={p => { setLname(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" id="mob" placeholder="Mobile Number" required
                value={phone} onChange={p => { setMobile(p.target.value) }} />
            </div>
            <div className="col-md-3">
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email Id" required
                value={email} onChange={p => { setEmail(p.target.value) }} />
            </div>

            <div className="col-12">
              <input type="text" className="form-control" id="inputAddress" placeholder="Address Lane 1" required
                value={address_line_1} onChange={p => { setAddressLine1(p.target.value) }} />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" id="inputCity" placeholder="City" required
                value={city} onChange={p => { setCity(p.target.value) }} />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" id="inputState" placeholder="State" required
                value={user_state} onChange={p => { setState(p.target.value) }} />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" id="country" placeholder="Country" required
                value={country} onChange={p => { setCountry(p.target.value) }} />
            </div>

            <div className="col-md-4">
              <input type="number" className="form-control" id="pincode" placeholder="Pincode" required
                value={pincode} onChange={p => { setPincode(p.target.value) }} />
            </div>

            <div className="col-md-4" id='divlabel'>
              <label htmlFor="year" >Date of Birth:</label>
              <input type="date" className="form-control" id="dateofbirth" placeholder="DD/MM/YYYY" required
                value={date_of_birth} onChange={p => { setDateofbirth(p.target.value) }} />
            </div>
            <div className="col-md-4">
              <select id="inputState" className="form-control" required
                value={gender} onChange={p => setGender(p.target.value)}>
                {
                  Object.entries(genders).map(g => (<option value={g[1]}>{g[0]}</option>))
                }
              </select>

            </div>

            <div className="col-md-4">
              <input type="number" className="form-control" id="aadhaar" placeholder="Aadhaar Number" required
                value={adhaar_card} onChange={(p) => { setAadhaar(p.target.value) }} />
            </div>

            <div className="col-md-4">
              <select id="inputState" className="form-control" required
                value={marital_status} onChange={p => setMartialStatus(p.target.value)}>
                {
                  Object.entries(martials).map(m => (<option value={m[1]}>{m[0]}</option>))
                }
              </select>
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" id="occupation" placeholder="Occupation" required
                value={occupation} onChange={p => { setOccupation(p.target.value) }} />
            </div>
            <div className="col-md-2">
              <Button variant="primary" onClick={handleSaveChanges} >Save changes</Button>
            </div>

          </form>
        </Modal.Body>
      </Modal.Dialog>
      <StatusModal
        show={modalShow}
        onHide={() => { setModalShow(false) }}
        title={title}
        body={body}
      />
    </div>


  );
}

export default PatientEditDetails;
