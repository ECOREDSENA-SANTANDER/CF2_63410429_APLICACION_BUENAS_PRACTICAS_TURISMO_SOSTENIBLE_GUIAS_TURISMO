<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Indicadores y fundamentos de sostenibilidad en turismo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 Los indicadores de sostenibilidad propuestos por la Organización Mundial del Turismo (OMT) son herramientas que permiten analizar cómo la actividad turística impacta la economía, la sociedad y el medio ambiente en un destino. Su utilidad principal consiste en apoyar la toma de decisiones para lograr un desarrollo turístico responsable y equilibrado. 
        .bg2.p-4
          p.mb-0.mb-lg-2.mt-lg-3.mx-lg-3 Estos indicadores permiten identificar si el turismo genera beneficios o impactos negativos, y orientan acciones para mejorar la gestión del servicio turístico. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema1/1.png', alt='')

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Indicadores de sostenibilidad en turismo (OMT)

    p.mb-5 A continuación, se presentan los principales indicadores de sostenibilidad en turismo propuestos por la OMT, los cuales permiten evaluar de manera integral cómo la actividad turística impacta los recursos naturales, el desarrollo económico y el entorno social, . Estos indicadores facilitan la toma de decisiones orientadas a un turismo responsable, equilibrado y sostenible en los territorios. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 1. 
          | ¿Qué evalúan los indicadores de sostenibilidad?
        .tabla-a.tab1
          table
            thead
              tr
                th Dimensión
                th ¿Qué permite identificar?
                th Ejemplos en la práctica
            tbody
              tr
                td Recursos naturales
                td Estado y uso de elementos como agua, aire, biodiversidad y energía.
                td Consumo de agua en hoteles, conservación de fauna.
              tr
                td Desarrollo económico
                td Beneficios económicos generados por el turismo.
                td Empleo local, ingresos por turismo.
              tr
                td Participación social
                td Nivel de involucramiento de la comunidad local.
                td Participación en decisiones turísticas.
              tr
                td Responsabilidad ambiental
                td Acciones para reducir impactos negativos.
                td Manejo de residuos, uso eficiente de recursos.

    .row.justify-content-center.mb-5
      .col-lg-5
        .titb.titul1.mb-0(data-aos="fade-left")
          img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
          h3.mb-0.text-white ¿Por qué son importantes? 
        .bg3.p-4
          p.mb-4.my-4 Los indicadores permiten: 
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Identificar impactos positivos y negativos del turismo.
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Evaluar si un destino es sostenible.
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Tomar decisiones informadas. 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Mejorar la calidad del servicio turístico. 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Promover el bienestar de las comunidades. 
      .col-lg-7
        img(src='@/assets/curso/tema1/2.png', alt='')

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Relación con estándares internacionales  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/3.svg', alt='')
      .col-lg-7
        img.img-t.mb-4(src='@/assets/curso/tema1/4.svg', alt='')
        p.mb-4 A nivel internacional, el Consejo Global de Turismo Sostenible (GSTC, por sus siglas en inglés) establece criterios que sirven como referencia para aplicar estos indicadores y para ello existen tres tipos de criterios: 
        ul.lista-ul.mb-0
          li.d-flex.mb-3
            i.fas.fa-bolt
            p.mb-0 #[b Para destinos:] orientados a gobiernos y gestores territoriales.  
          li.d-flex.mb-3
            i.fas.fa-bolt
            p.mb-0 #[b Para la industria:] dirigidos a hoteles y operadores turísticos.  
          li.d-flex.mb-3
            i.fas.fa-bolt
            p.mb-0 #[b Para eventos:] enfocados en reuniones, congresos y exposiciones. 
        
    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Pilares de la sostenibilidad en turismo 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bloque1.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Para comprender la sostenibilidad en el turismo, es importante considerar los lineamientos establecidos por el Consejo Global de Turismo Sostenible (GSTC), los cuales orientan la gestión responsable de los destinos turísticos. Estos criterios se estructuran en cuatro pilares fundamentales que permiten evaluar y promover prácticas equilibradas entre el desarrollo económico, la conservación ambiental, el respeto cultural y una adecuada planificación del turismo.
    
    p.mb-5 A continuación, se presentan dichos pilares y sus principales enfoques: 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 2. 
          | Criterios del GSTC en sus cuatro pilares fundamentales
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7
        .tabla-a
          table
            thead
              tr
                th Pilar
                th Criterios del GSTC
            tbody
              tr
                td Gestión sostenible
                td Planificación y organización del turismo.
              tr
                td Impactos socioeconómicos
                td Beneficios para la comunidad y economía local.
              tr
                td Impactos culturales
                td Protección de la identidad y patrimonio cultural.
              tr
                td Impactos ambientales
                td Conservación de recursos naturales.
      .col-lg-5
        .bg4.p-4
          p.mb-lg-5.mb-4 Aspecto clave para el guía de turismo 
          p.mb-0 Cada destino tiene características propias, por lo que estos indicadores deben adaptarse al contexto local. En este sentido, el guía de turismo cumple un papel importante al aplicar prácticas responsables que contribuyan al equilibrio entre el desarrollo turístico, la protección del entorno y el bienestar de las comunidades.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Sostenibilidad económica y gestión empresarial

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema1/6.svg')
      .col-lg-11.col-md-10
        p.mb-0 En el marco de la Política de Turismo Sostenible “Unidos por la Naturaleza” del Ministerio de Comercio, Industria y Turismo, se establece como propósito fortalecer el turismo en Colombia como una actividad productiva incluyente, responsable y sostenible. Esto implica que, además de generar beneficios económicos, el turismo debe contribuir a la conservación de los recursos naturales, la protección de la biodiversidad y el cuidado de los ecosistemas estratégicos del país.  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/7.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 Desde esta perspectiva, la sostenibilidad también promueve el fortalecimiento de las empresas del sector, orientándolas hacia mayores niveles de competitividad, rentabilidad y permanencia en el tiempo. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .bg5.p-4
          p.mb-0 De igual manera, el turismo sostenible genera oportunidades económicas para las comunidades locales, al tiempo que protege su identidad cultural, tradiciones y formas de vida; así, se busca un equilibrio entre el desarrollo del sector turístico y el bienestar de las poblaciones anfitrionas. Para ello, es fundamental la articulación entre operadores turísticos, autoridades y comunidades, quienes deben asumir un compromiso conjunto con el desarrollo sostenible, reconociendo el papel del turismo en el fortalecimiento del tejido social en los territorios.
      .col-lg-3
        img(src='@/assets/curso/tema1/8.svg')
      .col-lg-4
        p.mb-0 La política hace énfasis en la dimensión económica, entendida como la viabilidad a largo plazo de las actividades turísticas y sus efectos en la economía del territorio y en los actores de la cadena de valor (Epler Wood et al., 2019). Esta dimensión también abarca la distribución equitativa de los beneficios socioeconómicos del turismo, incluyendo la generación de empleo estable, ingresos y acceso a servicios sociales para las comunidades anfitrionas (Programa de las Naciones Unidas para el Medio Ambiente [PNUMA] & Organización Mundial del Turismo [OMT], 2007).   

    p.mb-0 El principio económico del turismo sostenible se orienta al fortalecimiento de un entorno empresarial estable, que impulse la cadena de valor, promueva la formalización y fomente el desarrollo de productos turísticos de calidad (Organización Mundial del Turismo [OMT], Centro de Comercio Internacional [ITC] & Marco Integrado Mejorado [EIF], 2017). 


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Sostenibilidad sociocultural 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema1/9.png', alt='')
      .col-lg-7
        p.mb-3 El guía de turismo en Colombia desempeña un papel fundamental en la promoción de la sostenibilidad sociocultural, en tanto es responsable de ofrecer un servicio de calidad que respete y valore las características culturales, sociales y humanas de los territorios. En este sentido, la Norma Técnica Colombiana NTC 6507:2021 establece la importancia de la planificación del servicio de guianza como un elemento clave para garantizar experiencias turísticas organizadas, seguras y satisfactorias.
        .bg2.p-4.p-lg-3
          p.mb-0.mb-lg-1.mt-lg-2.mx-lg-2 De acuerdo con esta norma, el plan de acción se concibe como una herramienta de planificación estratégica que permite organizar, describir e implementar el servicio de guianza turística, integrando aspectos como la ruta del recorrido, el diseño del itinerario, los recursos necesarios y los planes de contingencia, con el fin de responder de manera adecuada a las necesidades del usuario.

    p.mb-5 Para alcanzar estándares de calidad en la prestación del servicio, el guía de turismo debe aplicar diversas técnicas que fortalecen la interacción con los visitantes, la organización del grupo y la transmisión efectiva de la información. Estas técnicas se agrupan en tres categorías principales: presentación, comunicación y gestión de grupos, como se muestra a continuación: 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 3. 
          | Técnicas aplicadas en el servicio de guianza turística (NTC 6507:2021)
        .tabla-a.tab2.mb-2
          table
            thead
              tr
                th Técnicas de presentación
                th Técnicas de comunicación
                th Técnicas de gestión de grupos
            tbody
              tr
                td Proyección de la voz, dicción, uso adecuado del micrófono y técnicas de respiración.
                td Adaptación del mensaje a las características de la audiencia y a las condiciones del entorno.
                td Ubicación adecuada del guía dentro del grupo.
              tr
                td Contacto visual, postura, lenguaje corporal y actitud profesional.
                td Selección, organización y coherencia en la información transmitida.
                td Aplicación de normas de cortesía y manejo neutral del grupo.
              tr
                td Presentación personal y comportamiento acorde al contexto del servicio.
                td Uso adecuado de preguntas para dinamizar la interacción.
                td Desarrollo de dinámicas de grupo.
              tr
                td.align-middle(rowspan="3") Uso apropiado del estilo y vocabulario según el tipo de público.
                td Manejo del estrés durante la prestación del servicio.
                td Identificación y evaluación de riesgos.
              tr
                td Gestión eficiente del tiempo.
                td Manejo de crisis y resolución de conflictos.
              tr
                td Claridad en la explicación y priorización de elementos visuales.
                td Seguimiento y control del comportamiento del grupo durante el recorrido.
        figcaption Nota: adaptado de Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2021). Técnicas de presentación (NTC 6507). 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        .bg6.p-4.mb-4
          p.mb-0.mb-lg-1.mt-lg-1.mx-lg-1 El guía de turismo no debe conducir grupos superiores a 15 personas. En caso de atender personas con necesidades especiales (personas con discapacidad, adultos mayores, menores de edad, entre otros), se recomienda contar con al menos una persona de apoyo por cada cinco personas que requieran atención diferencial. 
        .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
          .col-lg-2.col-md-2.col-5
            img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema1/11.svg')
          .col-lg-10.col-md-10
            p.mb-0 Además de las técnicas presentadas en la tabla, el guía de turismo debe asumir un enfoque inclusivo y preventivo, orientado a garantizar la accesibilidad, la seguridad y el bienestar de todos los usuarios. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema1/10.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/12.svg', alt='')
      .col-lg-7
        p.mb-4 Se espera que:
        ul.lista-ul.mb-0
          li.d-flex.mb-4
            i.fas.fa-bolt
            p.mb-0 Reconozca y anticipe las posibles necesidades especiales de los visitantes, promoviendo condiciones de accesibilidad universal y un enfoque de diseño para todos.  
          li.d-flex.mb-4
            i.fas.fa-bolt
            p.mb-0 Adapte los recorridos turísticos para facilitar la participación de personas mayores o con requerimientos específicos, asegurando su movilidad, comodidad y disfrute de la experiencia.    
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 Ajuste las actividades y rutas considerando la seguridad infantil, implementando medidas de prevención y cuidado acordes con la edad y características de los menores.   
    
    p.mb-0 De esta manera, el servicio de guianza no solo cumple con estándares de calidad, sino que también contribuye a una experiencia turística más inclusiva, segura y socialmente responsable. 


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Sostenibilidad y gestión ambiental 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema1/13.svg')
          .col-lg-10
            p.mb-0 La sostenibilidad ambiental en el turismo implica el uso responsable y consciente de los recursos naturales, con el propósito de minimizar los impactos negativos de la actividad turística y garantizar la conservación de los ecosistemas para las generaciones futuras. Por ello, el guía de turismo cumple un rol clave como mediador entre el visitante y el entorno, promoviendo prácticas responsables, educación ambiental y comportamientos respetuosos durante el desarrollo de los recorridos. 
        p.mb-0 En coherencia con los principios de sostenibilidad sociocultural y económica previamente abordados, la gestión ambiental en la guianza turística debe integrarse desde la planificación del servicio (NTC 6507:2021), incorporando criterios de protección del entorno en el diseño del itinerario, la selección de rutas, el manejo de grupos y la implementación de planes de contingencia; esto permite no solo prevenir impactos ambientales, sino también generar conciencia en los visitantes sobre la importancia de conservar los recursos naturales. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img(src='@/assets/curso/tema1/14.png', alt='')
    
    p.mb-5 Además de las técnicas de presentación, comunicación y gestión de grupos, el guía debe asumir acciones concretas orientadas a la sostenibilidad ambiental, tales como: 

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/15.svg' alt='AvatarTop')
          p.mb-0.text-center Promover el uso adecuado de los recursos naturales, evitando prácticas que generen contaminación o deterioro del entorno (manejo de residuos, uso racional del agua y la energía).
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/16.svg' alt='AvatarTop')
          p.mb-0.text-center Sensibilizar a los visitantes sobre la importancia de la biodiversidad, los ecosistemas y su conservación, integrando mensajes educativos durante el recorrido. 
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/17.svg' alt='AvatarTop')
          p.mb-0.text-center Fomentar comportamientos responsables, como no extraer flora o fauna, respetar senderos establecidos y cumplir las normas del destino.  
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/18.svg' alt='AvatarTop')
          p.mb-0.text-center Identificar y gestionar riesgos ambientales, implementando medidas preventivas en el desarrollo de las actividades turísticas.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema1/19.svg' alt='AvatarTop')
          p.mb-0.text-center Articular su labor con políticas y normativas ambientales vigentes, contribuyendo a la protección de áreas naturales y al turismo sostenible en el territorio.  

    p.mb-5 La sostenibilidad y gestión ambiental no solo constituyen un componente técnico del servicio de guianza, sino también un compromiso ético y social que contribuye a la preservación del patrimonio natural, al fortalecimiento del turismo responsable y al desarrollo sostenible de los destinos. 

    p.mb-4 Para fortalecer la comprensión sobre la sostenibilidad ambiental en el turismo, se invita a consultar:

    .tarjeta.coll.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/20.svg')
        .col-md.col-lg-6
          h3 Anexo 1. Sostenibilidad y gestión ambiental en turismo. 
          .titulo-seg.mb-5
          p.mb-4 En este espacio se presenta información complementaria, que permite profundizar en conceptos clave, reconocer ejemplos prácticos y comprender mejor el papel de los diferentes actores en la gestión ambiental.
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_1_Sostenibilidad_y_gestion_ambiental_en_turismo.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-2
        img(src='@/assets/curso/tema1/21.svg')
      .col-lg-7
        p.mb-0 En este contexto, es importante que el guía de turismo comprenda que la sostenibilidad no debe abordarse de manera aislada en cada una de sus dimensiones, sino como un enfoque integral que se materializa en cada decisión que toma durante la prestación del servicio; esto implica que, en la práctica, cada acción (desde la planificación del recorrido, la interacción con los visitantes, hasta la selección de proveedores locales) debe responder simultáneamente a criterios económicos, socioculturales y ambientales. De esta manera, el guía no solo ejecuta un servicio turístico, sino que se convierte en un actor estratégico que contribuye al desarrollo sostenible del destino, fortaleciendo la competitividad del sector, la conservación del patrimonio y el bienestar de las comunidades locales. 
      .col-lg-3
        img(src='@/assets/curso/tema1/22.svg')


</template>

<script>
export default {
  name: 'Tema1',
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
