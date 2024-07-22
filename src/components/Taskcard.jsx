import React from 'react'

const TaskCard = ({el}) => {
  return (
    <div className='card'  >
      <h1  >{el.textt}</h1>
    </div>
  )
}

export default TaskCard