import axios from 'axios';
import constants from '../config/constants';

export default class PaymentService {
  static get baseUrl() {
    return constants.apiUrl;
  }

  static async savePayment(payment) {
    const endPoint = '/payment';
    const response = await axios.post(PaymentService.baseUrl + endPoint, payment);
    return { status: response.status, ...response.data.data };
  }
}
