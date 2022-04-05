const FormCompleted = ({ formData }) => {
  //destructuring the object from formData
  console.log(formData);
  return (
    formData.rentalType +
    " " +
    formData.houseType +
    " " +
    formData.houseInfo.adress +
    " " +
    formData.houseInfo.city
  );
};

export default FormCompleted;
