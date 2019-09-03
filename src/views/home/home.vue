<template>
<div class="layui-layout layui-layout-admin">
  <div class="layui-side layui-bg-black">
    <div class="layui-logo">用户角色权限</div>
    <div class="layui-side-scroll">
      <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
       <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="demo" lay-shrink="all">
          <li v-for="(item,index) in menueList" :key='index' class="layui-nav-item">
            <a  href="javascript:;" @click="toJump(item.url,item.title)">
              <!-- <img class="nav-icon" :src="item.img" alt=""> -->
              <span>{{item.title}}</span>
            </a>
            <dl class="layui-nav-child" v-if="item.children.length>0">
              <dd v-for="(items,index) in item.children" :key='index'>
                <a href="javascript:;" :class="currIndex==items.url?'layui-this':''" @click="toJump(items.url,items.txt)">{{items.txt}}</a>
              </dd>
            </dl>
          </li>              
        </ul>
    </div>
  </div>  
  <div class="layui-body">
    <!-- 内容主体区域 -->
    <div class="layui-tab-content">
      <div class="layui-tab-item layui-show">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { getActiveNav } from "@/utils/bus";
export default {
  data(){
    return{
      menueList:[        
        {title:'系统管理',url:'/system',children:[]},
        {title:'用户管理',url:'/user',children:[]},
        {title:'角色管理',url:'/role',children:[]},
        {title:'权限管理',url:'/permissions',children:[]},
      ],
      currIndex:'',
    }
  },
  created(){
    if(sessionStorage.getItem('currIndex')){
      this.currIndex=sessionStorage.getItem('currIndex')
      this.$router.push(this.currIndex)
    }else{      
      this.$router.push('/system');
      this.currIndex='/system'
    }
  },
  mounted(){
    layui.use(['element'], function () {
      layui.element.init()
    })
  },
  methods:{
    toJump(path,name){//路由跳转
      if(path!='javascript:;'){
        sessionStorage.setItem('currIndex', path)
        this.$router.push(path)
      }
    }
  }
}
</script>
<style lang="less">
.layui-layout-admin{
  .layui-side{
    top: 0;
    .layui-logo{
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #009688;
        font-size: 16px;
        background-color: #23262E;
    }
    .layui-side-scroll{
        margin-top:100px;
        height: 89%;
        width: 200px;
    }
  }
  .layui-body{
    top: 0;
    bottom: 0;
  }
}
</style>