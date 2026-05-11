<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Operación del servicio en contextos turísticos

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema3/1.png', alt='')
      .col-lg-7
        p.mb-4 La operación del servicio de guianza turística comprende el conjunto de acciones que el guía realiza para garantizar una atención organizada, segura y de calidad en los diferentes momentos del servicio. Estas acciones incluyen la recepción de los viajeros, su traslado, acompañamiento durante la experiencia turística y la coordinación logística con los distintos actores involucrados.  
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-10.col-md-10.mb-lg-0.mb-md-0.mb-4
            p.mb-0 Uno de los momentos más relevantes dentro de esta operación es el proceso de recepción y traslado de turistas en terminales de transporte, el cual constituye, en la mayoría de los casos, el primer contacto entre el guía y los usuarios. Este proceso es determinante para generar confianza, orientar a los viajeros y asegurar el adecuado inicio de la experiencia turística. 
          .col-lg-2.col-md-2.col-5
            img(src='@/assets/curso/tema3/2.svg')

    p.mb-4 Se invita a explorar el siguiente video, en el cual se presenta de manera clara y práctica la operación del servicio en contextos turísticos. Este recurso permite comprender el rol del guía de turismo en los procesos de recepción, traslado y acompañamiento de los viajeros, así como las acciones clave que garantizan una experiencia organizada, segura y de calidad. 

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Operación del servicio turístico: recepción, traslado y alojamiento. 
    
    p.mb-0 Su revisión contribuirá al fortalecimiento de conocimientos orientados a la prestación de un servicio turístico profesional y centrado en la satisfacción del visitante. 


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Chequeo de turistas con y sin equipaje en terminales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-lg-3.mb-4 Una de las funciones esenciales del guía de turismo es realizar el transfer o proceso de recepción y traslado de los viajeros en los diferentes terminales de transporte; esta actividad incluye su acompañamiento hasta el lugar de alojamiento y la verificación de aspectos logísticos fundamentales. 
        .bg2.p-4.mb-3
          .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
            .col-lg-2.col-md-2.col-5
              img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema3/4.svg')
            .col-lg-10.col-md-10
              p.mb-0 Este momento resulta clave, ya que permite generar una primera impresión positiva y establecer una relación de confianza con los visitantes: por ello, el guía debe proyectar una imagen de organización, profesionalismo y calidad en el servicio. 
        p.mb-0 Asimismo, durante el desarrollo del servicio pueden presentarse contingencias o situaciones imprevistas, ante lo cual, el guía debe actuar con serenidad, criterio y capacidad de respuesta, brindando soluciones oportunas que garanticen la comodidad y satisfacción de los usuarios. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema3/3.png', alt='')
    
    p.mb-4 Para una adecuada operación del servicio, se proponen las siguientes orientaciones organizadas en tres momentos: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 4. 
          | Procedimiento de recepción y traslado de turistas
        .tabla-a.tab2.mb-2
          table
            thead
              tr
                th Antes del arribo
                th Durante la recepción y traslado al hotel
                th Durante el traslado del hotel a la terminal
            tbody
              tr
                td Llegar a la terminal con al menos una hora de anticipación.
                td Brindar una bienvenida cálida, empática y profesional.
                td Verificar la hora de salida del medio de transporte.
              tr
                td Verificar la información y características de los viajeros.
                td Confirmar equipaje y pertenencias personales.
                td Llegar con anticipación al hotel.
              tr
                td Tener claridad sobre el hotel (ubicación y características).
                td Validar que el grupo esté completo.
                td Verificar #[em check-out] y pagos adicionales.
              tr
                td Coordinar previamente con el operador de transporte.
                td Presentarse formalmente en nombre de la agencia.
                td Confirmar listado de viajeros y equipaje.
              tr
                td Verificar condiciones del transporte.
                td Orientar al viajero en el entorno.
                td Recordar procedimientos en la terminal.
              tr
                td.align-middle(rowspan="3") Ubicarse en un punto visible con identificación.
                td Explicar el itinerario del servicio.
                td Acompañar el ingreso y brindar asistencia.
              tr
                td Informar sobre hotel, servicios y destino.
                td Despedida formal en nombre de la agencia.
              tr
                td Compartir datos de contacto del guía.
                td Verificar documentación del grupo y requisitos del servicio.
        figcaption Nota: adaptación de González Molina et al., (2023). 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 De esta manera, se busca garantizar la calidad en la prestación del servicio turístico, proyectar una imagen positiva de la empresa operadora y consolidar una percepción de organización, seguridad y profesionalismo en el destino. Asimismo, el adecuado desempeño del guía de turismo favorece la generación de confianza y satisfacción en los usuarios, contribuyendo a una experiencia significativa que responda a sus expectativas. La preparación permanente, la actitud de servicio, la capacidad de respuesta ante eventualidades y la adecuada planificación y ejecución de sus funciones constituyen elementos clave para el éxito de la guianza y para el fortalecimiento del sector turístico en los territorios. 


</template>

<script>
export default {
  name: 'Tema3',
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
