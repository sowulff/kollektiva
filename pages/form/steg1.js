import next from "next";
import React, { useState } from "react";
import styles from "../../styles/form/steg1.module.scss";
import AppContext from "../../components/AppContext";
import { useContext } from "react";
import HouseIcon from "../../assets/steg1/HouseIcon";
import bedIcon from "../../assets/steg1/bedIcon.svg";
import changeHouseIcon from "../../assets/steg1/changeHouseIcon.svg";
import logo from "../../assets/logo.svg";
import Sidebar from "../../components/sidebar";
import FormWrapper from "../../components/FormWrapper";

export default function RentalType() {
  const formKey = "rentalType";

  const state = useContext(AppContext);

  let { formData } = state.state;
  const [lastChecked, setLastChecked] = useState(null);
  const handleFormData = (input) => (e) => {
    const currChecked = e.target.parentNode.parentNode;
    currChecked.dataset.active = true;

    if (lastChecked) lastChecked.dataset.active = false;
    setLastChecked(currChecked);

    const { value } = e.target;
    state.setFormData({ ...formData, [input]: value });
  };

  return (
    <div className={styles.container}>
      <Sidebar step={1} substep={1} />

      <FormWrapper
        title="Hur vill du hyra ut?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
        next="steg2"
        prev="login"
      >
        <form>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <HouseIcon fill="red" className={styles.icon} />
                <h4>Hyra ut hela bostaden</h4>
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="total">Hyra ut hela bostaden</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={bedIcon.src} />
                <h4>Hyra ut delar av bostaden</h4>
              </div>

              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="part"
                  value="halva"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="part">Hyra ut delar av bostaden</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={changeHouseIcon.src} />
                <h4>Byta bostad</h4>
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="change"
                  value="byta"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="change">Byta bostad</label>
              </div>
            </div>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
}
