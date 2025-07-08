import { authClient } from "../lib/auth-client";
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
      await authClient.signIn.email(
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
    
  <div className="sign-in-bg">
    <div className="sign-in-container">
      <form onSubmit={handleSubmit}>
        <div className="sign-in-email">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="sign-in-password">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="sign-in-button">
          <button type="submit">Sign In</button>
        </div>
        <div className="sign-in-link">
          <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  </div>
  );
}
