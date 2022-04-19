import { useState } from "react";
import styles from "../../styles/form/steg5.module.scss";
import Sidebar from "../../components/sidebar";

import FormWrapper from "../../components/FormWrapper";

export default function comfort() {
  return (
    <div className={styles.container}>
      <Sidebar />

      <FormWrapper
        title="Har du något mer du vill berätta?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
        next="steg6"
        prev="steg4"
      ></FormWrapper>
    </div>
  );
}
