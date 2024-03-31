import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({tasks,deletefunction,completefunction,handleEdit}) => {
    // console.log(completefunction)

  return (
    <div>
    {
        React.Children.toArray(tasks.map(el=><TaskCard task={el} deleteOne={deletefunction} Completeone={completefunction} handleEdit={handleEdit} />))
        
    }
   
    </div>
  )
  
}

export default TaskList