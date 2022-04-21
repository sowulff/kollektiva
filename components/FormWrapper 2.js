const FormWrapper = ({ title, description, children }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default FormWrapper;
