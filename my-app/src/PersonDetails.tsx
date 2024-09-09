import React from 'react'
interface PersonDetailsType{
    Details:{
        FName:string,
        LName:string,
        Age?:number
    }
}

const PersonDetails = (props:PersonDetailsType) => {
  return (
    <div>
        <div>First Name - {props.Details.FName}</div>
        <div>Last Name - {props.Details.LName}</div>
        <div>Age - {props.Details.Age}</div>
    </div>
  )
}

export default PersonDetails