import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[
    {
     textt:"dayyy",
        isDone:true
    },
    {
     textt:"heloo",
        isDone:true
    },
    {
        textt:"happy new year",
        isDone:false
    },
  ]
}

export const TaskSlice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = TaskSlice.actions

export default TaskSlice.reducer