<template lang="pug">
    div.container
        .downloading(id="downloading" :style="{ 'border-color': borderColor , 'border-right':`solid 4px ${color}`, 'width':`${radius}`,'height':`${radius}`}")
</template>
<script>
export default {
    props:{
        borderColor:{
            type:String,
            default:''
        },
        color:{
            type:String,
            default:'transparent'
        },
        radius:{
            type:String,
            default:'50px'
        }
    },
}
</script>
<style lang="scss" scoped>
    @import "@/css/DownloadModels/circleDownload.scss";
</style>