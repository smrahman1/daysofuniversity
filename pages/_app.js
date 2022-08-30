import initializeFirebase from "../config/firebase";
import "../styles/globals.css";

// import { AuthUserProvider } from "../context/AuthUserContext";

function MyApp({ Component, pageProps }) {
  initializeFirebase();
  return (
    // <AuthUserProvider>
    <Component {...pageProps} />
    // </AuthUserProvider>
  );
}

export default MyApp;
