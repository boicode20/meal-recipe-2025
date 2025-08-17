import { createContext, useState } from 'react'

const UserContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)


  return (
    <UserContext.Provider value={{user,setUser,loading,setLoading}}>
        {children}
    </UserContext.Provider>
  )
}

export default AuthProvider
