import style from "../styles/form/components/form.module.scss";
import LinksCompnent from "./LinksCompnent";
import logoMobile from "../assets/logoMobile.svg";
import logoFooterMobile from "../assets/logoFooterMobile.svg";
const FormWrapper = ({ title, description, children, next, prev }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logoMobile.src} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>{children}</div>
      <LinksCompnent back={prev} next={next} />
      <div className={style.logoFooter}>
        <img src={logoFooterMobile.src} />
      </div>
    </div>
  );
};

export default FormWrapper;
