<template>
    <div class="param-info" v-if="Object.keys(paramInfo).length!==0">
        <table  class="param-list" :key="index" v-for="(table,index) in paramInfo.sizes" >
            <tr :key="indey" v-for="(tr,indey) in table">
                <td :key="indez" v-for="(td,indez) in tr">{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info,index) in paramInfo.infos" :key="index">
                <td>{{info.key}}</td>
                <td>{{info.value}}</td>
            </tr>
        </table>
        <div  class="info-img" v-if="paramInfo.image.length!==0">
            <img :src="paramInfo.image" alt="">
        </div>
        
    </div>
</template>
<script>
    export default {
        name:'detailparam',
        props:{
            paramInfo:{
            type:Object,
            default(){
                return{}
            }
        }
        }
    }
</script>
<style scoped>
.param-info{
    background-color: white;
    margin: 0 10%;

}
table{
    border-collapse:collapse;
    color: rgb(206, 182, 182);
}
.param-list tr td{
    width: 25%;
}
table tr{
}
.info-img{
    width: 90%;
}
table tr td {
    border-bottom: darkgray 1px solid;
    padding: 2%;
}
table tr {
    padding: 2%;
   border-bottom: 1px solid darkgray;
}
.info-param tr td:nth-child(1){

}
.info-param tr td:nth-child(2){
    color: black;
}
</style>