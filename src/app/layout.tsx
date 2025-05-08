import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "EscCode",
  description: "Desarrollamos Sitios y Aplicaciones Webs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`font-title`}
      >
        {children}
      </body>
    </html>
  );
}
