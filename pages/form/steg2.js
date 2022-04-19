import next from "next";
import React, { useState } from "react";

import AppContext from "../../components/AppContext";
import { useContext } from "react";
import Sidebar from "../../components/sidebar";
import FormWrapper from "../../components/FormWrapper";
import styles from "../../styles/form/steg1.module.scss";
import houseIcon from "../../assets/steg1/houseIcon.svg";
import lgh from "../../assets/steg1/lgh.svg";
import twoHouseIcon from "../../assets/steg1/twoHouseIcon.svg";

export default function HouseType() {
  const formKey = "houseType";
  const value = useContext(AppContext);
  let { formData } = value.state;
  console.log(formData);
  const submitFormData = (e) => {
    e.preventDefault();
    // nextStep();
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
                <img src={houseIcon.src} />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  // onChange={handleFormData(formKey)}
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
                  // onChange={handleFormData(formKey)}
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
                  // onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="change">Radhus</label>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={houseIcon.src} />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  // onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="total">Villa</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={houseIcon.src} />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  // onChange={handleFormData(formKey)}
                ></input>
                <label htmlFor="total">Villa</label>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.wrapper}>
                <img src={houseIcon.src} />
              </div>
              <div className={styles.button}>
                <input
                  type="radio"
                  name="name"
                  id="total"
                  value="Hela"
                  // onChange={handleFormData(formKey)}
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
