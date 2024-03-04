import React from "react";
import Button from "../Button";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const AdminNavbar = () => {
  return (
    <nav className="w-full flex items-center justify-start gap-8">
      <Link href="/admin/create">
        <Button className="primary">Create product</Button>
      </Link>
      <LogoutButton />
    </nav>
  );
};

export default AdminNavbar;
