import Head from 'next/head'
import Link from 'next/link'
// files
import TodoList from '../../components/Todo/TodoList'

const TodoPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Example - Todo</title>
      </Head>

      <main className="w-full min-h-screen">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/todo">
          <a>Example - Counter</a>
        </Link>

        <TodoList />
      </main>
    </>
  )
}

export default TodoPage
