import { authClient } from "../lib/auth-client";
import { useState } from "react";
import "./SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authClient.signUp.email(
        { email, password, name: "Test", image: "" },
        {
          onSuccess() {
            navigate("/layout");
          },
          onError(ctx) {
            setMessage("Register failed: " + ctx.error.message);
          },
        }
      );
    } catch (err) {
      console.error("Unexpected error", err);
      setMessage("Unexpected error occurred");
    }
  };

  return (
    <div className="sign-up-bg">
      <div className="sign-up-container">
        <form onSubmit={handleSubmit}>
          <div className="sign-up-email">
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="sign-up-password">
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="sign-up-button">
            <button type="submit">Sign Up</button>
          </div>
          <div className="sign-up-link">
            <Link to="/">Sign In</Link>
            {message && <div className="form-message">{message}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
