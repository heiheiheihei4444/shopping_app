<template>
    <div class="tab-bar-item" @click="btnclick">
        <div v-if="active" >
            <slot name="item-icon"  ></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"  ></slot>
        </div>
        
        <div :style="activeStyle"> 
            <slot name="item-name"></slot>   
        </div>
             
    </div>
</template>
<script>
    export default{
        name:'tabbar-item',
        data(){
            return {
             
            }
        },
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        methods: {
            btnclick:function(){
                this.$router.push(this.path)
            }
        },
        computed: {
            active:function(){
                return this.$route.path.indexOf(this.path)!=-1
            },
            
            activeStyle(){
                return this.active?{color:this.activeColor}:{};
            }
        },
        
    }
</script>



<style scoped>
    .tab-bar-item{
    flex:1;
    text-align: center;

    font-size: 12px;
}
.tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    
}

.active{
    color: darkmagenta;
}
</style>