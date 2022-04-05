import next from "next";
import React, { useState } from "react";
import styles from "../../styles/form/RentalType.module.scss";
import Link from "next/link";
import AppContext from "../../components/AppContext";
import { useContext } from "react";

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
      <h3>Vad vill du göra?</h3>
      <form className={styles.form}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Hyra ut hela bostaden</h4>
            <p>
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type
            </p>
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
            <h4>Hyra ut delar av bostaden</h4>
            <p>
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type
            </p>
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
            <h4>Byta bostad</h4>
            <p>
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type
            </p>
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

        <Link href={"/form/steg2"}>
          <a className={styles.next}>nästa</a>
        </Link>
      </form>
    </div>
  );
}
