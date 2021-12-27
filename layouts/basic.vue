<template lang="pug">
    section.global
        Header
        Nuxt.content
</template>
<style lang="scss" scoped>
    .global{
        overflow: hidden;
        min-height: 100vh;
    }
    .content{
        height: 100vh
    }
</style>