import axios from 'axios';
import constants from '../config/constants';

export default class UserService {
  static get baseUrl() {
    return constants.apiUrl;
  }

  static async retrieveSession() {
    const endPoint = '/auth/check';
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

  static async updateUser(updates) {
    const endPoint = '/user';
    const response = await axios.patch(UserService.baseUrl + endPoint, updates);
    return { status: response.status, ...response.data.data };
  }
}
