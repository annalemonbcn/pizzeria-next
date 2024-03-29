import React from "react";
import Button from "../utils/Button";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const AdminNavbar = () => {
  return (
    <nav className="w-full flex items-center justify-start gap-8">
      <Link href="/admin/create">
        <Button>Create product</Button>
      </Link>
      <LogoutButton />
    </nav>
  );
};

export default AdminNavbar;
