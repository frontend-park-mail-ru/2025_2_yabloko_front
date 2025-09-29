export function validPassword(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push("Пароль должен быть не менее 8 символов");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну заглавную букву");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну строчную букву");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну цифру");
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы один спецсимвол");
    }

    return errors;
}

export function validEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export function validUsername(username) {
    const errors = [];
    
    if (username.length < 3) {
        errors.push("Логин должен быть не менее 3 символов");
    }
    
    if (username.length > 20) {
        errors.push("Логин должен быть не более 20 символов");
    }
    
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        errors.push("Логин может содержать только буквы, цифры и подчеркивания");
    }
    
    if (!/^[a-zA-Z]/.test(username)) {
        errors.push("Логин должен начинаться с буквы");
    }
    
    return errors;
}

// TODO: login signup
