import queryString from 'query-string';
let urlUtil = {
  /**
   * 獲取查詢參數
   */
  getQueryParam:function(key){
    let qureryObject=queryString.parse(location.search);
    return qureryObject[key];
  }
}
export default urlUtil;