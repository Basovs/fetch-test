import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="flex gap-4 p-2">
      <Link href="/" prefetch={false} className="py-2 px-4 bg-blue-400">
        Home
      </Link>

      <Link
        href="random-user-1"
        prefetch={false}
        className="py-2 px-4 bg-blue-400"
      >
        RandomUser 1
      </Link>

      <Link
        href="random-user-2"
        prefetch={false}
        className="py-2 px-4 bg-blue-400"
      >
        RandomUser 2
      </Link>

      <Link
        href="random-user-3"
        prefetch={false}
        className="py-2 px-4 bg-blue-400"
      >
        RandomUser 3
      </Link>
    </div>
  )
}
