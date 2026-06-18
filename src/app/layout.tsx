import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/utlis/providers/ReactQueryProvider";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import ThemeProviders from "@/utlis/providers/themeProvider";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProviders>
          <ReactQueryProvider>
            <Theme>{children}</Theme>
          </ReactQueryProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
