import Link from "next/link";
import useFirebaseAuth from "../config/useAuth";
import { Typography } from "@mui/material";

const homepage = () => {
  const { user, loading, logOut } = useFirebaseAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Typography variant="h2">Enter an Entry for Today!</Typography>
    </div>
  );
};

export default homepage;
