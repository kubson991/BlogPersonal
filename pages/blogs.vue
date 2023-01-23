<template lang="pug">
    main.pantalla
        div
            section.main__principal
                nuxt-img(src="v1635112679/blogPersonal/indexpage_vbluxj.png", alt="blog" , provider="cloudinary" sizes="md:615px xl:625px" , format="webp")
                article.principal__articulo
                    h1 Creacion de un blog profesional con el uso de dipslay Grid y Display Flex
                    p Al día de hoy muchos desarrolladores discuten cuando usar display flex y cuando display grid, la realidad es que la combinación de ambos puede ser siempre la mejor respuesta, este blog presenta un patrón que enfatiza en uso de Flex para su maquetación y Grid para sus componentes más pequeños teniendo así lo mejor de ambos mundos y por supuesto no olvidemos el uso de VueJS con Nuxt que hace posible el enrutamiento y división por módulos del proyecto.
                    nuxt-link.boton-articulos(:to="`/blog/MiBlog`") Leer mas
            section.main__blogs
                h2 Mis proyectos
                div
                    Articles(v-for="article in articles" :article="article" :key="article.h1")
</template>
<script>
export default {
  layout: 'blogs',
  name: 'blogs',
  data() {
    return {
      articles: [],
    }
  },
  mounted() {
    this.articles = this.$store.state.posts
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
