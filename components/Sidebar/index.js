import style from "../../styles/form/sidebar.module.scss";

export default () => {
  return (
    <div className={style.container}>
      <div className={style.steps}>
        <Step status="active" title="Registrera/logga in" subSteps={3} />
      </div>
      <h2 className={style.logo}>Kollektiva</h2>
    </div>
  );
};

const Step = ({ title, stepNumber, subSteps, status }) => {
  return (
    <div className={`${style.step}`}>
      <h2 className={`${status == "active" ? style.active : ""}`}>{title}</h2>
      <SubStep />
      <SubStep />
      <SubStep />
    </div>
  );
};

const SubStep = () => {
  return <div className={style.substep}></div>;
};
