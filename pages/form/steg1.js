import next from "next";
import React, { useState } from "react";
import styles from "../../styles/form/steg1.module.scss";
import link from "../../styles/form/formLinks.module.scss";
import Link from "next/link";
import AppContext from "../../components/AppContext";
import { useContext } from "react";
import houseIcon from "../../assets/steg1/houseIcon.svg";
import bedIcon from "../../assets/steg1/bedIcon.svg";
import changeHouseIcon from "../../assets/steg1/changeHouseIcon.svg";
import nextStep from "../../assets/next.svg";
import prevStep from "../../assets/prev.svg";
import logo from "../../assets/logo.svg";

export default function RentalType() {
  const formKey = "rentalType";

  const state = useContext(AppContext);

  let { formData } = state.state;

  const handleFormData = (input) => (e) => {
    const { value } = e.target;
    state.setFormData({ ...formData, [input]: value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img src={houseIcon.src} />
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

      <div className={link.links}>
        <Link href={"/form"}>
          <a className={link.prev}>
            <img src={prevStep.src} />
            Gå Tillbaka
          </a>
        </Link>
        <Link href={"/form/steg2"}>
          <a className={link.next}>
            Nästa <img src={nextStep.src} />
          </a>
        </Link>
      </div>
    </div>
  );
}
