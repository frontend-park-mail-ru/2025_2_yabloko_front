import {validEmail, validPassword} from "../../utils/auth.js";

export class Login {
    constructor(parent, state) {
        this.state = state;
        this.parent = parent;

        this.fields = new Map();
        this.fields.set("login", [
            {placeholder: "Email", type: "email", name: "email"},
            {placeholder: "Пароль", type: "password", name: "password"}
        ]);
        this.fields.set("signup", [
            {placeholder: "Email", type: "email", name: "email", warn: "Введите корректный Email"},
            {placeholder: "Пароль", type: "password", name: "password", warn: ""},
            {placeholder: "Повторите пароль", type: "password", name: "repassword", warn: "Пароли не совпадают"}
        ]);
    }

    render() {
        this.parent.style.height = "calc(100vh)";
        const template = Handlebars.templates["Login.hbs"];

        const isLogin = this.state.activeMenu === "login";
        const inputs = this.fields.get(this.state.activeMenu);

        this.parent.innerHTML = template({inputs, isLogin});

        if (this.state.activeMenu === "login") {
            if (this.state.prevMenu === "signup") {
                this.removeSignupListeners();
            }
            this.setLoginListeners();
        } else {
            if (this.state.prevMenu === "login") {
                this.removeLoginListeners();
            }
            this.setSignupListeners();
        }
    }

    setListeners() {

        this.parent.querySelector("button[name=signup]").addEventListener("click", (e) => {
            e.preventDefault();

            this.state.prevMenu = this.state.activeMenu;
            this.state.activeMenu = "signup";
            this.removeLoginListeners();
            this.render();
        });
    }

