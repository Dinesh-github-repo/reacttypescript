import React from 'react'

interface PropsType {
    name:string,
    age:number
}
type SecondWay = {
    name:string,
    age:number,
    isActive:boolean
}
const Home = (props:SecondWay) => {
  return (
    <>
    <div>{props.name}</div>
    <p>your age is {props.age} and your are eligible for voting.</p>
    {props.isActive ? <p>true</p> : <p>false</p>}
    </>
  )
}

export default Home