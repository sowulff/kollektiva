import { useState } from "react";

export default function HouseInfo({
  nextStep,
  handleFormData,
  prevStep,
  formData,
}) {
  const formKey = "houseInfo";
  const submitFormData = (e) => {
    e.preventDefault();
    // console.log({
    //   target: {
    //     adress: document.getElementById("adress").value,
    //     city: document.getElementById("city").value,
    //   },
    // });
    handleFormData(formKey)({
      target: {
        value: {
          adress: document.getElementById("adress").value,
          city: document.getElementById("city").value,
        },
      },
    });
    nextStep();
  };

  const [adress, setAdress] = useState("");

  return (
    <div>
      <h3>Berätta lite om din bostad.</h3>
      <p></p>
      <form onSubmit={submitFormData}>
        <div>
          <div>
            <label htmlFor="adress">Adress</label>
            <input type="text" name="info" id="adress" />
          </div>
          <div>
            <label htmlFor="city">Postkod/Ort</label>
            <input type="text" name="info" id="city"></input>
          </div>
        </div>
        <button onClick={prevStep}>back</button>
        <button type="submit">nästa</button>
      </form>
    </div>
  );
}
