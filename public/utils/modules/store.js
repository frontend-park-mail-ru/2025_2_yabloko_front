'use strict'

class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = new Map();
    this.actions = new Map();
  }

  getState() {
    return { ...this.state };
  }

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

  set(key, value) {
    const oldValue = this.state[key];
    this.state[key] = value;

    this.notifyListeners(key, value, oldValue);
    this.notifyListeners("*", this.state, this.state);
  }

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

  unsubscribe(key, listener) {
    if (this.listeners.has(key)) {
      this.listeners.get(key).delete(listener);
    }
  }

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

  registerAction(name, action) {
    this.actions.set(name, action);
  }

  dispatch(actionName, ...args) {
    if (this.actions.has(actionName)) {
      return this.actions.get(actionName)(this, ...args);
    } else {
      console.warn(`Action "${actionName}" is not registered`);
    }
  }

  reset() {
    const oldState = this.state;
    this.state = {};
    this.notifyListeners("*", this.state, oldState);
  }
}

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