import {validEmail, validPassword} from "../../utils/auth.js";

export class Login {
    constructor(parent, state) {
        this.state = state;
        this.parent = parent;

        this.fields = [
            {placeholder: "Email", type: "email", name: "email", warn: "Введите корректный Email"},
            {placeholder: "Пароль", type: "password", name: "password", warn: ""},
            {placeholder: "Повторите пароль", type: "password", name: "repassword", warn: "Пароли не совпадают"}
        ];
    }

    render() {
        const template = Handlebars.templates["Login.hbs"];

        const curIsLogin = this.state.activeMenu === "login";
        const curIsSignup = this.state.activeMenu === "signup";
        const prevIsLogin = this.state.prevMenu === "login";
        const prevIsSignup = this.state.prevMenu === "signup";

        // Если переход из мейн страницы в логин
        if (curIsLogin && !prevIsSignup) {
            this.parent.innerHTML = template({inputs: this.fields});

            const rePassword = this.parent.querySelector("div[id=repassword]");
            rePassword.classList.add("inactive");

            this.setSwitchListener();
            this.setLoginListeners();
        } else if (prevIsLogin && curIsSignup) {
            // Переход из логина в регу
            this.loginToSignup();

            this.removeLoginListeners();
            this.setSignupListeners();
        } else if (prevIsSignup && curIsLogin) {
            // Переход из реги в логин
            this.signupToLogin();

            this.removeSignupListeners();
            this.setLoginListeners();
        }
    }

    loginToSignup() {
        this.#removeLoginWarn();
        const {password, rePassword} = this.#getAllElements();
        password.value = "";
        
        const repasswordDiv = this.parent.querySelector("div[id=repassword]");
        if (repasswordDiv) repasswordDiv.classList.remove("inactive");

        const login = this.parent.querySelector("div[id=login]");
        login.classList.add("inactive");

        const signupButton = this.parent.querySelector("button[id=signup]");
        signupButton.removeAttribute("type");

        this.removeSwitchListener();
    }

    signupToLogin() {
        this.#removeSignupWarns();
        const {email, password, rePassword} = this.#getAllElements();
        email.value = "";
        password.value = "";

        const repasswordDiv = this.parent.querySelector("div[id=repassword]");
        if (repasswordDiv) repasswordDiv.classList.add("inactive");

        const login = this.parent.querySelector("div[id=login]");
        login.classList.remove("inactive");

        const signupButton = this.parent.querySelector("button[id=signup]");
        signupButton.style.type

        this.setSwitchListener();
    }

    #switchListener = (e) => {
        e.preventDefault();

