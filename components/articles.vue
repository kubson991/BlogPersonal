<template lang="pug">
    article    
        nuxt-img(:src="this.article.imagen", :alt="this.article.alt" , provider="cloudinary", format="webp" , width="250")  
        h1 {{article.h1}}
        p {{article.p}}
        NuxtLink(:to="this.article.to") Leer mas    
</template>
<script>
export default {
    name:"articles",
    props:{
        article:Object
    },
}
</script>
<style lang="scss" scoped>
    @import "../css/article.scss";
    @media(min-width: 1028px){
        article{height: 500px;}        
    }
</style>