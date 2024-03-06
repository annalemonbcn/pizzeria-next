// rootLayout
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/context/CartContext";
import { AuthProvider } from "@/components/context/AuthContext";

import { Toaster, toast } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={`bg-cream text-black-main ${montserrat.className}`}>
      <AuthProvider>
        <CartProvider>
          <Toaster richColors position="top-right" />
          <Header />
          {children}
          {/* <Footer /> */}
        </CartProvider>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
