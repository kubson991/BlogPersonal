export const state = () => ({
  posts: [
    {
      imagen:
        'v1636343788/blogPersonal/blogs/imagen_2021-11-07_225625_jtzqzl.png',
      alt: 'patatavid',
      titulo: 'Maquetacion de patatavid',
      intro: 'Maquetacion totalmente responsive de la pagina "PatataVid" a base unicamente de HTML CSS y JS vanila , respetando principios de diseno movile first y siguiendo modelado en figma.',
      blog: 'patatavid',
      post:`La presente maquetación es hecha con el paradigma de “movile first” siguiendo un diseño planteado en figma para la base movile y de libre elección para el resto de tamaños.

Lo que caracteriza a esta maquetación ,es el hecho de que fue hecho sin librerías o frameworks ,solo con CSS y HTML puro destacando también el uso de JavaScript para la interactividad entre el cambio de tablas presente al presionar los iconos de flechas y tambien el uso la etiqueta <table> que ha sido ampliamente descartada por el uso de CSS grid sin tener en cuenta que en ocasiones particulares el uso de table puede evitar el uso de css sin necesidad .`,
      direccion:'https://patatavidmaquetacion.netlify.app',
      tags:['JS','CSS','HTML','RWD']
    },
    {
      imagen:
        'v1636482727/blogPersonal/blogs/imagen_2021-11-09_133204_d0xcuo.png',
      alt: 'Rick and Morty App',
      titulo: 'Rick and Morty App',
      intro: 'Y con ustedes una app que muestra todos los personajes de la popular serie Rick y Morty mediante la consulta a una API rest y el uso de Nuxt para mostrar tarjetas con la informacion de que cada personaje.',
      blog: 'RickyAndMorty',
      post:`Y con ustedes una app que muestra todos los personajes de la popular serie Rick y Morty mediante la consulta a una API rest y el uso de Nuxt para mostrar tarjetas con la informacion de que cada personaje.`,
      direccion:'https://rickymorty-nuxt.netlify.app',
      tags:['JS','CSS','HTML','RWD','Vue','Nuxt']
    },
    {
      imagen:
        'v1636485380/blogPersonal/blogs/imagen_2021-11-09_141617_nyrzig.png',
      alt: 'Lego',
      titulo: 'Sitio Web de lego',
      intro:'Creacion de sitio web acerca de heroes de DC en lego ,hecho en su totalidad con animaciones sin ayuda de bibliotecas ,con solo HTML y JS vanila (es un sitio de muestra sin enrutador).',
      blog: 'LegoBlog',
      post:`El presente proyecto ,es una maquetación de una pagina inspirada en lego ,lo que destaca de esta maquetacion ,es el despliegue de numerosas animaciones ,tanto al inicio como en el uso de la app.
      
Tambien es importante recalcar ,el no uso de librerias o frameworks de ningun tipo ,permitiendo mostrar otra gran habilidad de todo desarrollador FrontEnd y es el empleo de animaciones mas alla de transitions y transforms`,
      direccion:'https://zen-pike-117ab1.netlify.app',
      tags:['JS','CSS','HTML']
    },
    {
      imagen:
        'v1636484864/blogPersonal/blogs/imagen_2021-11-09_140743_tqnbuz.png',
      alt: 'platzi exchange',
      titulo: 'creacion y despliegue de pagina acerca de criptomonedas',
      intro: 'Aplicacion web que permite ver graficamente el cambio de las criptomonedas mas populares y calcular sus divisas,sin embargo la api rest cambio sus permisos de CORS volviendola una aplicacion inestable (hecha con Vue CLI).',
      blog: 'platziExchange',
      post:`aplicacion web que permite ver graficamente el cambio de las criptomonedas mas populares y calcular sus divisas,sin embargo la api rest cambio sus permisos de CORS volviendola una aplicacion inestable (hecha con Vue CLI).}
      
a pesar de ello la recarga continua permite ver la idea inicial de esta , esto no das una buena reflexión acerca del uso de APIs externas a notros y como esta puede verse afectada por un repentino cambio.  `,
      direccion:'https://kubson-exchange.netlify.app',
      tags:['JS','CSS','HTML','RWD','Vue','Taildwind']
    },
    {
      imagen:
        'v1637178397/blogPersonal/blogs/imagen_2021-11-17_144635_yokxze.png',
      alt: ' Nike component',
      titulo: 'Componente para Nike hecho con "Web Components"',
      intro: 'Creacion de un componente web con javaScript vanila , HTML y CSS con tematica de zapatos Nike ,siendo este componente totalmente reutilizable y compatible con cualquier framework.',
      blog: 'NikeComponent',
      post:`Creacion de un componente web con javaScript vanila , HTML y CSS con tematica de zapatos Nike ,siendo este componente totalmente reutilizable y compatible con cualquier framework. 
      
Claramente el uso de web components no es ampliamente utilizado en la industria , sin embargo su uso nos trae muchas ventajas ,entre ellas la escalabilidad ,el no uso de liberias o frameworks externos y tal vez lo mas importante, que ningun frameWork a logrado`,
      direccion:'https://inspiring-leavitt-c77fe8.netlify.app',
      tags:['JS','CSS','HTML','RWD']
    },
    {
      imagen:
        'v1637555688/blogPersonal/blogs/imagen_2021-11-21_233446_ihgq5b.png',
      alt: 'business component',
      titulo: 'Card promocional para business analytics.',
      intro: 'Card creada para promocionar un servicio de data analytics realizado en base a los requerimientos del cliente , enfatizando en que fuera responsive para pantallas de 320px y 1440px.',
      blog: 'BusinessCard',
      post:`Card creada para promocionar un servicio de data analytics realizado en base a los requerimientos del cliente , enfatizando en que fuera hecho para pantallas de 320px y 1440px ,basado en los principios de movile first y usando el framework "Nuxt" , tengamos en cuenta que este tipo de trabajos sencillos y sin mucha interactividad ,es preferible hacerlo con javaScript vanila sin embargo se opto por un enfoque de desarrollo ágil ,algo ideal para Vue.`,
      direccion:'https://nifty-swartz-173f2f.netlify.app',
      tags:['JS','CSS','HTML','RWD',"Vue","Nuxt","Node"],
    },
    {
      imagen:
        'v1637557146/blogPersonal/blogs/imagen_2021-11-21_235903_k4xykm.png',
      alt: 'Clon de wikipedia',
      titulo: 'Clon de wikipedia',
      intro: 'Maquetacion del sitio web de Wikipedia realizado unicamente con HTML y CSS , aclarando que no es una pagina responsive ,unicamente para computadores.',
      blog: 'wikipediaClon',
      post:`Maquetacion del sitio web de Wikipedia realizado unicamente con HTML y CSS , aclarando que no es una pagina responsive ,unicamente para resoluciones de computadores de escritorio sin embargo es un buen ejercicio de maquetacion ,claro esta que,sin el acceso a las fuentes e imagenes pertinentes esto limito algunos aspectos.`,
      direccion:'https://nervous-swartz-0de02a.netlify.app',
      tags:['CSS','HTML'],
    },
    {
      imagen:
        'v1637901017/blogPersonal/blogs/imagen_2021-11-25_233013_b26cqt.png',
      alt: 'Organizador de tiempo',
      titulo: 'Organizador de tiempo',
      intro: 'App web totalmente responsive que obtiene datos para tener registro de las horas que se dedican a distintas actividades, usando web components.',
      blog: 'calendarCSS',
      post:` App web totalmente responsive que obtiene datos para tener registro de las horas que se dedican a distintas actividades, usando web components.
      
      la data del componente es un JSON por defecto esto dado el hecho de que no cuenta con un back al cual consultarle informacion ,no obstante con un back funcionando ,daria la misma funcionalidad mediante el metodo fetch de los navegadores`,
      direccion:'https://agitated-chandrasekhar-58f7f4.netlify.app',
      tags:['JS','CSS','HTML','RWD'],
    },
    {
      imagen:
        'v1638908718/blogPersonal/blogs/imagen_2021-12-07_152512_dsepav.png',
      alt: 'Calculadora de propinas',
      titulo: 'Tip Calculator',
      intro: 'Calculadora 100% responsive y reactiva para calcular y dividir propinas en dolares,programada con Nuxt y el paradigma de movile first.',
      blog: 'TipCalculator',
      post:`Calculadora 100% responsive y reactiva para calcular y dividir propinas en dolares,programada con Nuxt y el paradigma de movile first.
      
Lo que permite una gran fluidez en el uso de esta app es la reactividad de los v-model ,propiedad que caracteriza a Vue para rapido y facil desarrollo de componentes con inputs.`,
      direccion:'https://cranky-franklin-3d9601.netlify.app',
      tags:['JS','CSS','HTML','RWD','Vue','Nuxt','Node'],
    },
    {
      imagen:
        'v1639151834/blogPersonal/blogs/imagen_2021-12-10_105713_ccu5na.png',
      alt: 'Contador empresarial ',
      titulo: 'Contador empresarial',
      intro: 'Contador de tiempo de dias a segundos ,con enfoque empresarial ,actualmente esta adaptado para que sea un contador hasta el proximo diciembre (100% responsive).',
      blog: 'Counter',
      post:`Contador de tiempo en dias a segundos ,con enfoque empresarial ,actualmente esta adaptado para que sea un contador hasta el proximo diciembre (100% responsive).

Esta pagina destaca en el uso de animaciones continuas e intercaldas para lograr un efecto de giro en los numeros y de un nevado continuo que parece no acabar.`,
      direccion:'https://frosty-volhard-027249.netlify.app',
      tags:['JS','CSS','HTML','RWD','Vue','Nuxt','Node'],
    },
    {
      imagen:
        'v1639152768/blogPersonal/blogs/imagen_2021-12-10_111245_zyvzur.png',
      alt: 'Contador twitch',
      titulo: 'Contador twitch',
      intro: 'Contador de tiempo de dias a segundos ,con enfoque para streamers ,actualmente esta adaptado para que sea un contador hasta que acabe mi licencia de platzi.',
      blog: 'CounterTwitch',
      post:`Contador de tiempo de dias a segundos ,con enfoque para streamers ,actualmente esta adaptado para que sea un contador hasta que acabe mi licencia de platzi.`,
      direccion:'https://peaceful-bhabha-8e6ee3.netlify.app',
      tags:['JS','CSS','HTML'],
    },
    {
      imagen:
        'v1640834475/blogPersonal/blogs/imagen_2021-12-29_222111_u2wqaf.png',
      alt: 'Todos',
      titulo: 'To do`s App',
      intro: 'Aplicacion multiplataforma que recibe tareas y se indica si estan completadas o no, la informacion es guardada mediante el storage.',
      blog: 'Todos',
      post:`Aplicacion multiplataforma que recibe tareas y se indica si estan completadas o no, la informacion es guardada mediante el localStorage del navegador permitiendo asi la persistencia de la informacion y haciendo la aplicación viable a pesar de solo funcionar con Front.`,
      direccion:'https://admiring-khorana-fcde03.netlify.app',
      tags:['CSS','HTML','React','Storage','JS','RWD','Node'],
    },
    {
      imagen:'v1635112679/blogPersonal/indexpage_vbluxj.png',
      alt: 'Portafolio',
      titulo: 'Portafolio',
      intro: 'Este blog es la recopilación de todo lo que he aprendido a lo largo de mi trayectoria académica y profesional, para mí esto no es un simple proyecto más , esta es la evidencia de lo que he logrado.',
      blog: 'MiBlog',
      post:`Ha pasado gran tiempo desde que empezó esta aventura del “Frontend “, al principio, solo quería saber que era usar una hoja de estilos e interpretar el HTML, desde entonces no he hecho mas que crecer como desarrollador, por supuesto que aun me falta un largo camino y ni hablar de mi siguiente reto que es ser un desarrollador “FullStack “.

Este blog es la recopilación de todo lo que he aprendido a lo largo de mi trayectoria académica y profesional, para mí esto no es un simple proyecto más , esta es la evidencia de lo que he logrado, es un antes y un después de lo que soy capaz pero no nos pongamos sentimentales, entremos en materia.
      
Al día de hoy muchos desarrolladores discuten cuando usar display flex y cuando display grid, la realidad es que la combinación de ambos puede ser siempre la mejor respuesta, este blog presenta un patrón que enfatiza en uso de Flex para su maquetación y Grid para sus componentes más pequeños teniendo así lo mejor de ambos mundos y por supuesto no olvidemos el uso de VueJS con Nuxt que hace posible el enrutamiento y división por módulos del proyecto.`,
      direccion:'https://portafoliodesebastianpoveda.netlify.app',
      tags:['CSS','HTML','Vue','Storage','JS','RWD','Node','Nuxt','PWA','Jest'],
    },
  ],
  darkMode:false
})

export const getters = {
  get: (state) => (filter) => {
    return ((state.posts).filter(object=>object.blog===filter))[0]
  },
}

export const actions = () => ({})

export const mutations = {
  darkModeChange (state){
    state.darkMode= !state.darkMode
  }
}
