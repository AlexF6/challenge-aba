import { signUp } from "../lib/auth-client";
import { useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp.email({
      email,
      password,
      name: "Test",
      image: "",
    });
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
          </div>
        </form>
      </div>
    </div>
  );
}
