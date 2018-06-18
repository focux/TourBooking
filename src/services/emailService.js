import axios from 'axios';
import constants from '../config/constants';

export default class EmailService {
  static get baseUrl() {
    return constants.apiUrl;
  }

  static async sendOrderConfirmation(emailInfo) {
    const endPoint = '/send/confirmation';
    const response = await axios.post(EmailService.baseUrl + endPoint, emailInfo);
    return { status: response.status, ...response.data.data };
  }
}
