import { useState } from "react";
import Link from "next/link";
import link from "../../styles/form/formLinks.module.scss";
import nextStep from "../../assets/next.svg";
import prevStep from "../../assets/prev.svg";

export default function comfort() {
  const [checked, setChecked] = useState([]);
  const comforts = ["Badkar", "Balkong/uteplats", "Cykelrum", "Diskmaskin"];

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
    <div>
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
      <div className={link.links}>
        <Link href={"/form/steg4"}>
          <a className={link.prev}>
            <img src={prevStep.src} />
            Gå Tillbaka
          </a>
        </Link>
        <Link href={"/form/steg6"}>
          <a className={link.next}>
            Nästa <img src={nextStep.src} />
          </a>
        </Link>
      </div>
    </div>
  );
}
