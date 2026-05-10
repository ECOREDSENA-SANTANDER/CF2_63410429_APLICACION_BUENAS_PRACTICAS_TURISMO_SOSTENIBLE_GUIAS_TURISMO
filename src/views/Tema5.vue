<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 5
      h1 Modelos y tipos de encuesta de satisfacción de servicio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 Las encuestas de satisfacción constituyen una herramienta clave para la mejora continua del servicio al cliente, ya que permiten recoger de manera sistemática la percepción de los usuarios al finalizar una actividad. En el contexto del turismo, donde el guía puede desempeñarse en diferentes tipologías (cultural, ecológica, de aventura, entre otras), resulta fundamental contar con un modelo estructurado que oriente la evaluación de la calidad del servicio prestado. 

    p.mb-5 Más allá de recolectar opiniones, estas encuestas facilitan la toma de decisiones, la identificación de oportunidades de mejora y el fortalecimiento de la experiencia turística. 

    .tit1(data-aos="fade-left")
      img.img-t(:src="require('@/assets/curso/tema1/fle.svg')" alt='Imagen decorativa')
      h4.mb-0.text-whit Fases para la construcción y aplicación de una encuesta de satisfacción 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 A continuación, se presentan las cuatro fases esenciales del proceso de satisfacción de turista: 
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Fase 1. Definición del servicio a evaluar")
            .col-lg-11
              p.mb-4 En esta etapa se delimita claramente el objeto de evaluación. 
              p.mb-4 Aspectos clave: 
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Determinar el tipo de servicio (recorrido guiado, transporte, alojamiento, actividad específica). 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Definir el alcance (inicio, desarrollo o cierre de la experiencia).  
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Establecer el objetivo de la evaluación (calidad, seguridad, experiencia del usuario, etc.). 
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 Esto permite enfocar la encuesta y asegurar que la información recolectada sea pertinente y útil. 
          .row.align-items-center(titulo="Fase 2. Construcción de la encuesta")
            .col-lg-11
              p.mb-4 Consiste en el diseño del instrumento de recolección de información. 
              p.mb-4 Elementos para considerar: 
              ul.lista-ul.mb-4
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Factores para evaluar:  
                .row.justify-content-center.align-items-center.mb-4.mx-3
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Atención del guía. 
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Puntualidad. 
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Claridad de la información.
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Atención del guía. 
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Puntualidad. 
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Claridad de la información.
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Diseño de preguntas:
                .row.justify-content-center.align-items-center.mb-4.mx-3
                  .col-lg-12
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Claras, breves y comprensibles.  
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Evitar ambigüedades o tecnicismos innecesarios. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Escalas de evaluación:
                .row.justify-content-center.align-items-center.mb-4.mx-3
                  .col-lg-12
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Tipo Likert (ejemplo: 1 a 5, de “muy insatisfecho” a “muy satisfecho”).  
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Aspectos técnicos:  
                .row.justify-content-center.align-items-center.mb-4.mx-3
                  .col-lg-12
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Tamaño de la muestra.
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Periodicidad de aplicación.
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Revisión y validación del instrumento. 
              p.mb-0 Una buena construcción garantiza datos confiables y comparables. 
          .row.align-items-center(titulo="Fase 3. Aplicación de la encuesta")
            .col-lg-11
              p.mb-4 Corresponde a la implementación del instrumento con los usuarios.  
              p.mb-4 Recomendaciones: 
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Realizar una prueba piloto para detectar errores.  
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Aplicar la encuesta al finalizar el servicio (momento clave de percepción).  
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Utilizar medios adecuados:  
                .row.justify-content-center.align-items-center.mb-4.mx-3
                  .col-lg-12
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Formato físico. 
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Formularios digitales. 
                      li.d-flex.mb-0
                        i.fas.fa-check
                        p.mb-0 Códigos QR. 
              p.mb-0 Una correcta aplicación mejora la tasa de respuesta y la calidad de la información. 
          .row.align-items-center(titulo="Fase 4. Análisis de la información")
            .col-lg-11
              p.mb-4 En esta fase se interpretan los resultados obtenidos. 
              p.mb-4 Acciones principales: 
              ul.lista-ul.mb-4
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Identificar fortalezas del servicio. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Detectar debilidades o fallas. 
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Establecer planes de mejora.  
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 Comparar resultados en el tiempo (seguimiento).  
              p.mb-0 El valor de la encuesta está en usar la información para mejorar, no solo en recolectarla. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema5/2.png', alt='')

    p.mb-5 #[b Tipos de encuestas de satisfacción más utilizados:] dependiendo del objetivo, se pueden emplear distintos modelos: 

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/3.svg' alt='AvatarTop')
          p.mb-0.text-center Encuesta general de satisfacción: evalúa la experiencia global del usuario.  
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/4.svg' alt='AvatarTop')
          p.mb-0.text-center Encuesta por servicio específico: se enfoca en un componente particular (guía, transporte, alojamiento).  
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/5.svg' alt='AvatarTop')
          p.mb-0.text-center Encuesta postservicio inmediato: se aplica al finalizar la actividad.  
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/6.svg' alt='AvatarTop')
          p.mb-0.text-center Encuesta de seguimiento: se realiza días después para evaluar recordación y percepción global.  
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema5/7.svg' alt='AvatarTop')
          p.mb-0.text-center Encuesta digital automatizada: facilita la recolección y análisis en tiempo real.  

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema5/8.svg')
      .col-lg-11.col-md-10
        p.mb-0 La aplicación de encuestas de satisfacción al finalizar cada actividad permite al guía de turismo y a la organización comprender con mayor precisión la experiencia del usuario. Además, favorece la identificación de fortalezas y oportunidades de mejora, contribuyendo al fortalecimiento de la calidad del servicio, la satisfacción del cliente y la consolidación de procesos de mejora continua en el sector turístico. 


</template>

<script>
export default {
  name: 'Tema5',
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
