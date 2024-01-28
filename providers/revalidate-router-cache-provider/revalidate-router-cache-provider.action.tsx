"use server"

import { revalidatePath } from "next/cache"

export const revalidatePathAction = async ({
  pathname,
}: {
  pathname: string
}) => {
  revalidatePath(pathname)
}
