import { CircularProgress, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import LoginWithGoogle from "../config/loginWithGoogle";
import useFirebaseAuth from "../config/useAuth";
import styles from "./index.module.css";

const home = () => {
  const { user, loading, logOut } = useFirebaseAuth();
  const router = useRouter();
  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }
  if (!user) {
    router.push("/EntryPage");
  }
  return (
    <Navbar>
      <LoginWithGoogle />
      <Link href="/EntryPage">
        <button type="button">Goto Home Page</button>
      </Link>
      <Link href="/CalendarPage">
        <button type="button">Goto Profile Page</button>
      </Link>
    </Navbar>
  );
};

export default home;
