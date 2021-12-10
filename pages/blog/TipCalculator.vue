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
    name:'TipCalculator', 
    data(){
        return{
            img:'v1638908718/blogPersonal/blogs/imagen_2021-12-07_152512_dsepav.png', //usando cloudinary
            h1:'Calculadora de propinas',
            pre:`Calculadora 100% responsive y reactiva para calcular y dividir propinas en dolares,programada con Nuxt y el paradigma de movile first.`,
            tags:['JS','CSS','HTML','RWD','Vue','Nuxt','Node'],
            direccion:'https://cranky-franklin-3d9601.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>