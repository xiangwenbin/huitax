import axios from 'axios';
import urlUtil from './urlUtil';

// let Authorization = urlUtil.getQueryParam("token");
let headers= {
    'X-Requested-With': 'XMLHttpRequest'
};
// if(Authorization){
//   headers['Authorization']=`Bearer ${Authorization}`;
// }
var extendAxios = axios.create({
  timeout: 10000,
  headers:headers
});
export default extendAxios;