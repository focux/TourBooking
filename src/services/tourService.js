import axios from 'axios';

class tourService {
  static get baseUrl() {
    return 'https://5d053329-7fc5-4410-a279-119f0f537d4b.mock.pstmn.io';
  }

  static async fetchAllTours() {
    const endPoint = '/tours';
    try {
      const response = await axios.get(tourService.baseUrl + endPoint);
      return response.data;
    } catch (err) {
      return err;
    }
  }
}

export default tourService;
