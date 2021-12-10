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
    name:'CounterTwitch', 
    data(){
        return{
            img:'v1639152768/blogPersonal/blogs/imagen_2021-12-10_111245_zyvzur.png', //usando cloudinary
            h1:'Contador regresivo para Twitch',
            pre:`Contador de tiempo de dias a segundos ,con enfoque para streamers ,actualmente esta adaptado para que sea un contador hasta que acabe mi licencia de platzi.`,
            tags:['JS','CSS','HTML'],
            direccion:'https://peaceful-bhabha-8e6ee3.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>