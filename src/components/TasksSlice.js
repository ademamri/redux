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
    addtask:(state,action)=>{
      state.tasks=[...state.tasks,action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtask } = TaskSlice.actions

export default TaskSlice.reducer