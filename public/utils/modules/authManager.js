import { appStore } from "./store.js";
import { userApi } from "../api/userApi.js";

class AuthManager {
  constructor() {
    this.store = appStore;
    this.userApi = userApi;
  }

  async initialize() {
    await this.checkAuthStatus();
  }

  setUnauthenticatedState() {
    this.store.update({
      "auth.isAuthenticated": false,
      "auth.user": null,
      "auth.user_id": null,
    });
  }

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

  isAuthenticated() {
    return this.store.get("auth.isAuthenticated");
  }

  getUser() {
    return this.store.get("auth.user");
  }

  onAuthChange(callback) {
    return this.store.subscribe("auth.isAuthenticated", callback);
  }
}

export const authManager = new AuthManager();