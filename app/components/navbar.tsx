import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="flex gap-4 p-2">
      <Link href="/" className="py-2 px-4 bg-blue-400">
        Home
      </Link>

      <Link href="random-user-1" className="py-2 px-4 bg-blue-400">
        RandomUser 1
      </Link>

      <Link href="random-user-2" className="py-2 px-4 bg-blue-400">
        RandomUser 2
      </Link>

      <Link href="random-user-3" className="py-2 px-4 bg-blue-400">
        RandomUser 3
      </Link>
    </div>
  )
}
