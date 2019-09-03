import Vue from 'vue'
import Router from 'vue-router'
import {routesList} from './routes'

Vue.use(Router)

export default new Router({
  routes:routesList,
  scrollBehavior(to,from,savePosition){
      if(savePosition){
          return savePosition
      }else{
          return {x:0,y:300}
      }
  }
})
