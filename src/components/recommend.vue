<template>
    <div class="recommend-main">
        <div v-for="(item,index) in recommendList" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name:'recommend',
        data() {
            return {
                
            }
        },
        mounted() {

        },
        props:['recommendList']
        
    }
</script>
<style scoped>
.recommend-main{
margin-top: 2%;
display: flex;
width: 100%;
}
.recommend-item{
    text-align: center;
    flex:1;
    font-size: 12px;
   
    

}
.recommend-item a{
    text-decoration: none;
    color: black;
}
.recommend-item a img{
    width: 60px;
    height: 60px;
}
</style>