<template lang="pug">
main
  div
    section.main__perfil
      div.linkBatch
        div(v-show="darkTheme" class="badge-base LI-profile-badge big" data-locale="es_ES" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="juan-sebastian-poveda-florez" data-version="v1")
          a(class="badge-base__link LI-simple-link" href="https://co.linkedin.com/in/juan-sebastian-poveda-florez?trk=profile-badge")
        div(v-show="!darkTheme" class="badge-base LI-profile-badge bigL" data-locale="es_ES" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="juan-sebastian-poveda-florez" data-version="v1")
          a(class="badge-base__link LI-simple-link" href="https://co.linkedin.com/in/juan-sebastian-poveda-florez?trk=profile-badge")
           
      article
        h1 ¿Quién soy?
        p Ingeniero de sistemas egresado de la Universidad Autónoma de Bucaramanga con nivel intermedio de inglés y buenas aptitudes en el trabajo colaborativo.
        p Soy una persona responsable, puntual, autodidacta, creativa y con muy buena disposición para cualquier tarea que se me asigne.
        p Me interesa principalmente trabajar en proyectos nuevos y con un enfoque social, en el área de desarrollo web principalmente como Frontend developer.
        p Fuy desarrollador Front-End para Carvajal tecnología y servicios en el area de innovacion para el software de compra venta de facturas "Liquidez ya" .
        p Tambien desarrolle para el software de precompra y reservacion de mesas llamado "Precompro.com como lider de desarrollo Frontend
        p Actualmente Soy desarrollador Frontend para Etnia Barcelona encargado de codificar en un entorno MVC Tanto en Vue como en Nuxt" 
                  
    h2 Mis certificaciones
    .filter
      span(@click='changeFilterState') {{firstFilterWord}}
      input(v-model='filtro', :class='filterState')
      span( @click='changeFilterState') {{secondFilterWord}}
    section.main__certificaciones
      nuxt-img.astronauta(
        v-if='filteredCertifications().length < 1',
        src='v1650514117/blogPersonal/astronautasCharlando.png',
        alt='not found any',
        provider='cloudinary',
        format='webp'
      )
      Marcos(
        v-for='certificado in resultados',
        :certificacion='certificado',
        :key='certificado'
      )
