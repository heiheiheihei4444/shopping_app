<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(tab,index) in tabList" :key='index' @click="tabchange(index)" >
                <span :class="{'tab-focus':index==$store.state.tabindex,'span-inline':true}">{{tab}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name:'tabcontrol',
        data(){
            return{
               
            }
        },
        props:{
            tabList:{
                type:Array,
                default(){
                    return []
                }
            },
           
        },
        methods: {
            tabchange(index){
                this.$store.dispatch('tabchangeAction', index)
                this.$emit('tabnotify',index)

            }

        },
    }
</script>
<style>
.tab-control{
    background-color: white;
    z-index: 100;
    display: flex;
    width: 100%;
    height: 37px;
}
.tab-control-item{
    text-align: center;
    flex: 1;

}
.tab-focus{
    border-bottom: crimson 2px solid;
    color: crimson;
}
.span-inline{
    line-height: 37px;
}
</style>