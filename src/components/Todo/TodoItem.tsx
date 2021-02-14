import { Note } from '../../redux/slices/notes'

interface NoteProps {
  note: Note
}

const TodoList: React.FC<NoteProps> = ({ note }) => {
  const checkNote = async (noteId: number) => {
    const x = noteId
    alert(x)
  }

  const deleteNote = async (noteId: number) => {
    const y = noteId
    alert(y)
  }

  return (
    <div className="flex items-center mb-4">
      <p
        className={`${note.completed ? 'line-through' : ''} w-full text-green`}
      >
        {note.text}
      </p>

      <button
        onClick={() => checkNote(note.id)}
        className="p-2 ml-4 mr-2 border-2 rounded flex-no-shrink hover:text-white text-grey border-grey hover:bg-grey"
      >
        {note.completed ? 'Not Done' : 'Done'}
      </button>

      <button
        onClick={() => deleteNote(note.id)}
        className="p-2 ml-2 border-2 rounded flex-no-shrink text-red border-red hover:text-white hover:bg-red"
      >
        Remove
      </button>
    </div>
  )
}

export default TodoList
