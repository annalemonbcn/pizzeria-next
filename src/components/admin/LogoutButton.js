"use client"
import LogoutSvg from "../svg/LogoutSvg";
import { useAuthContext } from "../context/AuthContext";

// TODO: repasar todos los "use client"
const LogoutButton = () => {
  const { logout } = useAuthContext();
  return (
    <button onClick={logout}>
      <LogoutSvg />
    </button>
  );
};

export default LogoutButton;
