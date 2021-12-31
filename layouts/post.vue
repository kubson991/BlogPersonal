<template lang="pug">
    section.global
        Header
        Darkmode.darkmode
        Nuxt.content  
        Footer  
</template>
<style lang="scss" scoped>
    .global{
        overflow-x: hidden;
        min-height: 100vh;
    }
    .content{
        min-height: calc(100vh - 24rem);
    }
    .darkmode{
        position: absolute;
        top: 7rem;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>