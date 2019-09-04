<template>
    <div class="system">
        <h1>系统管理</h1>
        <div>
            
               <button class="layui-btn addbtn" @click="submit1">按钮一</button> 
               <button class="layui-btn layui-btn-sm" @click="submit1">按钮一</button> 
               <button class="layui-btn layui-btn-sm layui-btn-primary" @click="submit1">按钮一</button> 
               <button class="layui-btn layui-btn-xs" @click="submit1">按钮一</button> 
               <button class="layui-btn layui-btn-xs bg1" @click="submit1">按钮一</button> 
               <button class="layui-btn layui-btn-xs bg2" @click="submit1">按钮一</button> 
               <button class="layui-btn layui-btn-xs bg3" @click="submit1">按钮一</button> 
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

    },
    methods:{

    }
}
</script>
<style lang="less" scope>
    .system{
        h1{
           margin-top: 50px; 
        }
    }
</style>