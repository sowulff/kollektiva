import { supabase } from "../../utils/supabaseClient.js";
import { useState, useEffect } from "react";
import Register from "../auth/Register.js";
import Instructions from "../../components/new/instructions.js";
import Login from "../auth/Login.js";

export default ({ session }) => {
  return <>{!session ? <Login /> : <Instructions />}</>;
};
