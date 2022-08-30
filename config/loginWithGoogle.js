import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

const LoginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      router.push("/homepage");
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button type="button" onClick={handleLogin}>
      Login with Google
    </button>
  );
};

export default LoginWithGoogle;
