import bcrypt from 'bcryptjs'

export const comparePassword = (password,user) =>{
    const isCorrect = bcrypt.compareSync(password, user.password); // true
    return isCorrect;
}