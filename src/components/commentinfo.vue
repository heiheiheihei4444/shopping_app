<template>
  <div class="comment" v-if="commentInfo">
    <div class="comment-header">
    <span>用户评论</span>
    <span>更多</span>
    </div>
    <div class="comment-main">
    <div class="comment-user">
    <img :src="commentInfo.user.avatar" alt="">
   <div> {{commentInfo.user.uname}}</div>
    </div>
    <div class="comment-content">
        {{commentInfo.content}}
    </div>
    <div class="comment-goods">
        {{commentInfo.created}} {{commentInfo.style}}
    </div>
    <div class="comment-img" v-if="commentInfo.images">

            <img :src="img" alt="" v-for="(img,index) in commentInfo.images"  :key="index">   
    </div>
    <div class="shopas">
        {{commentInfo.explain}}
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'commentinfo',
  data () {
    return {
    };
  },
  props:{
    commentInfo:{
        type:Object,
        default(){
            return {}
        }
    }
  },

}
</script>
<style scoped>
    .comment-img{
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;

    }
    .comment-img img{
        flex: 1;
        width: 25%;
        height: auto;
        margin: 0 2%;
    }
    .shopas{
        font-size: 14px;
        color: darkgray;
        width: 100%; 
        display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;


        
    }
    .comment div{
        margin-top: 2%;
    }
    .comment{
        width: 80%;
        margin: 5% 10%;
        border-bottom: 1px solid rgb(202, 223, 223);
    }
    .comment-main div:nth-child(-2){
        border-bottom: 1px solid rgb(202, 223, 223)
    }
    .comment-header{
        border-bottom: 1px solid rgb(202, 223, 223);
        padding-bottom: 3%;
        overflow: hidden;
    }
    .comment-header span:nth-child(1){
        float: left;
    }
    .comment-header span:nth-child(2){
        float: right;
    }
    .comment-main{
        margin-top: 3%;
    }
    .comment-user {
        overflow: hidden;
        font-size: 12px;

    }
    .comment-user img{
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .comment-user div{
        display: inline-block;
        float: left;
        padding-top: 5px;
    }

    .comment-content{
        font-size: 14px;
        color: darkgray;

    }
    .comment-goods{
        font-size: 12px;
        color: darkgray;
    }

</style>