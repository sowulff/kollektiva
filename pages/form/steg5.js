import { useState } from "react";
import Link from "next/link";

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
    ? checked.reduce(
        (total, item) => ({
          ...total,
          [item]: true,
        }),
        {}
      )
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

      <Link href={"/form/steg4"}>
        <a>tillbaka</a>
      </Link>
      <Link href={"/form/steg6"}>
        <a>nästa</a>
      </Link>
    </div>
  );
}
