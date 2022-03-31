const FormCompleted = ({ formData }) => {
  //destructuring the object from formData
  console.log(formData);
  return formData.rentalType + " " + formData.houseType;
};

export default FormCompleted;
