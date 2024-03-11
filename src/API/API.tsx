import axios from 'axios';

export class Axios {
  baseURL = '';

  constructor(baseUrl: string = '') {
    this.baseURL = baseUrl; //or user can provide his url
  }

  async Request(
    method: string,
    url = this.baseURL,
    data = null,
    headers = header,
  ) {
    try {
      const response = await axios({
        method,
        url,
        data,
        headers,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const header = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer other service will set this token',
};
