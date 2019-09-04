<template>
    <div class="subsystem">
        <h1>添加子系统</h1>
        <div class="content">
            <form class="layui-form" action="">
                <div class="layui-form-item">                
                    <label class="layui-form-label">角色名称：</label>
                    <div class="layui-input-block">
                        <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="请输入角色名称" lay-verType='tips' class="layui-input inp titleInp">
                    </div>
                </div>
                <div class="layui-form-item">                
                    <label class="layui-form-label">系统名称：</label>
                    <div class="layui-input-block">
                        <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="请输入系统描述" lay-verType='tips' class="layui-input inp titleInp">
                    </div>
                </div>                
                <div class="layui-form-item">                
                    <label class="layui-form-label">起始页面 :</label>
                    <div class="layui-input-block">
                        <input type="text" name="title" lay-verify="requirede" autocomplete="off" placeholder="请输入起始页面" lay-verType='tips' class="layui-input inp titleInp">
                    </div>
                </div>
                <div class="layui-form-item">
                    <div class="layui-input-block submit">
                        <button class="layui-btn addbtn" lay-submit="" lay-filter="demo1">保存</button>
                        <button class="layui-btn layui-btn-primary addbtn" lay-submit="" lay-filter="demo2">取消</button>
                    </div>
                </div>                
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        layui.use(['form'], ()=>{
            var form = layui.form
            form.render()
            this.formSubmit(form)
        })
    },
    methods:{
        formSubmit(form){
            //监听提交
            form.on('submit(demo1)', function(data){
                console.log(data.field)
                layer.alert('提交成功', {
                    title: '最终的提交信息'
                })
                return false;
            });
        }
    }
}
</script>
<style lang="less" scope>
    .subsystem{
        width: 80%;
        h1{
            margin-top: 50px;
        }
        .content{
            margin: 20px; 
            .layui-form{
                // width: 25%;
                width: 330px;
                padding-top: 20px;
                margin: 0 auto;
                .submit{
                    margin-left: 50px;
                    padding-top: 30px;
                }
            }        
        }
    }
</style>