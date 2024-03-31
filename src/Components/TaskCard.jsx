import React from 'react'
import Edit from './Edit'

const TaskCard = ({task,deleteOne,Completeone,handleEdit}) => {
    console.log(task)
  return (
    
    <div>
    <h1 className='text'>{task.action}</h1>
    <button onClick={()=>deleteOne(task.id)} > Delete </button>
    <button onClick={()=>Completeone(task.id)}>Complete</button>
    <Edit task={task} handleEdit={handleEdit} />
    </div>
  )
}

export default TaskCard