import "./globals.css"
import '../../styles/globalStyles.scss'
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { readexFont } from "@/utils/fonts"

export const metadata: Metadata = {
  title: "Developli",
  description: "Job finder platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={readexFont.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
