import "./globals.css";
import { Inter } from "next/font/google";
import AppBar from "@/components/AppBar";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Attendease",
  description: "atendance ka rkh lo hissab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Provider>
          <AppBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
