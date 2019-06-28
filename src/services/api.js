//axios para facilitar requisição da api
import axios from 'axios';
//requisição da api
const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default api;