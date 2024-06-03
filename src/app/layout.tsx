import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import '../../styles/globalStyles.scss';
import Link from 'next/link';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const readex = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developli",
  description: "Job finder platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={readex.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
