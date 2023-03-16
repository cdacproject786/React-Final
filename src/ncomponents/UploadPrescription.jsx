import React, { useState } from "react";

const UploadPrescription = () => {
  
  const [image, setImage] = useState("");
  const inputStyle = {
    backgroundColor: '#c1ddf5',
    color: '#000000',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    cursor: 'pointer'
  };
  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "unsigned_upload");
    data.append("cloud_name", "dyrukatmp");

    fetch("https://api.cloudinary.com/v1_1/dyrukatmp/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Image Uploaded successfully");
  };
  return (
    <div>
      <div className="container mt-5 align-items-center justify-content-center">
        <label htmlFor="fileInput">Upload your photo here</label>
        <br></br>
        <input type="file" style={inputStyle} onChange={(e) => setImage(e.target.files[0])} />
        <br></br>
        <button className="btn btn-primary" onClick={submitImage}>
          Upload Image
        </button>
      </div>
    </div>
  );
  
};

export default UploadPrescription;
