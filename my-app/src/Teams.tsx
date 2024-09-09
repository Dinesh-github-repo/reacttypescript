import React from 'react';
interface TeamTypes{
    IPL:{
        team:string;
        color:string;
    }[]
}

const Teams = (props:TeamTypes) => {
  return (
    <div>{props.IPL.map(team => (<><div>{team.team}</div> <div>{team.color}</div></>))}</div>
  )
}

export default Teams