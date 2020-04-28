<template>
    <div class="detail">
        <navbar id="navbar">
            <div slot="left" class="icon-wrap" @click="back">
                <img src="@/assets/img/返回.png" alt="" slot="left"  class="backicon" >
            </div>
            <div slot="mid" class="title">
                <div v-for="(title,index) in titleList" :key="index"  class="titleitem" @click="tabchange(index)" :class="{tabfocus:index==tabindex}">
                    <span >{{title}}</span>
                </div>
            </div>
        </navbar>
        <scroll class="content" ref="scroll" @tabSticky="scrollTapChaneg" @backshow="backshow">
            <div class="lunbo"> 
                <img :src="img" alt="" v-for="(img,index) in topImgs" :key="index">
            </div>
            <detailmain :goods="goods"></detailmain>
            <shopinfo :shop-info="shopInfo"></shopinfo>
            <detailinfo :detail-info="detailInfo" @imgload="imgload" ref="detail"></detailinfo>
            <detailparam :param-info="paramInfo" ref="param"></detailparam>
            <commentinfo :comment-info="commentInfo" ref="comment"></commentinfo>
            <goods :goods-list="recommendList" ref="goods"></goods>
        </scroll>   
        <backtop @click.native="backclick" v-if="isShow"></backtop>
        <detailbar @addToCart="addToCart"></detailbar> 
    </div>
</template>
<script>
    import {debounce} from '@/assets/js/utils'
    import {itemListenerMixin,backtopMixin} from '@/assets/js/mixin'
    import detailbar from '@/components/detailbar'
    import goods from '@/components/goods'
    import commentinfo from '@/components/commentinfo'
    import detailparam from '@/components/detailparam'
    import detailinfo from '@/components/detailinfo'
    import scroll from '@/components/scroll'
    import {GoodsInfo,Shop,GoodsParam,getRecommend} from '@/network/detail.js'
    import {getDetail} from '@/network/detail.js'
    import navbar from '@/components/navbar'
    import shopinfo from '@/components/shopinfo'
    import detailmain from '@/components/detailmain'
    export default {
        name:'detail',
        components:{
            navbar,
            detailmain,
            shopinfo,
            scroll,
            detailinfo,
            detailparam,
            commentinfo,
            goods,
            detailbar,
        
    
        },
        mixins:[itemListenerMixin,backtopMixin],
        data(){
            return{
                iid:0,
                titleList:['商品','参数','评论','推荐'],
                tabindex:0,
                goods:{},
                topImgs:[],
                shopInfo:{},
                detailInfo:{},
                paramInfo:{},
                commentInfo:{},
                recommendList:[],
                themeTop:[],
                getThemeTop:null,  
            }
        },
        created() {
            this.iid=this.$route.params.iid,
            this.getDetail(this.iid);
            getRecommend().then(res=>{
                console.log(res)
                this.recommendList=res.data.list
            })
            this.getThemeTop=debounce(function(){
            this.themeTop=[];
            this.themeTop.push(0);
          this.themeTop.push(this.$refs.param.$el.offsetTop);
          this.themeTop.push(this.$refs.comment.$el.offsetTop)
          this.themeTop.push(this.$refs.goods.$el.offsetTop);
            },1000)

        },

        methods: {
           
            addToCart(){
              const product={}
              product.image=this.topImgs[0];
              product.title=this.goods.title;
              product.desc=this.goods.desc;
              product.price=this.goods.newPrice;  
              product.iid=this.iid;
              this.$store.dispatch('addGoodsAction',product).then(res=>{
                  console.log(this.$toast)
                this.$toast.toastNtf(res,1000)
              })

            },
            scrollTapChaneg(position){    
                let pos=this.themeTop.findIndex(function(item){
                    return (-position)<=item
                })

                this.tabindex=pos==-1?3:pos;

            },
            imgload(){
                this.$refs.scroll.refresh();
                this.getThemeTop();
            },
            getDetail(iid){
                getDetail(iid).then(res=>{
                    const data=res.result
                    this.topImgs=data.itemInfo.topImages;
                    this.goods=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
                    this.shopInfo=new Shop(data.shopInfo)
                    this.detailInfo=data.detailInfo;
                    this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
                    if(data.rate.cRate!==0){
                        this.commentInfo=data.rate.list[0]
                    }
                })
            },
            tabchange(index){
                console.log(index)
                this.tabindex=index;
                console.log(this.tabindex)
                this.$refs.scroll.scroll.scrollTo(0,-this.themeTop[index],500)
            },
            back(){
                this.$router.back();
            },

        },
    }
</script>
<style scoped>
    .content{
        height: calc(100vh - 93px);
    }
    .detail{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 9;
        background-color: white;
    }
.iconwrap{
    position: relative;
    text-align: center;

}
.tabfocus{

    border-bottom: 3px solid white;
}
.backicon{
    margin-top: 10px;
    width: 25px;;
}
.title{
    display: flex;
}
.titleitem{
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: white;

}
.lunbo{
    height: 40vh;
    overflow: hidden;
}
.lunbo img{
    width: 100vw;
}
</style>