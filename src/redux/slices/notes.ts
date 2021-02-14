import axios from 'axios'
import {
  Action,
  AnyAction,
  createAsyncThunk,
  createSlice,
  // PayloadAction,
} from '@reduxjs/toolkit'

export interface Note {
  id: number
  text: string
  completed: boolean
}

interface GetNotesResp {
  success: boolean
  msg?: string
  todos?: Note[]
}

interface GetNoteResp {
  success: boolean
  msg?: string
  todos?: Note
}

interface AddNoteResp {
  success: boolean
  msg: string
}

type NoteLoadingState = 'idle' | 'loading' | 'loaded' | 'error'

interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

// create async thunk reducers
// GET /notes
const getNotes = createAsyncThunk<GetNotesResp>(
  'notes/getNotes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3000/api/notes')

      return response?.data
    } catch (error) {
      // error.message berasal dari AxiosError
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

// GET /notes/:id
const getNote = createAsyncThunk<GetNoteResp, number>(
  'notes/getNote',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`http://localhost:3000/api/notes/${id}`)

      return resp?.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

// POST /notes
const addNote = createAsyncThunk<AddNoteResp, string>(
  'notes/addNotes',
  async (text, thunkAPI) => {
    try {
      const resp = await axios.post('http://localhost:3000/api/notes', {
        id: Math.floor(Math.random() * 1000000),
        text,
        completed: false,
      })

      return resp?.data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

/**
 * Allows us to provide an object with the reducer functions, and it will automatically generate the action type strings and action creator functions based on the names of the reducers we listed.
 *
 * @returns {Object} slice object that contains the generated reducer function as a field named reducer, and the generated action creators inside an object called actions
 */
const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [] as Note[],
    loading: 'idle' as NoteLoadingState, // using state-machine style instead of boolean
    error: null as RejectedAction,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state, _) => {
        state.loading = 'loading'
        state.notes = []
      })
      // manual casting action: PayloadAction<Note[]>
      .addCase(getNotes.fulfilled, (state, action) => {
        // action.payload === resp.data === { success: true, todos: Note[] }
        state.loading = 'loaded'
        state.notes = action.payload.todos
      })
      .addCase(addNote.fulfilled, (state, _) => {
        // action.payload === resp.data === { success: true, msg: string }
        state.loading = 'loaded'
      })
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction
        // due to isRejectedAction being defined as a type guard
        (state, action) => {
          state.loading = 'error'
          state.error = action
        }
      )
      // and provide a default case if no other handlers matched
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .addDefaultCase((_, __) => {})
  },
})

export {
  getNotes,
  getNote,
  addNote,
  // editNotes,
  // deleteNotes,
}

export default notesSlice.reducer
