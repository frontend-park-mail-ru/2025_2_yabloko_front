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
        const warn = this.parent.querySelector("div[class=warning]");

        this.parent.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();

            const emailStr = email.value.trim();
            const passwordStr = password.value.trim();

            if (emailStr && passwordStr) {
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

                warn.textContent = "Заполните все поля";
                warn.classList.add("active");
            }
        });

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener("click", () => {
                email.classList.remove("warning");
                password.classList.remove("warning");

                warn.classList.remove("active");
            });
        });
    }

    removeLoginListeners() {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const warn = this.parent.querySelector("div[class=warning]");

        this.parent.querySelector("form").removeEventListener("submit", (e) => {
            e.preventDefault();

            const emailStr = email.value.trim();
            const passwordStr = password.value.trim();

            if (emailStr && passwordStr) {
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

                warn.textContent = "Заполните все поля";
                warn.classList.add("active");
            }
        });

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => {
            input.removeEventListener("click", () => {
                email.classList.remove("warning");
                password.classList.remove("warning");

                warn.classList.remove("active");
            });
        });
    }

    setSignupListeners() {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const rePassword = this.parent.querySelector("input[name=repassword]");

        const warnEmail = this.parent.querySelector("div[id=email]");
        const warnPassword = this.parent.querySelector("div[id=password]");
        const warnRePass = this.parent.querySelector("div[id=repassword]");
        const warnSignup = this.parent.querySelector("div[id=signup]");

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => {
            input.addEventListener("click", () => {
                warnSignup.classList.remove("active");

                email.classList.remove("warning");
                warnEmail.classList.remove("active");
                password.classList.remove("warning");
                rePassword.classList.remove("warning");
            });
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
                warnRePass.classList.add("active");
                warnRePass.textContent = "Пароли не совпадают";
            }
        };

        password.addEventListener("input", () => checkPasswordsMatch());
        rePassword.addEventListener("input", () => checkPasswordsMatch());
    }

    removeSignupListeners() {
        const email = this.parent.querySelector("input[name=email]");
        const password = this.parent.querySelector("input[name=password]");
        const rePassword = this.parent.querySelector("input[name=repassword]");

        const warnEmail = this.parent.querySelector("div[id=email]");
        const warnPassword = this.parent.querySelector("div[id=password]");
        const warnRePass = this.parent.querySelector("div[id=repassword]");
        const warnSignup = this.parent.querySelector("div[id=signup]");

        const inputs = this.parent.querySelector("form").querySelectorAll("input");
        inputs.forEach(input => {
            input.removeEventListener("click", () => {
                warnSignup.classList.remove("active");

                email.classList.remove("warning");
                warnEmail.classList.remove("active");
                password.classList.remove("warning");
                rePassword.classList.remove("warning");
            });
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