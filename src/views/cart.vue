<template>
    <div class="cart">
        <navbar>
            <div slot="mid">购物车({{cartNum}})</div>
        </navbar>
        <scroll class="content" ref="scroll">
            <cartitem @imgload="imgload"></cartitem>
        </scroll>
        <cart-tabbar></cart-tabbar>
        
    </div>
</template>

<script>
import scroll from '@/components/scroll'
import {mapGetters} from 'vuex'
import cartTabbar from '@/components/cartTabbar'
import navbar from '@/components/navbar'
import cartitem from '@/components/cartitem'
export default {
    name:'cart',
    components:{
        navbar,
        cartitem,
        scroll,
        cartTabbar
    },
    computed: {
        ...mapGetters(['cartNum'])
    },
    methods: {
        imgload(){
            console.log(1)
            this.$ref.scroll.refresh()
        }
    },
    

}
</script>

<style scoped>
.cart{
    width: 100%;
    height: 100%;

}
.content{
    width: 100%;
    height: calc(100vh - 137px);
}
</style>