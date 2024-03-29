import { Nunito_Sans } from "next/font/google";
import "./globals.css";

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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
