import React from 'react'
interface ParentProps{
    children:React.ReactNode
}
const Parent = (props:ParentProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Parent