<template>
    <div class="system">
        <h1>系统管理</h1>
        <div class="content">            
            <button class="layui-btn addbtn" @click="add">添加子系统</button> 
            <!-- <button class="layui-btn layui-btn-sm" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-sm layui-btn-primary" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs bg1" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs bg2" @click="submit1">按钮一</button> 
            <button class="layui-btn layui-btn-xs bg3" @click="submit1">按钮一</button>  -->
            <table class="layui-hide" lay-filter="test" id="test">
                <div id="barDemo">
                    <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                    <a class="layui-btn layui-btn-xs bgdetail" lay-event="detail">详情</a>
                    <a class="layui-btn layui-btn-xs bgwarn" lay-event="del">删除</a>
                </div>
            </table>
        </div>
    </div>
</template>
<script>
import FengunionTable from '@/utils/comTable'//表格封装
export default {
    data(){
        return{
            cols:[[
                {field:'ID', title: 'ID',width:150,sort: true},
                {field:'name', title: '系统名称'},
                {field:'describe', title: '系统描述'},
                {field:'version', title: '系统版本号'},
                {field:'startImgName', title: '启动图片名称'},
                {field:'noStartImgName', title: '不启动图片名称'},
                {field:'imgPath', title: '图片路径'},
                {field:'order', title: '展示顺序'},
                {field:'startPage', title: '起始页面'},
                {field:'note', title: '备注'},
                {field:'status', title: '操作',toolbar: '#barDemo',width:200,fixed: 'right'},
            ]],
            limit:10,
            limits:[5,7,10],
        }
    },
    mounted(){
        FengunionTable('test', '/api/user/myTranferRecord', this.cols, {}, true,this.limit,this.limits).then(e => {//表格初始化
            console.log(e)
        })         
    },
    methods:{
        add(){
            this.$router.push('/subsystem');
        }
    }
}
</script>
<style lang="less" scope>
    .system{   
        h1{
            margin-top: 50px;
        }     
        .content{
            margin: 20px;
            text-align: left;
            .addbtn{
                margin: 10px 0;
            }
            .layui-table-view{
                .layui-table{
                    text-align: center;
                    th{
                        text-align: center;
                    }
                }
            }            
        }
    }
</style>