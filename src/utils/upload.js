
/*
参数详解:
    id         dom  元素的id
    data      上传的时候传递的参数  { scene: 'siteinfoedit' }
    size  	  设置文件最大可允许上传的大小，单位 KB
    multiple  是否允许上传多个文件  false / true
    imgNumber 设置同时可上传的文件数量，一般配合 multiple 参数出现。
    accept    上传的类型  可选值有：images（图片）、file（所有文件）、video（视频）、audio（音频）
    exts      zip|rar|7z' 即代表只允许上传压缩格式    jpg|png|gif|bmp|jpeg 图片的文件格式

事件详解
   done  ：执行上传请求后的回调。返回三个参数，分别为：res（服务端响应信息）、index（当前文件的索引）、upload（重新上传的方法，一般在文件上传失败后使用）
   error : 执行上传请求出现异常的回调（一般为网络异常、URL 404等）。返回两个参数，分别为：index（当前文件的索引）、upload（重新上传的方法）
*/

export default function (id, data, size = 2048,fileType='images',exts='jpg|png|gif|bmp|jpeg', multiple = false, imgNumber = 1) {
    return new Promise((resolve, reject) => {
        layui.use('upload', function () {
            let upload = layui.upload;
            upload.render({
                elem: '#' + id, 
                url: 'http://localhost:8081/api/fileupload/batch', 
                data: data,
                size: size,
                multiple: multiple, 
                number: imgNumber,
                accept:fileType,
                name: "heardPortrait",
                exts:exts,
                before: function (res) {  //上传之前
                    console.log('开始上传', res)
                },
                done: function (res, index, upload) { //上传完毕回调
                    console.log('上传成功', res)
                    resolve({res, index, upload})
                    layer.closeAll('loading');
                    
                },
                error: function (index, upload) {   //请求异常回调
                    console.log('上传失败', index,upload)
                    reject({index,upload})
                    layer.closeAll('loading');
                  
                }
            });
        });
    })
}