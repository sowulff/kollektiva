import Link from "next/link";
import styles from "../../styles/form/steg2.module.scss";
import link from "../../styles/form/formLinks.module.scss";
import AppContext from "../../components/AppContext";
import { useContext } from "react";
import nextStep from "../../assets/next.svg";
import prevStep from "../../assets/prev.svg";

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
      <div className={link.links}>
        <Link href={"/form/steg1"}>
          <a className={link.prev}>
            <img src={prevStep.src} />
            Gå Tillbaka
          </a>
        </Link>
        <Link href={"/form/steg3"}>
          <a className={link.next}>
            Nästa <img src={nextStep.src} />
          </a>
        </Link>
      </div>
    </div>
  );
}
