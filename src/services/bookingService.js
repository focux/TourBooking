import axios from 'axios';
import constants from '../config/constants';

export default class BookingService {
  static get baseUrl() {
    return `${constants.apiUrl}/booking`;
  }

  static async saveBooking(booking) {
    const response = await axios.post(BookingService.baseUrl, booking);
    return { status: response.status, ...response.data.data };
  }

  static async retrieveBookings() {
    const response = await axios.get(BookingService.baseUrl);
    return { status: response.status, ...response.data };
  }

  static async updateBooking(bookingId, paymentId) {
    console.log(bookingId, 'ejjeasdasdasd');
    console.log(paymentId, 'klkektnasda');
    const response = await axios.patch(BookingService.baseUrl, { bookingId, paymentId });
    return { status: response.status, ...response.data.data };
  }
}
