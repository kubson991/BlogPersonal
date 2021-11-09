<template lang="pug">
    div
        headerB
        main_blog(:img="img" :h1="h1" :pre="pre" :tags="tags" :direccion="direccion")
        section.main__correo
            img(src="../../assets/img/mail.png", alt="mail")
            div
                a(href="mailto:poveda1999@gmail.com") contáctame
                p poveda1999@gmail.com 
        footerB
</template>
<script>
import headerB from '@/components/header.vue'
import footerB from '@/components/footer.vue'
import main_blog from '@/components/blog.vue'
export default {
    components:{headerB,footerB,main_blog},
    name:'blog', 
    data(){
        return{
            img:'v1635112679/blogPersonal/indexpage_vbluxj.png', //usando cloudinary
            h1:'Portafolio',
            pre:`Ha pasado gran tiempo desde que empezó esta aventura del “Frontend “, al principio, solo quería saber que era usar una hoja de estilos e interpretar el HTML, desde entonces no he hecho mas que crecer como desarrollador, por supuesto que aun me falta un largo camino y ni hablar de mi siguiente reto que es ser un desarrollador “FullStack “.

Este blog es la recopilación de todo lo que he aprendido a lo largo de mi trayectoria académica y profesional, para mí esto no es un simple proyecto más , esta es la evidencia de lo que he logrado, es un antes y un después de lo que soy capaz pero no nos pongamos sentimentales, entremos en materia.

Al día de hoy muchos desarrolladores discuten cuando usar display flex y cuando display grid, la realidad es que la combinación de ambos puede ser siempre la mejor respuesta, este blog presenta un patrón que enfatiza en uso de Flex para su maquetación y Grid para sus componentes más pequeños teniendo así lo mejor de ambos mundos y por supuesto no olvidemos el uso de VueJS con Nuxt que hace posible el enrutamiento y división por módulos del proyecto.
`,
        tags:['Vue','Nuxt','CSS','HTML','JS','Responsive','PWA','Jest',"Node"],
        direccion:'https://portafoliodesebastianpoveda.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>