<template lang="pug">
    main
        nuxt-img(:src="this.img", 
        :alt="this.h1" , provider="cloudinary", format="webp" , sizes="xs:288px md:692px lg:900px")   
        h1 {{this.h1}}
        pre {{this.pre}} 
        div().linkSection
            span() URL : 
            a(:href="direccion") {{this.direccion}}
        section
            div.tags Tags :
            div.tagscontainer
                tools(v-for="(tag, index) in tags" :key="index" :value="tag")
</template>
<script>
export default {
    name:'main_blog',
    props:{
        img:'',
        h1:"",
        pre:"",
        tags:[],
        direccion:'',
    },
}
</script>
<style lang="scss" scoped>
    @import "../css/miBlog.scss";
</style>