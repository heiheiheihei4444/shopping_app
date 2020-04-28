
<template>
  <div id="app">
      <tabbar >
        <tabbaritem path='/home'>
          <img slot="item-icon" src="./assets/img/appointment.png" alt="">
          <img slot="item-icon-active" src="./assets/img/汉堡_SVG.png" alt="">
          <div slot="item-name">首页</div>
        </tabbaritem> 
        <tabbaritem path='/catagory'>
         <img slot="item-icon" src="./assets/img/appointment.png" alt="">
         <img slot="item-icon-active" src="./assets/img/汉堡_SVG.png" alt="">
         <div slot="item-name">分类</div>
        </tabbaritem> 
        <tabbaritem path='/cart'>
         <img slot="item-icon" src="./assets/img/appointment.png" alt="">
         <img slot="item-icon-active" src="./assets/img/汉堡_SVG.png" alt="">
         <div slot="item-name">购物车</div>
        </tabbaritem> 
        <tabbaritem path='/profile'>
         <img slot="item-icon" src="./assets/img/appointment.png" alt="">
         <img slot="item-icon-active" src="./assets/img/汉堡_SVG.png" alt="">
         <div slot="item-name">我的</div>
        </tabbaritem> 
       </tabbar>

    
      <keep-alive exclude="detail">
        <router-view ></router-view>
      </keep-alive>
    
  </div>
</template>

<script>
import tabbar from './components/tabbar.vue'
import tabbaritem from './components/tabbar-item.vue'
export default {
  name: 'App',
  components:{
    tabbar,
    tabbaritem,
  }
}
</script>

<style >

body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
