import "./globals.css"
import '../../styles/globalStyles.scss'
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { readexFont } from "@/utils/fonts"
import ClientProvider from "@/providers/queryProvider"

export const metadata: Metadata = {
  title: "Developli",
  description: "Job finder platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ClientProvider>
        <body className={readexFont.className}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </ClientProvider>
    </html>
  );
}
