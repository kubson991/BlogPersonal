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
            img:'v1639151834/blogPersonal/blogs/imagen_2021-12-10_105713_ccu5na.png', //usando cloudinary
            h1:'Contador empresarial',
            pre:`Contador de tiempo de dias a segundos ,con enfoque empresarial ,actualmente esta adaptado para que sea un contador hasta el proximo diciembre (100% responsive)`,
            tags:['JS','CSS','HTML','RWD','Vue','Nuxt','Node'],
            direccion:'https://frosty-volhard-027249.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>