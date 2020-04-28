<template>
    <div ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name:'scroll',
        data(){
            return{
                scroll:null,
            }
        },
        props:{
            probeType:{
                type:Number,
                default:3
            },
            pullUpLoad:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
            })
            this.scroll.on('scroll',(position)=>{
                this.$emit('backshow',position.y)
                this.$emit('tabSticky',position.y)
            })
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
                

            })
        },
        methods: {
            scrollTo(x,y,time=500){
                this.scroll.scrollTo(x,y,time)
            },
            refresh(){
                this.scroll&&this.scroll.refresh()
            },
            
        },
    }
</script>
<style>
    
</style>