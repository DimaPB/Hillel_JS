
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const config = JSON.parse(fs.readFileSync(path.join(__dirname, `config.json`)))

export default class RestMethods {
  #axiosInstance;
  constructor(baseUrl = 'https://api.restful-api.dev') {
    this.baseUrl = baseUrl
    this.#axiosInstance = axios.create({ baseURL: this.baseUrl, validateStatus: () => true });
  }

  async sendPost({ url, data}) {
    return this.#sendRequest({ url, method: 'POST', data});
  }

  async sendGet({ url }) {
    return this.#sendRequest({ url, method: 'GET' });
  }

  async sendPut({ url, data}) {
    return this.#sendRequest({ url, method: 'PUT', data});
  }

  async sendDelete({ url}) {
    return this.#sendRequest({ url, method: 'DELETE'});
  }

  async #sendRequest({ url, method, data, headers, params }) {
    return this.#axiosInstance.request({ url, method, data, headers, params });
  }
}