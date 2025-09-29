import {validEmail, validPassword} from "../../utils/auth.js";
import { authManager } from "../../utils/modules/authManager.js";

export class Login {
  constructor(parent, state) {
    this.state = state;
    this.parent = parent;
    this.authManager = authManager;

    this.fields = [
      {
        placeholder: "Email",
        type: "email",
        name: "email",
        warn: "Введите корректный email",
      },
      { placeholder: "Пароль", type: "password", name: "password", warn: "" },
      {
        placeholder: "Повторите пароль",
        type: "password",
        name: "repassword",
        warn: "Пароли не совпадают",
      },
    ];
  }

  render() {
    const template = Handlebars.templates["Login.hbs"];

    const curIsLogin = this.state.activeMenu === "login";
    const curIsSignup = this.state.activeMenu === "signup";
    const prevIsLogin = this.state.prevMenu === "login";
    const prevIsSignup = this.state.prevMenu === "signup";

    this.parent.innerHTML = template({ inputs: this.fields });


    if (curIsLogin && !prevIsSignup) {
      this.parent.innerHTML = template({ inputs: this.fields });

      const rePassword = this.parent.querySelector("div[id=repassword]");
      rePassword.classList.add("inactive");

      this.setSwitchListener();
      this.setLoginListeners();
    } else if (prevIsLogin && curIsSignup) {
      this.loginToSignup();
      this.removeLoginListeners();
      this.setSignupListeners();
    } else if (prevIsSignup && curIsLogin) {
      this.signupToLogin();
      this.removeSignupListeners();
      this.setLoginListeners();
    }
  }

  loginToSignup() {
    this.#removeLoginWarn();
    const { password } = this.#getAllElements();
    password.value = "";

    const repasswordDiv = this.parent.querySelector("div#repassword");
    if (repasswordDiv) repasswordDiv.classList.remove("inactive");

    const loginButton = this.parent.querySelector("button#login");
    if (loginButton) loginButton.classList.add("inactive");

    const signupButton = this.parent.querySelector("button#signup");
    if (signupButton) signupButton.removeAttribute("type");

    this.removeSwitchListener();
  }

  signupToLogin() {
    this.#removeSignupWarns();
    const { email, password } = this.#getAllElements();
    email.value = "";
    password.value = "";

    const repasswordDiv = this.parent.querySelector("div#repassword");
    if (repasswordDiv) repasswordDiv.classList.add("inactive");

    const loginButton = this.parent.querySelector("button#login");
    if (loginButton) loginButton.classList.remove("inactive");

    const signupButton = this.parent.querySelector("button#signup");
    if (signupButton) signupButton.setAttribute("type", "button");

    this.setSwitchListener();
  }

  #switchListener = (e) => {
    e.preventDefault();

