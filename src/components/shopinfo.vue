<template>
    <div class="shopinfo">
        <div class="shopinfo-title">
                <img :src="shopInfo.logo" alt=""> 
                <div>{{shopInfo.name}}</div>

        </div>
        <div class="shopinfo-main">
            <div class="main-left">
                <div class="main-left-left">
                    <div>{{Math.floor(shopInfo.sells/10000)}}万</div>
                    <div>总销量</div>
                </div>
                <div>
                    <div>{{shopInfo.goodsCount}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="main-right">
                <div v-for="(score,index) in shopInfo.score" :key="index">
                    <span class="scorename">{{score.name}}</span>
                    <span :class="{score:true,better:score.isBetter}">{{score.score}}</span>
                    <span v-if="score.isBetter" > <span class="isbetter">高</span> </span>
                    <span v-else ><span class="notbetter">低</span></span>
                </div>
            </div>
        </div>
        <div class="shopinfo-footer">
            进店逛逛
        </div>
    </div>
</template>
<script>
    export default {
        name:'shopinfo',
        props:{
            shopInfo:{
                type:Object,
                default:()=>{}
            }
        },
        mounted() {

        },
    }
</script>
<style scoped>
    .shopinfo-footer{
        margin: 5% auto;
        text-align: center;
        width: 30%;
        background-color: rgb(221, 211, 211);
        border-radius: 10%;
        font-size: 12px;
        
    }

    .isbetter{
        color: white;
        border-radius: 5%;
        background-color: crimson;
    }
    .notbetter{
        color: white;
        border-radius: 5%;
        background-color: darkgreen;
    }
    .score{
        color: darkseagreen;
    }
    .better{
        color: crimson;
    }
    .main-right{
        margin-left: 2%;
    }
    .main-right div{
        font-size: 14px;
        display: flex;
        padding-bottom: 2%;
    }
    .main-right div span{
        text-align: center;
        font-size: 12px;
        flex: 1;
    }
    .main-left{
        text-align: center;
        display: flex;
        border-right: 1px solid rgb(240, 227, 227);
    }
    .main-left div{
        
        flex:1;
    }

    .main-left div div:nth-child(1){
        font-size: 18px;
        font-weight: bold;
    }
    .main-left div div:nth-child(2){
        font-size: 14px;
    }
.shopinfo-main{
    display: flex;
    margin-top: 3%;
}
.shopinfo-main div{

    flex:1;
}
.shopinfo{
    margin: 0 5%;
}
.shopinfo-title{
    position: relative;
    height: 5%;

}
.shopinfo-title img{
    display: inline-block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgb(216, 209, 209);
}
.shopinfo-title div{
    position: absolute;
    top:20%;
    left: 15%;
    display: inline-block;
    font-size: 16px;
}
</style>