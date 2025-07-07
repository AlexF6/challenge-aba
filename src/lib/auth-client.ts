// src/lib/auth-client.js
import { createAuthClient } from "better-auth/react";

export const { useSession, signIn, signOut, signUp, getSession } = createAuthClient({
  baseURL: "",
  redirectTo: "/",
});