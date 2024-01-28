import { unstable_noStore as noStore } from "next/cache"

const getRandomUser = async () => {
  noStore()

  const res = await fetch("https://random-data-api.com/api/users/random_user")

  return res.json()
}

export const RandomUser = async () => {
  const randomUser = await getRandomUser()

  return (
    <div className="flex gap-2 text-2xl font-medium text-lime-500 h-6">
      <p>{randomUser.first_name}</p>
      <p>{randomUser.last_name}</p>
    </div>
  )
}
