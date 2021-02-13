import Head from 'next/head'
import { useSelector, useStore } from 'react-redux'
// files
import HomeComp from '../components/Home'
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../redux/slices/counter'
import { RootState, useAppDispatch } from '../redux/store'

const HomePage = (): JSX.Element => {
  const store = useStore()
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <pre>{JSON.stringify(store.getState(), null, 4)}</pre>

        <hr className="mx-10 my-2" />

        <h1 className="text-lg font-bold">counter: {counter}</h1>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by amount
        </button>
      </div>

      <div>
        <HomeComp />
      </div>
    </>
  )
}

export default HomePage
