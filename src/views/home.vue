<template>
    <div>
        <navbar class="navbar-fix">
            <div slot="mid">购物</div>
        </navbar>
       
            <tabcontrol :tabList="['流行','复古','潮流']" v-show="tabshow" class="tabsticky" @tabnotify="tabnotify" ref="tabcontrol2"></tabcontrol>
            <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @backshow="backshow" @tabSticky="tabSticky" @pullingUp="pullingUp"> 
                <div class="slider-main">
                    <div class="outer">
                        <img :src="img.image" class="lunbo-img" alt="" v-show="index==currentPos" v-for="(img,index) in imgList"
                            :key="index" @load="lunboLoad">
                    </div>
                        
                    <div class="dotList">
                        <div>
                            <span v-for="(item,index) in imgList.length" :key="item"
                                :class="{dot:true,isActive:currentPos==index}"></span>
                        </div>
                    </div>
                </div>
                <recommend :recommendList="recommendList"></recommend>
                <div>
                    <feature>
                        <span slot="f-header">-时下流行-</span>
                        <div slot="f-main" class="feature-main">
                            <div v-for="(item,index) in 8" :key="index" class="feature-item">
                                <a href="">
                                    <img src="@/assets/img/汉堡_SVG.png" alt="">
                                </a>
                            </div>
                        </div>
                    </feature>
                    <tabcontrol :tabList="['流行','复古','潮流']"  @tabnotify="tabnotify" ref="tabcontrol1"></tabcontrol>
                    <goods :goodsList="goodsList[currentList].list" >
        
                    </goods>
                </div>
                
            </scroll>
            <backtop @click.native="backclick" v-show="isShow" ></backtop>
 
        
       

    </div>


</template>

<script>
    import {itemListenerMixin} from '@/assets/js/mixin'
    import { getMulImg,getHomeGoods } from '@/network/home.js'
    import backtop from '@/components/backtop'
    import scroll from '@/components/scroll'
    import navbar from '@/components/navbar.vue'
    import recommend from '@/components/recommend'
    import feature from '@/components/feature'
    import tabcontrol from '@/components/tabcontrol'
    import goods from '@/components/goods'
    export default {
        name: 'home',
        data() {
            return {
                tabshow:false,
                imgList: '',
                currentPos: 0,
                timer: null,
                recommendList: '',
                isShow:false,
                tabindex: 0,
                offsetH:0,
                saveY:0,
                goodsList: {
                    'pop':{page:0,list:[]},
                    'new':{page:0,list:[]},
                    'sell':{page:0,list:[]},
                    
                }
            }

        },
        mixins:[itemListenerMixin],
        components: {
            navbar,
            recommend,
            feature,
            tabcontrol,
            goods,
            scroll,
            backtop

        },
        computed: {
            currentList() {
                return this.tabindex==0?'pop':this.tabindex==1?'new':'sell';
            }
        },

        methods: {
            lunboLoad(){
                this.offsetH=this.$refs.tabcontrol1.$el.offsetTop;
            },
            backshow(position){
                this.isShow=-(position)>800?true:false;
            },
            tabnotify(index) {
                this.tabindex = index;
            },
            backclick(){
                this.$refs.scroll.scrollTo(0,-44,1000)
            },
            pullingUp(){
                this.getHomeGoods(this.currentList);
                this.$refs.scroll.scroll.finishPullUp()
                this.$refs.scroll.scroll.refresh()
            },
            tabSticky(position){
                this.tabshow=-(position)-44>this.offsetH?true:false
            },
            getHomeGoods(type){
                let page=this.goodsList[type].page;
                getHomeGoods(type,page+1).then(res=>{
                    this.goodsList[type].list.push(...res.data.list);
                    this.goodsList[type].page+=1;
                })
            }
        },
        created() {
            getMulImg().then(res => {
                console.log(res);
                this.recommendList = res.data.recommend.list
                this.imgList = res.data.banner.list
            })
            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell');

        },
        mounted() {
            
        },
        activated() {
            console.log(this.saveY)
            this.$refs.scroll.scrollTo(0,this.saveY)
        },
        deactivated() { 
            this.saveY=this.$refs.scroll.scroll.y
        },

    }
</script>

<style scoped>
    .content{
        height:calc(100vh - 93px);
        overflow: hidden;
        margin-top: 45px;
    }
    .navbar-fix {
        position: fixed;
        top: 0;
        left: 0;
    }

    .slider-main {
        width: 100%;
        height: auto;
        margin-top: 44px;
    }

    .outer {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .tabsticky {
        position: fixed;
        top: 44px;
        left: 0;
    }

    .outer img {

        float: left;
        list-style: none;
        width: 100%;
        height: auto;
    }


    .dotList {
        top: 30%;
        position: absolute;
        margin: 0 auto;
        text-align: center;
        font-size: 0;
        width: 100%;
    }

    .dot {
        margin: 0 3px;
        border-radius: 50%;
        height: 10px;
        width: 10px;
        background-color: white;

    }

    .isActive {
        background-color: brown;
    }

    /* .v-enter {
        transform: translateX(100%);
    }

    .v-leave-to {}

    .v-enter-active {
        transition: all 1s ease;

    }

    .v-leave-active {
        transition: all 1s ease;
        transform: translateX(-100%);
    } */

    .feature-main {
        display: flex;
        flex-flow: wrap;

    }

    .feature-item {
        text-align: center;
        width: 25%;
        height: auto;
    }
</style>