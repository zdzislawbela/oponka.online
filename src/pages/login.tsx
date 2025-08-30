import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "@heroui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthUser } from "../hooks/useAuthUser";
import { siteConfig } from "../config/site";

import { firebaseApp } from "@/firebase"; // your initialized app
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function LoginPage() {
  const { user, isLoadingUser } = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoadingUser) {
      navigate(siteConfig.links.home);
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(firebaseApp);
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("Logged in user:", user);

      // You can now save user data or redirect
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (isLoadingUser) {
    return (
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <h1 className={title()}>Loading...</h1>
        </section>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className={title()}>Login</h1>
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
