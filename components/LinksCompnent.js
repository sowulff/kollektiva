import Link from "next/link";
import link from "../styles/form/formLinks.module.scss";
import nextStep from "../assets/next.svg";
import prevStep from "../assets/prev.svg";
import Image from "next/image";

export default function Links({ next, back }) {
  const linkPrefix = "/form/";
  return (
    <div className={link.links}>
      <Link href={linkPrefix + back}>
        <a className={link.prev}>
          <Image src={prevStep.src} width="15" height="15" alt="next step" />
          Gå Tillbaka
        </a>
      </Link>
      <Link href={linkPrefix + next}>
        <a className={link.next}>
          Nästa{" "}
          <Image src={nextStep.src} width="15" height="15" alt="prev step" />
        </a>
      </Link>
    </div>
  );
}
