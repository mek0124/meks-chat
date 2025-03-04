import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mek's Speak",
  description: "A simple online social network platform",
  icons: ["/images/icon.png"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
