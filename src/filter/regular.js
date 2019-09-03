
//-------------------------------正则表达式  reg.test(value)------------------------------//

/*在其他页面使用方法
例如：验证手机号是否符合校验规则
import { checkMobile } from '@/filter/regular'
let mobile = 15469689898989
if(checkMobile(mobile)){}
*/

//手机号
const mobileTex = /^1[3-9][0-9]\d{8}$/;
export const checkMobile = (value) => {
    return mobileTex.test(value)
}

// 身份证号
const legalTex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
export const checkLegal = (value) => {
    return legalTex.test(value)
}

// 邮箱
const emailTex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export const checkEmail = (value) => {
    return emailTex.test(value)
}

// 车牌号
const carTex = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
export const checkCar = (value) => {
    return carTex.test(value)
}


//纯数字
const numberTex = /^[0-9]*[1-9][0-9]*$/
export const checkNumber = (value) => {
    return numberTex.test(value)
}

//只能输入两位小数
const twoNumber = /^\d+(\.\d{1,2})?$/
export const checkTwoNumber = (value) => {
    return twoNumber.test(value)
}