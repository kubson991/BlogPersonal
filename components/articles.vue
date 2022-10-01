<template lang="pug">
    article( @mousemove="getCursorDirection" ref="article" :style="transformPosition")
        div.containerF(@mouseover="pageBorder=true" @mouseleave="pageBorder=false")  
            div(class="pageBorder" :class="{ show:pageBorder ,hidden:!pageBorder }"  @click="backFace=!backFace")    
            nuxt-img(:src="this.article.imagen" :alt="this.article.alt"  provider="cloudinary" format="webp"  width="250" )  
            h1 {{article.titulo}}
            p {{article.intro}}
            NuxtLink(:to="`/blog/${this.article.blog}`") Descubrir
        div.containerB(@mouseover="pageBorder=true" @mouseleave="pageBorder=false")
            div(class="pageBorder back" :class="{ show:pageBorder , hidden:!pageBorder }" @click="backFace=!backFace" ) 
            div.tagsContainer
                tools(v-for="(tag, index) in article.tags" :key="index" :value="tag")
</template>
<script>
export default {
  name: 'articles',
  data() {
    return {
      pageBorder: false,
      backFace: false,
      transform: {},
      transformX: 0,
      transformY: 0,
      turnOround: false,
      stopMotion: false,
    }
  },
  props: {
    article: Object,
  },
  methods: {
    getCursorDirection(e) {
      if (this.stopMotion) {
        return ''
      }
      const element = this.$refs.article
      if (!element) {
        return ''
      }
      const halfY =
        element.getBoundingClientRect().top + element.offsetHeight / 2
      const halfX = element.offsetLeft + element.offsetWidth / 2
      let transformX
      let transformY

      if (e.y > halfY) {
        transformX =
          ((e.y - halfY) /
            (element.offsetHeight +
              element.getBoundingClientRect().top -
              halfY)) *
          12
      } else if (e.y < halfY) {
        transformX =
          ((e.y - halfY) /
            (element.getBoundingClientRect().top +
              element.offsetHeight -
              halfY)) *
          12
      }
      if (e.x < halfX) {
        transformY =
          ((e.x - halfX) / (element.offsetLeft + element.offsetWidth - halfX)) *
          12
      } else if (e.x > halfX) {
        transformY =
          (100 -
            ((e.x - element.offsetLeft) / (halfX - element.offsetLeft)) * 100) *
          0.12 *
          -1
      }
      this.transformY = transformY
      this.transformX = transformX
    },
    unlockMotion() {
      this.stopMotion = false
    },
  },
  watch: {
    backFace() {
      this.turnOround = true
    },
  },
  computed: {
    transformPosition() {
      if (this.backFace && this.turnOround) {
        this.turnOround = false
        this.stopMotion = true
        setTimeout(this.unlockMotion, 1800)
        return {
          transition: 'all 2s ease',
          transform: `rotateX(${this.transformX}deg) rotateY(${
            this.transformY + 180
          }deg)`,
        }
      } else if (!this.backFace && this.turnOround) {
        this.turnOround = false
        this.stopMotion = true
        setTimeout(this.unlockMotion, 1800)
        return {
          transition: 'all 2s ease',
          transform: `rotateX(${this.transformX}deg) rotateY(${this.transformY}deg)`,
        }
      } else if (this.backFace) {
        this.turnOround = false
        return {
          transform: `rotateX(${this.transformX}deg) rotateY(${
            this.transformY + 180
          }deg)`,
        }
      } else {
        return {
          transform: `rotateX(${this.transformX}deg) rotateY(${this.transformY}deg)`,
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../css/article.scss';
@media (min-width: 1028px) {
  article {
    height: 500px;
  }
}
</style>
