import { RandomUser } from "../components/random-user"

export const revalidate = 0

export default function RandomUser2() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-screen">
      <p className="text-4xl font-bold">Random User 2</p>

      <RandomUser />
    </main>
  )
}
