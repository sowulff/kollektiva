import validator from "validator";
export default function HouseType({
  nextStep,
  handleFormData,
  prevStep,
  values,
}) {
  const submitFormData = (e) => {
    e.preventDefault();
    if (validator.isEmpty(values.name)) {
      console.log(step);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <form onSubmit={submitFormData}>
        <label htmlFor="name">TEST2</label>
        <input
          onChange={handleFormData("name")}
          type="text"
          name="name"
          id="name"
          defaultValue={values.name}
        ></input>
        <button type="submit">submit</button>
        <button onClick={prevStep}>back</button>
      </form>
    </div>
  );
}
