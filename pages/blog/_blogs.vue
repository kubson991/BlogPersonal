<template lang="pug">
    div
        Blog(:img="blog.imagen" :h1="blog.titulo" :pre="blog.post" :tags="blog.tags" :direccion="blog.direccion" )
        section.main__correo
            img(src="https://www.pngmart.com/files/15/Email-Symbol-PNG-File.png", alt="mail")
            div
                a(href="mailto:poveda1999@gmail.com") contactame
                p poveda1999@gmail.com 
</template>
<script>
export default {
    layout:'post',
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