import { configureStore } from '@reduxjs/toolkit'
import counterReduce from './Slice'

export const store = configureStore({
  reducer: {
    counter: counterReduce
  }
})