import { configureStore, Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
// files
import counterReducer from './slices/counter'
import notesReducer from './slices/notes'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(require('redux-logger')),
})

// types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>()

export default store
