<template lang="pug">
    section.global
        Header
        Nuxt.content  
        Footer  
</template>
<style lang="scss" scoped>
@import '@/css/config.scss';
.global {
  overflow-x: hidden;
  min-height: 100vh;
  background-color: $color-claro;
}
.content {
  min-height: calc(100vh - 24rem);
}
</style>
