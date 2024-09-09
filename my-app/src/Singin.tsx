import React, { useState } from 'react'

const Singin = () => {
    const [isSignIn, setSignIn] = useState(false)
    const handleSignIn =() =>{
        setSignIn(true);
    }
    const handleSignOut =() =>{
        setSignIn(false)
    }
  return (
    <div>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignOut}>Sign Up</button>
        <div>{isSignIn ? "Sign In" : "Sign Out"}</div>
    </div>
  )
}

export default Singin