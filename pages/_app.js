import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function ({ Component, pageProps }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <Component {...pageProps} session={session} />;
}
