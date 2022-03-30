import React, { Component } from "react";
import { HouseType, RentalType } from "./form";
import { useState } from "react";

function FormCard() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
  });

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <RentalType
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    // case 2 to show stepTwo form
    case 2:
      return (
        <HouseType
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
          prevStep={prevStep}
        />
      );
    case 3:
    // console.log(values);
    // return <FormCompleted values={formData} />;
  }
}

export default FormCard;
