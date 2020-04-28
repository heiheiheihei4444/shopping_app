import VueRouter from 'vue-router'
import Vue from 'vue'



const home =()=>import ('../views/home.vue')
const catagory =()=>import ('../views/catagory.vue')
const cart =()=>import ('../views/cart.vue')
const profile =()=>import ('../views/profile.vue')
const detail=()=>import('../views/detail.vue')

Vue.use(VueRouter);


const router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/catagory',component:catagory},
        {path:'/cart',component:cart},
        {path:'/profile',component:profile},
        {path:'/detail/:iid',component:detail},
    ]
})


export default router;