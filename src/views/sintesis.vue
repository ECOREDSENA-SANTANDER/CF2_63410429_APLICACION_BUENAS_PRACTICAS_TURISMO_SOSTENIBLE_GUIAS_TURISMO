<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La siguiente síntesis organiza de manera estructurada los componentes fundamentales que orientan la prestación de servicios turísticos, integrando principios de sostenibilidad, normatividad, gestión del patrimonio, operación logística y calidad del servicio. Esta articulación permite comprender cómo se relacionan los aspectos conceptuales, técnicos y operativos, facilitando una visión integral del ejercicio profesional en turismo y su impacto en el entorno ambiental, sociocultural y económico. 

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se presenta una estructura compuesta por cuatro ejes principales: sostenibilidad y ética, patrimonio e interpretación, operación y logística, y calidad del servicio. Cada eje incluye elementos específicos que orientan la gestión turística, como principios de sostenibilidad, marcos normativos, valoración del patrimonio, herramientas de registro, organización operativa y evaluación del servicio. En conjunto, se establece una relación coherente entre la planificación, ejecución y mejora continua de la actividad turística.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
