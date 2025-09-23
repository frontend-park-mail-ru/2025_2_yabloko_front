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

// TODO: login signup
