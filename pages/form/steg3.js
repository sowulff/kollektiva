import { useState } from "react";
import Link from "next/link";
import AppContext from "../../components/AppContext";
import { useContext } from "react";

export default function HouseInfo() {
  const formKey = "houseInfo";
  const state = useContext(AppContext);

  let { formData } = state.state;

  const handleFormData = () => {
    const target = {
      adress: document.getElementById("address").value,
      city: document.getElementById("city").value,
      rooms: document.getElementById("rooms").value,
      living_area: document.getElementById("living_area").value,
      garden_area: document.getElementById("garden_area").value,
      operating_cost: document.getElementById("operating_cost").value,
      move_in: document.getElementById("move_in").value,
    };
    state.setFormData({ ...formData, ...target });
    console.log(formData);
  };

  return (
    <div>
      <form onInputCapture={handleFormData}>
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
        <Link href={"/form/steg2"}>
          <a>tillbaka</a>
        </Link>
        <Link href={"/form/steg4"}>
          <a>nästa</a>
        </Link>
      </form>
    </div>
  );
}
