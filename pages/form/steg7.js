import AppContext from "../../components/AppContext";
import styles from "../../styles/form/complete.module.scss";
import Sidebar from "../../components/Sidebar.js";
import { useContext } from "react";
import react from "react";
import FormWrapper from "../../components/FormWrapper";
import Image from "next/image";
import houseJpeg from "../../assets/house.jpeg";

export default () => {
  const state = useContext(AppContext);
  let { formData } = state.state;

  if (Object.keys(formData).length === 0) {
    formData = {
      rentalType: "Hela",
      houseType: "Hela",
      adress: "åvägen 16",
      city: "43284",
      rooms: "38",
      price: "12000",
      living_area: "232",
      garden_area: "23",
      operating_cost: "2323",
      move_in: "2022-04-22",
      move_out: "2022-06-25",
      images: [houseJpeg],
      comfort: [
        "Balkong/uteplats",
        "Egen Bastu",
        "Diskmaskin",
        "Badkar",
        "Husdjur tillåtet",
        "Internet",
        "Egen dusch",
      ],
      description: "Mycket trevligt hus med många ru",
    };
  }

  const image = URL.createObjectURL(formData.images[0]);
  const adress = formData.adress;
  const description = formData.description;
  const price = formData.price;
  return (
    <div className={styles.container}>
      <Sidebar mainStep="4" currentSubStep="0" />
      <FormWrapper
        title="Stämmer alltihop?"
        description="Fyll i fälten för den övriga informationen som vi behöver till din bostad."
        publish={true}
      >
        <div className={styles.completed}>
          <Image src={image} width="300" height="150"></Image>
          <div>
            <h2>{adress}</h2>
            <h3>{price}:-/mån</h3>
            <p>{description}</p>
            <button>förhandsgranska din annons</button>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};
