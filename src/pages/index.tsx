import Head from 'next/head'
import Link from 'next/link'
// files
import HomeComp from '../components/Home'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className="items-center justify-center w-full min-h-screen">
        <Link href="/counter">
          <a>Example - Counter</a>
        </Link>

        <br />

        <Link href="/todo">
          <a>Example - ToDo</a>
        </Link>

        <HomeComp />
      </main>
    </>
  )
}

export default HomePage
