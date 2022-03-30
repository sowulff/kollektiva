import React, { useState } from "react";

export default function RentalType({ nextStep, handleFormData, values }) {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <div>
      <form onSubmit={submitFormData}>
        <label htmlFor="name">Hyra ut hela bostaden</label>
        <input
          // onChange={handleFormData("name")}
          type="radio"
          name="name"
          id="name"
          defaultValue={values.name}
        ></input>
        <label htmlFor="name">Hyra ut delar av bostaden</label>
        <input
          // onChange={handleFormData("name")}
          type="radio"
          name="name"
          id="name"
          defaultValue={values.name}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
