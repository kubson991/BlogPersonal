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
            img:'v1636484864/blogPersonal/blogs/imagen_2021-11-09_140743_tqnbuz.png', //usando cloudinary
            h1:'PlatziExchange',
            pre:`aplicacion web que permite ver graficamente el cambio de las criptomonedas mas populares y calcular sus divisas,sin embargo la api rest cambio sus permisos de CORS volviendola una aplicacion inestable (hecha con Vue CLI).`,
            tags:['JS','CSS','HTML','RWD','Vue','Taildwind'],
            direccion:'https://kubson-exchange.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>