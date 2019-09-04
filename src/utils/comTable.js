

/*
tableId: 表格id
url: 请求路径
headerData表头数据
params：参数
page 是否开启分页
callback  回调函数
*/
export default function (tableId, url, headerData, params, isPage = true, limit=10, limits=[10,20,30,40,50,60,70,80,90], method = "get") {
    return new Promise((resolve, reject) => {
        layui.use('table', function () {
            let table = layui.table
            table.render({
                elem: "#" + tableId
                , url: url //数据接口
                , where: params
                , method: method
                , page: isPage  //开启分页 ||pageC
                , cols: headerData
                , dataType: "json"
                , id: tableId
                ,limit:limit
                ,limits:limits
                , request: {
                    pageName: 'pageNum',
                    limitName: 'pageSize'
                }
                , response: {
                    statusCode: "10000",
                }
                , parseData: (res) => {
                    return{
                        "code": res.code,
                        "count": res.count,
                        "data": res.data,
                    }
                    // if(res.execCode=='S'){
                    //     return {
                    //         "code": res.statusCode,
                    //         "msg": res.statusMsg, //解析提示文本
                    //         "count": res.content.total, //解析数据长度
                    //         "data": res.content.list,//解析数据列表
                    //     }
                    // }else{
                    //     return {
                    //         "code": res.statusCode,
                    //         "msg": '暂无数据', 
                    //         "count": 0,
                    //         "data":[],
                    //     }
                    // }
                }
                , done: function done(res, curr, count) {
                    resolve({ res, curr, count })
                }
            });
        })
    })
}

