<template>
    <div>
        <div class="cart-item" v-for="(goods,index) in $store.state.cartList" :key="index">
            <div class="select-btn">
                <div>
                    <img class="btn-style" src="@/assets/img/正确.png" alt="" v-if="goods.checked" @click="selChange(index)">
                    <img v-else class="btn-style" src="@/assets/img/未选中.png" alt="" @click="selChange(index)">
                </div>
                
            </div>
            <div class="goods-img">
                <img :src="goods.image" alt="" @load="load">
            </div>
            <div class="goods-msg">
                <div class="title">{{goods.title}}</div>
                <div class="desc">{{goods.desc}}</div>
                <div class="price-item">
                    <span class="price">{{goods.price}}</span>
                    <span class="num" >x{{goods.count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'cartitem',
        methods: {
            selChange(index){
                this.$store.commit('checkChange',index)
            },
            load(){
                this.$emit('imgload')
            }
        },
    }
</script>
<style scoped>

.select-btn {
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    border-radius: 50%;

}
.btn-style{

    width: 15px;
    height: 15px;
    border-radius: 50%;

}
.cart-item{
    padding: 0 2%;
    width: 96%;
    height: 20%;
    display: flex;
    border-bottom: 1px solid darkgray;
}

.goods-img{
    padding: 2%;
    height: 100%;
    width: 18%;
}
.goods-img img{
    border-radius: 5px;
    height: 100%;
    width: 100%;
}
.goods-msg{
    height: 100%;
    width: 70%;
}
.price-item{
    width: 100%;
}
.num{
    float: right;
}
.title{
    margin-top: 3%;
    font-size: 16px;
    text-overflow:ellipsis;
    width: 100%;
    white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
}
.desc{
    margin-top: 4%;
    color: darkgray;
    font-size: 12px;
    text-overflow:ellipsis;
    width: 100%;
    white-space: nowrap; 
  width: 100%; 
  overflow: hidden;
}
.price-item{
    margin-top: 10%;
}
.price{
    font-size: 18px;
    color: crimson;
}
</style>