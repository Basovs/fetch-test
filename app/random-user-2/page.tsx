import { Suspense } from "react"

import { RandomUser } from "../components/random-user"

export default async function RandomUser2() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-screen">
      <p className="text-4xl font-bold">Random User 2</p>

      <Suspense fallback={<p>Loading user 2...</p>}>
        <RandomUser />
      </Suspense>
    </main>
  )
}
