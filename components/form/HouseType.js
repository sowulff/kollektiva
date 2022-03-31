import validator from "validator";
import styles from "../../styles/form/HouseType.module.scss";
export default function HouseType({
  nextStep,
  handleFormData,
  prevStep,
  values,
}) {
  const submitFormData = (e) => {
    e.preventDefault();
    if (validator.isEmpty(values.house)) {
      console.log(step);
    } else {
      nextStep();
    }
  };
  return (
    <div className={styles.wrapper}>
      <h3>Vad för bostadstyp vill du hyra ut?</h3>
      <form onSubmit={submitFormData}>
        <div className={styles.container}>
          <div className={styles.button}>
            <input
              type="radio"
              name="house"
              id="villa"
              defaultValue={values.house}
            ></input>
            <label htmlFor="total">Villa</label>
          </div>
          <div className={styles.button}>
            <input
              type="radio"
              name="house"
              id="lgh"
              defaultValue={values.house}
            ></input>
            <label htmlFor="total">Lägenhet</label>
          </div>
        </div>
        <button type="submit">nästa</button>
        <button onClick={prevStep}>back</button>
      </form>
    </div>
  );
}
