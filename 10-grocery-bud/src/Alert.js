import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{removeAlert()}, 3000)
    return () => clearTimeout(timeout);
  },[list])
  //every time when list changes, it will re-render the function 
  //so that it will stay for 3 seconds  
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
