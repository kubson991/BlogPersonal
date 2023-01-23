<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<template lang="pug">
    article( @mousemove="getCursorDirection" ref="article" :style="transformPosition")
        div.leftSide
        div.topSide
        div.bottomSide
        div.containerF(@mouseover="pageBorder=true" @mouseleave="pageBorder=false" @click="backFace=!backFace")  
            nuxt-img(:src="this.article.imagen" :alt="this.article.alt"  provider="cloudinary" format="webp"  width="250" )  
            h1 {{article.titulo}}
            p {{article.intro}}
            NuxtLink(:to="`/blog/${this.article.blog}`") Descubrir
        div.containerB(@mouseover="pageBorder=true" @mouseleave="pageBorder=false" @click="backFace=!backFace")
            div(class="pageBorder back" :class="{ show:pageBorder , hidden:!pageBorder }"  ) 
            div.tagsContainer
                tools(v-for="(tag, index) in article.tags" :key="index" :value="tag")
        div.rightSide
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
    if (window.DeviceMotionEvent) {
      if (this.window.width < 800) {
        window.addEventListener('deviceorientation', this.motion, false)
        this.deviceOrientationOn = true
      }
    } else {
      this.deviceOrientationOn = false
    }
  },
  mounted() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      // Handle iOS 13+ devices.
      DeviceMotionEvent.requestPermission()
        .then((state) => {
          if (state === 'granted') {
            window.addEventListener('deviceorientation', this.motion)
          } else {
            console.error('Request to access the orientation was rejected')
          }
        })
        .catch(console.error)
    } else {
      // Handle regular non iOS 13+ devices.
      window.addEventListener('deviceorientation', this.motion)
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('deviceorientation', this.motion)
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
      const halfY =
        element.getBoundingClientRect().top + element.offsetHeight / 2
      const halfX = element.offsetLeft + element.offsetWidth / 2
      let transformX
      let transformY
      if (e.y > halfY) {
        transformX =
          (100 -
            ((e.y - element.offsetTop + element.offsetHeight) /
              (halfY - element.offsetTop + element.offsetHeight)) *
              100) *
          0.35
      } else if (e.y < halfY) {
        transformX =
          ((e.y - halfY) / (element.offsetTop + element.offsetHeight - halfY)) *
          35 *
          -1
      }
      if (e.x < halfX) {
        transformY =
          ((e.x - halfX) / (element.offsetLeft + element.offsetWidth - halfX)) *
          22
      } else if (e.x > halfX) {
        transformY =
          (100 -
            ((e.x - element.offsetLeft) / (halfX - element.offsetLeft)) * 100) *
          0.22 *
          -1
      }
      this.transformY = transformY
      this.transformX = transformX
    },
    unlockMotion() {
      this.stopMotion = false
    },
    motion(event) {
      this.transformX = (event.beta - 90) * -1
      if (event.alpha < 181 && event.alpha > -181) {
        this.transformY = event.alpha
      }
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
