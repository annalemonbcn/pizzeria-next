// rootLayout
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/context/CartContext";
import { AuthProvider } from "@/components/context/AuthContext";

import { Toaster, toast } from "sonner";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={roboto.className}>
      <AuthProvider>
        <CartProvider>
          <Toaster richColors position="top-right" />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout
