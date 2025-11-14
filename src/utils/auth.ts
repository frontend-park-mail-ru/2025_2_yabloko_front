export const AUTH_USER = 'auth.user' as const
export const AUTH_IS_AUTHENTICATED = 'auth.isAuthenticated' as const
export const CART_COUNT = 'cart.count' as const


export function validateEmail(email: string): string {
	if (!email) {
		return 'Email обязателен'
	}
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return 'Некорректный email'
	}
	return ''
}

export function validatePassword(password: string): string {
	if (!password) {
		return 'Пароль обязателен'
	}
	if (password.length < 8) {
		return 'Пароль должен быть не короче 8 символов'
	}

	const uppercaseCount = (password.match(/[A-Z]/g) || []).length
	const lowercaseCount = (password.match(/[a-z]/g) || []).length
	const digitCount = (password.match(/[0-9]/g) || []).length
	const specialCharCount = (
		password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []
	).length

	if (uppercaseCount < 1) {
		return 'Пароль должен содержать минимум 1 заглавную букву'
	}
	if (lowercaseCount < 2) {
		return 'Пароль должен содержать минимум 2 строчные буквы'
	}
	if (digitCount < 2) {
		return 'Пароль должен содержать минимум 2 цифры'
	}
	if (specialCharCount < 1) {
		return 'Пароль должен содержать минимум 1 спецсимвол (!@#$%^&* и т.д.)'
	}

	return ''
}

export function validateConfirmPassword(
	password: string,
	confirmPassword: string,
): string {
	if (!confirmPassword) {
		return 'Подтверждение пароля обязательно'
	}
	if (password !== confirmPassword) {
		return 'Пароли не совпадают'
	}
	return ''
}
