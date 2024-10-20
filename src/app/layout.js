import { Outfit } from "next/font/google";
import "./globals.css";


const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Sina Law Office",
  description: "Sina Law Office",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
     
        {children}
     
      </body>
    </html>
  );
}
