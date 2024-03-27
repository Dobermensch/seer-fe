'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(
  provider
) {
  return new Web3Provider(provider);
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Web3ReactProvider getLibrary={getLibrary}>
        <body className={inter.className}>{children}</body>
      </Web3ReactProvider>
    </html>
  );
}
