import axios from 'axios'

export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL: 'https://api.chinaskynet.net.cn/api'
        // timeout: 5000
    })

    //2.1请求拦截
    instance.interceptors.request.use(config => {
        // config.headers = {'locale-key':'1'}
        //语言切换
        const language = localStorage.getItem('language') || 'cn'
        if (language == "cn") {
            config.headers = {'locale-key':'1'}
        } else {
            config.headers = {'locale-key':'3'}
        }

        config.headers['Content-Type'] = 'application/json; charset=UTF-8'

        return config
    }, err => {
        console.log(err)
    });

    //2.2 响应拦截  一定要记得返回!!!!
    instance.interceptors.response.use(res => {
        return res
    }, err => {
        console.log(err)
    });

    //3.发送网络请求
    return instance(config)
}

