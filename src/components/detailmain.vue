<template>
    <div>
        <div class="detailmain">
            <div class="detail-title">
                <span>{{goods.title}}</span>
            </div>
            <div class="detail-price">
                <span>{{goods.newPrice}}</span>
                <span>{{goods.oldPrice}}</span>
                <span v-if="goods.discount">{{goods.discount}}</span>
            </div>
            <div class="detail-sell">
                <span>{{goods.columns[0]}}</span>
                <span>{{goods.columns[1]}}</span>
                <span>{{goods.services[goods.services.length-1].name}}</span>
            </div>
            <div class="detail-service">
                <span><img :src="goods.services[0].icon" alt="">{{goods.services[0].name}}</span>
                <span><img :src="goods.services[1].icon" alt="">{{goods.services[1].name}}</span>
                <span><img :src="goods.services[2].icon" alt="">{{goods.services[2].name}}</span>
                
            </div>
        </div>    
    </div>
</template>
<script>
    export default {
        name:'detailmain',
        props:{
            goods:{
                type:Object,
                default:function(){}
            },
            
        },
        created() {
            console.log(this.goods)
        },
    }
</script>
<style scoped>
.detailmain{
    padding: 2% 5%;
    height: 25%;
}
.detailmain div{
    margin: 3% 0;

}
.detailmain div:last-child{
    border-bottom:1px solid rgb(243, 238, 238);
}
.detail-title{
    font-size: 16px;

}
.detail-price span{
    margin:0 1%;
}
.detail-price span:nth-child(1){
    font-size: 18px;
    color: crimson;
}
.detail-price span:nth-child(2){
    text-decoration:line-through;
    font-size: 12px;
    color: darkgrey;
}
.detail-price span:nth-child(3){
    background-color: crimson;
    color: white;
    display: inline-block;
    font-size: 12px;
    border-radius: 5px;
}
.detail-sell{
    display: flex;
}
.detail-sell span{
    flex: 1;
    font-size: 12px;
    text-align: center;
    color: darkgray;
}
.detail-service span:nth-child(3){
    padding-bottom: 2%;
}
.detail-service{
    display: flex;
}
.detail-service span{
    flex:1;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
}
.detail-service span img{
    margin-right:2%;
    width: 12px;
    height: 12px;
}
</style>