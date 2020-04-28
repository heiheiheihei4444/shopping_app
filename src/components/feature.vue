<template>
    <div class="feature">
        <div class="feature-header">
            <slot name="f-header"></slot>
        </div>
        <div class="feture-main">
            <slot name="f-main"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'feature'
    }
</script>
<style>
    .feature{
        width: 100%;
        margin-top: 3%;
    }
    .feature-header{
        text-align: center;
        width: 100%;
        height: 44px;
    }

</style>