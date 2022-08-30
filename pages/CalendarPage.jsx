import Link from "next/link";
import useFirebaseAuth from "../config/useAuth";

const ProfilePage = () => {
  const { user, loading, logOut } = useFirebaseAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Logged In!</h1>
      <Link href="/">
        <button type="button">Goto Index Page</button>
      </Link>
      <Link href="/EntryPage">
        <button type="button">Goto Home Page</button>
      </Link>
    </div>
  );
};

export default ProfilePage;
