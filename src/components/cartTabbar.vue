<template>
    <div class="cart-tabbar">
        <div class="select-btn">
            <div>
                <img class="btn-style" src="@/assets/img/正确.png" alt="" v-if="isAllSelect" @click="selChange()">
                <img v-else class="btn-style" src="@/assets/img/未选中.png" alt="" @click="selChange()">全选
            </div>

        </div>
        <div class="total-price">
            合计 <span class="price">￥{{totalPrice}}</span> 
        </div>
        <div class="cal-btn">
            去计算({{checkedNum}})
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'cartTabbar',
        data(){
            return{

            }
        },
        updated() {
            console.log(this.isAllSelect)
        },
        computed: {
            ...mapGetters(['totalPrice']),
            checkedNum(){
                return this.$store.state.cartList.filter(item=>item.checked).length
            },
            isAllSelect(){
                return this.$store.state.cartList.every(item=>item.checked)
            }
        }, 
        methods: {
            selChange(){
                this.$store.commit('allSelect',!this.isAllSelect)
            }
        },


    }
</script>
<style scoped>
    .cal-btn{
        background-color: darksalmon;
        line-height: 40px;
    }
    .price{
        color: crimson;
    }
    .cart-tabbar {
        position: relative;
        z-index: 1000;
        background-color: white;
        height: 40px;
        display: flex;
        box-shadow: 0 0 1px crimson;
    }
    .cart-tabbar div{
        text-align: center;

        flex: 1;
    }
    .total-price{
        line-height: 40px;
    }


    .select-btn {
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-radius: 50%;

    }

    .btn-style {


        width: 15px;
        height: 15px;
        border-radius: 50%;

    }
</style>