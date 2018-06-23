import axios from 'axios';
import constants from '../config/constants';

class tourService {
  static get baseUrl() {
    return `${constants.apiUrl}/tours`;
  }

  static async fetchAllTours() {
    try {
      const response = await axios.get(tourService.baseUrl);
      return response.data.data;
    } catch (err) {
      return '001'; // Network error
    }
  }

  static async reduceSpace(tourId, spaces) {
    const endPoint = `/${tourId}`;
    try {
      const response = await axios.patch(tourService.baseUrl + endPoint, { spaces });
      return response.data.data;
    } catch (err) {
      return '001'; // Network error
    }
  }
}

export default tourService;
