import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { Navbar } from "./components/navbar"
import { RevalidateRouterCacheProvider } from "@/providers/revalidate-router-cache-provider"
import { revalidatePath } from "next/cache"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fetch Test",
  description:
    "A simple demo of what doesnt work as expected with next.js RSC payload router cache",
}

const revalidatePaths = async ({ pathname }: { pathname: string }) => {
  "use server"

  revalidatePath(pathname)
  // revalidatePath("/random-user-1")
  // revalidatePath("/random-user-2")
  // revalidatePath("/random-user-3")
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RevalidateRouterCacheProvider revalidateFn={revalidatePaths}>
          <Navbar />

          {children}
        </RevalidateRouterCacheProvider>
      </body>
    </html>
  )
}
