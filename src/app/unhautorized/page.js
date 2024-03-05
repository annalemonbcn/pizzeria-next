"use client"
import Button from "@/components/style/Button";
import { useRouter } from "next/navigation";

const Unhautorized = () => {
  const router = useRouter();
  return (
    <>
      <main className="w-full flex flex-col items-center mt-12">
        <h1 className="text-4xl text-ellipsisxt-blue-600 my-4">
          401 - Unhautorized
        </h1>
        <p className="mt-4">You don&apos;t have permission to acces this route</p>
        <Button className="primary" onClick={() => router.replace("/")}>
          Back home
        </Button>
      </main>
    </>
  );
}

export default Unhautorized
