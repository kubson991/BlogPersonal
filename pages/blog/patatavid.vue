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
    name:'patatavid', 
    data(){
        return{
            img:'v1636343788/blogPersonal/blogs/imagen_2021-11-07_225625_jtzqzl.png', //usando cloudinary
            h1:'Patatavid',
            pre:`La presente maquetación es hecha con el paradigma de “movile first” siguiendo un diseño planteado en figma para la base movile y de libre elección para el resto de tamaños.

Lo que caracteriza a esta maquetación ,es el hecho de que fue hecho sin librerías o frameworks ,solo con CSS y HTML puro destacando también el uso de JavaScript para la interactividad entre el cambio de tablas presente al presionar los iconos de flechas y tambien el uso la etiqueta <table> que ha sido ampliamente descartada por el uso de CSS grid sin tener en cuenta que en ocasiones particulares el uso de table puede evitar el uso de css sin necesidad .
`,
            tags:['JS','CSS','HTML','RWD'],
            direccion:'https://patatavidmaquetacion.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>