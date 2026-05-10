<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 2
      h1 Gestión del servicio de guianza turística 

    p.mb-5 El guía de turismo debe prepararse y fortalecer sus conocimientos en cada una de las tipologías de productos turísticos que se ofrecen en los destinos; esto no solo mejora su desempeño profesional, sino que también demuestra compromiso, ética y responsabilidad en la prestación del servicio. Cuando un guía conoce bien la actividad que desarrolla, puede brindar una atención de mejor calidad, generar confianza en los visitantes y contribuir a que el turista tenga una experiencia satisfactoria, al punto de querer regresar y recomendar el destino. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 En Colombia, el ejercicio de la guianza turística está orientado por las Normas Técnicas Sectoriales para Guías de Turismo, las cuales establecen criterios que sirven de base para el buen desarrollo de esta labor. Entre las normas fundamentales se encuentran la NTS-GT 001, relacionada con la prestación del servicio de guianza según lo requerido por el usuario; la NTS-GT 002, enfocada en el control y seguimiento de los programas de acuerdo con los objetivos propuestos; la NTS-GT 003, que orienta la preparación de las actividades contratadas con el usuario; y la NTS-GT 004, que aborda los procesos básicos necesarios para prestar el servicio de manera adecuada. 

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4
        p.mb-0 Además de estas normas generales, existen otras que responden a las diferentes tipologías del turismo y que permiten al guía actuar de manera más especializada según la actividad que va a desarrollar. Entre ellas se encuentran las relacionadas con recorridos ecoturísticos, actividades de buceo con tanque y a pulmón, recorridos guiados en museos, alta montaña, atención a pasajeros de cruceros, cabalgatas y la prestación del servicio de guianza con traducción a otras lenguas. Cada una de estas normas establece criterios específicos que el guía debe conocer y aplicar de acuerdo con el contexto del servicio. 
      .col-lg-4
        img(src='@/assets/curso/tema2/2.png')
      .col-lg-4
        p.mb-0 De igual manera, todos los guías de turismo deben conocer y aplicar la Norma Técnica Colombiana NTC 6507 de 2021, la cual establece los requisitos para la prestación del servicio de guianza turística. Esta norma orienta aspectos importantes como la planeación, la ejecución y el control del servicio, así como la forma adecuada de finalizar una actividad. También resalta las competencias que debe tener el guía y las técnicas que favorecen una atención organizada, segura y de calidad para los usuarios. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img.img-t(src='@/assets/curso/tema2/3.png', alt='')
      .col-lg-8
        .bg8.p-5.mb-4
          p.mb-0 Para desempeñar con éxito la labor del guía dentro de la cadena de servicio turístico, es fundamental organizar adecuadamente sus funciones y responsabilidades. En este sentido, el turismo debe entenderse como una actividad articulada entre diversos actores del territorio. Como señalan Panosso y Lohmann (2012, como se citó en Hoyos Pardo, 2021), “el turismo se debe entender desde un sistema de comunicaciones entre las agencias de viajes, los guías de turismo, las cadenas hoteleras, los establecimientos gastronómicos, los artesanos, los planes de desarrollo departamental y las redes o medios de comunicación para atraer a los diferentes tipos de turistas hacia el territorio deseado” (p. 11). 
        .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
          .col-lg-9.col-md-10
            p.mb-0 A partir de lo anterior, se hace necesario contar con un plan de trabajo organizado que facilite una comunicación efectiva entre el guía y el usuario; lo cual contribuye a que la experiencia turística sea positiva en los territorios visitados y genere impactos favorables en los ámbitos ambiental, sociocultural y económico de la comunidad receptora. Asimismo, fortalece la relación con las autoridades y con los demás actores vinculados al desarrollo de la actividad turística, favoreciendo así el crecimiento y posicionamiento del destino turístico. 
          .col-lg-3.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema2/4.svg')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema2/5.svg')
      .col-lg-11.col-md-10
        p.mb-0 En el caso de Colombia, los guías de turismo tienen la posibilidad de desempeñarse en diversas tipologías de turismo, gracias a la amplia oferta de productos turísticos presentes en las regiones, tanto en espacios naturales como culturales. Por esta razón, se espera que el guía se especialice en el área de su interés y mantenga un proceso constante de formación y capacitación; esto es indispensable, ya que su labor consiste en brindar información, orientación y seguridad a los usuarios; por lo tanto, debe mantenerse actualizado sobre los elementos propios de la guianza turística. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 1. 
          | Fundamentos de la guianza turística
        .bg9.p-lg-5.p-4.mb-2
          img.img-a.img-t(src='@/assets/curso/tema2/6.svg', alt='Se presentan los fundamentos esenciales de la guianza turística, organizados en seis componentes clave: liderazgo, conocimiento del lugar, resolución de problemas, actitud positiva, comunicación y ética. Estos elementos integran las competencias que debe desarrollar el guía para brindar un servicio de calidad, facilitando la interacción con los visitantes, la adecuada gestión del grupo y la transmisión efectiva de información, en coherencia con principios profesionales y responsabilidad en el ejercicio de su labor.')
        figcaption Nota: adaptación de González Molina et al., (2023). 


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Conocimiento integral y cumplimiento normativo del guía de turismo 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema2/7.png', alt='')
      .col-lg-7
        p.mb-3 Además de los fundamentos anteriores, el guía de turismo debe contar con un conocimiento integral del territorio en el que desarrolla su labor, lo cual incluye aspectos relacionados con la historia, la geografía, las rutas, el patrimonio natural y el folclor de las zonas que recorre, en coherencia con los servicios contratados por el usuario. Este dominio no solo fortalece la calidad de la experiencia turística, sino que también permite una interpretación adecuada del entorno y una conexión significativa entre el visitante y el destino. 
        .bg2.p-4
          p.mb-0 Asimismo, el ejercicio de la guianza turística en Colombia exige el cumplimiento de requisitos normativos específicos. Entre estos se destacan la certificación vigente en primeros auxilios y la certificación en la norma de competencia laboral de guianza, acorde con el área de especialización del guía, sus intereses y su perfil profesional. 
      

    p.mb-5 En este marco, el Decreto 1379 de 2021, que reglamenta el ejercicio del guionaje turístico en Colombia, establece un conjunto de actividades clave que orientan la preparación y desarrollo del servicio de guianza.  
    p.mb-4 Entre las principales funciones del guía de turismo se encuentran: 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-3.d-none.d-lg-block
        img.img-t(src="@/assets/curso/tema2/8.png", alt="alt")
      .col-lg-9
        SlyderF.circl-arrow(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/9.svg' alt='AvatarTop')
            p.mb-0.text-center Planear y controlar el servicio de guianza de acuerdo con lo contratado y los requerimientos técnicos y normativos. 
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/10.svg' alt='AvatarTop')
            p.mb-0.text-center Diseñar recorridos turísticos conforme a las condiciones del servicio y la normativa vigente.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')
            p.mb-0.text-center Elaborar guiones interpretativos acordes con los lineamientos del sector.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/12.svg' alt='AvatarTop')
            p.mb-0.text-center Conducir grupos de turistas según su especialidad y las condiciones del servicio contratado.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/13.svg' alt='AvatarTop')
            p.mb-0.text-center Promover la conservación y protección del patrimonio natural y cultural entre visitantes y comunidades.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/14.svg' alt='AvatarTop')
            p.mb-0.text-center Apoyar la gestión y el desarrollo de los destinos turísticos, en articulación con la normativa del sector.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/15.svg' alt='AvatarTop')
            p.mb-0.text-center Transmitir conocimientos sobre el patrimonio natural y cultural del territorio mediante técnicas de comunicación adecuadas.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/16.svg' alt='AvatarTop')
            p.mb-0.text-center Informar sobre el patrimonio local considerando las características del entorno y los protocolos de la comunidad.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/17.svg' alt='AvatarTop')
            p.mb-0.text-center Narrar historias y elementos culturales respetando los principios de protección del patrimonio.  
          .tarjeta.tarjeta--slyder.b2.p-3
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/18.svg' alt='AvatarTop')
            p.mb-0.text-center Mediar entre los intereses del visitante y la comunidad local, favoreciendo relaciones respetuosas.  


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
