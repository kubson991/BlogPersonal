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
            img:'v1637901017/blogPersonal/blogs/imagen_2021-11-25_233013_b26cqt.png', //usando cloudinary
            h1:'Organizador de tiempo',
            pre:`Card creada para promocionar un servicio de data analytics realizado en base a los requerimientos del cliente , enfatizando en que fuera hecho para pantallas de 320px y 1440px ,basado en los principios de movile first y usando el framework "Nuxt" , tengamos en cuenta que este tipo de trabajos sencillos y sin mucha interactividad ,es preferible hacerlo con javaScript vanila sin embargo se opto por un enfoque de desarrollo ágil ,algo ideal para Vue.`,
            tags:['JS','CSS','HTML','RWD'],
            direccion:'https://agitated-chandrasekhar-58f7f4.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>