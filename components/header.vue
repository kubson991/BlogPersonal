<template lang="pug">
    header(v-bind:class="{'header--transparent':this.$route.path=='/'}")
        Darkmode.darkmode(v-if="this.$route.path!=='/'")
        section.header__IndexLogo(v-show="this.$route.path!=='/'")
            nuxt-link(:to="`/`")
        section.header__About-me(v-show="this.$route.path!=='/'")
            nuxt-link.a--i(:to="`/acercaDeMi`") Sobre mi    
        nav.header__icon-container
            a(href="https://www.instagram.com/sebastianpovedaflorez/?hl=es-la") 
                span(class="instagram")  
            a(href="https://www.linkedin.com/in/juan-sebastián-poveda-flórez-07b412212/") 
                span(class="link") 
            a(href="https://wa.link/1q8fsy") 
                span(class="wap") 
</template>
<script>
export default {
  name: 'headerB',
}
</script>
<style lang="scss" scoped>
@import '../css/header.scss';
@media (min-width: 1024px) {
  .header__icon-container {
    width: 35%;
  }
  .header__About-me a{
    font-size: 2rem;
  }
}
@media (min-width: 1440px) {
  .header__icon-container {
    width: 25%;
  }

}
</style>
