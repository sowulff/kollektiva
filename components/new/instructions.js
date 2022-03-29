import Link from "next/link";
import { supabase } from "../../utils/supabaseClient";

export default () => {
  return (
    <div>
      <h1>Så går det till!</h1>
      <Link href="/new/register" replace>
        <a>nästa</a>
      </Link>
    </div>
  );
};
