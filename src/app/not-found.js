"use client"; // → useClient porque el Button tiene interactividad
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <main className="container m-auto">
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
