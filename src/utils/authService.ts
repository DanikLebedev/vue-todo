export class AuthService {
  static login(token: string) {
    localStorage.setItem('token', token);
  }
  static logout() {
    localStorage.removeItem('token');
  }
  static getToken() {
    return localStorage.getItem('token');
  }
}
