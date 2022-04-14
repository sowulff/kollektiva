import { useState } from "react";
import Link from "next/link";
import AppContext from "../../components/AppContext";
import { useContext } from "react";

import styles from "../../styles/form/steg3.module.scss";
import Sidebar from "../../components/sidebar";
import LinksCompnent from "../../components/LinksCompnent";
import FormWrapper from "../../components/FormWrapper";

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
      move_out: document.getElementById("move_out").value,
    };
    state.setFormData({ ...formData, ...target });
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <FormWrapper>
        <div>
          <form onInputCapture={handleFormData}>
            <div className={styles.wrapper}>
              <section className={styles.left}>
                <div>
                  <label htmlFor="address">Adress</label>
                  <input type="text" name="info" id="address" />
                </div>
                <div className={styles.couple}>
                  <div>
                    <label htmlFor="city">Postkod/Ort</label>
                    <input type="text" name="info" id="city"></input>
                  </div>
                  <div>
                    <label htmlFor="rooms">Antal rum</label>
                    <input type="number" name="info" id="rooms"></input>
                  </div>
                </div>
                <div className={styles.couple}>
                  <div>
                    <label htmlFor="living_area">Boarea</label>
                    <input type="number" name="info" id="living_area"></input>
                  </div>
                  <div>
                    <label htmlFor="garden_area">Tomtarea</label>
                    <input type="number" name="info" id="garden_area"></input>
                  </div>
                </div>
                <div className={styles.radio}>
                  <input type="radio" name="info" id="single-storey"></input>
                  <label htmlFor="single-storey">Enplanshus</label>
                  <input type="radio" name="info" id="multi-storey"></input>
                  <label htmlFor="multi-storey">Flerplanshus</label>
                </div>
                <div className={styles.stairs}>
                  <label htmlFor="stairs">Antal trappor</label>
                  <input type="number" name="info" id="stairs"></input>
                </div>
              </section>

              <section className={styles.right}>
                <div>
                  <label htmlFor="operating_cost">Driftkostnad</label>
                  <input type="number" name="info" id="operating_cost"></input>
                </div>
                <div>
                  <label htmlFor="move-in">Inflyttningsdatum</label>
                  <input type="date" name="info" id="move_in"></input>
                </div>
                <div>
                  <label htmlFor="move-out">Utflyttningsdatum</label>
                  <input type="date" name="info" id="move_out"></input>
                </div>
              </section>
            </div>
          </form>
        </div>
        <LinksCompnent next="steg3" back="steg1" />
      </FormWrapper>
    </div>
  );
}
