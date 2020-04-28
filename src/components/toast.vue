<template>
    <div class="toast" v-show="isToastShow">
        {{msg}}
    </div>
</template>
<script>
    export default {
        name: 'toast',
        data() {
            return {
                msg: '',
                isToastShow: false,
            }
        },
        methods: {
            toastNtf(msg='默认消息',delay='2000') {
                this.msg = msg;
                this.isToastShow = true;
                setTimeout(() => {
                    this.isToastShow = false;
                }, delay)
            }
        }
    }
</script>
<style scoped>
    .toast {
        padding: 10px 15px;
        position: fixed;
        top: 50%;
        color: white;
        z-index: 1000;
        left: 50%;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, .4);
        transform: translate(-50%, -50%);
    }
</style>