<template>
    <div class="role">
        <h1>角色</h1>
        <div class="content">
            <div class="add-box">            
                <button class="layui-btn addbtn">添加角色</button>
            </div> 
            <!-- <button class="layui-btn layui-btn-sm" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-sm layui-btn-primary" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs bg1" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs bg2" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs bg3" @click="submit1">按钮一</button>  -->
            <table class="layui-hide" lay-filter="test" id="test">
                <div id="barDemo">
                    <a class="layui-btn layui-btn-xs bgdefault" lay-event="assign">权限分配</a>
                    <a class="layui-btn layui-btn-xs bgeditor" lay-event="edit">编辑</a>
                    <a class="layui-btn layui-btn-xs bgdetail" lay-event="detail">详情</a>
                    <a class="layui-btn layui-btn-xs bgwarn" lay-event="del">删除</a>
                </div>
            </table>
        </div>       
    </div>
</template>
<script>
import FengunionTable from '@/utils/comTable'  //表格封装
export default {
    data(){
        return{
            cols:[[
                {field:'ID', title: '编号', width:150, sort: true},
                {field:'name', title: '角色名称'},
                {field:'systemName', title: '系统名称'},
                // {field:'version', title: '系统版本号'},
                // {field:'startImgName', title: '启动图片名称'},
                // {field:'noStartImgName', title: '不启动图片名称'},
                // {field:'imgPath', title: '图片路径'},
                // {field:'order', title: '展示顺序'},
                // {field:'startPage', title: '起始页面'},
                {field:'note', title: '备注'},
                {field:'status', title: '操作',toolbar: '#barDemo',width:260,fixed: 'right'},
            ]],
            limit:5,
            limits:[5,7,10],
            data:[]
        }
    },
    mounted(){
        FengunionTable('test', '/api/info/myTranferRecord', this.cols, {}, true,this.limit,this.limits).then(e => {//表格初始化
            console.log(e)
        }) 
        // layui.use(['table'],()=>{
        //     var table=layui.table
        //     table.render({
        //         elem:'#test',
        //         cols:this.cols,
        //         data:this.data,
        //         page:true
        //     })
        // }) 
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
.role {
    h1 {
        margin-top: 50px; 
    }
    .content {
        .add-box {
            text-align: left;
            padding: 10px 0;
        }
    }
}
</style>