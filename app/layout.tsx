import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PivkoVPN",
  description: "Безопасный VPN с управлением через веб и Telegram.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
