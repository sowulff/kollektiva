import style from "../styles/form/components/form.module.scss";
import LinksCompnent from "./LinksCompnent";
import logoMobile from "../assets/logoMobile.svg";
const FormWrapper = ({ title, description, children, next, prev }) => {
  return (
    <div className={style.container}>
      <div>
        <img src={logoMobile.src} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>{children}</div>
      <LinksCompnent back={prev} next={next} />
    </div>
  );
};

export default FormWrapper;
