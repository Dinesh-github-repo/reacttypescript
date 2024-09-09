import React from 'react'
interface LogType{
    status:"Info"| 'Warning' | 'Error';
}
const LogLevel = (props:LogType) => {
    let status;
    if(props.status == 'Info'){
        status = 'Info'
    }else if(props.status == 'Warning'){
        status = 'Warning'
    }else if(props.status == 'Error'){
        status = 'Error'
    }
  return (
    <div>LogLevel</div>
  )
}

export default LogLevel