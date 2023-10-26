async function getTodo({ id }: { id: string }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

  return res.json()
}

export const Todo = async ({ slug }: { slug: string }) => {
  const todo = await getTodo({ id: slug })
  console.log("todotodo -> ", todo)

  return (
    <div>
      <p>{todo.title}</p>
    </div>
  )
}
