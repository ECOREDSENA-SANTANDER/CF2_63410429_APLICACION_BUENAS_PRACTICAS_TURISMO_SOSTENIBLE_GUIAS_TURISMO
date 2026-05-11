<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/intro/1.svg')
      .col-lg-11.col-md-10
        p.mb-0 La formación en guianza turística exige el desarrollo de conocimientos y habilidades orientadas a la prestación de servicios con calidad, responsabilidad y compromiso con el entorno. La sostenibilidad por su parte comprende un enfoque integral que articula la protección ambiental, la gestión económica, la valoración de la cultura local y el respeto por las comunidades y los territorios.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-3 En este proceso formativo se abordan contenidos relacionados con los indicadores de sostenibilidad en turismo propuestos por la Organización Mundial del Turismo (OMT), la gestión empresarial, la cultura de calidad en el servicio y la preparación del guía según las tipologías de producto turístico ofertadas en el destino; asimismo, se desarrollan aspectos clave para la organización del trabajo en distintos escenarios de operación turística, tales como terminales de transporte, establecimientos de alojamiento, restaurantes y embarcaciones, junto con herramientas para la evaluación de la satisfacción de usuarios y comunidades.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.d-none.d-lg-block
            img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/intro/3.svg')
          .col-lg-9
            p.mb-0 De igual manera, se promueve la comprensión de la sostenibilidad en sus dimensiones sociocultural y ambiental, resaltando la importancia del código de ética del turismo, la protección del patrimonio cultural y natural, y la valoración de la identidad local; es así como, se fortalecen las capacidades para aplicar herramientas de gestión sostenible que contribuyen a la mejora del servicio y al desarrollo responsable del sector turístico, en coherencia con las normas técnicas de calidad vigentes y las dinámicas del contexto.   
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img(src='@/assets/curso/intro/2.png', alt='')
      
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
