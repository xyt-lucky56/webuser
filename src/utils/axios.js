import axios from 'axios'
import Qs from 'qs'

axios.defaults.withCredentials = false;  //false  不跨域  true 跨域
axios.defaults.baseURL = process.env.NODE_ENV == 'development'?'/api':''
// axios.defaults.headers.common['token'] = localstorage.getItem('token'); //设置请求头，这个是不是必须的

export default function (url, params, method = 'get', type = "json") {

    //设置请求头
    if (method == "post") {
        if (type = "json") {  //参数是json类型
            axios.defaults.headers.post['Content-type'] = 'application/json'
        } else {  //参数是字符串类型
            axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
            params = Qs.stringify(params)
        }
    }

    //当出现某些情况的时候设置请求拦截
    axios.interceptors.response.use(response => {
        if (response.data.statusCode == 20009) {  //这里的状态码是根据后台设置的来
            Message.error({ message: '登录过期，请重新登录' })
        }
        return response;
    }, error => {
        return Promise.resolve(error.response)
    })

    console.log()
    //发送请求
    return new Promise((resolve,reject) => {
        axios({
            url,
            method,
            type,
            data: params,
            timeout: 6000,
        }).then(result => {
            resolve(result.data)
        }).catch(err => {
            reject(err)
        })
    })
}