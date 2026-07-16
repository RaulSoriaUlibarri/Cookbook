import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/utlis/providers/ReactQueryProvider";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import ThemeProviders from "@/utlis/providers/themeProvider";
import { Theme } from "@radix-ui/themes";
import { NavBar } from "@/components/index";

import { Quintessential } from "next/font/google";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quintessential",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Recetario | Portafolio de Raúl Soria",
  description:
    "Aplicación de recetas desarrollada con React y Next.js, parte de mi portafolio como frontend engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${quintessential.variable} font-sans`}
      >
        <ThemeProviders>
          <ReactQueryProvider>
            <header className="bg-white dark:bg-black">
              <NavBar />
            </header>
            <Theme>{children}</Theme>
          </ReactQueryProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
