import AppContext from "../../components/AppContext";
import { useContext } from "react";
import Sidebar from "../../components/Sidebar";
import FormWrapper from "../../components/FormWrapper.js";

import styles from "../../styles/form/steg4.module.scss";
export default function Images() {
  const formKey = "images";
  const state = useContext(AppContext);

  let { formData } = state.state;

  console.log(formData);
  return (
    <div className={styles.container}>
      <Sidebar mainStep={3} currentSubStep={3} />
      <FormWrapper title="images" description="test" next="steg5" prev="steg3">
        <form></form>
      </FormWrapper>
    </div>
  );
}
