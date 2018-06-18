import axios from 'axios';
import constants from '../config/constants';

export default class ContactService {
  static get baseUrl() {
    return constants.apiUrl;
  }

  static async saveForm(contactForm) {
    const endPoint = '/contact';
    const response = await axios.post(ContactService.baseUrl + endPoint, contactForm);
    return { status: response.status, ...response.data.data };
  }
}
