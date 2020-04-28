<template>
    <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
        <div class="info-desc">
            <div >{{detailInfo.desc}}</div>
        </div>
        <div class="info-main">
            <div class="info-img">
                <img :key="index" v-for="(img,index) in detailInfo.detailImage[0].list" :src="img" alt="" @load="load">
            </div>
            
        </div>

        
    </div>
</template>
<script>
export default {
    name:'detailinfo',
    props:{
        detailInfo:{
            type:Object,
            default:()=>{}
        }
    },
    methods: {
        load(){
            this.$emit('imgload')
        }
    },
    mounted() {

    },
}
</script>
<style scoped>
.goods-info{
    background-color: white;
    padding: 0 5%;
    text-align: center;
}
.info-img{
    text-align: center;
}
.info-img img{
    width: 90%;
}
</style>