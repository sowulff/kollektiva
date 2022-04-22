import { useState, useEffect } from "react";
import Head from "next/head";
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
      <Head>
        <title>Kollektiva</title>
      </Head>
    </AppContext.Provider>
  );
}

export default Kollektiva;
