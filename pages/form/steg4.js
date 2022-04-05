import AppContext from "../../components/AppContext";
import { useContext } from "react";

export default function Images() {
  const formKey = "images";
  const state = useContext(AppContext);

  let { formData } = state.state;

  console.log(formData);
  return (
    <div>
      <h3>Lägg till bilder på din bostad</h3>
    </div>
  );
}
