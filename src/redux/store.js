import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/bookSlices'

export const store = configureStore({
  reducer: {
      book:bookReducer
  },
})