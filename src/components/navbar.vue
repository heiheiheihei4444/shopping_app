<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div >
        <div class="mid">
            <slot name="mid"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>
<script>
    export default {
        name:'navbar'
    }
</script>
<style scoped>
.nav-bar{
    position: relative;
    z-index: 9997;
    display: flex;
    line-height: 44px;
    width: 100%;
    height: 44px;
    background-color: red;
    box-shadow: 0 1px 1px brown;
    

}
.left{

    width: 60px;

}
.right{
    width: 60px;

}
.mid{
    text-align: center;
    flex: 1;
    
}

</style>