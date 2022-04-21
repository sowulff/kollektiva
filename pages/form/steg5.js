import { useContext, useState, useEffect } from "react";
import AppContext from "../../components/AppContext";
import styles from "../../styles/form/steg5.module.scss";
import Sidebar from "../../components/Sidebar.js";
import react from "react";
import FormWrapper from "../../components/FormWrapper";

export default function Comfort() {
  const [checked, setChecked] = useState([]);
  const state = useContext(AppContext);
  let { formData } = state.state;

  const comforts = [
    "Badkar",
    "Balkong/uteplats",
    "Cykelrum",
    "Diskmaskin",
    "Egen Bastu",
    "Egen dusch",
    "Egen toalett",
    "förråd",
    "Gemensam tvättstuga",
    "Hiss",
    "Husdjur tillåtet",
    "Internet",
    "Parkering ingår",
    "Rökning tillåten",
    "Torktumlare",
    "Tvättmaskin",
    "Återvinningsrum",
    "Möblerat",
  ];

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);

    state.setFormData({ ...formData, comfort: [...updatedList] });
  };

  // för check till objekt
  const checkedItems =
    checked.length < 1
      ? checked.reduce((total, item) => [...total, item], [])
      : [];

  return (
    <div className={styles.container}>
      <Sidebar mainStep={3} currentSubStep={2} />

      <FormWrapper
        title="Några bekvämligheter?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
        next="steg6"
        prev="steg4"
      >
        <h3 className={styles.heading}>Bekvämligheter</h3>
        <div className={styles.wrapper}>
          {comforts.map((item, index) => (
            <div key={index} className={styles.flex}>
              <input
                id={item}
                value={item}
                type="checkbox"
                onChange={handleCheck}
                name="checkbox"
              />
              <label htmlFor="checkbox">{item}</label>
            </div>
          ))}
        </div>
      </FormWrapper>
    </div>
  );
}
