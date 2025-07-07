import { signIn } from "../lib/auth-client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignInForm.css";

export default function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const authClient = {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        await authClient.signIn.email({
        email,
        password,
        name: "Test",
        image: "", 
        });

        navigate("layout");
    };



    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit}>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign In</button>
            <Link to="/register" className="sign-up-link">Sign Up</Link>
            </form>
        </div>
    );
}
