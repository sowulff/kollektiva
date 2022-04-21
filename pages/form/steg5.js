import { useContext, useState, useEffect } from "react";
import AppContext from "../../components/AppContext";
import styles from "../../styles/form/steg5.module.scss";
import Sidebar from "../../components/sidebar";
import react from "react";
import FormWrapper from "../../components/FormWrapper";

export default function Comfort() {
  const [useChecked, setChecked] = useState([]);
  const state = useContext(AppContext);
  let { formData } = state.state;
  console.log(formData);

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
    var updatedList = [...useChecked];
    if (event.target.useChecked) {
      updatedList = [...useChecked, event.target.value];
    } else {
      updatedList.splice(useChecked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // för check till objekt
  const checkedItems = useChecked.length
    ? useChecked.reduce((total, item) => [...total, item], [])
    : [];

  useEffect(() => {
    state.setFormData({ ...formData, comfort: [...useChecked] });
  }, [useChecked]);
  console.log(formData);

  return (
    <div className={styles.container}>
      <Sidebar />

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
