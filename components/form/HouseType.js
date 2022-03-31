import validator from "validator";
import styles from "../../styles/form/HouseType.module.scss";
export default function HouseType({
  nextStep,
  handleFormData,
  prevStep,
  values,
}) {
  const formKey = "houseType";
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div className={styles.wrapper}>
      <h3>Vad för bostadstyp vill du hyra ut?</h3>
      <p></p>
      <form onSubmit={submitFormData}>
        <div className={styles.container}>
          <div className={styles.button}>
            <input
              type="radio"
              name="house"
              value="villa"
              id="villa"
              onChange={handleFormData(formKey)}
            ></input>
            <label htmlFor="total">Villa</label>
          </div>
          <div className={styles.button}>
            <input
              type="radio"
              name="house"
              id="lgh"
              value="lgh"
              onChange={handleFormData(formKey)}
            ></input>
            <label htmlFor="total">Lägenhet</label>
          </div>
        </div>
        <button onClick={prevStep}>back</button>
        <button type="submit">nästa</button>
      </form>
    </div>
  );
}
