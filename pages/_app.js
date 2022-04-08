import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import AppContext from "../components/AppContext";
import "../styles/globals.scss";

export default function ({ Component, pageProps }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

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
      <Component {...pageProps} session={session} />
    </AppContext.Provider>
  );
}
