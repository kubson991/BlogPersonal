<template lang="pug">
    div
        Header
        Blog(:img="blog.imagen" :h1="blog.titulo" :pre="blog.post" :tags="blog.tags" :direccion="blog.direccion" )
        section.main__correo
            img(src="../../assets/img/mail.png", alt="mail")
            div
                a(href="mailto:poveda1999@gmail.com") contactame
                p poveda1999@gmail.com 
        Footer
</template>
<script>
export default {
    data(){
        return{
            blog:{}
        }
    } ,  
    created(){
        this.blog=this.$store.getters.get(this.$route.params.blogs)
    }
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>