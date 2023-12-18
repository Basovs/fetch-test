import { unstable_noStore as noStore } from "next/cache"
// import { RefreshData } from "./refresh-data"

const getRandomUser = async () => {
  noStore()

  const res = await fetch("https://random-data-api.com/api/users/random_user")

  return res.json()
}

// const RevalidateButton = () => {
//   return <button>Revalidate</button>
// }

// const revalidateData = async () => {
//   "use server"
//   revalidateTag("random-user")
// }

// const RevalidateForm = () => {
//   return (
//     <form action={revalidateData}>
//       <RevalidateButton />
//     </form>
//   )
// }

export const RandomUser = async () => {
  const randomUser = await getRandomUser()

  return (
    <div>
      {/* <RefreshData randomUser={Boolean(randomUser)} /> */}

      {/* <RevalidateForm /> */}

      <div className="flex gap-2 text-2xl font-medium text-lime-500">
        <p>{randomUser.first_name}</p>
        <p>{randomUser.last_name}</p>
      </div>
    </div>
  )
}
