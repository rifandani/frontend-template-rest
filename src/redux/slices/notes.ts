import {
  Action,
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

interface Note {
  id: number
  text: string
  completed: boolean
}

type NoteLoadingState = 'idle' | 'loading' | 'loaded' | 'error'

interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

// create async thunk reducers
export const loadNotes = createAsyncThunk(
  'notes/loadNotes',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/api/notes')

      return response.json()
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
    loading: 'idle' as NoteLoadingState,
    error: null as RejectedAction,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNotes.pending, (state, _) => {
        state.notes = []
        state.loading = 'loading'
      })
      .addCase(loadNotes.fulfilled, (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload)
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

export default notesSlice.reducer