    this.state.prevMenu = this.state.activeMenu;
    this.state.activeMenu = "signup";
    this.removeLoginListeners();
    this.render();
  };

  setSwitchListener() {
    this.parent
      .querySelector("button[id=signup]")
      .addEventListener("click", this.#switchListener);
  }

  removeSwitchListener() {
    this.parent
      .querySelector("button[id=signup]")
      .removeEventListener("click", this.#switchListener);
  }

  #submitLogin = async (e) => {
    e.preventDefault();

    const { email, password } = this.#getAllElements();
    const warn = this.parent.querySelector("div[id=warn_login]");

    const emailStr = email.value.trim();
    const passwordStr = password.value.trim();

    const isEmailValid = validEmail(emailStr);

    if (emailStr && passwordStr && isEmailValid) {
      warn.classList.remove("active");
      try {
        const result = await this.authManager.login(emailStr, passwordStr);

        if (result.success) {
          warn.textContent = "Успешный вход!";
          warn.classList.add("success");
          warn.classList.remove("active");

          this.#handleLoginSuccess(result.data);
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        password.value = "";

        let errorMessage = "Ошибка входа";
        if (error.message && error.message !== "Ошибка входа") {
          errorMessage = error.message;
        }

        warn.textContent = errorMessage;
        warn.classList.add("active");
        warn.classList.remove("success");
      }
    } else {
      password.value = "";

      if (!emailStr) {
        email.classList.add("warning");
      }
      if (!passwordStr) {
        password.classList.add("warning");
      }

      warn.textContent = "Email или пароль неверные";
      warn.classList.add("active");
    }
  };

  #handleLoginSuccess(response) {
    window.location.href = "/";

    if (typeof this.state.onLoginSuccess === "function") {
      this.state.onLoginSuccess(response);
    }
  }

  #submitSignup = async (e) => {
    e.preventDefault();

    const {
      email,
      password,
      rePassword,
      warnEmail,
      warnPassword,
      warnRePass,
      warnSignup,
    } = this.#getAllElements();

    const emailStr = email.value.trim();
    const passwordStr = password.value.trim();
    const rePasswordStr = rePassword.value.trim();

    const isMatchPassword = passwordStr === rePasswordStr;
    if (!isMatchPassword) {
      password.classList.add("warning");
      rePassword.classList.add("warning");
      warnRePass.classList.add("active");
      warnRePass.textContent = "Пароли не совпадают";
      return;
    }

    if (emailStr && passwordStr && isMatchPassword) {
      const isEmailValid = validEmail(emailStr);
      if (isEmailValid) {
        warnEmail.classList.remove("active");
        email.classList.remove("warning");
      } else {
        warnEmail.classList.add("active");
        email.classList.add("warning");
        return;
      }

      const errors = validPassword(passwordStr);
      if (errors.length > 0) {
        warnPassword.textContent = errors[0];
        warnPassword.classList.add("active");
        password.classList.add("warning");
        return;
      } else {
        warnPassword.classList.remove("active");
        password.classList.remove("warning");
        warnSignup.classList.remove("active");
      }

      try {
        const result = await this.authManager.register(emailStr, passwordStr);

        if (result.success) {
          warnSignup.textContent = "Регистрация успешна!";
          warnSignup.classList.add("success");
          this.#handleLoginSuccess(result.data);
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        const errorMsg = error.message || "Ошибка регистрации";
        warnSignup.textContent = errorMsg;
        warnSignup.classList.add("active");

        return;
      }
    } else {
      const isEmailValid = validEmail(emailStr);
      if (!isEmailValid) {
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
      return;
    }

    return false;
  };

  #removeLoginWarn = () => {
    const { email, password } = this.#getAllElements();
    const warn = this.parent.querySelector("div[id=warn_login]");

    if (email) email.classList.remove("warning");
    if (password) password.classList.remove("warning");
    if (warn) warn.classList.remove("active");
  };

  setLoginListeners() {
    this.parent
      .querySelector("form")
      .addEventListener("submit", this.#submitLogin);

    const inputs = this.parent.querySelector("form").querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("click", this.#removeLoginWarn);
    });
  }

  removeLoginListeners() {
    this.parent
      .querySelector("form")
      .removeEventListener("submit", this.#submitLogin);

    const inputs = this.parent.querySelector("form").querySelectorAll("input");
    inputs.forEach((input) => {
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

    return {
      email,
      password,
      rePassword,
      warnEmail,
      warnPassword,
      warnRePass,
      warnSignup,
    };
  };

  #removeSignupWarns = () => {
    const { email, password, rePassword, warnEmail, warnSignup } =
      this.#getAllElements();

    if (warnSignup) warnSignup.classList.remove("active");
    if (warnEmail) warnEmail.classList.remove("active");

    if (email) email.classList.remove("warning");
    if (password) password.classList.remove("warning");
    if (rePassword) rePassword.classList.remove("warning");
  };

  #checkPasswordsMatch = () => {
    const { password, rePassword, warnRePass, warnPassword } =
      this.#getAllElements();

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
  };

  setSignupListeners() {
    const { password, rePassword } = this.#getAllElements();

    const inputs = this.parent.querySelector("form").querySelectorAll("input");
    inputs.forEach((input) =>
      input.addEventListener("click", this.#removeSignupWarns)
    );

    this.parent
      .querySelector("form")
      .addEventListener("submit", this.#submitSignup);

    password.addEventListener("input", this.#checkPasswordsMatch);
    rePassword.addEventListener("input", this.#checkPasswordsMatch);
  }

  removeSignupListeners() {
    const { password, rePassword } = this.#getAllElements();

    const inputs = this.parent.querySelector("form").querySelectorAll("input");
    inputs.forEach((input) =>
      input.removeEventListener("click", this.#removeSignupWarns)
    );

    this.parent
      .querySelector("form")
      .removeEventListener("submit", this.#submitSignup);

    password.removeEventListener("input", this.#checkPasswordsMatch);
    rePassword.removeEventListener("input", this.#checkPasswordsMatch);
  }
}