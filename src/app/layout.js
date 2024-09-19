import "./globals.css";
import { Petrona } from "next/font/google";

const petrona = Petrona({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kevin He",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={petrona.className}>
      <body>{children}</body>
    </html>
  );
}
