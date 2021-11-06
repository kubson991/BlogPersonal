<template lang="pug">
div.M1
    div.M2
        div.M3
            div.M4
                download.download(v-if="!loaded" :radius="'100px'")
                <nuxt-img :src="certificacion" alt="certificado"  provider="cloudinary" format="webp" loading="lazy" :class="{ imgHide: !loaded }" @load.native="doSomethingOnLoad"/>    
</template>
<script>
import download from '@/components/downloadsMasks/circleDownload.vue'
export default {
    components:{download},
    name:'marco',
    props:{
        certificacion:''
    },  
    data(){
        return{
            loaded:false
        }
    }, 
    methods:{
        doSomethingOnLoad:function(){
            this.loaded=true
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../css/marco.scss";
</style>