import React, { useState } from 'react'
import { addtask } from './TasksSlice'
import { useDispatch } from 'react-redux'

const Add = () => {
const [newtask, setnewtask] = useState({
   textt:"",
  isDone:false
})
const dispatch=useDispatch()
  return (
    <div  className='add'>
      <h1>To do list</h1>
      <input onChange={(e)=>setnewtask({...newtask,textt:e.target.value})} type="text" />
      <button onClick={()=>dispatch(addtask(newtask))} >Add</button>

    </div>
  )
}

export default Add