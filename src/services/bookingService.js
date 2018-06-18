import axios from 'axios';
import constants from '../config/constants';

export default class BookingService {
  static get baseUrl() {
    return constants.apiUrl;
  }

  static async saveBooking(booking) {
    const endPoint = '/booking';
    const response = await axios.post(BookingService.baseUrl + endPoint, booking);
    return { status: response.status, ...response.data.data };
  }
}
