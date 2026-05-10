<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 6
      h1 Código de ética del turismo y del guía de turismo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 El Código Ético Mundial para el Turismo, promovido por las Naciones Unidas y la Organización Mundial del Turismo, establece un marco de referencia compuesto por 10 principios orientados a garantizar un turismo responsable, sostenible e incluyente; este código se fundamenta en el respeto por el derecho al turismo, la libertad de desplazamiento y la construcción de un orden turístico equitativo que beneficie tanto a los visitantes como a las comunidades receptoras. 

    p.mb-0 Su propósito principal es orientar el comportamiento de todos los actores del sector turístico, promoviendo prácticas que fortalezcan la convivencia, la sostenibilidad y el desarrollo integral de los destinos. 
    
    .row.justify-content-center.align-items-center.fondo1.p-lg-5.p-4.mb-0(data-aos="fade-down")
      .col-lg-12
        p.mb-5 Los principios del Código Ético Mundial para el Turismo se estructuran en los siguientes artículos: 
        .row.justify-content-center.mb-0
          .col-lg-6
            ol.lista-ol--cuadro.lista-ol--separador
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                | Contribución del turismo al entendimiento y respeto mutuo entre sociedades. 
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 2
                | El turismo como instrumento de desarrollo personal y colectivo. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                | El turismo como factor de desarrollo sostenible.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 4
                | El turismo como medio de aprovechamiento y preservación del patrimonio cultural.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 5
                | El turismo como actividad beneficiosa para países y comunidades de destino.
          .col-lg-6
            ol.lista-ol--cuadro.lista-ol--separador
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 6
                | Obligaciones de los agentes del desarrollo turístico.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 7
                | Derecho al turismo. 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 8
                | Libertad de desplazamiento turístico.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 9
                | Derechos de trabajadores y empresarios del sector turístico. 
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 10
                | Aplicación de los principios del Código Ético Mundial para el Turismo.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Aplicación del código en el ejercicio del guía de turismo 
    
    p.mb-4 El guía de turismo, como actor directo en la experiencia del visitante, debe integrar estos principios en su práctica diaria, no solo como una referencia teórica, sino como una guía de comportamiento profesional. 
    
    p.mb-0 Acciones clave del guía según el código ético: 
    
    .row.justify-content-center.align-items-center.fondo2.p-lg-5.p-4.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-3.d-none.d-lg-block
            img.img-t(src="@/assets/curso/tema6/2.png", alt="alt")
          .col-lg-9
            SlyderF.circl-arrow(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/3.svg' alt='AvatarTop')
                p.mb-0.text-center Promoción del respeto cultural (art. 1): fomentar en los turistas la tolerancia, el respeto y la valoración de las costumbres locales.
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/4.svg' alt='AvatarTop')
                p.mb-0.text-center Generación de experiencias significativas (art. 2): facilitar procesos de aprendizaje y enriquecimiento tanto para el visitante como para la comunidad.
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/5.svg' alt='AvatarTop')
                p.mb-0.text-center Responsabilidad ambiental (art. 3): incentivar el cuidado de los recursos naturales y el cumplimiento de normas en áreas protegidas.  
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/6.svg' alt='AvatarTop')
                p.mb-0.text-center Protección del patrimonio cultural (art. 4): difundir información veraz y evitar prácticas que deterioren el patrimonio.  
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/7.svg' alt='AvatarTop')
                p.mb-0.text-center Apoyo al desarrollo local (art. 5): promover el consumo de bienes y servicios del territorio.  
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/8.svg' alt='AvatarTop')
                p.mb-0.text-center Ejercicio profesional ético (art. 6): actuar con responsabilidad, honestidad, puntualidad y veracidad en la información.  
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/9.svg' alt='AvatarTop')
                p.mb-0.text-center Garantía de inclusión y equidad (art. 7 y 8): brindar un trato digno, sin discriminación, respetando el derecho al turismo y la movilidad.  
              .tarjeta.tarjeta--slyder.b2.p-3
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema6/10.svg' alt='AvatarTop')
                p.mb-0.text-center Reconocimiento de derechos laborales (art. 9): valorar sus propios derechos y los de los demás actores del sector.  

    p.mb-0 El Código Ético Mundial para el Turismo no solo establece principios generales, sino que se convierte en una herramienta práctica para el desempeño del guía de turismo. Su aplicación permite ofrecer un servicio de calidad, fortalecer la imagen del destino y contribuir al desarrollo sostenible, garantizando experiencias responsables, respetuosas y enriquecedoras para todos los involucrado. 


</template>

<script>
export default {
  name: 'Tema6',
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
