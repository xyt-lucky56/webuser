<template>
    <div class="subsystem">
        <h1>{{title}}</h1>
        <div class="content">
            <form class="layui-form" action="">
                <div class="layui-form-item">                
                    <label class="layui-form-label">系统名称 :</label>
                    <div class="layui-input-block">
                        <span v-if="status">{{info.name}}</span>
                        <input v-else type="text" name="name" lay-verify="required" autocomplete="off" placeholder="请输入系统名称" lay-verType='tips' class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">                
                    <label class="layui-form-label">系统描述 :</label>
                    <div class="layui-input-block">
                        <span v-if="status">{{info.describe}}</span>
                        <input v-else type="text" name="describe" lay-verify="required" autocomplete="off" placeholder="请输入系统描述" lay-verType='tips' class="layui-input ">
                    </div>
                </div>                
                <div class="layui-form-item">                
                    <label class="layui-form-label">系统版本号 :</label>
                    <div class="layui-input-block">
                        <span v-if="status">{{info.version}}</span>
                        <input v-else type="text" name="version" lay-verify="required" autocomplete="off" placeholder="请输入系统版本号" lay-verType='tips' class="layui-input">
                    </div>
                </div>                
                <div class="layui-form-item">                
                    <label class="layui-form-label">展示顺序 :</label>
                    <div class="layui-input-block">
                        <span v-if="status">{{info.order}}</span>
                        <input v-else type="text" name="order" lay-verify="required" autocomplete="off" placeholder="请输入展示顺序" lay-verType='tips' class="layui-input">
                    </div>
                </div>                
                <div class="layui-form-item">                
                    <label class="layui-form-label">起始页面 :</label>
                    <div class="layui-input-block">
                        <span v-if="status">{{info.startPage}}</span>
                        <input v-else type="text" name="startPage" lay-verify="required" autocomplete="off" placeholder="请输入起始页面" lay-verType='tips' class="layui-input">
                    </div>
                </div> 
                <div class="layui-form-item">
                    <div class="layui-input-block submit">
                        <div v-if="status" class="layui-btn layui-btn-primary addbtn" @click="cancel">返回</div>
                        <div v-else>
                            <div class="layui-btn addbtn" lay-submit="" lay-filter="demo1">保存</div>
                            <div v-if="flag" class="layui-btn layui-btn-primary addbtn" @click="cancel">返回</div>
                            <div v-else class="layui-btn layui-btn-primary addbtn" @click="cancel">取消</div>
                        </div>
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
            title:'添加子系统',
            info:{},
            status:false,
            flag:false
        }
    },
    created(){
        if(JSON.stringify(this.$route.params)!='{}'){
            this.info=this.$route.params.data
            console.log(this.info)
            if(this.$route.params.flag){
                this.flag=this.$route.params.flag
                this.title="子系统编辑"
            }else{
                this.status=true
                this.title="子系统详情"
            }
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
            form.on('submit(demo1)', (data)=>{
                console.log(data.field)
                this.$message.success('提交成功')
                this.$router.push('/system')
                
            });
        },
        cancel(){
            this.$router.back(-1);
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
                .layui-input-block{
                    span{
                        display: inline-block;
                        width: 100%;
                        height: 36px;
                        line-height: 36px;
                        text-align: left;
                    }
                }
                .submit{
                    margin-left: 50px;
                    padding-top: 30px;
                }
            }        
        }
    }
</style>