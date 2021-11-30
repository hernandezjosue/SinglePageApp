const  user = {
    email :'pep@email.com',
    pass : '123'
}

export const loginService =(email,pass)=>{
    if(user.email === email && user.pass === pass){
        const token =`${email}.${pass} `
        return token
    }else{
        return new Error('error')
    }
}