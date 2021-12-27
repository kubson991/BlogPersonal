<template lang="pug">
    article(  :class="{ giro: backFace }")
        div.containerF(@mouseover="pageBorder=true" @mouseleave="pageBorder=false")  
            div(class="pageBorder" :style="{ display: `${pageBorder?'block':'none'}` }"  @click="backFace=!backFace")    
            nuxt-img(:src="this.article.imagen" :alt="this.article.alt"  provider="cloudinary" format="webp"  width="250" )  
            h1 {{article.titulo}}
            p {{article.intro}}
            NuxtLink(:to="`/blog/${this.article.blog}`") Descubrir
        div.containerB(@mouseover="pageBorder=true" @mouseleave="pageBorder=false")
            div(class="pageBorder back" :style="{ display: `${pageBorder?'block':'none'}` }" @click="backFace=!backFace" ) 
            div.tagsContainer
                tools(v-for="(tag, index) in article.tags" :key="index" :value="tag")
</template>
<script>
export default {
    name:"articles",
    data(){
        return{
            pageBorder:false,
            backFace:false,
        }
    },
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