        this.state.prevMenu = this.state.activeMenu;
        this.state.activeMenu = "signup";
        this.removeLoginListeners();
        this.render();
    }

    setSwitchListener() {
        this.parent.querySelector("button[id=signup]").addEventListener("click", this.#switchListener);
    }

    removeSwitchListener() {
        this.parent.querySelector("button[id=signup]").removeEventListener("click", this.#switchListener);
    }

    #submitLogin = (e) => {
        e.preventDefault();

        const {email, password} = this.#getAllElements();
        const warn = this.parent.querySelector("div[id=warn_login]");

        const emailStr = email.value.trim();
        const passwordStr = password.value.trim();

        if (emailStr && passwordStr && validEmail(emailStr)) {
            warn.classList.remove("active");
            // TODO login({emailStr, passwordStr});
        } else {
            password.value = "";

            if (!emailStr) {
                email.classList.add("warning");
            }
            if (!passwordStr) {
                password.classList.add("warning");
            }

            warn.textContent = "Заполните все поля корректно";
            warn.classList.add("active");
        }
    }

    #removeLoginWarn = () => {
        const {email, password} = this.#getAllElements();
        const warn = this.parent.querySelector("div[id=warn_login]");
        
        if (email) email.classList.remove("warning");
        if (password) password.classList.remove("warning");
        if (warn) warn.classList.remove("active");
    }



    setLoginListeners() {
        this.parent.querySelector("form").addEventListener("submit", this.#submitLogin);

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener("click", this.#removeLoginWarn);
        });
    }

    removeLoginListeners() {
        this.parent.querySelector("form").removeEventListener("submit", this.#submitLogin);

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => {
            input.removeEventListener("click", this.#removeLoginWarn);
        });
    }

    #getAllElements = () => {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const rePassword = this.parent.querySelector("input[name=repassword]");

        const warnEmail = this.parent.querySelector("div[id=warn_email]");
        const warnPassword = this.parent.querySelector("div[id=warn_password]");
        const warnRePass = this.parent.querySelector("div[id=warn_repassword]");
        const warnSignup = this.parent.querySelector("div[id=warn_signup]");

        return {email, password, rePassword, warnEmail, warnPassword, warnRePass, warnSignup};
    }

    #removeSignupWarns = () => {
        const {email, password, rePassword, warnEmail, warnSignup} = this.#getAllElements();

        if (warnSignup) warnSignup.classList.remove("active");
        if (warnEmail) warnEmail.classList.remove("active");
        
        if (email) email.classList.remove("warning");
        if (password) password.classList.remove("warning");
        if (rePassword) rePassword.classList.remove("warning");
    }

    #submitSignup = (e) => {
        e.preventDefault();

        const {email, password, rePassword, warnEmail, warnPassword, warnRePass, warnSignup} = this.#getAllElements();

        const emailStr = email.value.trim();
        const passwordStr = password.value.trim();
        const rePasswordStr = rePassword.value.trim();

        const isMatchPassword = passwordStr === rePasswordStr;
        if (!isMatchPassword) {
            password.classList.add("warning");
            rePassword.classList.add("warning");
            warnRePass.classList.add("active");
            warnRePass.textContent = "Пароли не совпадают";
        }

        if (emailStr && passwordStr && isMatchPassword) {

            if (validEmail(emailStr)) {
                warnEmail.classList.remove("active");
                email.classList.remove("warning");
            } else {
                warnEmail.classList.add("active");
                email.classList.add("warning");
            }

            const errors = validPassword(passwordStr);
            if (errors.length > 0) {
                warnPassword.textContent = errors[0];
                warnPassword.classList.add("active");
                password.classList.add("warning");
            } else {
                warnPassword.classList.remove("active");
                password.classList.remove("warning");

                // TODO: signup({ emailStr, passwordStr });
                warnSignup.classList.remove("active");
            }

        } else {
            if (!validEmail(emailStr)) {
                email.classList.add("warning");
            }
            if (!passwordStr) {
                password.classList.add("warning");
            }
            if (!rePasswordStr) {
                rePassword.classList.add("warning");
            }
            warnSignup.textContent = "Заполните все поля корректно";
            warnSignup.classList.add("active");
        }
    }

    #checkPasswordsMatch = () => {
        const {password, rePassword, warnRePass, warnPassword} = this.#getAllElements();

        const passwordStr = password.value.trim();
        const rePasswordStr = rePassword.value.trim();

        if (passwordStr && rePasswordStr === "") {
            const errors = validPassword(passwordStr);
            if (errors.length > 0) {
                warnPassword.textContent = errors[0];
                warnPassword.classList.add("active");
                password.classList.add("warning");
            } else {
                warnPassword.textContent = "";
                warnPassword.classList.remove("active");
                password.classList.remove("warning");
            }

            return;
        }

        const isMatchPassword = passwordStr === rePasswordStr;

        if (isMatchPassword) {
            password.classList.remove("warning");
            rePassword.classList.remove("warning");
            warnRePass.classList.remove("active");
        } else {
            password.classList.add("warning");
            rePassword.classList.add("warning");
            warnRePass.classList.add("active");
            warnRePass.textContent = "Пароли не совпадают";
        }
    }
    setSignupListeners() {
        const {password, rePassword} = this.#getAllElements();

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => input.addEventListener("click", this.#removeSignupWarns));

        this.parent.querySelector("form").addEventListener("submit", this.#submitSignup);

        password.addEventListener("input", this.#checkPasswordsMatch);
        rePassword.addEventListener("input", this.#checkPasswordsMatch);
    }

    removeSignupListeners() {
        const {password, rePassword} = this.#getAllElements();

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => input.removeEventListener("click", this.#removeSignupWarns));

        this.parent.querySelector("form").removeEventListener("submit", this.#submitSignup);

        password.removeEventListener("input", this.#checkPasswordsMatch);
        rePassword.removeEventListener("input", this.#checkPasswordsMatch);
    }
}