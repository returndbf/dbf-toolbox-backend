import fetch from 'node-fetch';

const queryObj2String = (queryObj) => {
    // 对象转为query字符串
    let resStr = '?'
    const objAttrArray = Object.entries(queryObj)
    objAttrArray.forEach(([key, value], index) => {

        if (index !== objAttrArray.length - 1) {
            resStr += key + '=' + value + '&';
        } else {
            resStr += key + '=' + value
        }

    })

    return resStr;

}
const request = async (url ,method, query, body) => {
    let queryStr = ''
    if (query) queryStr = queryObj2String(query);
    return fetch(`${url}${queryStr}`, {method: method, body: JSON.stringify(body)}).then(res => res.json())
}
export default request;