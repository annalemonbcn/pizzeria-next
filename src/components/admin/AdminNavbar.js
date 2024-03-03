import React from "react";
import Button from "../Button";
import Link from "next/link";
import LogoutSvg from "../svg/LogoutSvg";

// TODO: seguir con logout y observador de autenticacion
const AdminNavbar = () => {
  return (
    <nav className="w-full flex items-center justify-start gap-8">
      <Link href="/admin/create">
        <Button className="primary">Create product</Button>
      </Link>
      <Link href="/logout">
        <LogoutSvg />
      </Link>
    </nav>
  );
};

export default AdminNavbar;
