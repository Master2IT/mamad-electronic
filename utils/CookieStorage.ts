export class CookieStorage {
  set(name: string, value: string, days?: number): void {
    if (typeof window === "undefined") return;

    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie =
      name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  get(name: string): string | null {
    if (typeof window === "undefined") return null;

    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(
          cookie.substring(nameEQ.length, cookie.length)
        );
      }
    }
    return null;
  }

  delete(name: string): void {
    if (typeof window === "undefined") return;
    this.set(name, "", -1);
  }

  exists(name: string): boolean {
    if (typeof window === "undefined") return false;
    return this.get(name) !== null;
  }

  getAll(): { [key: string]: string } {
    if (typeof window === "undefined") return {};

    const cookies: { [key: string]: string } = {};
    const cookiesList = document.cookie.split(";");

    for (let i = 0; i < cookiesList.length; i++) {
      const cookie = cookiesList[i].trim();
      if (cookie) {
        const [name, value] = cookie.split("=");
        cookies[decodeURIComponent(name)] = decodeURIComponent(value);
      }
    }

    return cookies;
  }

  clear(): void {
    if (typeof window === "undefined") return;

    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      this.delete(name.trim());
    }
  }
}

export default new CookieStorage();
