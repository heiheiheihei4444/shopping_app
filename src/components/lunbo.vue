<template>
    <div>

        <div class="lunbo"></div>
            <slot></slot>


    </div>


</template>
<script>
    export default {
        name: 'lunbo',
        data(){
            return{
                currentPos:0,
                len:0,
            }
        },
        created() {
           
        },
        methods: {
            
        },
        computed: {
           
        },

    }
</script>
<style scoped>
    .lunbo {
        overflow: hidden;
        height: 200px;
    }
    img{
        width: 100%;
       
    }
   
</style>