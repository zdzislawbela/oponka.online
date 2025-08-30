// hooks/useAuthUser.ts
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

import { firebaseApp } from "@/firebase";

export function useAuthUser() {
  const [user, setUser] = useState<User | null | undefined>(undefined); // undefined = loading
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return {
    user,
    isLoadingUser: user === undefined,
  };
}
