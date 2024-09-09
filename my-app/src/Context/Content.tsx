import React, { useContext } from 'react'
import { StyleObjContext } from './StyleContext'

const Content = () => {
    const theme = useContext(StyleObjContext)
  return (
    <div style={{color: theme.style2.theme}}>Content</div>
  )
}

export default Content