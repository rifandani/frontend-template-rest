import useSWR from 'swr'

const HomeComp: React.FC = () => {
  const { data, error } = useSWR('/users')

  return (
    <main className="items-center w-full min-h-screen bg-blue-100">
      {!data && !error && 'Loading'}

      {error && JSON.stringify(error, null, 4)}

      {data && JSON.stringify(data, null, 4)}
    </main>
  )
}

export default HomeComp
