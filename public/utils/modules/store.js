'use strict'

/**
 * Универсальное хранилище
 */
class Store {
  /**
   * Создает новый экземпляр Store
   * @param {Object} [initialState={}] - Начальное состояние хранилища
   */
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = new Map();
    this.actions = new Map();
  }

  /**
   * Возвращает копию текущего состояния
   * @returns {Object} Копия состояния хранилища
   */
  getState() {
    return { ...this.state };
  }

  /**
   * Получает значение по ключу (с поддержкой вложенных свойств через точку)
   * @param {string} key - Ключ в формате 'prop' или 'nested.prop'
   * @returns {*} Значение свойства или undefined если не найдено
   */
  get(key) {
    const keys = key.split('.');
    let value = this.state;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return undefined;
        }
    }
    return value;
  }

  /**
   * Устанавливает значение для ключа (только корневые свойства)
   * @param {string} key - Ключ свойства
   * @param {*} value - Новое значение
   */
  set(key, value) {
    const oldValue = this.state[key];
    this.state[key] = value;

    this.notifyListeners(key, value, oldValue);
    this.notifyListeners("*", this.state, this.state);
  }

  /**
   * Обновляет несколько свойств с поддержкой вложенных путей
   * @param {Object} updates - Объект с обновлениями в формате { 'key': value, 'nested.prop': value }
   */
  update(updates) {
    const oldState = JSON.parse(JSON.stringify(this.state));

    Object.keys(updates).forEach((key) => {
        const keys = key.split('.');
        let current = this.state;
        
        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]] || typeof current[keys[i]] !== 'object') {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = updates[key];
    });

    Object.keys(updates).forEach((key) => {
        const newValue = this.get(key);
        const oldValue = this.getNestedValue(oldState, key);
        
        this.notifyListeners(key, newValue, oldValue);
    });
  }

  /**
   * Получает вложенное значение из объекта по строковому пути
   * @param {Object} obj - Исходный объект
   * @param {string} key - Ключ в формате 'nested.prop'
   * @returns {*} Значение свойства или undefined если не найдено
   * @private
   */
  getNestedValue(obj, key) {
    const keys = key.split('.');
    let value = obj;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return undefined;
        }
    }
    return value;
  }

  /**
   * Подписывает listener на изменения по ключу
   * @param {string} key - Ключ для отслеживания изменений
   * @param {Function} listener - Функция-обработчик (newValue, oldValue, state) => {}
   * @returns {Function} Функция для отмены подписки
   */
  subscribe(key, listener) {    
    if (!this.listeners.has(key)) {
        this.listeners.set(key, new Set());
    }

    const listenerSet = this.listeners.get(key);
    
    listenerSet.add(listener);

    return () => {
        this.unsubscribe(key, listener);
    };
  }

  /**
   * Отменяет подписку listener на изменения по ключу
   * @param {string} key - Ключ подписки
   * @param {Function} listener - Функция-обработчик для удаления
   */
  unsubscribe(key, listener) {
    if (this.listeners.has(key)) {
      this.listeners.get(key).delete(listener);
    }
  }

  /**
   * Уведомляет всех listeners об изменении ключа
   * @param {string} key - Измененный ключ
   * @param {*} newValue - Новое значение
   * @param {*} oldValue - Старое значение
   * @private
   */
  notifyListeners(key, newValue, oldValue) {    
    if (this.listeners.has(key)) {
        this.listeners.get(key).forEach((listener) => {
            try {
                listener(newValue, oldValue, this.state);
            } catch (error) {
                console.error("Listener error:", error);
            }
        });
    }
  }

  /**
   * Регистрирует действие для dispatch
   * @param {string} name - Имя действия
   * @param {Function} action - Функция-действие (store, ...args) => {}
   */
  registerAction(name, action) {
    this.actions.set(name, action);
  }

  /**
   * Вызывает зарегистрированное действие
   * @param {string} actionName - Имя действия
   * @param {...*} args - Аргументы для передачи в действие
   * @returns {*} Результат выполнения действия
   */
  dispatch(actionName, ...args) {
    if (this.actions.has(actionName)) {
      return this.actions.get(actionName)(this, ...args);
    } else {
      console.warn(`Action "${actionName}" is not registered`);
    }
  }

  /**
   * Сбрасывает состояние хранилища в пустой объект
   */
  reset() {
    const oldState = this.state;
    this.state = {};
    this.notifyListeners("*", this.state, oldState);
  }
}

/**
 * Предварительно настроенный экземпляр Store для приложения
 * @type {Store}
 */
export const appStore = new Store({
    auth: {
        isAuthenticated: false,
        user: null,
        login: null,
        user_id: null
    },
    ui: {
        isLoading: false
    }
});

export default Store;