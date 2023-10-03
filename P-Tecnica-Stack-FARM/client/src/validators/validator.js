export function emailValidator(email){
    const emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegEx.test(email);
}

export function passwordValidator(pass){
    return pass.length>6;
}

export function nameValidator(name){
    return name.length > 3 && name.length < 50
}