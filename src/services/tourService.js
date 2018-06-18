import axios from 'axios';
import constants from '../config/constants';

class tourService {
  static get baseUrl() {
    return constants.apiUrl;
  }

  static async fetchAllTours() {
    const endPoint = '/tours';
    try {
      const response = await axios.get(tourService.baseUrl + endPoint);
      return response.data.data;
    } catch (err) {
      return '001'; // Network error
    }
  }
}

export default tourService;
