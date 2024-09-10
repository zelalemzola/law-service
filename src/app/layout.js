import { EB_Garamond } from "next/font/google";
import "./globals.css";


const inter = EB_Garamond({ subsets: ["latin"], weight:['400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
