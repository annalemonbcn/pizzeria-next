"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <main className="w-full flex flex-col items-center mt-12">
        <h1 className="text-4xl text-ellipsisxt-blue-600 my-4">
          Error 404 - Página no encontrada
        </h1>
        <p className="mt-4">La ruta a la que intentas acceder no existe</p>
        <Button className="primary" onClick={() => router.back()}>
          Volver
        </Button>
      </main>
    </>
  );
};

export default NotFound;
