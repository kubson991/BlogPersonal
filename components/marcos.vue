<template lang="pug">
div.M1
    div.M2
        div.M3
            div.M4
                download.download(v-if="!condition" :radius="'100px'")
                nuxt-img(v-show="condition", :src="this.certificacion" ,alt="certificado" ,provider="cloudinary" ,format="webp" , loading="lazy" , :class="{imgHide: !loaded }", @load.native="doSomethingOnLoad" , sizes="xs:300px sm:560px md:420px lg:370px xxl:570px" ) 
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
            loaded:true,
            condition:false
        }
    }, 
    methods:{
        doSomethingOnLoad:function(){
            this.condition = true
        }
    },
    mounted(){
        this.condition = true
    }
}
</script>
<style lang="scss" scoped>
    @import "../css/marco.scss";
</style>