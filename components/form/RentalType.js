import next from "next";
import React, { useState } from "react";
import styles from "../../styles/form/RentalType.module.scss";

export default function RentalType({ nextStep, handleFormData, values }) {
  const formKey = "rentalType";
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <div className={styles.container}>
      <h3>Vad vill du göra?</h3>
      <form onSubmit={submitFormData} className={styles.form}>
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
                // onChange={handleFormData("name")}
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
                // onChange={handleFormData("name")}
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

        <button type="submit" className={styles.next}>
          nästa
        </button>
      </form>
    </div>
  );
}
