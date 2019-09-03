//-------------------------vue过滤器-----------------------------

import Vue from 'vue'
import moment from 'moment';


// 过滤年月日
Vue.filter('time', function (value) {
    return moment(value).format('YYYY-MM-DD')
})

// 过滤时分秒
Vue.filter('shortTime', function (value) {
    return moment(value).format('YYYY-MM-DD HH:mm')
})

// 价格类型转换 1,234.00
Vue.filter("numberToPrice", function (number) {
    if (number || number == 0) {
        number = Number(number);
        return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    } else {
        return '--'
    }
})

//空数据转换 ---
Vue.filter("stringToDefault", function (value) {
    return !!value ? value : "--";
})

// 服务器图片地址显示拼接
Vue.filter('filterImg', function (value) {
    let api = '';
    if (process.env.NODE_ENV == "development") {
        api = "api";
    }
    return api + '/d/img/s/' + value
})

