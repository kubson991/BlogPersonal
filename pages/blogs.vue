<template lang="pug">
    main.pantalla
        div
            section.main__principal
                nuxt-img(src="v1635112679/blogPersonal/indexpage_vbluxj.png", alt="blog" , provider="cloudinary" sizes="md:615px xl:625px" , format="webp" width="160" height="94")
                article.principal__articulo
                    h1 Creacion de un blog profesional con el uso de dipslay Grid y Display Flex
                    p Al día de hoy muchos desarrolladores discuten cuando usar display flex y cuando display grid, la realidad es que la combinación de ambos puede ser siempre la mejor respuesta, este blog presenta un patrón que enfatiza en uso de Flex para su maquetación y Grid para sus componentes más pequeños teniendo así lo mejor de ambos mundos y por supuesto no olvidemos el uso de VueJS con Nuxt que hace posible el enrutamiento y división por módulos del proyecto.
                    nuxt-link.boton-articulos(:to="`/blog/MiBlog`") Leer mas
            section.main__blogs
                h2 Mis proyectos
                div
                    Articles(v-for="article in articleByPagination" :article="article" :key="article.h1")
</template>
<script>
export default {
  layout: 'blogs',
  name: 'blogs',
  data() {
    return {
      articles: [],
      pagination:1
    }
  },
  mounted() {
    const scrollContainer = document.getElementsByTagName('body')[0]
    scrollContainer.addEventListener('scroll',this.paginatorController,{passive:true})
    this.articles = this.$store.state.posts
  },
  methods:{
    paginateArray(array, itemsPerPage,pagination) {
    const endIndex = itemsPerPage*pagination;
    return array.slice(0, endIndex);
},
  paginatorController(e){
    const scrollContainer=e.target
    const scrollHeight  = scrollContainer.scrollHeight ;
    const containerHeight = scrollContainer.clientHeight;
    const scrollTop = scrollContainer.scrollTop;

    if (scrollTop + containerHeight >= scrollHeight - 50) {
      this.pagination++
    }
  }
  },
  computed:{
    articleByPagination(){
      const pages = window.innerWidth>1600 ? 4 : 6
      return this.paginateArray(this.articles,pages,this.pagination)
    }
  },
  beforeUnmount() {
    const scrollContainer = document.getElementsByTagName('body')[0]
    scrollContainer.removeEventListener(this.paginatorController)
  },
}
</script>
<style lang="scss" scoped>
@import '../css/blogs.scss';
@media (min-width: 1024px) {
  .main__principal {
    justify-content: space-evenly;
    img {
      width: 45%;
    }
    article {
      width: 45%;
    }
  }
  .main__blogs {
    div {
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    }
  }
}
</style>
