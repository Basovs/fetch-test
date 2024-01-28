import { Suspense } from "react"

import { RandomUser } from "../components/random-user"
import { RevalidateRouterCacheProvider } from "@/providers/revalidate-router-cache-provider"

export default async function RandomUser1() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-screen">
      <p className="text-4xl font-bold">Random User 1</p>

      <RevalidateRouterCacheProvider />

      <Suspense fallback={<p>Loading user 1...</p>}>
        <RandomUser />
      </Suspense>
    </main>
  )
}
