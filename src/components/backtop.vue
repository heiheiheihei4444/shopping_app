<template>
    <div class="backtop" >
        <img src="@/assets/img/backtop.png" alt="" class="backtop-img">
    </div>
</template>
<script>
    export default {
        name:'backtop',
      
    }
</script>
<style>
.backtop{
    position: fixed;
    right: 2%;
    bottom: calc(2% + 49px);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: white;
}
.backtop-img{
    width: 40px;
    height: 40px;
}
</style>