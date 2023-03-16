import React, { useState } from "react";
import { Image } from "cloudinary-react";

const ViewPrescription = () => {
  const [image, setImage] = useState("");
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
        <Image
          cloudName="dyrukatmp"
          publicId="https://res.cloudinary.com/dyrukatmp/image/upload/v1678381293/medical-prescription-ocr_nhhclh.webp"
          width="400px"
          height="500px"
        />
        <Image
          cloudName="dyrukatmp"
          publicId="https://res.cloudinary.com/dyrukatmp/image/upload/v1678382201/prescription_3_wwxr9v.png"
          width="400px"
          height="500px"
        />

        <Image
          cloudName="dyrukatmp"
          publicId="https://res.cloudinary.com/dyrukatmp/image/upload/v1678382194/prescription_2_syolab.jpg"
          width="400px"
          height="500px"
        />
        <Image
          cloudName="dyrukatmp"
          publicId="https://res.cloudinary.com/dyrukatmp/image/upload/v1678382185/prescription_1_flaajc.jpg"
          width="400px"
          height="500px"
        />
      </div>
    </div>
  );
};

export default ViewPrescription;
