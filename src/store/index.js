import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




const store =new Vuex.Store({
    state:{
        tabindex:0,
        cartList:[]
    },
    mutations:{
        tabchange(state,index){
            state.tabindex=index;

        },
        addGoodsNum(state,goods){
           goods.count++;
            
        },
        addNewGoods(state,goods){
          state.cartList.push(goods)  
        },
        checkChange(state,index){
            state.cartList[index].checked=!state.cartList[index].checked
        },
        allSelect(state,checked){
          for(let item of state.cartList){
              item.checked=checked;
          }
        }
    },
    actions:{
        tabchangeAction(context,index){
            context.commit('tabchange', index)
        },
        addGoodsAction(context,goods){
            return new Promise((resolve)=>{
                let itemindex=context.state.cartList.findIndex((item)=>{
                    return item.iid==goods.iid;
                })
                if(itemindex==-1){
                    goods.count=1;
                    goods.checked=true;
                    context.commit('addNewGoods',goods)
                }else{
                    context.commit('addGoodsNum',context.state.cartList[itemindex])
                }
                resolve('添加成功')
            })
            
        },
        
    },
    getters:{
      cartNum(state){
        return state.cartList.length
      },
      totalPrice(state){
          return state.cartList.reduce((pre,cur)=>{
              if(cur.checked==true){
                let priceindex=(cur.price).indexOf('.');
                let price=cur.price.slice(1,priceindex);
                return pre+=(cur.count*parseInt(price));
              }else{
                return pre
              }
              
          },0).toFixed(2)
      }
    },
    modules:{
       
    }
})


export default store