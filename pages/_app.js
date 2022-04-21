import { useState, useEffect } from "react";

import AppContext from "../components/AppContext";
import "../styles/globals.scss";

function Kollektiva({ Component, pageProps }) {
  const [formData, setFormData] = useState({});
  return (
    <AppContext.Provider
      value={{
        state: {
          formData: formData,
        },
        setFormData: setFormData,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default Kollektiva;
