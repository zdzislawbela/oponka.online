import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { Button } from "@heroui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { siteConfig } from "../config/site";

import { firebaseApp } from "@/firebase"; // your initialized app
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function LogoutPage() {
  const auth = getAuth(firebaseApp);

  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await signOut(auth);
        console.log("User signed out");
      } catch (error) {
        console.error("Sign out failed:", error);
      }
    };

    logout();
  }, [auth]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("Logged in user:", user);
      navigate(siteConfig.links.home);
      // You can now save user data or redirect
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title()}>See you soon!</h1>
        <Button
          className="mt-6 rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          onClick={handleLogin}
        >
          Sign in with Google
        </Button>
      </section>
    </DefaultLayout>
  );
}
