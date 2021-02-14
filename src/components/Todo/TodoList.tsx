import { useDispatch, useSelector } from 'react-redux'
// files
import TodoItem from './TodoItem'
import { RootState } from '../../redux/store'
import { getNotes, addNote } from '../../redux/slices/notes'
import { useEffect, useState } from 'react'

const TodoList: React.FC = () => {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    dispatch(getNotes())
  }, [])

  // REDUX ----------------------------------------
  const { notes, loading, error } = useSelector(
    (state: RootState) => state.notes
  )
  const dispatch = useDispatch()

  const addTodo = async () => {
    try {
      if (!text || text.length <= 3) {
        return alert('dont empty | < 3')
      }

      const res = dispatch(addNote(text)) // belum work
      console.log('res =>', res.toString())
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex items-center justify-center w-full font-sans h-100 bg-teal-lightest">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>

          {/* input todo */}
          <div className="flex mt-4">
            <input
              // className="w-full px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker"
              className="w-full p-4 pr-20 text-white bg-gray-900 border-t-2 border-green-500 rounded shadow-inner outline-none"
              placeholder="Add Todo"
              required
              minLength={3}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={addTodo}
              className="p-2 border-2 rounded flex-no-shrink text-teal border-teal hover:bg-green-300"
            >
              Add
            </button>
          </div>
        </div>

        {loading !== 'loaded' && loading}
        {error && 'Error...'}

        {/* todo items */}
        <div>
          {notes && notes.map((note, i) => <TodoItem key={i} note={note} />)}
        </div>
      </div>
    </div>
  )
}

export default TodoList
