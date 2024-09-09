import React, { createContext } from 'react'
import { StyleObj } from './Style'

export const StyleObjContext = createContext(StyleObj)
interface StyleContextType{
    Children:React.ReactNode
}

export const StyleContextProvider = ({Children}:StyleContextType) =>{
    return <StyleObjContext.Provider value={StyleObj}>{Children}</StyleObjContext.Provider>
}
