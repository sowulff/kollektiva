import styles from "../../styles/form/steg7.module.scss";
import AppContext from "../../components/AppContext";
import Sidebar from "../../components/Sidebar.js";
import { useContext, useState } from "react";
import react from "react";
import FormWrapper from "../../components/FormWrapper";

export default function SetPrice() {
  const state = useContext(AppContext);
  let { formData } = state.state;
  const handleChange = (x) => {
    const price = x.target.value;
    state.setFormData({ ...formData, price: price });
  };
  return (
    <div className={styles.container}>
      <Sidebar mainStep={3} currentSubStep={4} />

      <FormWrapper
        title="Sätt ditt pris."
        description="Behöver du hjälp med att sätta ett pris? Använd våran priskalkyl som räknar ut vad du kan ta i månaden. Tryck på frågetecknet ner till höger om du behöver hjälp!"
        next="steg8"
        prev="steg6"
      >
        <div className={styles.section}>
          <label htmlFor="price">Pris per månad (kr)</label>
          <input id="price" type="number" onChange={handleChange} />
        </div>

        <div className={styles.kalkyl}>
          <div className={styles.col}>
            <h2>Priskalkyl</h2>
            <div>
              <p>Antal boende idag</p>
              <div>
                <input type="radio" name="option" id="1" />
                <label htmlFor="1">Bara jag</label>
              </div>
              <div>
                <input id="2" type="radio" name="option" />
                <label htmlFor="2">Jag och min partner/sambo</label>
              </div>
              <div>
                <input id="3" type="radio" name="option" />
                <label htmlFor="3">3+</label>
              </div>
            </div>
            <div>
              <p>Är bostaden möblerad?</p>
              <input id="3" type="radio" name="furn" />
              <label htmlFor="3">Ja</label>
              <input id="3" type="radio" name="furn" />
              <label htmlFor="3">Nej</label>
            </div>
          </div>
          <div className={styles.section}>
            <label htmlFor="rent">Hur hög är din hyra per månad? (kr)</label>
            <input id="rent" type="number" />
            <label htmlFor="drift">Hur höga är dina driftkostnader? (kr)</label>
            <input id="drift" type="number" />
            <label htmlFor="union">Hur hög är din föreningsavgift? (kr)</label>
            <input id="union" type="number" />
            <button>Räkna ut pris</button>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
}
