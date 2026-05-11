<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 7
      h1 Carta sobre turismo cultural ICOMOS
    
    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-7
        p.mb-4 La Carta Internacional sobre Turismo Cultural fue adoptada por el Consejo Internacional de Monumentos y Sitios (ICOMOS) durante su XII Asamblea General, realizada en México en octubre de 1999. Este documento establece que el patrimonio natural y cultural es un bien común de la humanidad, por lo cual, todas las personas tienen el derecho de conocerlo y disfrutarlo, pero también la responsabilidad de protegerlo y conservarlo para las generaciones futuras (ICOMOS, 1999). 
        p.mb-4 La carta propone una visión amplia del patrimonio, entendiendo que no se limita a monumentos o sitios históricos. Incluye también: 
        .row.justify-content-center.mb-0
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema7/1.svg')
          .col-lg-8
            ul.lista-ul.mb-0
              li.d-flex.mb-1
                i.fas.fa-check
                p.mb-0 Paisajes naturales y culturales. 
              li.d-flex.mb-1
                i.fas.fa-check
                p.mb-0 Entornos construidos. 
              li.d-flex.mb-1
                i.fas.fa-check
                p.mb-0 Biodiversidad. 
              li.d-flex.mb-1
                i.fas.fa-check
                p.mb-0 Tradiciones y saberes. 
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Prácticas culturales y experiencias comunitarias. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img(src='@/assets/curso/tema7/2.png', alt='')
    
    p.mb-4 Estos elementos reflejan procesos históricos y sociales que configuran identidades en contextos locales, regionales, nacionales e indígenas. 
    
    p.mb-4 Además, reconoce que el patrimonio cumple una función esencial en la sociedad contemporánea, ya que fortalece la memoria colectiva, promueve el intercambio cultural y se constituye en una base clave para el desarrollo sostenible de las comunidades. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 8. 
          | Rol del guía en el servicio de restaurante
        .tabla-a.t4.tab1.mb-2
          table
            thead
              tr
                th Principio
                th Descripción
            tbody
              tr.bgr
                td Principio 1
                td El turismo nacional e internacional es un medio fundamental para el intercambio cultural. Su gestión debe ofrecer oportunidades responsables a las comunidades anfitrionas y permitir a los visitantes comprender y experimentar su cultura y patrimonio.
              tr
                td Principio 2
                td La relación entre turismo y patrimonio es dinámica y puede generar tensiones. Por ello, debe gestionarse de manera sostenible, pensando en las generaciones presentes y futuras.
              tr.bgr
                td Principio 3
                td La planificación del turismo y la conservación del patrimonio debe garantizar una experiencia significativa, satisfactoria y enriquecedora para el visitante.
              tr
                td Principio 4
                td Las comunidades anfitrionas y los pueblos indígenas deben participar activamente en la planificación del turismo y la conservación del patrimonio.
              tr.bgr
                td Principio 5
                td Las actividades turísticas y de conservación deben generar beneficios reales para las comunidades locales.
              tr
                td Principio 6
                td La promoción turística debe proteger, respetar y resaltar las características del patrimonio natural y cultural.
        figcaption Nota: adaptación de González Molina et al., (2023). 

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Rol del guía de turismo en la aplicación de la carta 

    p.mb-5 El guía de turismo desempeña un papel fundamental como mediador entre el patrimonio, los visitantes y las comunidades anfitrionas. Su labor va más allá de brindar información; implica generar experiencias que promuevan el respeto, la comprensión cultural y la valoración del territorio. 

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Funciones clave del guía

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        .bg4.p-4
          img.img-t(src='@/assets/curso/tema7/3.png', alt='')
      .col-lg-7
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="1" titulo="Mediación cultural")
            .col-lg-12
              p.mb-0 Facilitar el entendimiento entre visitantes y comunidades, promoviendo el respeto por la diversidad cultural.
          .row.justify-content-center.align-items-center.mb-0(numero="2" titulo="Educación y sensibilización")
            .col-lg-12
              p.mb-0 Explicar el valor del patrimonio, fomentando actitudes responsables en los turistas.  
          .row.justify-content-center.align-items-center.mb-0(numero="3" titulo="Promoción de la sostenibilidad")
            .col-lg-12
              p.mb-0 Incentivar prácticas que protejan los recursos naturales y culturales.
          .row.justify-content-center.align-items-center.mb-0(numero="4" titulo="Garantía de experiencias de calidad")
            .col-lg-12
              p.mb-0 Asegurar que las actividades sean seguras, organizadas y significativas, sin afectar los sitios patrimoniales.
          .row.justify-content-center.align-items-center.mb-0(numero="5" titulo="Impulso al desarrollo local")
            .col-lg-12
              p.mb-0 Promover el consumo de productos y servicios del territorio, fortaleciendo la economía de la comunidad.
          .row.justify-content-center.align-items-center.mb-0(numero="6" titulo="Participación comunitaria")
            .col-lg-12
              p.mb-0 Reconocer e integrar los saberes y tradiciones locales en la experiencia turística.  

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/4.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 La Carta Internacional sobre Turismo Cultural proporciona lineamientos esenciales para lograr un equilibrio entre conservación del patrimonio y desarrollo turístico. El guía de turismo se consolida como un actor clave, capaz de promover un turismo responsable, auténtico y sostenible, contribuyendo tanto a la protección del patrimonio como al bienestar de las comunidades. 


</template>

<script>
export default {
  name: 'Tema7',
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
