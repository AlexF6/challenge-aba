import { signIn } from "../lib/auth-client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignInForm.css";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn.email(
        { email, password },
        {
          onSuccess() {
            localStorage.setItem("user", JSON.stringify({ email }));
            navigate("/layout");
          },
          onError(ctx) {
            alert("Login failed: " + ctx.error.message);
          },
        }
      );
    } catch (err) {
      console.error("Unexpected error", err);
      alert("Unexpected error occurred");
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <Link to="/register" className="sign-up-link">Sign Up</Link>
      </form>
    </div>
  );
}
