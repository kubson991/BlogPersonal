<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<template lang="pug">
article(
  @mousemove.passive='getCursorDirection',
  @mouseleave.passive='resetCoordenates',
  ref='article',
  :style='transformPosition'
)
  .leftSide
  .topSide
  .bottomSide
  .containerF(
    @mouseover='pageBorder = true',
    @mouseleave='pageBorder = false',
    @click='backFace = !backFace'
  ) 
    |
    nuxt-img(
      :src='this.article.imagen',
      :alt='this.article.alt',
      provider='cloudinary',
      format='webp',
      width='250',
      loading='lazy'
    ) 
    h1 {{ article.titulo }}
    p {{ article.intro }}
    NuxtLink(:to='`/blog/${this.article.blog}`') Descubrir
  .containerB(
    @mouseover='pageBorder = true',
    @mouseleave='pageBorder = false',
    @click='backFace = !backFace'
  )
    .pageBorder(:class='{ show: pageBorder, hidden: !pageBorder }') 
    .tagsContainer
      tools(v-for='(tag, index) in article.tags', :key='index', :value='tag')
  .rightSide
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
      deviceOrientationOn: false,
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  props: {
    article: Object,
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.window.width = window.innerWidth
    this.window.height = window.innerHeight
  },
  mounted() {},
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    getCursorDirection(e) {
      if (this.window.width < 800) {
        return ''
      }
      if (this.stopMotion) {
        return ''
      }
      const element = this.$refs.article
      if (!element) {
        return ''
      }
      const rect = element.getBoundingClientRect()
      const mousePosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top < 0 ? 0 : e.clientY - rect.top,
      }
      const halfY = element.offsetHeight / 2
      const halfX = element.offsetWidth / 2
      const maxDegToleranceX = 18
      const maxDegToleranceY = 18
      let transformX
      let transformY
  if (mousePosition.y > halfY) {
    transformX = ((mousePosition.y - halfY) / halfY) * maxDegToleranceX * -1;
  } else if (mousePosition.y < halfY) {
    transformX = ((halfY - mousePosition.y) / halfY) * maxDegToleranceX ;
  }
  if (mousePosition.x < halfX) {
    transformY = ((halfX - mousePosition.x) / halfX) * maxDegToleranceY * -1;
  } else if (mousePosition.x > halfX) {
    transformY = ((mousePosition.x - halfX) / halfX) * maxDegToleranceY;
  }
      this.transformY = transformY
      this.transformX = transformX
    },
    resetCoordenates() {
      this.transformY = 0
      this.transformX = 0
    },
    unlockMotion() {
      this.stopMotion = false
    },
    motion(event) {
      this.transformX = (event.beta - 90) * -1
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
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.turnOround = false
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.stopMotion = true
        // eslint-disable-next-line vue/no-async-in-computed-properties
        setTimeout(this.unlockMotion, 1800)
        return {
          transition: 'all 2s ease',
          transform: `rotateX(${this.transformX}deg) rotateY(${
            this.transformY + 180
          }deg)`,
        }
      } else if (!this.backFace && this.turnOround) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.turnOround = false
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.stopMotion = true
        // eslint-disable-next-line vue/no-async-in-computed-properties
        setTimeout(this.unlockMotion, 1800)
        return {
          transition: 'all 2s ease',
          transform: `rotateX(${this.transformX}deg) rotateY(${this.transformY}deg)`,
        }
      } else if (this.backFace) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
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
