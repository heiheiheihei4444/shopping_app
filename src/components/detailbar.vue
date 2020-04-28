<template>
  <div class="detailbar">
      <div class="detail-left">
          <div class="left-item">
              <div><img src="@/assets/img/汉堡_SVG.png" alt="" ></div>
              <div>客服</div>
              
          </div>
          <div class="left-item">
            <div><img src="@/assets/img/汉堡_SVG.png" alt="" ></div>
            <div>店铺</div>
          </div>
          <div class="left-item">
            <div><img src="@/assets/img/汉堡_SVG.png" alt="" ></div>
            <div>收藏</div>
          </div>
      </div>
      <div class="detail-right">
          <div @click="addGoods" class="cart-item">加入购物车</div>
          <div class="purchase-item">购买</div>
      </div>
  </div>
</template>

<script>
export default {
  name:'detailbar',
  data () {
    return {
    }
  },
  methods: {
      addGoods(){
          this.$emit('addToCart')
      }
  },

}
</script>
<style scoped>
    img{
        
        width: 24px;
        height: 24px;
    }
    .detailbar{
        box-shadow: 0 0 1px crimson;

        width: 100%;
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 49px;
        background-color: white;
        z-index: 2000;
    }
    .detailbar div{
        flex: 1;
        height: 100%;
        text-align: center;
    }
    .detail-left{
        height: 100%;
        display: flex;
    }
    .left-item{
        border-right: 1px solid rgb(184, 140, 149) ;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .left-item div{
        flex:1;

    }
    .left-item div:nth-child(2){
        margin-bottom: 20px;
    }
    .detail-left div{
        font-size: 12px;
        flex: 1;
    }
    .detail-right{
        line-height: 49px;
        display: flex;
    }
    .detail-right div{
        font-size: 14px;
        color: white;
        flex: 1;
    }
    .cart-item{
        background-color: crimson;
    }
    .purchase-item{
        background-color:burlywood;
    }
</style>