import { authClient } from "../lib/auth-client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignInForm.css";
import userIcon from "../assets/usericon.png";


export default function SignInForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        // Registro
        await authClient.signUp.email(
          { email, password, name: "Test", image: "" },
          {
            onSuccess() {
              localStorage.setItem("user", JSON.stringify({ email }));
              if (typeof onSuccess === "function") onSuccess();
            },
            onError(ctx) {
              setMessage("Register failed: " + ctx.error.message);
            },
          }
        );
      } else {
        await authClient.signIn.email(
          { email, password },
          {
            onSuccess() {
              localStorage.setItem("user", JSON.stringify({ email }));
              if (typeof onSuccess === "function") {
                onSuccess(); 
              }

            },
            onError(ctx) {
              alert("Login failed: " + ctx.error.message);
            },
          }
        );
    }
  }catch (err) {
      console.error("Unexpected error", err);
      alert("Unexpected error occurred");
    }
  };
  

  return (
    
  <div className="sign-in-bg">
    
    <div className="sign-in-container">
          <form onSubmit={handleSubmit}>
            <img src={userIcon} alt="User Icon" className="sign-in-user-icon" />
            <h2>{isSignUp ? "Create Account" : "Welcome Back!"}</h2>

        <div className="sign-in-email">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="sign-in-password">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="sign-in-button">
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </div>
        <div className="sign-in-link">
           <span
              onClick={() => {
                setIsSignUp(!isSignUp); 
                setMessage(""); 
              }}
              style={{ cursor: "pointer", color: "#582969" }}
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "You don't have an account? Sign Up"}
            </span>
        </div>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  
  </div>
  );
}

