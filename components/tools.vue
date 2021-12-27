<template lang="pug">
    div.contenedor
        div.punta(:style="{ 'border-right-color' : background }")
        div.cuadro(:style="{ 'background-color' : background , 'color':color}") {{value}}
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            color:'',
            background:''
        }
    },
    mounted(){
        switch (this.value) {
            case 'JS':
                this.background="#f7df1e"
                this.color = "black"
                break;
            case 'Vue':
                this.background="#4dba87"
                this.color = "#435466"
                break;
            case 'Nuxt':
                this.background="#00dc82"
                this.color = "white"
                break;
            case 'CSS':
                this.background="#2196f3"
                this.color = "white"
                break;
            case 'HTML':
                this.background="#ff5722"
                this.color = "white"
                break;
            case 'RWD':
                this.background="#ee2b7b"
                this.color = "white"
                break;
            case 'PWA':
                this.background="#625db1"
                this.color = "white"
                break;
            case 'Jest':
                this.background="#994350"
                this.color = "white"
                break;
            case 'Node':
                this.background="#333333"
                this.color = "#7eaf1f"
                break;
            case 'Taildwind':
                this.background="#01b7d6"
                this.color = "white"
                break;
            case 'React':
                this.background="#7ddfff"
                this.color = "white"
                break;
            case 'Storage':
                this.background="#3d4548"
                this.color = "white"
                break;
            default:
                break;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/css/tools';
</style>