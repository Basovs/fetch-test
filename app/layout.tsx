import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { Navbar } from "./components/navbar"
import { RevalidateRouterCacheProvider } from "@/providers/revalidate-router-cache-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fetch Test",
  description:
    "A simple demo of what doesnt work as expected with next.js RSC payload router cache",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RevalidateRouterCacheProvider>
          <Navbar />

          {children}
        </RevalidateRouterCacheProvider>
      </body>
    </html>
  )
}
