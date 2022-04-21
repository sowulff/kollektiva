import Link from "next/link";
import link from "../styles/form/formLinks.module.scss";
import nextStep from "../assets/next.svg";
import prevStep from "../assets/prev.svg";

export default function Links({ next, back }) {
  const linkPrefix = "/form/";
  return (
    <div className={link.links}>
      <Link href={linkPrefix + back}>
        <a className={link.prev}>
          <img src={prevStep.src} />
          Gå Tillbaka
        </a>
      </Link>
      <Link href={linkPrefix + next}>
        <a className={link.next}>
          Nästa <img src={nextStep.src} />
        </a>
      </Link>
    </div>
  );
}
