import { appStore } from "./store.js";
import { userApi } from "../api/userApi.js";

/**
 * Менеджер аутентификации для управления состоянием авторизации пользователя
 */
class AuthManager {

  constructor() {
    this.store = appStore;
    this.userApi = userApi;
  }

  /**
   * Инициализирует менеджер аутентификации и проверяет статус авторизации
   * @async
   * @returns {Promise<void>}
   */
  async initialize() {
    await this.checkAuthStatus();
  }

  /**
   * Устанавливает состояние неавторизованного пользователя
   */
  setUnauthenticatedState() {
    this.store.update({
      "auth.isAuthenticated": false,
      "auth.user": null,
      "auth.user_id": null,
    });
  }

  /**
   * Проверяет статус аутентификации пользователя через refresh token
   * @async
   * @returns {Promise<boolean>} true если пользователь авторизован, false если нет
   */
  async checkAuthStatus() {
    try {
      const response = await this.userApi.refreshToken();

      this.store.update({
        "auth.isAuthenticated": true,
        "auth.user": response.email,
        "auth.user_id": response.user_id,
      });

      return true;
    } catch (error) {
      this.setUnauthenticatedState();
      return false;
    }
  }

  /**
   * Выполняет вход пользователя в систему
   * @async
   * @param {string} email - Email пользователя
   * @param {string} password - Пароль пользователя
   * @returns {Promise<Object>} Объект с результатом операции
   * @returns {boolean} return.success - Успешность операции
   * @returns {Object} [return.data] - Данные пользователя при успешном входе
   * @returns {string} [return.error] - Сообщение об ошибке при неудаче
   */
  async login(email, password) {
    try {
      const response = await this.userApi.login(email, password);

      this.store.update({
        "auth.isAuthenticated": true,
        "auth.user": response.email,
        "auth.user_id": response.user_id,
      });

      return { success: true, data: response };
    } catch (error) {
      this.setUnauthenticatedState();
      return {
        success: false,
        error: error.response?.error || "Ошибка входа",
      };
    }
  }

  /**
   * Регистрирует нового пользователя
   * @async
   * @param {string} email - Email пользователя
   * @param {string} password - Пароль пользователя
   * @returns {Promise<Object>} Объект с результатом операции
   * @returns {boolean} return.success - Успешность операции
   * @returns {Object} [return.data] - Данные пользователя при успешной регистрации
   * @returns {string} [return.error] - Сообщение об ошибке при неудаче
   */
  async register(email, password) {
    try {
      const response = await this.userApi.register(email, password);

      this.store.update({
        "auth.isAuthenticated": true,
        "auth.user": response.email,
        "auth.user_id": response.user_id,
      });

      return { success: true, data: response };
    } catch (error) {
      this.setUnauthenticatedState();
      return {
        success: false,
        error: error.response?.error || "Ошибка регистрации",
      };
    }
  }

  /**
   * Выполняет выход пользователя из системы
   * @async
   * @returns {Promise<Object>} Объект с результатом операции
   * @returns {boolean} return.success - Всегда true
   */
  async logout() {
    try {
      await this.userApi.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      this.setUnauthenticatedState();
    }

    return { success: true };
  }

  /**
   * Проверяет, авторизован ли пользователь
   * @returns {boolean} true если пользователь авторизован, false если нет
   */
  isAuthenticated() {
    return this.store.get("auth.isAuthenticated");
  }

  /**
   * Получает информацию о текущем пользователе
   * @returns {string|null} Email пользователя или null если не авторизован
   */
  getUser() {
    return this.store.get("auth.user");
  }

  /**
   * Подписывает callback на изменения статуса аутентификации
   * @param {Function} callback - Функция обратного вызова (newValue, oldValue, state) => {}
   * @returns {Function} Функция для отмены подписки
   */
  onAuthChange(callback) {
    return this.store.subscribe("auth.isAuthenticated", callback);
  }
}

/**
 * Глобальный экземпляр менеджера аутентификации
 * @type {AuthManager}
 */
export const authManager = new AuthManager();