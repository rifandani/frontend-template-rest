import { AxiosError } from 'axios'
import useSWR from 'swr'

interface MyCustomAPIReturnType {
  success: boolean
  msg: string
}

const HomeComp: React.FC = () => {
  const { data, error } = useSWR('/users/1', {
    onError: (err) => {
      // axios custom error handler
      if (err && err.response) {
        const axiosError = err as AxiosError<MyCustomAPIReturnType>
        return axiosError.response?.data
      }

      throw err
    },
  })

  return (
    <main className="items-center w-full min-h-screen bg-blue-100">
      {!data && !error && 'Loading'}

      {error && <pre>{JSON.stringify(error, null, 4)}</pre>}

      {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </main>
  )
}

export default HomeComp
