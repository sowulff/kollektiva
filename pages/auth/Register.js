import { supabase } from "../../utils/supabaseClient";

function Register() {
  const handleSubmit = async (form) => {
    form.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
    if (error) console.log(error);
    console.log(supabase.auth.user());
  };
  return (
    <div>
      <h1>
        Registrera dig för att spara dina uppgifter, eller fortsätt vidare för
        att testa.
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">password</label>
        <input
          type="text"
          placeholder="Enter password"
          id="password"
          name="password"
          required
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Register;
