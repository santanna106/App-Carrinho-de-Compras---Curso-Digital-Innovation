import axios from 'axios';

const api = axios.create({
  //'http://localhost:3000', Mac OS
  baseURL:'http://10.0.2.2:3000'//, Emulador Android
  //baseURL:'http://10.0.3.2:3000' //, Android
  //baseURL: 'http://192.168.1.12:3000', //usb
})

export default api;
