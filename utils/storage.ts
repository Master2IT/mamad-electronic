export class Storage {
  constructor() {
    if (typeof window === 'undefined' || !window.localStorage) {
      throw new Error('localStorage is not available in this environment');
    }
  }

  static set(key: string, value: any, stringify: boolean = true): void {
    if (typeof window !== 'undefined') {
      try {
        const finalValue = stringify ? JSON.stringify(value) : String(value);
        localStorage.setItem(key, finalValue);
      } catch (error) {
        console.error(`Failed to set localStorage key "${key}":`, error);
      }
    }
  }

  static get(key: string): any {
    if (typeof window === 'undefined') return null;

    const item = localStorage.getItem(key);
    if (!item) return null;

    try {
      return JSON.parse(item);
    } catch (error) {
      return item;
    }
  }

  static remove(key: string): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }

  static clear(): void {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  }

  static update(key: string, value: any): void {
    if (typeof window === 'undefined') return;

    const item = this.get(key);
    if (item) {
      this.set(key, { ...item, ...value });
    } else {
      this.set(key, value);
    }
  }
}
