import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Head } from "next/document";

const inter = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata = {
  title: "DashStack - Admin dashboard",
  description: "DashStack - Admin dashboard from Usmonjon Hasanov",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script src="https://cdn.tailwindcss.com"></script>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
