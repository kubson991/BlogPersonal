<template lang="pug">
    div
        headerB
        main_blog(:img="img" :h1="h1" :pre="pre" :tags="tags" :direccion="direccion")
        section.main__correo
            img(src="../../assets/img/mail.png", alt="mail")
            div
                a(href="mailto:poveda1999@gmail.com") contactame
                p poveda1999@gmail.com 
        footerB
</template>
<script>
import headerB from '@/components/header.vue'
import footerB from '@/components/footer.vue'
import main_blog from '@/components/blog.vue'
export default {
    components:{headerB,footerB,main_blog},
    name:'platziExchange', 
    data(){
        return{
            img:'v1637178397/blogPersonal/blogs/imagen_2021-11-17_144635_yokxze.png', //usando cloudinary
            h1:'Componente para promociones Nike hecho con Web Components',
            pre:`Creacion de un componente web con javaScript vanila , HTML y CSS con tematica de zapatos Nike ,siendo este componente totalmente reutilizable y compatible con cualquier framework.`,
            tags:['JS','CSS','HTML','RWD'],
            direccion:'https://inspiring-leavitt-c77fe8.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>