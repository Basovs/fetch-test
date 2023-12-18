"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const RefreshData = ({ randomUser }: { randomUser: boolean }) => {
  const router = useRouter()

  useEffect(() => {
    if (!randomUser) {
      router.refresh()
    }
  }, [])

  return null
}
