import React, { useState } from 'react'

const Add = ({addFunction}) => {
  // console.log(addFunction)
  const [action, setAction] = useState("hii")
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newItem={
      id:Math.random(),action,isDone:false
    }
    addFunction(newItem)
    setAction("")
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" value={action} onChange={e=>setAction(e.target.value)} />
    <input type="submit" value="add" />
    </form>
    </div>
  )
}

export default Add