import style from "../styles/form/components/form.module.scss";
import LinksCompnent from "./LinksCompnent";
import logoMobile from "../assets/logoMobile.svg";
import logoFooterMobile from "../assets/logoFooterMobile.svg";
import Image from "next/image";
const FormWrapper = ({ title, description, children, next, prev, publish }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.img}>
          <Image
            src={logoMobile.src}
            alt="Kollektiva"
            width="80"
            height="100"
          />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>{children}</div>
      <LinksCompnent back={prev} next={next} publish={publish} />
      <div className={style.logoFooter}>
        <Image
          // className={style.img}
          src={logoFooterMobile.src}
          alt="Kollektiva"
          width="100"
          height="100"
        />
      </div>
    </div>
  );
};

export default FormWrapper;
