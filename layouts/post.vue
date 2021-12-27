<template lang="pug">
    section.global
        Header
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
</style>