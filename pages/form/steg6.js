import { useState, useEffect, useContext } from "react";
import AppContext from "../../components/AppContext";
import styles from "../../styles/form/steg6.module.scss";
import Sidebar from "../../components/Sidebar.js";
import react from "react";
import FormWrapper from "../../components/FormWrapper";

export default function Step6() {
  const state = useContext(AppContext);
  let { formData } = state.state;
  const [description, setDescription] = useState({ description: "" });
  useEffect(() => {
    state.setFormData({ ...formData, description });
    console.log(formData);
  }, [description, state, formData]);
  return (
    <div className={styles.container}>
      <Sidebar mainStep={3} currentSubStep={3} />

      <FormWrapper
        title="Har du något mer du vill berätta?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
        next="steg7"
        prev="steg5"
      >
        <div className={styles.info}>
          <h3>Tänk på att beskriva:</h3>
          <ul>
            <li>Avstånd till centrum</li>
            <li>Kollektivtrafiken</li>
            <li>Mataffär</li>
            <li>Övriga förmåner</li>
          </ul>
          <div className={styles.textarea}>
            <label htmlFor="textarea">Beskrivning:</label>
            <textarea
              id="textarea"
              name="textarea"
              value={description.description}
              rows="5"
              placeholder="beskriv här"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
}
