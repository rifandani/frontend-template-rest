import { useSelector, useStore } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../../redux/slices/counter'
// files
import { RootState, useAppDispatch } from '../../redux/store'

const CounterComp: React.FC = () => {
  const store = useStore()
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <main>
      <pre>{JSON.stringify(store.getState(), null, 4)}</pre>

      <hr className="mx-10 my-2" />

      <h1 className="text-lg font-bold">counter: {counter}</h1>

      <div className="flex justify-around w-full">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by amount
        </button>
      </div>
    </main>
  )
}

export default CounterComp
