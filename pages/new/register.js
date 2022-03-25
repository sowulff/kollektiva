import { supabase } from "../../utils/supabaseClient";

function Register() {
  const handleSubmit = async (form) => {
    form.preventDefault();
    const { data, error } = await supabase.auth.signIn({
      email: document.getElementById("email").value,
    });
    if (error) console.log(error);
    console.log(supabase.auth.user());
  };
  return (
    <div>
      <h1>Registrera</h1>
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
