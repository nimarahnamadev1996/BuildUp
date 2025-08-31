import type { Metadata } from "next";
import {ClerkProvider} from '@clerk/nextjs'

import "./globals.css";
import LayoutProvider from "@/layout-provider";
import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "BuildUp",
  description: "Portfolio-Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <LayoutProvider>{children}</LayoutProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </body>
     </html>
    </ClerkProvider>
  );
}
