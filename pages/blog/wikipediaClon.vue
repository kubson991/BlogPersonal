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
            img:'v1637557146/blogPersonal/blogs/imagen_2021-11-21_235903_k4xykm.png', //usando cloudinary
            h1:'Maquetacion del sitio web de wikipedia',
            pre:`Maquetacion del sitio web de Wikipedia realizado unicamente con HTML y CSS , aclarando que no es una pagina responsive ,unicamente para resoluciones de computadores de escritorio sin embargo es un buen ejercicio de maquetacion ,claro esta que,sin el acceso a las fuentes e imagenes pertinentes esto limito algunos aspectos.`,
            tags:['CSS','HTML'],
            direccion:'https://nervous-swartz-0de02a.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>