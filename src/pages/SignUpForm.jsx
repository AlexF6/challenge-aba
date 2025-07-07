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
    });
    
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
        <Link to="/">Sign In</Link>
      </form>
    </div>
  );
}
