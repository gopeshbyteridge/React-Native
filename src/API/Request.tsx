// import {Axios} from './API';
import axios from 'axios';

class Request {
  axios = axios.create({
    baseURL: '',
  });

  constructor() {
    //default values
    let header = new axios.AxiosHeaders();
    header.setAuthorization('Bearer ');
    header.setContentType('application/json');
    axios.defaults.timeout = 2500;
  }

  async Get(url: string, config?: any) {
    return await Response(await axios.get(url, config));
  }

  async Post(url: string, data: any, config?: any) {
    return await Response(axios.post(url, data, config));
  }

  async Delete(url: string, data: any, config?: any) {
    return await Response(axios.delete(url, config));
  }
}

const Response = async (method: any) => {
  try {
    let res = await method();
    console.log(res.status);
    if (res.data) {
      console.log(JSON.parse(res.data));
    }
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
};
