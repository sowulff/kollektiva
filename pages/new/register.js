import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Link from "next/link";
function Register() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (form) => {
    form.preventDefault();
    const { data, error } = await supabase.auth.signIn({
      email: document.getElementById("email").value,
      redirectTo: "http://localhost:3000/new/options",
    });
    if (error) {
      console.log(error);
    } else {
      setSubmitted(true);
    }
    console.log(supabase.auth.user());
  };
  if (submitted) {
    return (
      <div>
        <h1>Check your email!</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>
        Registrera dig för att spara dina uppgifter, eller fortsätt vidare för
        att testa.
      </h1>
      <Link href="/new/options" replace>
        <button>Fortsätt utan att registrera</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          name="email"
          required
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Register;
