import useSWR from 'swr'

const HomeComp: React.FC = () => {
  const { data, error } = useSWR('/users/1')

  return (
    <main className="items-center w-full min-h-screen bg-blue-100">
      {!data && !error && 'Loading'}

      {error && <pre>{JSON.stringify(error, null, 4)}</pre>}

      {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </main>
  )
}

export default HomeComp
