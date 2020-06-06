import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://www.mocky.io/v2/5ed68221340000480106dae9'
});
export default instance;