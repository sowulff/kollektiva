import next from "next";
import React, { useState } from "react";

import AppContext from "../../components/AppContext";
import { useContext } from "react";
import Sidebar from "../../components/sidebar";
import FormWrapper from "../../components/FormWrapper";
import styles from "../../styles/form/steg1.module.scss";
import HouseIcon from "../../assets/steg1/HouseIcon";
import lgh from "../../assets/steg1/lgh.svg";
import twoHouseIcon from "../../assets/steg1/twoHouseIcon.svg";
import garageIcon from "../../assets/steg1/garageIcon.svg";
import changeHouseIcon from "../../assets/steg1/changeHouseIcon.svg";

export default function HouseType() {
  const formKey = "houseType";
  const state = useContext(AppContext);
  let { formData } = state.state;
  console.log(formData);
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
      <Sidebar />

      <FormWrapper
        title="Vad för bostadstyp vill du hyra ut?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
        next="steg3"
        prev="steg1"
      >
        <form className={styles.form}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <HouseIcon />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="total">Villa</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={lgh.src} />
              </div>

              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="part"
                  value="halva"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="part">Lägenhet</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={twoHouseIcon.src} />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="change"
                  value="byta"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="change">Radhus</label>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.wrapper}>
                <HouseIcon />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="total">Villa</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={garageIcon.src} />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="total">Garage</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={changeHouseIcon.src} />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="total">Villa</label>
              </div>
            </div>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
}
