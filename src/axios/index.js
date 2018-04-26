import Axios from 'axios';
import { notification } from 'antd';
import NProgress from 'nprogress'

//   拦截请求
Axios.interceptors.request.use((config) => {
    NProgress.start();
	return config;
});

//  拦截响应
Axios.interceptors.response.use(res => {
    if(res.data.code === 1) {
        notification['error']({
            message: '出错了',
            description: res.data.msg,
            duration: 2
        })
    }
	return res;
}, err => {
    return err
});

export default {
    get(url, params, option) {
        return Axios.get(url, params, option);
    },
    post(url, params, option) {
        params = {...params, type: 'test'}
        return Axios.post(url, params, option)
    }
}

