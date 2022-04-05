export default function RentalType({
  nextStep,
  handleFormData,
  formData,
  prevStep,
}) {
  const formKey = "rentalType";
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h3>Lägg till bilder på din bostad</h3>
    </div>
  );
}
