<template>
        <div class="goods-main">
            <div v-for="(goods,index) in goodsList" :key="index"  class="goods-item" @click="detail(goods.iid)">
                <div >
                    <img v-lazy="goods.image||goods.show.img" alt="" @load="imgload"> 
                 <div class="goods-title"><span>{{goods.title}}</span></div>  
                </div>
                 
            </div>
        </div> 
</template>
<script>
    export default {
        name:'goods',
        props:{
            goodsList:{
                type:Array,
                default(){
                    return []
                }
            }
            
        },
        computed: {
          
        },
       
        methods: {
            imgload(){
                this.$bus.$emit('imgload')
            },
            detail(iid){
            this.$router.push('/detail/'+iid)
        }
        }
        
    }
</script>
<style>
.goods-main{
    display: flex;
    width: 100%;
    flex-flow: wrap;

}
.goods-item{
    text-align: center;
    margin: 2.5%;
    flex-shrink: 0;
    width: 45%;
}
.goods-item img{
    width:100%;
}
.goods-title{
    display: inline-block;
  white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
}
</style>