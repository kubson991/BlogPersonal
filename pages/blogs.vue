<template lang="pug">
    main.pantalla
        div
            section.main__principal(v-if="mainArticle.post")
                nuxt-img(:src="mainArticle.imagen", alt="blog" , provider="cloudinary" sizes="md:615px xl:625px" , format="webp" width="160" height="94")
                article.principal__articulo
                    h1 {{mainArticle.titulo}}
                    p {{mainArticle.post}}
                    nuxt-link.boton-articulos(:to="`/blog/${mainArticle.blog}`") Leer mas
            section.main__blogs
                header
                  h2 Mis proyectos
                div.articlesContainers
                    Articles(v-for="article in articleByPagination" :article="article" :key="article.h1")
</template>
<script>
export default {
  layout: 'blogs',
  name: 'blogs',
  data() {
    return {
      articles: [],
      pagination:1,
      mainArticle:{}

    }
  },
  created() {
    const scrollContainer = document.getElementsByTagName('body')[0]
    scrollContainer.addEventListener('scroll',this.paginatorController,{passive:true})
    this.articles = this.$store.state.posts
    this.getRandomElement()
    setInterval(this.getRandomElement, 15000);
  },
  methods:{
    paginateArray(array, itemsPerPage,pagination) {
    const endIndex = itemsPerPage*pagination;
    return array.slice(0, endIndex);
},
 getRandomElement() {
  const randomSpot = Math.floor(Math.random() * this.articles.length);
  const selectArticle = this.articles[randomSpot];
  this.mainArticle=selectArticle
},
  paginatorController(e){
    const scrollContainer=e.target
    const scrollHeight  = scrollContainer.scrollHeight ;
    const containerHeight = scrollContainer.clientHeight;
    const scrollTop = scrollContainer.scrollTop;

    if (scrollTop + containerHeight >= scrollHeight - 130) {
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
