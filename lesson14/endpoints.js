
import RestMethods from "./methods.js";

export default class EndpointsList extends RestMethods {
  constructor(baseUrl) {
    super(baseUrl);
  }

  async getAllDevices(link) {
    return this.sendGet({ url: `${this.baseUrl}${link}`});
  }
// just imagin that it could have different links 
  async getSingleDevice(link) {
    return this.sendGet({ url: `${this.baseUrl}${link}`})
  }

  async postNewDevice(link, data) {
    return this.sendPost({ url:`${this.baseUrl}${link}`, data})
  }

  async putDevice(link, data){
    return this.sendPut({ url:`${this.baseUrl}${link}`, data})
  }

  async deleteDevice(link) {
    return this.sendDelete({ url: `${this.baseUrl}${link}`});
  }
}