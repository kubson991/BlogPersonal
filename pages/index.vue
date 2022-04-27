<template lang="pug">
main.pantalla
  div
    nuxt-link.main__boton-index(:to='`/blogs`') Entra ya
</template>
<script>
export default {
	layout: 'basic',
	name: 'index',
	data() {
		return {}
	},
}
</script>
<style lang="scss" scoped>
@import '../css/index.scss';
</style>
