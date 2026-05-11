<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 9
      h1 Fichas necesarias en turismo

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-7
        p.mb-4 Ficha para inventario fotográfico: en el proceso de elaboración del inventario turístico de los recursos y atractivos de una región, es fundamental mantener un registro organizado de la información visual; por esta razón, se recomienda incluir al menos dos imágenes originales en alta resolución por cada recurso o atractivo, asegurando el registro adecuado de la fuente.
        .bg2.p-4
          p.mb-0.mb-lg-3.mt-lg-3.mx-lg-2 Asimismo, es importante consolidar un archivo independiente que contenga todas las imágenes utilizadas, debidamente clasificadas y referenciadas, con el fin de facilitar su consulta, verificación y uso posterior. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema9/1.png', alt='')
    
    p.mb-4 El formato sugerido se basa en la metodología para la elaboración del inventario de atractivos turísticos del Ministerio de Comercio, Industria y Turismo (2020). No obstante, existen otros modelos de ficha para inventario fotográfico que también pueden ser utilizados como referencia, como el que se presenta a continuación: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.mb-lg-0.mb-5
        .titulo-sexto
          h5 Figura 3.
          | Ficha de fotografía
        .bg9.p-5.mb-2 
          img.img-t.img-a.mt-lg-4.mb-lg-4(src='@/assets/curso/tema9/2.svg', alt='Se presenta la clasificación de los servicios ecosistémicos en cuatro categorías principales: soporte, abastecimiento, regulación y culturales, destacando su función en el equilibrio ambiental, el bienestar humano y el aprovechamiento sostenible de los recursos naturales.')
        figcaption Nota: Ministerio de Comercio, Industria y Turismo (2020). 
      .col-lg-8
        .titulo-sexto
          h5 Tabla 17. 
          | Ficha técnica de registro fotográfico
        .tabla-t5
          table
            colgroup
              col.col-1
              col.col-2
            tbody
              tr
                td(colspan="2") Título:
              tr
                td Fecha de la fotografía (DD/MM/AAAA)
                td #[.tg Para diligenciar]
              tr
                td Lugar
                td #[.tg Para diligenciar]
              tr
                td Autor
                td #[.tg Para diligenciar]
              tr
                td Material de la imagen (impreso/diapositiva/negativo)
                td #[.tg Para diligenciar]
              tr
                td Soporte de la imagen (papel, metal, digital, plástico)
                td #[.tg Para diligenciar]
              tr
                td Dimensiones de la imagen (13,4 X 7,5 cm)
                td #[.tg Para diligenciar]
              tr
                td Descripción de la imagen (contexto, nombre del establecimiento, curso)
                td #[.tg Para diligenciar]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg12.p-lg-5.p-4
          p.mb-0 #[b Nota:] la información requerida es importante para la documentación, conservación y difusión de las imágenes. En caso de no contar con la información, es posible entregar la ficha incompleta.  

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Ficha de registro en información de avistamiento de fauna 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema9/17.png', alt='')
      .col-lg-8
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-9
            p.mb-lg-0.mb-4 El avistamiento de aves, de acuerdo con el manual de operación turística del departamento del Guaviare, se define como el disfrute del entorno natural mediante la observación e identificación de aves en su hábitat. Esta actividad no solo facilita el contacto directo con la naturaleza, sino que también promueve el respeto por los ecosistemas y el reconocimiento de la biodiversidad de cada territorio.
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/tema9/18.svg', alt='')
        p.mb-4 En concordancia, la guía de buenas prácticas para el aviturismo en Colombia establece que esta actividad comprende un conjunto de acciones orientadas a facilitar la observación de aves con fines recreativos, educativos o científicos. Por tanto, el aviturismo representa tanto una experiencia significativa para el visitante como una oportunidad de desarrollo económico para las comunidades locales.  
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-8
            .bg2.p-lg-2.p-4
              p.mb-0.mx-lg-2.mb-lg-1.mt-lg-1 Desde el enfoque de la interpretación ambiental, esta actividad debe asumirse como un proceso de comunicación que permite comprender las relaciones entre el patrimonio natural y cultural. En este sentido, el avistamiento de aves trasciende la simple observación, convirtiéndose en una experiencia educativa en la que interactúan el guía, el turista y la comunidad.  
          .col-lg-4.d-none.d-lg-block
            .bg1.p-4
              img.img--a.img-t.mb-lg-2.mt-lg-2(src='@/assets/curso/tema9/19.png', alt='')
    
    p.mb-4 El guía de turismo desempeña un rol fundamental como mediador del conocimiento, orientando al visitante y facilitando una conexión más profunda con el entorno. Esta labor implica adaptar la interpretación a las características del territorio, fortaleciendo la identidad del destino y promoviendo la sensibilización ambiental. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema9/20.svg')
      .col-lg-11.col-md-10
        p.mb-0 Previo al desarrollo de la actividad, se recomienda realizar una charla de inducción donde se informe sobre aspectos clave como duración del recorrido, condiciones del terreno, especies posibles de observar, medidas de seguridad y equipamiento necesario. Esto contribuye a una experiencia organizada, segura y satisfactoria. 

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Organización de la operación del avistamiento de aves 
    
    p.mb-5 A continuación, se presenta la organización de la actividad en tres momentos: antes, durante y después. 

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Antes de la actividad 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-md-0.mb-4
        img.ima9(src='@/assets/curso/tema9/9.png', alt='')
        .bg19.p-4.cir
          h5.mb-4.mt-lg-5 Actores involucrados 
          p.mb-0 Policía de turismo, gestión del riesgo, grupos de investigación, asociaciones de guías, agencias operadoras, operadores rurales, establecimientos de alojamiento, servicios de alimentación y transporte.
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0
        img.ima9(src='@/assets/curso/tema9/10.png', alt='')
        .bg20.p-4.cir1
          h5.mb-4.mt-lg-5 Procesos 
          p.mb-0.mb-lg-0.mb-md-4 Preparación del escenario, gestión de permisos, confirmación de reservas, asignación de guías, capacitación, logística de hospedaje, alimentación y transporte, acompañamiento técnico. 

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Durante la actividad 

    .row.justify-content-center.mb-5
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-md-0.mb-4
        img.ima9(src='@/assets/curso/tema9/13.png', alt='')
        .bg21.p-4.cir2
          h5.mb-4.mt-lg-5 Actores involucrados 
          p.mb-0.mb-lg-4.mb-md-4 Guías de turismo, operadores, agencias, gestión del riesgo, servicios turísticos. 
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0
        img.ima9(src='@/assets/curso/tema9/14.png', alt='')
        .bg22.p-4.cir3
          h5.mb-4.mt-lg-5 Procesos 
          p.mb-0 Coordinación en campo, supervisión, activación de planes de emergencia, desarrollo de la guianza e interpretación ambiental. 

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Después de la actividad 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-prima.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema9/3.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4.my-lg-5
            p.mb-0 Monitoreo ambiental, mantenimiento del escenario, evaluación del servicio, mejora continua, toma de decisiones. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        img.img-t.mb-4.d-none.d-lg-block(src='@/assets/curso/tema9/5.svg')
        p.mb-0 Toda esta información se fundamenta en el Manual de operación turística para el avistamiento de aves en el Guaviare, el cual constituye un referente técnico clave para la planificación, organización y ejecución de actividades de turismo de naturaleza en este territorio. Este documento proporciona lineamientos claros sobre el manejo de visitantes, la conservación de los ecosistemas, la minimización de impactos ambientales y el comportamiento responsable durante las experiencias de avistamiento de aves. Asimismo, orienta a los actores del sector turístico en la implementación de buenas prácticas relacionadas con la seguridad, la interpretación ambiental y el respeto por la biodiversidad, permitiendo una gestión adecuada de situaciones que puedan presentarse durante la operación turística. En este sentido, el manual no solo respalda la información presentada, sino que también garantiza que las acciones propuestas se encuentren alineadas con criterios de sostenibilidad, calidad del servicio y normatividad vigente en turismo de naturaleza. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img(src='@/assets/curso/tema9/4.png', alt='')

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Orientación para el uso de las fichas en el proceso de aprendizaje: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/tema9/6.png', alt='')
      .col-lg-10
        p.mb-4 Las siguientes fichas se presentan como ejemplos orientadores para el aprendiz, con el propósito de facilitar el desarrollo de procesos de seguimiento, evaluación e identificación de riesgos en actividades de aviturismo. Estas herramientas no deben entenderse como formatos rígidos, sino como guías prácticas que pueden ser adaptadas según las características del territorio, el tipo de actividad turística y las condiciones específicas del entorno. 
        .bg6.p-4
          p.mb-0 En el contexto de la formación, su uso permite fortalecer competencias relacionadas con la observación, análisis crítico y toma de decisiones, ya que el aprendiz podrá identificar situaciones reales o potenciales que afectan la calidad del servicio, la seguridad de los visitantes y la conservación del entorno natural. 

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Ficha de seguimiento y mejora

    p.mb-4 Esta ficha tiene como finalidad evaluar de manera periódica el estado de diferentes componentes de la actividad turística, permitiendo identificar fortalezas, aspectos por mejorar y establecer compromisos concretos de acción. A través de su diligenciamiento, el aprendiz desarrolla la capacidad de analizar variables clave como la capacidad de carga, el estado de los recursos, las prácticas de sostenibilidad y la calidad del servicio, promoviendo una mejora continua en la operación turística. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto
          h5 Tabla 18. 
          | Ejemplo de ficha de seguimiento
        table.tabla-t6
          colgroup
            col.col-1
            col.col-2
            col.col-3
          thead
            tr
              th Elemento
              th Estado actual
              th Compromiso de mejora
          tbody
            tr
              td Capacidad de carga turística
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Estado de los senderos
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Acuerdos de conservación
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Buenas prácticas de avistamiento
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Perfil del avistador
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Procesos de interpretación
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Seguridad
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Trabajo comunitario
              td.tg Para diligenciar
              td.tg Para diligenciar
            tr
              td Encadenamiento productivo
              td.tg Para diligenciar
              td.tg Para diligenciar

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Ficha de identificación de riesgos 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema9/7.svg', alt='')
          .col-lg-8
            p.mb-0 Por su parte, esta ficha está orientada a la identificación anticipada de riesgos, entendidos como aquellas situaciones, condiciones o comportamientos que pueden afectar la seguridad, la experiencia del visitante o el equilibrio del entorno. Su uso permite al aprendiz reconocer posibles amenazas, analizar sus causas y proponer medidas de manejo adecuadas, fortaleciendo así una cultura de prevención y gestión responsable del riesgo en actividades de turismo de naturaleza. 

      .col-lg-6
        .titulo-sexto
          h5 Tabla 19. 
          | Ejemplo de fichas de identificación de riesgos
        table.tabla-t7
          colgroup
            col.col-1
            col.col-2
            col.col-3
          
          thead
            tr
              th Riesgo identificado
              th Condición o acto inseguro
              th Medidas de manejo
          
          tbody
            tr
              td.tg Para diligenciar
              td.tg Para diligenciar
              td.tg Para diligenciar
          
            tr
              td
              td
              td
          
            tr
              td
              td
              td

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6
        p.mb-4 Recomendaciones para la guianza en aviturismo y así garantizar una experiencia de calidad: 
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Trabajar con grupos pequeños para facilitar la observación.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Identificar correctamente las especies (visualmente y por sonido).  
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Manejar nomenclatura científica y nombres comunes en diferentes idiomas. 
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Conocer ciclos de vida, migración y comportamiento de las aves.  
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Explicar claramente la ubicación de las especies para facilitar su observación.  
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Evitar el uso inadecuado de luces directas sobre los animales.  
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Mantener comunicación constante entre guías y actores locales.  
          li.d-flex.mb-0
            i.fas.fa-check
            p.mb-0 Brindar explicaciones claras que enriquezcan la experiencia del visitante. 
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema9/8.png', alt='')
    
    p.mb-0 El uso de estas fichas se complementa con la implementación de buenas prácticas en la guianza, las cuales contribuyen a garantizar experiencias de calidad, seguras y respetuosas con el entorno. En este sentido, aspectos como el manejo adecuado de grupos, el conocimiento técnico de las especies, la comunicación efectiva y el respeto por la fauna y los ecosistemas, se convierten en elementos clave que deben ser considerados tanto en el seguimiento como en la identificación de riesgos. 


</template>

<script>
export default {
  name: 'Tema9',
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
