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
                    p:'Y con ustedes una app que muestra todos los personajes de la popular serie Rick y Morty mediante la consulta a una API rest y el uso de Nuxt para mostrar tarjetas con la informacion de que cada personaje.',
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
                    p:'aplicacion web que permite ver graficamente el cambio de las criptomonedas mas populares y calcular sus divisas,sin embargo la api rest cambio sus permisos de CORS volviendola una aplicacion inestable (hecha con Vue CLI).',
                    to:'/blog/platziExchange'                     
                },
                {
                    imagen:'v1637178397/blogPersonal/blogs/imagen_2021-11-17_144635_yokxze.png',
                    alt:' Nike component',
                    h1:'Componente para Nike hecho con "Web Components"',
                    p:'Creacion de un componente web con javaScript vanila , HTML y CSS con tematica de zapatos Nike ,siendo este componente totalmente reutilizable y compatible con cualquier framework.',
                    to:'/blog/NikeComponent'                     
                },
                {
                    imagen:'v1637555688/blogPersonal/blogs/imagen_2021-11-21_233446_ihgq5b.png',
                    alt:'business component',
                    h1:'Card promocional para business analytics.',
                    p:'Card creada para promocionar un servicio de data analytics realizado en base a los requerimientos del cliente , enfatizando en que fuera hecho para pantallas de 320px y 1440px.',
                    to:'/blog/BusinessCard'                     
                },
                {
                    imagen:'v1637557146/blogPersonal/blogs/imagen_2021-11-21_235903_k4xykm.png',
                    alt:'Clon de wikipedia',
                    h1:'Clon de wikipedia',
                    p:'Maquetacion del sitio web de Wikipedia realizado unicamente con HTML y CSS , aclarando que no es una pagina responsive ,unicamente para computadores.',
                    to:'/blog/wikipediaClon'                     
                },
                {
                    imagen:'v1637901017/blogPersonal/blogs/imagen_2021-11-25_233013_b26cqt.png',
                    alt:'Organizador de tiempo',
                    h1:'Organizador de tiempo',
                    p:'App web totalmente responsive que obtiene datos para tener registro de las horas que se dedican a distintas actividades, usando web components.',
                    to:'/blog/calendarCSS'                     
                },
                {
                    imagen:'v1638908718/blogPersonal/blogs/imagen_2021-12-07_152512_dsepav.png',
                    alt:'Calculadora de propinas',
                    h1:'Tip Calculator',
                    p:'Calculadora 100% responsive y reactiva para calcular y dividir propinas en dolares,programada con Nuxt y el paradigma de movile first.',
                    to:'/blog/TipCalculator'                     
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

 