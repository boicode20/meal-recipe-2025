import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);

export const hashPassword =(password) =>{
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}