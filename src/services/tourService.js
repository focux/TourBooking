import axios from 'axios';

class tourService {
  static get baseUrl() {
    return 'https://driscovery-new-api.herokuapp.com';
  }

  static async fetchAllTours() {
    const endPoint = '/tours';
    try {
      const response = await axios.get(tourService.baseUrl + endPoint);
      return response.data;
    } catch (err) {
      return '001'; // Network error
    }
  }
}

export default tourService;
