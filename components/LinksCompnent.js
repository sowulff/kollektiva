import Link from "next/link";
import link from "../styles/form/formLinks.module.scss";
import nextStep from "../assets/next.svg";
import prevStep from "../assets/prev.svg";

export default ({ next, back }) => {
  return (
    <div className={link.links}>
      <Link href={back}>
        <a className={link.prev}>
          <img src={prevStep.src} />
          Gå Tillbaka
        </a>
      </Link>
      <Link href={next}>
        <a className={link.next}>
          Nästa <img src={nextStep.src} />
        </a>
      </Link>
    </div>
  );
};
