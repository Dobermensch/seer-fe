import "./globals.css"

import { Inter } from "next/font/google"

export const metadata = {
  title: "RPSLS",
  description: "RPSLizardSpock",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
