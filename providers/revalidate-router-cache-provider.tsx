"use client"

import { usePathname } from "next/navigation"
import { ReactNode, useEffect } from "react"

export const RevalidateRouterCacheProvider = ({
  children,
  revalidateFn,
}: {
  children: ReactNode
  revalidateFn: ({ pathname }: { pathname: string }) => Promise<void>
}) => {
  const pathname = usePathname()

  useEffect(() => {
    console.log("REVALIDATING -> ")
    revalidateFn({ pathname })

    // window.addEventListener("focus", revalidateFn)

    // return () => {
    //   window.removeEventListener("focus", revalidateFn)
    // }
  }, [pathname])

  return <>{children}</>
}
