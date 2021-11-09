<template lang="pug">
    div
        headerB
        main_blog(:img="img" :h1="h1" :pre="pre" :tags="tags" :direccion="direccion")
        section.main__correo
            img(src="../../assets/img/mail.png", alt="mail")
            div
                a(href="mailto:poveda1999@gmail.com") contactame
                p poveda1999@gmail.com 
        footerB
</template>
<script>
import headerB from '@/components/header.vue'
import footerB from '@/components/footer.vue'
import main_blog from '@/components/blog.vue'
export default {
    components:{headerB,footerB,main_blog},
    name:'RickAndMorty', 
    data(){
        return{
            img:'v1636482727/blogPersonal/blogs/imagen_2021-11-09_133204_d0xcuo.png', //usando cloudinary
            h1:'Rick and Morty App',
            pre:`exercitationem tempore voluptas rerum officiis! Provident quidem voluptas aspernatur ex? Obcaecati libero vitae ipsa, rerum fugit incidunt rem accusantium officiis maiores soluta molestiae sapiente atque aspernatur nesciunt veniam doloremque optio beatae ut ad iusto itaque culpa tempore aliquam laborum. Odit. Quae dolor a, modi repellat temporibus dolorum sed nemo molestias voluptas vel possimus, culpa architecto voluptatibus eius aliquid nesciunt officiis quaerat rerum blanditiis dolore corrupti numquam! Et nostrum quam molestiae! Corrupti, cum maiores natus quasi nobis, officiis quas, aliquam aut odit possimus obcaecati libero ipsum incidunt. Maxime consequuntur reiciendis accusantium distinctio blanditiis, maiores debitis rerum quo et cumque dolorem nam? Dolores ipsum iure sint maiores. Veniam fugiat recusandae qui. In eum error sunt accusamus nesciunt ut blanditiis odio tempora reiciendis nemo. Minus eligendi debitis magnam, delectus ad molestiae accusantium eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
            tags:['JS','CSS','HTML','RWD','Vue','Nuxt'],
            direccion:'https://rickymorty-nuxt.netlify.app'
        }
    }   
}
</script>
<style lang="scss" scoped>
    @import "@/css/correo.scss";    
</style>