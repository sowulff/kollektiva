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
          adress: document.getElementById("address").value,
          city: document.getElementById("city").value,
          rooms: document.getElementById("rooms").value,
          living_area: document.getElementById("living_area").value,
          garden_area: document.getElementById("garden_area").value,
          operating_cost: document.getElementById("operating_cost").value,
          move_in: document.getElementById("move_in").value,
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
            <label htmlFor="address">Adress</label>
            <input type="text" name="info" id="address" />
          </div>
          <div>
            <label htmlFor="city">Postkod/Ort</label>
            <input type="text" name="info" id="city"></input>
          </div>
          <div>
            <label htmlFor="rooms">Antal rum</label>
            <input type="number" name="info" id="rooms"></input>
          </div>
          <div>
            <label htmlFor="living_area">Boarea</label>
            <input type="number" name="info" id="living_area"></input>
          </div>
          <div>
            <label htmlFor="garden_area">Tomtarea</label>
            <input type="number" name="info" id="garden_area"></input>
          </div>
          <div>
            <label htmlFor="operating_cost">Driftkostnad</label>
            <input type="number" name="info" id="operating_cost"></input>
          </div>
          <div>
            <label htmlFor="move-in">Inflyttningsdatum</label>
            <input type="date" name="info" id="move_in"></input>
          </div>
        </div>
        <button onClick={prevStep}>back</button>
        <button type="submit">nästa</button>
      </form>
    </div>
  );
}
