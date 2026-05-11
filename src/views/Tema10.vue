<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 10
      h1 Pautas y normas de comportamiento en sitios de patrimonio natural (espacios rurales y áreas protegidas)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema10/1.png', alt='')
      .col-lg-7
        p.mb-4 En el turismo, las buenas prácticas, según la organización Rainforest Alliance, se entienden como formas de operación que contribuyen simultáneamente a la conservación del patrimonio natural y cultural, al desarrollo social y económico de las comunidades y a la satisfacción de los visitantes. En este sentido, realizar actividades turísticas en espacios naturales implica adoptar comportamientos responsables que promuevan su valoración, conservación y uso sostenible. 
        .bg2.p-4
          p.mb-0 En Colombia, el Sistema Nacional de Áreas Protegidas de Colombia, articulado a través de la Parques Nacionales Naturales de Colombia, reconoce que el patrimonio natural no solo posibilita el disfrute de actividades recreativas, sino que también aporta al cumplimiento de los Objetivos de Desarrollo Sostenible (ODS), como la reducción de la pobreza. Esto se debe a que genera oportunidades económicas para las comunidades locales mediante servicios turísticos sostenibles. 
      
    p.mb-4 Entre las principales actividades recreativas en estos entornos se encuentran: senderismo, #[em camping,] observación de fauna y flora, fotografía de naturaleza, actividades artísticas y, en algunos contextos, buceo. Estas experiencias, además de promover el bienestar físico y mental, fortalecen la conexión con el entorno natural. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 20. 
          | Elementos clave en las actividades recreativas basadas en el patrimonio natural y cultural 
        .tabla-a.t4.tab1.mb-2
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr
                td Ecoturismo
                td Actividad que promueve el disfrute responsable de la naturaleza, respetando sus dinámicas ecológicas, generando beneficios para el visitante y oportunidades económicas sostenibles para las comunidades locales.          
              tr.bgr
                td Patrimonio cultural
                td Conjunto de saberes, prácticas y tradiciones vinculadas a los ecosistemas y especies, transmitidas entre generaciones y fundamentales para la identidad cultural del territorio.          
              tr
                td Valor paisajístico
                td Atributo asociado al atractivo visual de un lugar, resultado de la interacción entre elementos naturales y socioculturales, que genera apreciación estética, inspiración y valor territorial.          
              tr.bgr
                td Dimensión espiritual y religiosa
                td Relación simbólica y cultural con la naturaleza, presente en diversas cosmovisiones, que fortalece el sentido de pertenencia, la espiritualidad y el bienestar emocional.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        p.mb-3 Las características de los ecosistemas naturales representan no solo un atractivo turístico, sino también una oportunidad para la investigación, la educación ambiental y la transmisión de conocimientos tradicionales. Sin embargo, estos beneficios dependen de la conservación de los servicios ecosistémicos de soporte, como el ciclo de nutrientes, la formación y fertilidad del suelo, el hábitat de especies y la preservación de los recursos genéticos.  
        p.mb-0 Por ello, es fundamental que las entidades territoriales, en articulación con las autoridades ambientales, promuevan estudios y acciones que permitan reconocer y fortalecer el aporte de las áreas protegidas al desarrollo territorial y nacional. 
      .col-lg-4.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema10/2.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 4.
          | Clasificación de los servicios ecosistémicos en áreas naturales
        .bg9.p-4.mb-2 
          img.img-t.img-a(src='@/assets/curso/tema10/3.svg', alt='Se presenta la clasificación de los servicios ecosistémicos en cuatro categorías principales: soporte, abastecimiento, regulación y culturales, destacando su función en el equilibrio ambiental, el bienestar humano y el aprovechamiento sostenible de los recursos naturales.')
        figcaption Fuente: adaptado de Paredes Leguizamón et al., (2015). 
    
    .row.justify-content-center.align-items-end.mb-0
      .col-lg-5.mb-lg-0.mb-4
        .bg2.p-4
          p.mb-0.mb-lg-3.mt-lg-3.mx-lg-2 Se identifican cuatro categorías de servicios ecosistémicos: soporte, abastecimiento, regulación y culturales. Los de soporte garantizan el funcionamiento de los ecosistemas; los de abastecimiento proporcionan recursos como agua y alimentos; los de regulación mantienen el equilibrio ambiental; y los culturales aportan beneficios no materiales como recreación, conocimiento y valores culturales.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema10/4.svg')
      .col-lg-4
        p.mb-0 Estos servicios están interrelacionados y dependen del buen estado de los ecosistemas, por lo que su deterioro afecta tanto el ambiente como el bienestar humano. En este sentido, el turismo de naturaleza debe desarrollarse de manera responsable, reconociendo que la conservación de los ecosistemas también protege la cultura, la economía local y la calidad de vida de las comunidades. 


</template>

<script>
export default {
  name: 'Tema10',
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
