
// handle the input change of user data
export const handleInput = (e,setUser) =>{
    setUser(prev => ({...prev,[e.target.name]:e.target.value}))    
}
// confirm password handle change
export const handleConfirmPass = (e,setConfirm) =>{
    setConfirm(e.target.value)
} 