</template>
<script>
export default {
  layout: 'blogs',
  head() {
    return {
      script: [
        {
          src: 'https://platform.linkedin.com/badges/js/profile.js',
          async: true,
          defer: true,
          type: 'text/javascript',
        },
      ],
    }
  },
  data() {
    return {
      firstFilterWord: 'si deseas buscar algo ',
      secondFilterWord: 'más especifico clickeame :)',
      filterClose: true,
      filtro: '',
      certificaciones: [
        'v1700925686/blogPersonal/certificados/Microfrontends-with-React_peo1iq.jpg',
        'v1669139010/blogPersonal/certificados/diploma-angular-componentes-y-servicios.png',
        'v1664854039/blogPersonal/certificados/Electron-from-scratch:build-desktop-apps-with-javascript.png',
        'v1663201418/blogPersonal/certificados/Adobe-Photoshop-CC:Curso-Completo-de-Principiante-a-Experto.png',
        'v1662407476/blogPersonal/certificados/React:De-cero-a-experto(Hooks-y-MERN).png',
        'v1655389238/blogPersonal/certificados/the-complete-node.js-developer-course-3rd-edition.png',
        'v1655391451/blogPersonal/certificados/principios-solid-clean-code-escribe-codigo-de-calidad_bmtnjo.png',
        'v1651163019/blogPersonal/certificados/learn-visual-studio-code-(2020).png',
        'v1649717543/blogPersonal/certificados/diploma-expresiones-regulares_c3noiv.png',
        'v1648219213/blogPersonal/certificados/diploma-reactividad-vuejs-1_xjs1td.png',
        'v1644459324/blogPersonal/certificados/diploma-mongodb-1_ixlszn.png',
        'v1643597907/blogPersonal/certificados/diploma-react-estado-1_omhq0i.png',
        'v1641869279/blogPersonal/certificados/diploma-fundamentos-node_1_-1_te8bcl.png',
        'v1640902433/blogPersonal/certificados/diploma-react-patrones-render-1_ylim7s.png',
        'v1640206555/blogPersonal/certificados/diploma-introduccion-backend-1_ta4hok.png',
        'v1640063283/blogPersonal/certificados/diploma-react-1_nxogjj.png',
        'v1639538340/blogPersonal/certificados/diploma-estructuras-datos-1_qqo2nr.png',
        'v1638908083/blogPersonal/certificados/diploma-bd-1_ipi6tb.png',
        'v1637262256/blogPersonal/certificados/imagen_2021-11-18_140414_qao4fn.png',
        'v1637170091/blogPersonal/certificados/diploma-web-components-javascript-1_f3xfz1.png',
        'v1636150644/blogPersonal/certificados/diploma-dom-1_q7swzc.png',
        'v1635127929/blogPersonal/certificados/diploma-webpack-1_pav10z.png',
        'v1635127927/blogPersonal/certificados/diploma-vuejs2-1_foprbh.png',
        'v1635127925/blogPersonal/certificados/diploma-transformaciones-transiciones-css-1_hbgpyd.png',
        'v1635127923/blogPersonal/certificados/diploma-terminal-1_mlmgot.png',
        'v1635127921/blogPersonal/certificados/diploma-scope-1_oo85im.png',
        'v1635127919/blogPersonal/certificados/diploma-programacion-basica-1_jlyb9j.png',
        'v1635127917/blogPersonal/certificados/diploma-prework-windows-1_muxiqc.png',
        'v1635127915/blogPersonal/certificados/diploma-preprocesadores-1_okiqx6.png',
        'v1635127913/blogPersonal/certificados/diploma-practico-css-1_sup7bz.png',
        'v1635127909/blogPersonal/certificados/diploma-npm-1_re9lv1.png',
        'v1635127906/blogPersonal/certificados/diploma-mobile-first-1_ipm8l0.png',
        'v1635127902/blogPersonal/certificados/diploma-js-jest-2019-1_sxo9uk.png',
        'v1635127898/blogPersonal/certificados/diploma-javascript-profesional-1_htk2vo.png',
        'v1635127894/blogPersonal/certificados/diploma-javascript-practico-1_jekp0o.png',
        'v1635127891/blogPersonal/certificados/diploma-javascript-poo-intermedio-1_a0fptk.png',
        'v1635127888/blogPersonal/certificados/diploma-javascript-poo-1_tib5ge.png',
        'v1635127884/blogPersonal/certificados/diploma-javascript-navegador-1_e1kh0t.png',
        'v1635127880/blogPersonal/certificados/diploma-html-practico-1_o5v7dt.png',
        'v1635127876/blogPersonal/certificados/diploma-html-css-1_dkvuah.png',
        'v1635127873/blogPersonal/certificados/diploma-git-github-1_vkty5m.png',
        'v1635127869/blogPersonal/certificados/diploma-fundamentos-javascript-2018-1_e84jw5.png',
        'v1635127865/blogPersonal/certificados/diploma-frontend-developer-2019-1_momszr.png',
        'v1635127861/blogPersonal/certificados/diploma-flexbox-css-grid-1_nbiljf.png',
        'v1635127858/blogPersonal/certificados/diploma-ecmascript-6-1_lypcmz.png',
        'v1635127855/blogPersonal/certificados/diploma-devtools_1_-1_umthmz.png',
        'v1635127851/blogPersonal/certificados/diploma-css-grid-layout-1_a2sez7.png',
        'v1635127847/blogPersonal/certificados/diploma-basico-javascript-1_nmoiqw.png',
        'v1635127844/blogPersonal/certificados/diploma-asincronismo-js-1_cs6czk.png',
        'v1635127840/blogPersonal/certificados/diploma-animaciones-css-practico_1_-1_mjrpad.png',
        'v1635127839/blogPersonal/certificados/diploma-animaciones-css-1_pxoiew.png',
      ],
    }
  },
  computed: {
    resultados() {
      if (this.filtro === '') {
        return this.certificaciones
      } else {
        return this.filteredCertifications()
      }
    },
    filterState() {
      if (this.filterClose) {
        return {
          openFilter: false,
          closeFilter: true,
        }
      } else {
        return {
          openFilter: true,
          closeFilter: false,
        }
      }
    },
    formatFilter() {
      const filtroMinusculas = this.filtro.toLowerCase()
      const filtroFinal = filtroMinusculas.replace(/ /g, '-')
      return filtroFinal
    },
    darkTheme() {
      return this.$store.state.darkMode
    },
  },
  methods: {
    filteredCertifications() {
      return this.certificaciones.filter((word) =>
        word.toLowerCase().includes(this.formatFilter)
      )
    },
    changeFilterState() {
      this.filterClose = !this.filterClose
      if (this.filterClose) {
        this.firstFilterWord = 'si deseas buscar algo '
        this.secondFilterWord = 'más especifico clickeame :)'
      } else {
        this.firstFilterWord = 'Buscar :'
        this.secondFilterWord = ''
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../css/acercaMi.scss';
@media (min-width: 1024px) {
  .main__perfil {
    img {
      width: 20%;
      max-height: 360px;
    }
    article {
      width: 60%;
    }
  }
  .astronauta {
    width: 60%;
    margin: 0 auto 0 auto;
  }
}
@media (min-width: 1550px) {
  p {
    font-size: 1.8rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  .main__certificaciones {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    .astronauta {
      width: 40%;
      margin: 0 auto 0 auto;
    }
  }
  .filter .openFilter {
    width: 30%;
    margin-left: 0.5rem;
  }
}
</style>
