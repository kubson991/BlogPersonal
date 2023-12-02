<template lang="pug">
    section.global(ref='globalElement')
        span.cursorBright(:style="{ top: position.y+'px',left:position.x+'px' }")
        Header
        Nuxt.content  
        Footer  
</template>
<script>
export default {
    data(){
        return {position:{x:0,y:0}}
    },
    mounted() {
        this.$refs.globalElement.addEventListener('mousemove',this.cursorMove)
    },
    methods:{
        cursorMove(e){
            this.position.x=e.clientX
            this.position.y=e.clientY
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/css/config.scss';
.cursorBright{
  position: absolute;
    width: 0rem;
    height: 0rem;
    background-color: $color-variacion;
    z-index: 1;
    box-shadow: 0px 0px 22rem 7rem $color-variacion;
    border-radius: 50%;

}
.global {
  min-height: 100vh;
  background-color: $color-claro;

}
.content {
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 24rem);
}
</style>
