import React, { Component } from "react";
import { HouseType, RentalType } from "../pages/form";
import FormCompleted from "./FormCompleted";
import { useState } from "react";
import HouseInfo from "../pages/form/steg3";
import react from "react";

function FormCard() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    rentalType: "",
    houseType: "",
    houseInfo: "",
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

  return (
    <Router>
      <Switch>
        <Route path="/">
          <RentalType
            nextStep={nextStep}
            handleFormData={handleInputData}
            formData={formData}
          />
        </Route>
        <Route path="/type">
          <HouseType
            nextStep={nextStep}
            handleFormData={handleInputData}
            formData={formData}
            prevStep={prevStep}
          />
        </Route>
      </Switch>
    </Router>
  );

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <RentalType
          nextStep={nextStep}
          handleFormData={handleInputData}
          formData={formData}
        />
      );
    // case 2 to show stepTwo form
    case 2:
      return (
        <HouseType
          nextStep={nextStep}
          handleFormData={handleInputData}
          formData={formData}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <HouseInfo
          nextStep={nextStep}
          handleFormData={handleInputData}
          formData={formData}
          prevStep={prevStep}
        />
      );
    //last case
    case 4:
      return <FormCompleted formData={formData} />;
  }
}

//react router

export default FormCard;
