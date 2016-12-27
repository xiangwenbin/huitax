import Vue from 'vue';
import VueAxios from 'vue-axios';
import extendAxios from './extendAxios';
//添加异步请求对象 axios
Vue.use(VueAxios, extendAxios);
//页面顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false });
function errorResult(result, response) {
  result.code = response.data.code;
  result.msg = response.data.msg || response.data.message;
  return result;
}

/**
 *
 *
 * 异步请求封装函数
 * 返回约定
 *
 * code 200 ，data为后台正常数据返回值
 * code >200  msg为后台异常反馈，无特殊要求，前端直接显示msg内容
 *
 *
 * result {
 *  code(int),
 *  data(object),
 *  msg(string)
 * }
 */

export default class Request {
  // GET /slippage/unitCode/leveldetail
	/**
	 * 异步get请求
	 */
  static get() {
    let args = Array.prototype.slice.call(arguments);
    NProgress.start();
    return new Promise((resolve, reject) => {
      Vue.axios.get(...args).then((response) => {
        let result = {};
        //http 200 检测是否含 code值
        if (response.status == 200) {
          //没code值，data 为返回数据
          if (!response.data.code) {
            result.code = response.status;
            result.data = response.data;
            resolve(result);
          } else {
            //有code值,为错误信息
            result = errorResult(result, response);
            resolve(result)
          }

        } else {
          reject(response);
        }
        // NProgress.done();
      }).catch((error) => {
        // NProgress.done();
        let result = {};
        let response=error.response;
        try {
          //http status 大于400
          reject(response);

        } catch (err) {
          reject(err);
        }

      });

    });
  }

  /**
	 * 异步post请求
	 */
  static post() {
    let args = Array.prototype.slice.call(arguments);
    return new Promise((resolve, reject) => {
      Vue.axios.post(...args).then((response) => {
        let result = {};
        //http 200 检测是否含 code值
        if (response.status == 200) {
          //没code值，data 为返回数据
          if (!response.data.code || !response.data.error_code) {
            result.code = response.status;
            result.data = response.data;
            resolve(result);
          } else {
            //有code值,为错误信息
            result = errorResult(result, response);
            resolve(result)
          }
        } else {
          reject(response);
        }
      }).catch((error) => {
        let result = {};
        let response=error.response;
        try {
          //http status 大于400 并且 respone data里含 code 值，说明是有效连接
          if (response.status >= 400) {
            reject(response);
          } else {
            reject(response);
          }

        } catch (err) {
          reject(err);
        }

      });

    });
  }

  /**
	 * 异步put请求
	 */
  // static put() {
  //   let args = Array.prototype.slice.call(arguments);
  //   return new Promise((resolve, reject) => {
  //     Vue.axios.put(...args).then((response) => {
  //       let result = {};
  //       //http 200 检测是否含 code值
  //       if (response.status == 200) {
  //         //没code值，data 为返回数据
  //         if (!response.data.code || !response.data.error_code) {
  //           result.code = response.status;
  //           result.data = response.data;
  //           resolve(result);
  //         } else {
  //           //有code值,为错误信息
  //           result = errorResult(result, response);
  //           resolve(result);
  //         }
  //       } else {
  //         reject(response);
  //       }
  //     }).catch((error) => {
  //       let result = {};
  //       let response=error.response;
  //       try {
  //         //http status 大于400 并且 respone data里含 code 值，说明是有效连接
  //         if (response.status >= 400 && (response.data.code || response.data.error_code)) {
  //           result = errorResult(result, response);
            
  //           resolve(result);
  //         } else {
  //           reject(response);
  //         }

  //       } catch (err) {
  //         reject(err);
  //       }

  //     });

  //   });
  // }

  /**
	 * 异步put请求
	 */
  // static delete() {
  //   let args = Array.prototype.slice.call(arguments);
  //   return new Promise((resolve, reject) => {
  //     Vue.axios.delete(...args).then((response) => {
  //       let result = {};
  //       //http 200 检测是否含 code值
  //       if (response.status == 200) {
  //         //没code值，data 为返回数据
  //         if (!response.data.code || !response.data.error_code) {
  //           result.code = response.status;
  //           result.data = response.data;
  //           resolve(result);
  //         } else {
  //           //有code值,为错误信息
  //           result = errorResult(result, response);
            
  //           resolve(result)
  //         }
  //       } else {
  //         reject(response);
  //       }
  //     }).catch((error) => {
  //       let result = {};
  //       let response=error.response;
  //       try {
  //         //http status 大于400 并且 respone data里含 code 值，说明是有效连接
  //         if (response.status >= 400 && (response.data.code || response.data.error_code)) {

  //           result = errorResult(result, response);
            
  //           resolve(result)
  //         } else {
  //           reject(response);
  //         }

  //       } catch (err) {
  //         reject(err);
  //       }

  //     });

  //   });
  // }
}