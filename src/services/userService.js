import axios from 'axios';

export default class UserService {
  static get baseUrl() {
    return 'http://localhost:3000/auth';
  }

  static async retrieveSession() {
    const endPoint = '/check';
    axios.interceptors.response.use((response) => response, (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('user');
      }
      return Promise.reject(error);
    });
    try {
      const response = await axios.get(UserService.baseUrl + endPoint);
      if (response.status !== 401) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return response.data;
    } catch (e) {
      return {
        error: e
      };
    }
  }
}
