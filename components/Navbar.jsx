import { Typography } from "@mui/material";
import Link from "next/link";
import useFirebaseAuth from "../config/useAuth";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const { user, loading, logOut } = useFirebaseAuth();
  return (
    <>
      <nav className={styles.navbar}>
        <Typography variant="h3" sx={{ color: "#463737" }}>
          Days of University!
        </Typography>
        {user ? (
          <div className={styles.navButtons}>
            <Link href="/">
              <button type="button" className={styles.links}>
                View Calendar
              </button>
            </Link>
            <Link href="/EntryPage">
              <button type="button" className={styles.links}>
                Make an Entry
              </button>
            </Link>
            <Link href="/Logout">
              <button type="button" className={styles.links}>
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link href="/Login">
            <button type="button" className={styles.links}>
              Login
            </button>
          </Link>
        )}
      </nav>
      {props.children}
    </>
  );
};

export default Navbar;
