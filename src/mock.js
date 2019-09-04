const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 10000 // 返回的状态码

// 随机生成文章数据
const postData = req => {  
  // console.log(req) // 请求体，用于获取参数
  let data = [] // 用于存放文章数据的数组
  let count=10
  if(req.url.indexOf('?')!=-1){//获取分页页码
    count=req.url.split('&')[1].split('=')[1]
  }
  
  for (let i = 0; i < count; i++) {
    let post = {
        ID:i+1,
        name:'订单管理',
        describe: '管理订单信息', // 随机生成长度为10-25的标题
        version: '1.0.0', // 随机生成大小为250x250的图片链接
        startImgName: '上线', // 随机生成大小为250x250的图片链接
        noStartImgName: '下线', // 随机生成名字
        // date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
        imgPath: Random.url(),
        order:Random.natural(0, 20), 
        startPage:'index'+i+'.heml', 
        note:'无', 
    }

    data.push(post)
  }
  
  // 返回状态码和文章数据posts
  return {
    code,
    data,
    count:20
  }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(RegExp("/api/user/myTranferRecord"+".*"), 'get', postData);