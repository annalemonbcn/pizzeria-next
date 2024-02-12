"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <main className="w-full flex flex-col items-center mt-12">
        <h1 className="text-4xl text-ellipsisxt-blue-600 my-4">
          404 - Page not found
        </h1>
        <p className="mt-4">The route you are trying to access does not exist</p>
        <Button className="primary" onClick={() => router.back()}>
          Back
        </Button>
      </main>
    </>
  );
};

export default NotFound;
