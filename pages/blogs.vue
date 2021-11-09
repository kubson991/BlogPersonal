<template lang="pug">
    section.pantalla
        headerB
        main
            section.main__principal
                nuxt-img(src="v1635112679/blogPersonal/indexpage_vbluxj.png", alt="blog" , provider="cloudinary" sizes="md:615px xl:625px" , format="webp")
                article.principal__articulo
                    h1 Creacion de un blog profesional con el uso de dipslay Grid y Display Flex
                    p Al día de hoy muchos desarrolladores discuten cuando usar display flex y cuando display grid, la realidad es que la combinación de ambos puede ser siempre la mejor respuesta, este blog presenta un patrón que enfatiza en uso de Flex para su maquetación y Grid para sus componentes más pequeños teniendo así lo mejor de ambos mundos y por supuesto no olvidemos el uso de VueJS con Nuxt que hace posible el enrutamiento y división por módulos del proyecto.
                    nuxt-link.boton-articulos(:to="`/blog/MiBlog`") Leer mas
            section.main__blogs
                h2 Mis proyectos
                div  
                    articles(v-for="article in articles" :article="article" :key="article.h1")     
        footerB
</template>
<script>
import headerB from '../components/header.vue'
import footerB from '../components/footer.vue'
import articles from '../components/articles.vue'
export default {
    components:{headerB,footerB,articles},
    name:'blogs',
    data(){
        return{
            articles:[
                {        
                    imagen:'v1636343788/blogPersonal/blogs/imagen_2021-11-07_225625_jtzqzl.png',
                    alt:'patatavid',
                    h1:'Maquetacion de patatavid',
                    p:'Maquetacion totalmente responsive de la pagina "PatataVid" a base unicamente de HTML CSS y JS vanila , respetando principios de diseno movile first y siguiendo modelado en figma.',
                    to:'/blog/patatavid'
                },
                {
                    imagen:'v1636482727/blogPersonal/blogs/imagen_2021-11-09_133204_d0xcuo.png',
                    alt:'Rick and Morty App',
                    h1:'Rick and Morty App',
                    p:'Y con ustedes una app que muestra todos los personajes de la popular serie Rick y Morty mediante la consulta a una API rest y el uso de Nuxt prar mostrar targetas con la informacion de que cada personaje.',
                    to:'/blog/RickyAndMorty'                    
                },
                {
                    imagen:'v1636485380/blogPersonal/blogs/imagen_2021-11-09_141617_nyrzig.png',
                    alt:'Lego',
                    h1:'Sitio Web de lego',
                    p:'Creacion de sitio web acerca de heroes de DC en lego ,hecho en su totalidad con animaciones sin ayuda de bibliotecas ,con solo HTML y JS vanila (es un sitio de muestra sin enrutador).',
                    to:'/blog/LegoBlog'                     
                },
                {
                    imagen:'v1636484864/blogPersonal/blogs/imagen_2021-11-09_140743_tqnbuz.png',
                    alt:'platzi exchange',
                    h1:'creacion y despliegue de pagina acerca de criptomonedas',
                    p:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis aliquam quaerat facere est minima voluptatem officia, tenetur sint aspernatur sequi tempora saepe similique. Inventore vitae quibusdam reiciendis illo',
                    to:'/blog/platziExchange'                     
                },
            ]
        }
    },
}

</script>
<style lang="scss" scoped>
    @import "../css/blogs.scss";
        @media (min-width: 1024px) {
            .main__principal{
                justify-content: space-evenly;
               img{
                    width: 45%;
               }
                article{
                    width: 45%;
                }   
            }   
            .main__blogs{
                div{
                    grid-template-columns:repeat(auto-fit,minmax(450px,1fr));    
                }
            }
        }
</style>

 