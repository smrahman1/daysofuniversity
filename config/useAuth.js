import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const auth = getAuth();

  const handleLogout = async () => {
    const result = await signOut(auth);
    console.log("Signed out");
    router.push("/");
    // window.localStorage.removeItem("firebaseui::rememberedAccounts");
  };

  const authStateChangeHandler = (authState) => {
    if (!authState) {
      console.log("User is not logged in");
      // redirect to login page
      setAuthUser(null);
      setLoading(false);
      router.push("/");
    } else {
      console.log("User is logged in");
      setAuthUser(authState);
      setLoading(false);
    }
  };

  // Called when the component is mounted
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler);

    // Called when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);
  return {
    user: authUser,
    loading,
    logOut: handleLogout,
  };
};

export default useFirebaseAuth;
