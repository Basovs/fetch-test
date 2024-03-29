"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { revalidatePathAction } from "./revalidate-router-cache-provider.action"

export const RevalidateRouterCacheProvider = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.log("REVALIDATING -> ")
    revalidatePathAction({ pathname })

    // window.addEventListener("focus", revalidateFn)

    // return () => {
    //   window.removeEventListener("focus", revalidateFn)
    // }
  }, [pathname])

  return null
}
