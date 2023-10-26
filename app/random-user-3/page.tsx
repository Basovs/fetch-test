import { RandomUser } from "../components/random-user"

export const revalidate = 0

export default function RandomUser3() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-screen">
      <p className="text-4xl font-bold">Random User 3</p>

      <Suspense fallback={<p>Loading user 3</p>}>
        <RandomUser />
      </Suspense>
    </main>
  )
}