    setLoginListeners() {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const warn = this.parent.querySelector("warning");

        this.parent.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();

            const emailStr = email.value.trim();
            const passwordStr = password.value.trim();

            if (emailStr && passwordStr) {
                // TODO login({emailStr, passwordStr});
            } else {
                password.value = "";
                warn.textContent = "Заполните все поля";
                warn.classList.add("active");
            }
        });
    }

    removeLoginListeners() {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const warn = this.parent.querySelector("warning");

        this.parent.querySelector("form").removeEventListener("submit", (e) => {
            e.preventDefault();

            const emailStr = email.value.trim();
            const passwordStr = password.value.trim();

            if (emailStr && passwordStr) {
                // TODO
                login({emailStr, passwordStr});
            } else {
                password.value = "";
                warn.textContent = "Заполните все поля";
                warn.classList.add("active");
            }
        });
    }

    setSignupListeners() {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const rePassword = this.parent.querySelector("input[name=repassword]");

        const warnEmail = this.parent.querySelector("warning[id=email]");
        const warnPassword = this.parent.querySelector("warning[id=password]");
        const warnRePass = this.parent.querySelector("warning[id=repassword]");
        const warnSignup = this.parent.querySelector("warning[id=signup]");

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        const checkFieldsFilled = () => {
            const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");

            if (allFilled) {
                warnSignup.classList.remove("active");
            } else {
                warnSignup.classList.add("active");
            }
        };

        inputs.forEach(input => {
            input.addEventListener("input", checkFieldsFilled);
        });

        this.parent.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();

            const emailStr = email.value.trim();
            const passwordStr = password.value.trim();
            const rePasswordStr = rePassword.value.trim();

            const isMatchPassword = passwordStr === rePasswordStr;

            if (emailStr && passwordStr && isMatchPassword) {

                if (validEmail(emailStr)) {
                    warnEmail.classList.remove("active");
                    email.classList.remove("warning");
                } else {
                    warnEmail.classList.add("active");
                    email.classList.add("warning");
                }

                const errors = validPassword(password);
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
                warnSignup.textContent = "Заполните все поля корректно";
                warnSignup.classList.add("active");
            }
        });

        const checkPasswordsMatch = () => {
            const passwordStr = password.value.trim();
            const rePasswordStr = rePassword.value.trim();

            const isMatchPassword = passwordStr === rePasswordStr;

            if (isMatchPassword) {
                password.classList.remove("warning");
                rePassword.classList.remove("warning");
                warnRePass.classList.remove("active");
            } else {
                password.classList.add("warning");
                rePassword.classList.add("warning");
                warnRePass.textContent = "Пароли не совпадают";
                warnRePass.classList.add("active");
            }
        };

        password.addEventListener("input", () => checkPasswordsMatch());

        rePassword.addEventListener("input", () => checkPasswordsMatch());

        email.addEventListener("input", () => {
            const emailStr = email.value.trim();

            if (emailStr === "") {
                warnEmail.classList.remove("active");
                email.classList.remove("warning");
                return;
            }

            if (!validEmail(emailStr)) {
                warnEmail.classList.add("active");
                email.classList.add("warning");
            } else {
                warnEmail.classList.remove("active");
                email.classList.remove("warning");
            }
        });

        password.addEventListener("input", () => {
            const passwordStr = password.value.trim();

            if (passwordStr === "") {
                warnPassword.textContent = "";
                warnPassword.classList.remove("active");
                password.classList.remove("warning");
                return;
            }

            const errors = validPassword(passwordStr);

            if (errors.length > 0) {
                warnPassword.textContent = errors[0];
                warnPassword.classList.add("active");
                password.classList.add("warning");
            } else {
                warnPassword.classList.remove("active");
                password.classList.remove("warning");
            }
        });
    }

    removeSignupListeners() {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const rePassword = this.parent.querySelector("input[name=repassword]");

        const warnEmail = this.parent.querySelector("warning[id=email]");
        const warnPassword = this.parent.querySelector("warning[id=password]");
        const warnRePass = this.parent.querySelector("warning[id=repassword]");
        const warnSignup = this.parent.querySelector("warning[id=signup]");

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        const checkFieldsFilled = () => {
            const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");

            if (allFilled) {
                warnSignup.classList.remove("active");
            } else {
                warnSignup.classList.add("active");
            }
        };

        inputs.forEach(input => {
            input.removeEventListener("input", checkFieldsFilled);
        });

        this.parent.querySelector("form").removeEventListener("submit", (e) => {
            e.preventDefault();

            const emailStr = email.value.trim();
            const passwordStr = password.value.trim();
            const rePasswordStr = rePassword.value.trim();

            const isMatchPassword = passwordStr === rePasswordStr;

            if (emailStr && passwordStr && isMatchPassword) {

                if (validEmail(emailStr)) {
                    warnEmail.classList.remove("active");
                    email.classList.remove("warning");
                } else {
                    warnEmail.classList.add("active");
                    email.classList.add("warning");
                }

                const errors = validPassword(password);
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
                warnSignup.textContent = "Заполните все поля корректно";
                warnSignup.classList.add("active");
            }
        });

        const checkPasswordsMatch = () => {
            const passwordStr = password.value.trim();
            const rePasswordStr = rePassword.value.trim();

            const isMatchPassword = passwordStr === rePasswordStr;

            if (isMatchPassword) {
                password.classList.remove("warning");
                rePassword.classList.remove("warning");
                warnRePass.classList.remove("active");
            } else {
                password.classList.add("warning");
                rePassword.classList.add("warning");
                warnRePass.textContent = "Пароли не совпадают";
                warnRePass.classList.add("active");
            }
        };

        password.removeEventListener("input", () => checkPasswordsMatch());

        rePassword.removeEventListener("input", () => checkPasswordsMatch());

        email.removeEventListener("input", () => {
            const emailStr = email.value.trim();

            if (emailStr === "") {
                warnEmail.classList.remove("active");
                email.classList.remove("warning");
                return;
            }

            if (!validEmail(emailStr)) {
                warnEmail.classList.add("active");
                email.classList.add("warning");
            } else {
                warnEmail.classList.remove("active");
                email.classList.remove("warning");
            }
        });

        password.removeEventListener("input", () => {
            const passwordStr = password.value.trim();

            if (passwordStr === "") {
                warnPassword.textContent = "";
                warnPassword.classList.remove("active");
                password.classList.remove("warning");
                return;
            }

            const errors = validPassword(passwordStr);

            if (errors.length > 0) {
                warnPassword.textContent = errors[0];
                warnPassword.classList.add("active");
                password.classList.add("warning");
            } else {
                warnPassword.classList.remove("active");
                password.classList.remove("warning");
            }
        });
    }
}