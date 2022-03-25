import { supabase } from "../utils/supabaseClient";
import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>Kollektiva</h1>
      <Link href="/new/instructions" replace>
        <a>lägg upp boende</a>
      </Link>
    </div>
  );
}

export default HomePage;
