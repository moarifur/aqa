import { Raleway } from '@next/font/google';
import "./globals.css";
import Navbar from "@/app/layout/Navbar";
import Footer from "@/app/layout/Footer";

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700', '800'], // Include various font weights
});

export const metadata = {
  title: "AQA",
  description: "Assurance Quality Apparels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
