<template lang="pug">
div(:class='type')
  span(:class='type', @click='change(false)')
</template>
<script>
export default {
  data() {
    return {
      darkmode: '',
      selected: true,
      root: null,
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.root = document.documentElement.getElementsByTagName('body')
      this.darkmode = this.$store.state.darkMode
      this.change(true)
    })
  },
  methods: {
    change(firstTime) {
      if (!firstTime) {
        this.$store.commit('darkModeChange')
        this.darkmode=!this.darkmode
      }
      if (this.selected) {
        if (this.darkmode) {
          this.type = 'night'
          this.root[0].style.setProperty(
            '--color-claro',
            'var(--color-claroDM)'
          )
          this.root[0].style.setProperty(
            '--color-principal',
            'var(--color-principalDM)'
          )
          this.root[0].style.setProperty(
            '--color-variacion',
            'var( --color-variacionDM)'
          )
          this.root[0].style.setProperty(
            '--color-variacionTrasparente',
            'var(--color-variacionTrasparenteDM)'
          )
          this.root[0].style.setProperty('--color-gris', 'var(--color-grisDM)')
          this.root[0].style.setProperty('--color-grisOscuro', 'var(--color-grisOscuroDM)')
          this.root[0].style.setProperty(
            '--color-secundario',
            'var(--color-secundarioDM)'
          )
        } else {
          this.type = 'day'
          this.root[0].style.setProperty(
            '--color-claro',
            'var(--color-claroDMO)'
          )
          this.root[0].style.setProperty(
            '--color-principal',
            'var(--color-principalDMO)'
          )
          this.root[0].style.setProperty(
            '--color-variacion',
            'var( --color-variacionDMO)'
          )
          this.root[0].style.setProperty(
            '--color-variacionTrasparente',
            'var(--color-variacionTrasparenteDMO)'
          )
          this.root[0].style.setProperty('--color-gris', 'var(--color-grisDMO)')
          this.root[0].style.setProperty('--color-grisOscuro', 'var(--color-grisOscuroDMO)')
          this.root[0].style.setProperty(
            '--color-secundario',
            'var(--color-secundarioDMO)'
          )
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../css/darkmode.scss';
</style>
<style lang="scss">
.night {
  --color-claro: $color-claroDM;
  --color-principal: $color-principalDM;
  --color-variacion: $color-variacionDM;
  --color-variacionTrasparente: $color-variacionTrasparenteDM;
  --color-gris: $color-grisDM;
}
.DARKMODEOFF {
  --color-claro: white;
  --color-principal: black;
  --color-variacion: #47cfac;
  --color-variacionTrasparente: #47cfad88;
  --color-gris: #e6e9ed;
}
</style>
