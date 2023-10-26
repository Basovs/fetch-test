async function getRandomUser() {
  const res = await fetch(`https://random-data-api.com/api/users/random_user`, {
    cache: "no-store",
  })

  return res.json()
}

export const RandomUser = async () => {
  const randomUser = await getRandomUser()

  return (
    <div className="flex gap-2 text-2xl font-medium text-lime-500">
      <p>{randomUser.first_name}</p>
      <p>{randomUser.last_name}</p>
    </div>
  )
}
