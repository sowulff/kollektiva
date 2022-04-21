import { useState } from "react";
import styles from "../../styles/form/steg6.module.scss";
import Sidebar from "../../components/sidebar";

import FormWrapper from "../../components/FormWrapper";

export default function step6() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <FormWrapper
        title="Har du något mer du vill berätta?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
        next="steg6"
        prev="steg4"
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
            <label for="textarea">Beskrivning:</label>
            <textarea id="textarea" name="textarea" rows="10">
              Beskriv här
            </textarea>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
}
