import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Miam Consultants (PTY) LTD | Professional Accountants Durban",
  description: "Miam Consultants — Professional Accountants based in Durban, KwaZulu-Natal. Accounting, Tax, Audit, Business Consulting and more.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
