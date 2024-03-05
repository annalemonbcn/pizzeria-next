import Button from "@/components/Button";
import AdminNavbar from "@/components/admin/AdminNavbar";
import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";

export default function Admin() {
  return (
    <main className="w-full flex flex-col items-center mt-12">
      <h1 className="text-2xl font-bold text-red-main">ADMIN PANEL</h1>
      <AdminNavbar />
      <ProductsTable />
    </main>
  );
}
