import{debounce} from './utils'

export const itemListenerMixin={
    mounted(){
        let refresh=debounce(this.$refs.scroll.refresh,1)    
            this.$bus.$on('imgload',()=>{
                refresh()
            })
            console.log(1)
    }
    
}

import backtop from '@/components/backtop'
export const backtopMixin={
    components:{
        backtop
    },
    data(){
        return{
            isShow:false
        }
    },
    methods: {
        backclick(){
            this.$refs.scroll.scrollTo(0,-44,1000)
        },
        backshow(position){
            this.isShow=-(position)>800?true:false;
        },
    },
}


import toast from '@/components/toast'
export const toastMixin={
    components:{
        toast
    },
    data(){
        return{
            isToastShow:false,
            msg:''
        }
    },
    methods:{
        toastNtf(msg){
            this.msg=msg;
            this.isToastShow=true;
                  setTimeout(()=>{
                    this.isToastShow=false;
                  },1000)
        }
    }
}