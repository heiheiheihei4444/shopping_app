<template>
    <div id="tab-bar">
        <slot></slot>
      </div>
</template>
<script>
    export default {
        name:'tabbar'
    }
</script>

<style> 
#tab-bar{
    z-index: 5;
    width: 100%;
    height: 49px;
    display: flex;
    background-color: crimson;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 -3px 1px red;
  }


</style>