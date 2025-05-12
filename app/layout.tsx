// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FITEC",
  description: "Plataforma de gestión para el gimnasio FITEC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <div className="w-full ">
          {children}
        </div>
      </body>
    </html>
  );
}

