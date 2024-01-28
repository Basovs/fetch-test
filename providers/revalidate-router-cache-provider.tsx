"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useEffect } from "react"
import { revalidatePathAction } from "./revalidate-path-action"

export const RevalidateRouterCacheProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const pathname = usePathname()

  useEffect(() => {
    console.log("REVALIDATING -> ")
    revalidatePathAction({ pathname })

    // window.addEventListener("focus", revalidateFn)

    // return () => {
    //   window.removeEventListener("focus", revalidateFn)
    // }
  }, [pathname])

  return <>{children}</>
}
