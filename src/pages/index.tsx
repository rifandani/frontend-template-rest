import Head from 'next/head'
// files
import HomeComp from '../components/Home'

export const HomePage = (): React.FC => {
  return (
    <>
      {/* @ts-ignore */}
      <Head>
        <title>Home</title>
      </Head>

      <HomeComp />
    </>
  )
}

export default HomePage
