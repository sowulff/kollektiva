import AppContext from "../../components/AppContext";
import { useContext } from "react";
import link from "../../styles/form/formLinks.module.scss";
import nextStep from "../../assets/next.svg";
import prevStep from "../../assets/prev.svg";
import Link from "next/link";

export default function Images() {
  const formKey = "images";
  const state = useContext(AppContext);

  let { formData } = state.state;

  console.log(formData);
  return (
    <div>
      <h3>Lägg till bilder på din bostad</h3>
      <div className={link.links}>
        <Link href={"/form/steg3"}>
          <a className={link.prev}>
            <img src={prevStep.src} />
            Gå Tillbaka
          </a>
        </Link>
        <Link href={"/form/steg5"}>
          <a className={link.next}>
            Nästa <img src={nextStep.src} />
          </a>
        </Link>
      </div>
    </div>
  );
}
