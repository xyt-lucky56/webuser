

//--------------------------封装一些常用的函数-----------------------
import moment from 'moment';

//成功  失败  警告  弹窗  （已绑定到全局，无需单独引入）
export const message = {
    success: function (message) {
        layer.msg(message, { icon: 1 })  //成功
    },
    error: function (message) {
        layer.msg(message, { icon: 2 })  //失败
    },
    warning: function (message) {
        layer.msg(message, { icon: 7 }) //警告
    },
    confirm: function (message) {       //确认框
        return new Promise((resolve, reject) => {
            layer.confirm(message, function (index) {
                layer.close(index);
                return resolve();
            });
        })
    },
}

// 中国标准时间的转化
export const filterTime = (time, type = 'short') => {
    if (type == 'short') {
        return moment(time).format('YYYY-MM-DD')
    } else {
        return moment(value).format('YYYY-MM-DD HH:mm')
    }
}

// 加法计算（以下计算方法，可解决小数相加减出现的精度丢失问题）
export const addNumber = (arg1, arg2) => {
    let r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

//乘法计算
export const multiplication = (arg1, arg2) => {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

// 减法计算
export const number = (arg1, arg2) => {
    let r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//金额大写转换
export const changeMoneyToChinese = (n) => {
    let fraction = ['角', '分'];
    let digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    let unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    let head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i])
            .replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);

    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

//时间对比	
export const checkEndTime = (startTime, endTime, flag) => {
    let start = new Date(startTime.replace("-", "/").replace("-", "/"));
    let end = new Date(endTime.replace("-", "/").replace("-", "/"));
    if (flag == '1') {      //1 开始日期小于结束日期
        if (end <= start) {
            return false;
        }
    } else if (flag == '2') {  //2开始日期小于等于结束日期
        if (end < start) {
            return false;
        }
    }
    return true;
}




// DataColumn FrontSelect = new DataColumn("FrontSelect", typeof(bool));//是否页面显示
// DataColumn IsMust = new DataColumn("IsMust", typeof(bool));//是否为必填项
// DataColumn LabelCaption = new DataColumn("LabelCaption", typeof(string));//标签内容
// DataColumn CompomentType = new DataColumn("CompomentType", typeof(string));//控件类型
// DataColumn Hint = new DataColumn("Hint", typeof(string));//提示
// DataColumn DefaultValue = new DataColumn("DefaultValue", typeof(string));//默认值
// DataColumn SortNo = new DataColumn("SortNo", typeof(Int32));//出现顺序
// DataColumn ValueId = new DataColumn("ValueId", typeof(string));//值ID
// DataColumn ReadOnly = new DataColumn("ReadOnly", typeof(bool));//是否只读
// DataColumn CheckType = new DataColumn("CheckType", typeof(string));//校验类型


//表格
//  DataColumn IsEven = new DataColumn("IsEven", typeof(bool));  // 是否隔行换色
//  DataColumn TextAlign = new DataColumn("TextAlign", typeof(string)); // 对齐方式
//  DataColumn SetWidth= new DataColumn("SetWidth", typeof(string));   // 自定义表格某些框的宽度
//  DataColumn IsSort = new DataColumn("IsSort", typeof(bool));   // 数据是否可以排序
//  DataColumn IsAmount = new DataColumn("IsAmount", typeof(bool)); // 是否开启合计栏
//  DataColumn FixedType = new DataColumn("FixedType", typeof(string)); // 固定方式（向左、向右固定）

 // 表单
// 下拉框的数据格式
//  DataColumn DataType = new DataColumn("DataType", typeof(string));
// label的对齐方式
//  DataColumn LabelAlign = new DataColumn("LabelAlign", typeof(string))



