import Button from "@/components/Button";
import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";

export default function Admin() {
  return (
    <main className="w-full flex flex-col items-center mt-12">
      <h1 className="text-2xl font-bold text-mainRed">ADMIN PANEL</h1>
      <ProductsTable />
      <Button className="primary">
        <Link href="/admin/create">Create product</Link>
      </Button>
    </main>
  );
}
