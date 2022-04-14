import next from "next";
import React, { useState } from "react";
import styles from "../../styles/form/steg2.module.scss";
import AppContext from "../../components/AppContext";
import { useContext } from "react";

import Sidebar from "../../components/sidebar";
import LinksCompnent from "../../components/LinksCompnent";
import FormWrapper from "../../components/FormWrapper";

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
        title="Hur vill du hyra ut?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
      >
        <form onSubmit={submitFormData}>
          <div className={styles.container}>
            <div className={styles.button}>
              <input
                type="radio"
                name="house"
                value="villa"
                id="villa"
                // onChange={handleFormData(formKey)}
              ></input>
              <label htmlFor="total">Villa</label>
            </div>
            <div className={styles.button}>
              <input
                type="radio"
                name="house"
                id="lgh"
                value="lgh"
                // onChange={handleFormData(formKey)}
              ></input>
              <label htmlFor="total">Lägenhet</label>
            </div>
          </div>
        </form>
        <LinksCompnent next="steg3" back="steg1" />
      </FormWrapper>
    </div>
  );
}
