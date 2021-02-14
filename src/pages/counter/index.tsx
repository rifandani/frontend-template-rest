import Head from 'next/head'
import Link from 'next/link'
// files
import CounterComp from '../../components/Counter'

const CounterPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Example - Counter</title>
      </Head>

      <main className="flex-col items-center justify-center w-full min-h-screen">
        <Link href="/">
          <a className="">Home</a>
        </Link>

        <Link href="/todo">
          <a>Example - ToDo</a>
        </Link>

        <CounterComp />
      </main>
    </>
  )
}

export default CounterPage
