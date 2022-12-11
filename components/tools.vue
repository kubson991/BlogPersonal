<template lang="pug">
    div.contenedor(@click="redirect")
        div.punta(:style="{ 'border-right-color' : background }")
        div.cuadro(:style="{ 'background-color' : background , 'color':color}") {{value}}
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      color: '',
      background: '',
    }
  },
  mounted() {
    switch (this.value) {
      case 'JS':
        this.background = '#f7df1e'
        this.color = 'black'
        this.url="https://es.wikipedia.org/wiki/JavaScript"
        break
      case 'Vue':
        this.background = '#4dba87'
        this.color = '#435466'
        this.url='https://es.wikipedia.org/wiki/Vue.js'
        break
      case 'Nuxt':
        this.background = '#00dc82'
        this.color = 'white'
        this.url='https://en.wikipedia.org/wiki/Nuxt.js'
        break
      case 'CSS':
        this.background = '#2196f3'
        this.color = 'white'
        this.url='https://es.wikipedia.org/wiki/CSS'
        break
      case 'HTML':
        this.background = '#ff5722'
        this.color = 'white'
        this.url='https://es.wikipedia.org/wiki/HTML'
        break
      case 'RWD':
        this.background = '#ee2b7b'
        this.color = 'white'
        this.url='https://es.wikipedia.org/wiki/Diseño_web_adaptable'
        break
      case 'PWA':
        this.background = '#625db1'
        this.color = 'white'
        this.url='https://es.wikipedia.org/wiki/Aplicación_web_progresiva'
        break
      case 'Jest':
        this.background = '#994350'
        this.color = 'white'
        this.url='https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)'
        break
      case 'Node':
        this.background = '#333333'
        this.color = '#7eaf1f'
        this.url='https://es.wikipedia.org/wiki/Node.js'
        break
      case 'Taildwind':
        this.background = '#01b7d6'
        this.color = 'white'
        this.url='https://es.wikipedia.org/wiki/Tailwind_CSS'
        break
      case 'React':
        this.background = '#7ddfff'
        this.color = 'white'
        this.url='https://es.wikipedia.org/wiki/React'
        break
      case 'Storage':
        this.background = '#3d4548'
        this.color = 'white'
        this.url='https://en.wikipedia.org/wiki/Web_storage#Local_and_session_storage'
        break
      case 'Vite':
        this.background = '#b546fe'
        this.color = '#ffc522'
        this.url='https://vitejs.dev'
        break
      case 'Redux':
        this.background = '#764abc'
        this.color = 'white'
        this.url='https://es.wikipedia.org/wiki/Redux_(JavaScript)'
        break
      case 'Ps':
        this.background = '#001e36'
        this.color = '#2e9de8'
        this.url='https://es.wikipedia.org/wiki/Adobe_Photoshop'
        break
      case 'Angular':
        this.background = '#dc0030'
        this.color = '#ffffff'
        this.url='https://es.wikipedia.org/wiki/Angular_(framework)'
        break
      default:
        break
    }
  },
  methods:{
    redirect(){
     window.open(this.url)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/css/tools';
</style>
