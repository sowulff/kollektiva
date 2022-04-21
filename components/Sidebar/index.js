import style from "../../styles/form/sidebar.module.scss";

const Sidebar = ({ mainStep, currentSubStep }) => {
  return (
    <div className={style.container}>
      <div className={style.steps}>
        <Step
          status={(mainStep === 1 && "active") || (mainStep > 1 && "completed")}
          title="Registrera/logga in"
          current={currentSubStep}
          subSteps={3}
        />
        <Step
          status={(mainStep === 2 && "active") || (mainStep > 2 && "completed")}
          title="Om din bostad"
          current={currentSubStep}
          subSteps={4}
        />
        <Step
          status={(mainStep === 3 && "active") || (mainStep > 3 && "completed")}
          title="Detaljerad information"
          current={currentSubStep}
          subSteps={4}
        />
        <Step
          status={(mainStep === 4 && "active") || (mainStep > 4 && "completed")}
          title="Slutför"
          current={currentSubStep}
          subSteps={3}
        />
      </div>

      <h2 className={style.logo}>Kollektiva</h2>
    </div>
  );
};

const Step = ({ title, current, subSteps, status }) => {
  const substeps = [];
  for (let i = 0; i < subSteps; i++) {
    substeps.push(i < current);
  }
  let classes = style.main;
  let titleClass = "";
  if (status === "completed") classes += " " + style.completed;
  if (status === "active") classes += " " + style.current;
  if (status === "active") titleClass += style.active;
  return (
    <div className={style.step}>
      <div className={style.wrapper}>
        <div className={classes}></div>
        <h2 className={titleClass}>{title}</h2>
      </div>
      {status === "active" &&
        substeps.map((x, index) => (
          <SubStep key={index} completed={x} current={index + 1 == current} />
        ))}
    </div>
  );
};

const SubStep = ({ current, completed }) => {
  let classes = style.substep;
  if (current) classes += " " + style.current;
  if (completed) classes += " " + style.completed;
  return <div className={classes}></div>;
};

export default Sidebar;
