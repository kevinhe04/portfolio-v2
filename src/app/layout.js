import "./globals.css";
import { Petrona } from "next/font/google";

const petrona = Petrona({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Kevin He",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={petrona.className}>
      <body>{children}</body>
    </html>
  );
}
