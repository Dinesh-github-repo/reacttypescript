
import  { useState } from 'react';

interface UserType{
    name: string,
    email: string
}

const SignOut = () => {
    const [user, setUser] = useState<UserType | null>()
    const handleSignIn =() =>{
        setUser({
            name:'Yoshita',
            email:'Yoshita@gmail.com'
        });
    }
    const handleSignOut =() =>{
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignOut}>Sign Up</button>
        <div>{user?.name}{user?.email}</div>
    </div>
  )
}

export default SignOut