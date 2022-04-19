import { useState } from "react";
import styles from "../../styles/form/steg5.module.scss";
import Sidebar from "../../components/sidebar";

import FormWrapper from "../../components/FormWrapper";

export default function comfort() {
  const [checked, setChecked] = useState([]);
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
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // för check till objekt
  const checkedItems = checked.length
    ? checked.reduce((total, item) => [...total, item], [])
    : false;

  console.log(checkedItems);

  return (
    <div className={styles.container}>
      <Sidebar />

      <FormWrapper
        title="Har du något mer du vill berätta?"
        description="Fyll i fälten nedan, tryck på frågetecknet till vänster om du behöver hjälp!"
        next="steg6"
        prev="steg4"
      >
        <div className={styles.wrapper}>
          {comforts.map((item, index) => (
            <div key={index}>
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
