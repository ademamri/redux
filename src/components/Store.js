import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from './TasksSlice'

export const store = configureStore({
  reducer: {
  taskslice:TaskSlice
  },
})