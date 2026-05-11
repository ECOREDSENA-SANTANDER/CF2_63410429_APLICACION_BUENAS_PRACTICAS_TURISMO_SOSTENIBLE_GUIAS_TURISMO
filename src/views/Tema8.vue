<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 8
      h1 Patrimonio cultural local

    .row.justify-content-center.align-items-center.mb-lg-4.mb-0(data-aos="fade-left")
      .col-lg-7
        p.mb-4 De acuerdo con la Ley 397 de 1997 (Ley General de Cultura de Colombia), en su artículo 4, el patrimonio cultural de la Nación se define como el conjunto de: 
        .bloque-texto-f.color-acento-contenido.mb-0.p-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          p.mb-5.bloque-texto-f__texto.mx-lg-5.mx-2.mt-lg-3 Bienes y valores culturales que son expresión de la nacionalidad colombiana, tales como las tradiciones, costumbres y hábitos, así como los bienes materiales e inmateriales, muebles e inmuebles, que poseen un especial interés histórico, artístico, estético, arquitectónico, urbano, arqueológico, ambiental, ecológico, lingüístico, sonoro, musical, audiovisual, fílmico, científico, testimonial, documental, literario, bibliográfico, museológico y antropológico, junto con las manifestaciones, productos y representaciones de la cultura popular. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema8/1.png', alt='')
    
    p.mb-5 Esta definición resalta que el patrimonio cultural no solo incluye elementos físicos, sino también expresiones vivas que reflejan la identidad, la historia y la diversidad cultural del país. 

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Patrimonio cultural en el ámbito local 

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.mb-lg-0.mb-4
        p.mb-4 Cada municipio de Colombia posee una riqueza cultural propia, construida a partir de sus tradiciones, prácticas sociales, saberes ancestrales y características territoriales. Este patrimonio local: 
        ul.lista-ul.mb-0.m11
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0.m1 Representa la identidad del territorio.  
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0.m1 Fortalece el sentido de pertenencia de la comunidad.
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0.m1 Contribuye al desarrollo cultural, social y económico.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema8/2.png')
      .col-lg-5
        p.mb-4 Con el propósito de proteger y promover esta riqueza, el país ha implementado estrategias como la Red Turística de Pueblos Patrimonio de Colombia, liderada por el Ministerio de Comercio, Industria y Turismo. Esta iniciativa busca: 
        ul.lista-ul.mb-0.m11
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0.m1 Visibilizar destinos con alto valor histórico y cultural.  
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0.m1 Fortalecer la conservación del patrimonio material e inmaterial.  
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0.m1 Impulsar el turismo cultural como motor de desarrollo local.  

    p.mb-4 #[b Municipios reconocidos como Pueblos Patrimonio,] que hacen parte de esta red son: 

    .row.justify-content-center.mb-lg-5.mb-4
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg14.p-4.h-100
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Aguadas, Caldas 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Barichara, Santander
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Ciénaga, Magdalena  
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Jardín, Antioquia  
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Guadalajara de Buga, Valle del Cauca 
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 Jericó, Antioquia  
      .col-lg-4.col-md-6.mb-lg-0.mb-4 
        .bg15.p-4.h-100
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Monguí, Boyacá  
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Honda, Tolima 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Playa de Belén, Norte de Santander 
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Salamina, Caldas  
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Girón (San Juan Girón), Santander  
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 Guaduas (Villa de Guaduas), Cundinamarca 
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .bg10.p-4.h-100
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Santa Cruz de Lorica, Córdoba  
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Santa Cruz de Mompox, Bolívar
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Santa Fé de Antioquia, Antioquia  
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 Villa de Leyva, Boyacá  
            li.d-flex.mb-2
              i.fas.fa-bolt
              p.mb-0 El Socorro, Santander  
            li.d-flex.mb-0
              i.fas.fa-bolt
              p.mb-0 Pore, Casanare  

    .titb.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema9/sub.svg')" alt='Imagen decorativa')
      h3.mb-0.text-white Características de los pueblos patrimonio, estos destinos se destacan por: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-5.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema8/4.png')
          .col-lg-7.ps-lg-0
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 Arquitectura representativa y bien conservada.  
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 Cultura autóctona y tradiciones vivas.  
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 Gastronomía típica del territorio.  
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 Entornos naturales de valor paisajístico.  
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Importancia histórica, vinculada al desarrollo del país.
        p.mb-4 El patrimonio cultural local constituye un elemento fundamental para comprender la diversidad y riqueza de Colombia. Su adecuada gestión y promoción, especialmente a través de iniciativas como la Red de Pueblos Patrimonio, permite no solo preservar la memoria histórica, sino también generar oportunidades de desarrollo sostenible para las comunidades. 
        p.mb-0 Estos destinos se caracterizan por tener una arquitectura diferenciada, cultura autóctona, gastronomía propia, entorno natural, y por guardar parte de la historia y del desarrollo del país. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img(src='@/assets/curso/tema8/3.png', alt='')

    p.mb-4 A continuación, se presentan algunos sitios reconocidos como patrimonio cultural, a través de los cuales es posible analizar la evolución de su reconocimiento en Colombia. Se recomienda revisar esta información para identificar los momentos más relevantes en su proceso de consolidación: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderB.slib(:datos="datosSlyder").bg18.p-lg-5.p-4

    p.mb-4 Se invita a explorar este pódcast, en el que se aborda la importancia de valorar la cultura local en el turismo. A través de una narración clara, se comprenderá cómo las tradiciones y las comunidades dan sentido a cada destino.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema8/5.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.bg16.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Valoración de la comunidad local y su cultura"
                :audio="require('@/assets/actividad/audio/end-game-success.mp3')"
            ).mb-0
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                

    separador
    #t_8_1.titulo-segundo.mb-5
      h2 8.1 Elementos prácticos para una adecuada interpretación de patrimonio (natural y cultural) 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-end.mb-4
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/tema8/6.png', alt='')
          .col-lg-9
            p.mb-0 La interpretación del patrimonio natural y cultural permite descubrir y comunicar los significados que otorgan valor a un lugar, una manifestación o un objeto; en este sentido, constituye una disciplina orientada a facilitar la comprensión del patrimonio por parte de los visitantes mediante experiencias significativas. Para ello, se apoya en estrategias comunicativas que favorecen la participación activa, promoviendo no solo la observación, sino también la reflexión, el reconocimiento y la valoración del entorno (Lazo Cruz & Arróspide Tehuay, 2011). 
        p.mb-4 Desde la perspectiva de la UNESCO, el patrimonio se clasifica en tres grandes categorías: cultural material, cultural inmaterial y natural; el primero comprende bienes tangibles como monumentos, sitios arqueológicos, obras artísticas y documentos históricos; el segundo incluye saberes, tradiciones, expresiones orales y prácticas culturales vivas; mientras que el patrimonio natural abarca paisajes, formaciones físicas, biológicas y áreas protegidas de especial valor para la humanidad. 
        .bg6.p-4
          p.mb-0 En este marco, el intérprete (especialmente el guía de turismo) requiere desarrollar conocimientos, habilidades comunicativas y estrategias pedagógicas que le permitan orientar al visitante de manera pertinente; su labor trasciende la transmisión de información, ya que busca generar conexiones entre el patrimonio y la experiencia personal de quien lo visita, favoreciendo procesos de aprendizaje, sensibilización y respeto por los entornos naturales y culturales. 
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema8/7.png', alt='')
    
    p.mb-4 Pero ¿cómo se transmite un mensaje interpretativo sobre el patrimonio natural y cultural? De acuerdo con la Guía de Interpretación del Patrimonio Natural y Cultural (Lazo Cruz & Arróspide Tehuay, 2011), se propone: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 9. 
          | Formas de transmisión del mensaje interpretativo del patrimonio
        .tabla-a.tab4.mb-2
          table
            thead
              tr
                th Aspecto
                th Interpretación directa
                th Interpretación indirecta
            tbody
              tr
                td Definición
                td Se desarrolla mediante la interacción presencial entre el guía y el visitante.
                td Se realiza a través de materiales y recursos sin mediación directa del guía.
              tr
                td Forma de interacción
                td Comunicación cara a cara, con posibilidad de diálogo, preguntas y retroalimentación.
                td Comunicación unidireccional mediante soportes informativos previamente elaborados.
              tr
                td Medios utilizados
                td Guianza, recorridos interpretativos, charlas, acompañamiento en sitio.
                td Folletos, carteles, señalética, audioguías, videos, paneles informativos, aplicaciones.
              tr
                td Rol del guía
                td Actúa como mediador, interpreta, adapta el mensaje según el público y genera conexión.
                td Diseña o apoya el diseño de contenidos que orienten al visitante de forma autónoma.
              tr
                td Participación del visitante
                td Activa; puede interactuar, preguntar, opinar y construir su experiencia en el momento.
                td Más autónoma; el visitante interpreta la información a partir de los recursos disponibles.
              tr
                td Ventajas
                td Mayor cercanía, personalización del mensaje y generación de experiencias significativas.
                td Permite acceso continuo a la información, incluso sin presencia del guía.
              tr
                td Limitaciones
                td Depende de la presencia del guía y del tiempo disponible.
                td Puede limitar la interacción y la profundización del mensaje interpretativo.
        figcaption Nota: adaptación de los principios de comunicación de la Guía de Interpretación del Patrimonio Natural y Cultural (Lazo Cruz & Arróspide Tehuay, 2011). 

    p.mb-4 A continuación, se presentan los elementos clave que deben considerarse para garantizar que el proceso de interpretación del patrimonio sea claro, significativo y acorde con los intereses del visitante. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 10. 
          | Elementos clave para la interpretación del patrimonio
        .tabla-a.t4.tab1.mb-0
          table
            thead
              tr
                th Elemento
                th Descripción
            tbody
              tr.bgr
                td Objetivo
                td Establecer una relación significativa entre los contenidos del patrimonio y los intereses del visitante, garantizando la comprensión, el sentido y la utilidad de la información presentada.
              tr
                td Labor del intérprete
                td Construir mensajes que conecten las experiencias del visitante con el espacio visitado; para ello, puede emplear ejemplos, comparaciones y relatos que faciliten la comprensión y la apropiación del


    separador
    #t_8_2.titulo-segundo.mb-5
      h2 8.2 Pasos a seguir en un proceso interpretativo del patrimonio natural y cultural 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema8/8.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 El desarrollo de un proceso interpretativo requiere una secuencia organizada de acciones que orienten la construcción y transmisión de mensajes significativos; no se trata únicamente de presentar información, sino de planificar experiencias que conecten el patrimonio con los intereses, conocimientos previos y expectativas de los visitantes. Cada paso debe contribuir a facilitar la comprensión, despertar el interés y promover la valoración del entorno natural y cultural. 

    p.mb-4 A continuación, se describen los pasos fundamentales que permiten estructurar una interpretación efectiva, coherente y centrada en el visitante, garantizando que el mensaje no solo sea comprendido, sino también apropiado y recordado. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 2.
          | Proceso interpretativo del patrimonio
        .bg9.p-lg-5.p-4.mb-2
          img.img-a.img-t(src='@/assets/curso/tema8/9.svg', alt='Se presenta una secuencia de seis pasos para desarrollar un proceso interpretativo del patrimonio. Inicia con la selección de un recurso tangible, seguido de la identificación de sus significados y conceptos intangibles asociados a valores universales y al público. Posteriormente, se plantea la construcción de un enunciado central que sintetiza su importancia, la elección de técnicas interpretativas adecuadas y, finalmente, la organización de ideas que faciliten la conexión y comprensión por parte del visitante.')
        figcaption Fuente: Guía de Interpretación del Patrimonio Natural y Cultural (Lazo Cruz & Arróspide Tehuay, 2011). 
    
    .row.justify-content-center.align-items-end.mb-0
      .col-lg-4.mb-lg-0.mb-4
        .bg6.p-4
          img.img-t.mb-4(src='@/assets/curso/tema8/10.svg', alt='')
          p.mb-0 Se recomienda que, en el recorrido interpretativo autoguiado, se utilicen recursos como paneles explicativos, folletos, exhibiciones y medios de audio, con el fin de facilitar la comprensión del patrimonio de manera autónoma por parte del visitante. 
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema8/11.png', alt='')
      .col-lg-3
        p.mb-0 En el caso del recorrido interpretativo guiado, es fundamental realizar una adecuada planificación y preparación del proceso, considerando las etapas antes de iniciar, durante el desarrollo del recorrido, al finalizar la experiencia y en la evaluación posterior, con el propósito de garantizar una experiencia organizada, significativa y coherente. 


    separador
    #t_8_3.titulo-segundo.mb-5
      h2 8.3 Registro de estado de conservación de los atractivos turísticos 

    p.mb-4 De acuerdo con la metodología para la elaboración del inventario de atractivos turísticos del Ministerio de Comercio, Industria y Turismo (2020), en Colombia se dispone de un conjunto de formularios que permiten registrar y valorar el estado de conservación de los atractivos turísticos. 

    p.mb-4 Estos se agrupan en dos grandes categorías: patrimonio cultural y sitios naturales, cada uno con sus respectivos instrumentos de registro: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6
        .titulo-sexto
          h5 Tabla 11. 
          | Clasificación de los atractivos turísticos
        .tabla-a.tabla-peq.tabla1
          table
            thead
              tr
                th Grupo
                th Categoría
                th Formulario
            tbody
              tr
                td.align-middle(rowspan="4") #[b Grupo 1]
                td Patrimonio cultural material
                td Formulario 1
              tr
                td Patrimonio cultural inmaterial
                td Formulario 2
              tr
                td Festividades y eventos
                td Formulario 3
              tr
                td Grupos de especial interés
                td Formulario 4
              tr
                td #[b Grupo 2]
                td Sitios naturales
                td Formulario 5
      .col-lg-6.d-none.d-lg-block
        .bg1.p-4
          img(src='@/assets/curso/tema8/12.png', alt='')

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Criterios de valoración del patrimonio cultural 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema8/13.png')
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img.img-t.img-a(src='@/assets/curso/tema8/14.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La valoración del patrimonio cultural se enfoca en la calidad del bien o manifestación, considerando características específicas según su naturaleza. 
        p.mb-0 En el caso del patrimonio cultural material, se analiza el estado de conservación, entendido como la integridad física y estética del bien, ya sea en su condición original o después de procesos de restauración. También se evalúa la constitución del bien, es decir, los materiales y técnicas de elaboración, los cuales pueden tener valor por su antigüedad, por estar en desuso o por representar avances tecnológicos. Finalmente, se considera la representatividad, relacionada con la importancia histórica, social o cultural del bien dentro de un contexto determinado. 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-4.mb-lg-0.mb-4
        .titulo-sexto
          h5 Tabla 12. 
          | Puntaje para la valoración patrimonio material – categoría calidad
        .tabla-a.tabla-peq.tabla3
          table
            thead
              tr
                th Criterio
                th Puntaje
            tbody
              tr
                td Estado de conservación
                td 21
              tr
                td Constitución del bien
                td 21
              tr
                td Representatividad
                td 28
            tfoot
              tr
                td Total
                td 70
      .col-lg-4.mb-lg-0.mb-4
        .bg17.p-lg-5.p-4.cen
          p.mb-0 Para el #[b patrimonio cultural inmaterial], la valoración se basa en su carácter social y simbólico. Se reconoce su naturaleza colectiva, al ser compartido por una comunidad; su condición tradicional, al transmitirse entre generaciones; su carácter anónimo, al no tener autor identificado; su espontaneidad, al surgir de manera natural; y su carácter popular, al reflejar la vida cotidiana de las comunidades. 
      .col-lg-4
        .titulo-sexto
          h5 Tabla 13. 
          | Puntaje para valoración patrimonio inmaterial – categoría calidad
        .tabla-a.tabla-peq.tabla2
          table
            thead
              tr
                th Criterio
                th Puntaje
            tbody
              tr
                td Colectiva
                td 14
              tr
                td Tradicional
                td 14
              tr
                td Anónimo
                td 14
              tr
                td Espontáneo
                td 14
              tr
                td Popular
                td 14
            tfoot
              tr
                td Total
                td 70
          
    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Valoración de festividades, eventos y grupos de especial interés 

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema8/15.png')
      .col-lg-4
        p.mb-4 Las festividades y eventos se evalúan considerando tres aspectos fundamentales: la organización del evento (programación, logística y cumplimiento), los beneficios socioculturales (arraigo, integración comunitaria y promoción del folclore) y los beneficios económicos locales (impacto en ingresos y calidad de vida). 
        p.mb-lg-0.mb-4 Por su parte, los grupos de especial interés se valoran principalmente a partir del respeto por las costumbres, entendido como la conservación auténtica de su legado cultural. 
      .col-lg-4
        .titulo-sexto
          h5 Tabla 14. 
          | Valoración de festividades y eventos
        .tabla-a.tabla-peq.tabla4
          table
            thead
              tr
                th Criterio
                th Puntaje
            tbody
              tr
                td Organización del evento 
                td 30
              tr
                td Beneficios socioculturales 
                td 20
              tr
                td Beneficios económicos locales 
                td 20
            tfoot
              tr
                td Total
                td 70

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Criterios de valoración de los sitios naturales 

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-lg-8
        p.mb-4 En el caso de los sitios naturales, la evaluación se centra en el estado de conservación ambiental del atractivo, considerando la ausencia de contaminación y el nivel de preservación de los ecosistemas. 
        .titulo-sexto.mb-4
          h5 Tabla 15. 
          | Criterios de valoración
        .tabla-a.tab6.mb-4
          table
            thead
              tr
                th Criterio
                th Descripción
            tbody
              tr
                td Calidad ambiental
                td Ausencia de contaminación del aire, agua, visual y sonora.
              tr
                td Estado de conservación
                td Condiciones de flora, fauna y grado de intervención humana.
              tr
                td Diversidad
                td Variedad de especies, paisajes y elementos naturales.
              tr
                td Singularidad
                td Características únicas o presencia de especies endémicas.
        p.mb-0 Estos criterios permiten identificar si el entorno se mantiene en condiciones adecuadas para su aprovechamiento turístico sostenible. 
      .col-lg-4.d-none.d-lg-block
        .bg1.p-4
          img.img-t(src='@/assets/curso/tema8/16.png', alt='')

    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Valoración del significado del atractivo turístico  

    p.mb-4 Además de la calidad, se evalúa el significado del atractivo turístico, el cual hace referencia al nivel de reconocimiento que tiene en los mercados turísticos. Este análisis es fundamental para determinar su potencial dentro de la planificación turística.  

    p.mb-4 El significado se establece según el alcance del reconocimiento del atractivo, como se presenta a continuación: 
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8.mb-lg-0.mb-4
        .titulo-sexto
          h5 Tabla 16. 
          | Significado del atractivo turístico
        .tabla-a.tab6.mb-0
          table
            thead
              tr
                th Nivel de significado
                th Descripción de reconocimiento
            tbody
              tr
                td Local
                td Únicamente en su entorno inmediato.
              tr
                td Regional
                td En uno o más departamentos o regiones.
              tr
                td Nacional
                td En todo el país.
              tr
                td Internacional
                td En dos o más países.
      .col-lg-4
        img.img-t.mb-5.d-none.d-lg-block(src='@/assets/curso/tema8/17.svg', alt='')
        p.mb-0 Este reconocimiento no se basa en percepciones subjetivas, sino en evidencia proveniente de fuentes como guías turísticas, paquetes de agencias de viaje, revistas especializadas, medios de comunicación y material cartográfico. 
        
    .tit.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/movil.svg')" alt='Imagen decorativa')
      h3.mb-0 Importancia de la valoración 

    p.mb-4 La valoración del estado de conservación y del significado de los atractivos turísticos permite: 

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema8/18.svg' alt='AvatarTop')
          p.mb-0.text-center Identificar cuáles bienes pueden considerarse recursos o atractivos turísticos.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema8/19.svg' alt='AvatarTop')
          p.mb-0.text-center Orientar procesos de planificación turística.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema8/20.svg' alt='AvatarTop')
          p.mb-0.text-center Diseñar productos turísticos acordes al territorio. 
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema8/21.svg' alt='AvatarTop')
          p.mb-0.text-center Definir mercados objetivo para la promoción y comercialización. 
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-4
          img.img-t.img-a.my-2.mb-4(src='@/assets/curso/tema8/22.svg' alt='AvatarTop')
          p.mb-0.text-center Priorizar acciones de fortalecimiento y conservación.

    p.mb-0 Cuando un bien únicamente posee reconocimiento local, se considera un recurso turístico con potencial de desarrollo. En estos casos, es necesario implementar estrategias de mejora y promoción que permitan su posicionamiento en niveles regionales, nacionales o internacionales. 


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Puerto, murallas y conjunto monumental de Cartagena de Indias (1984).',
        texto:
          'Este conjunto incluye el puerto, las fortificaciones y el centro histórico de Cartagena. Fue inscrito en la lista de Patrimonio Mundial el 1 de diciembre de 1984, lo que fortaleció la protección del sitio y consolidó a la ciudad como un importante destino turístico y de eventos.',
        imagen: require('@/assets/curso/tema8/23.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Parque Nacional Natural Los Katíos (1994).',
        texto:
          'Creado en 1974, este parque protege ecosistemas estratégicos de gran biodiversidad. Es reconocido como un punto clave de conexión ecológica entre Centroamérica y Sudamérica, y fue declarado Patrimonio de la Humanidad en 1994.',
        imagen: require('@/assets/curso/tema8/24.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Centro Histórico de Santa Cruz de Mompox (1995).',
        texto:
          'Destacado por su arquitectura colonial de influencia andaluza, organizada alrededor de patios interiores. Fue declarado monumento nacional en 1959 y posteriormente inscrito como Patrimonio Mundial en 1995.',
        imagen: require('@/assets/curso/tema8/25.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Parque Arqueológico de San Agustín (1995).',
        texto:
          'Ubicado en la región andina, alberga uno de los conjuntos arqueológicos más importantes de América Latina, con esculturas y vestigios de culturas precolombinas asociados a prácticas religiosas y funerarias.',
        imagen: require('@/assets/curso/tema8/26.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Parque Arqueológico de Tierradentro (1995).',
        texto:
          'Este parque, ubicado en el Cauca, contiene hipogeos (tumbas subterráneas) que evidencian rituales funerarios de culturas prehispánicas. Fue declarado reserva en 1931 y posteriormente reconocido por la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO) en 1995.',
        imagen: require('@/assets/curso/tema8/27.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Santuario de Fauna y Flora de Malpelo (2006).',
        texto:
          'Situado en el océano Pacífico, a 490 km de Buenaventura, este santuario protege ecosistemas marinos y terrestres. Es un área clave para la biodiversidad y la investigación científica, especialmente por su riqueza en especies marinas.',
        imagen: require('@/assets/curso/tema8/28.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Paisaje Cultural Cafetero (2011).',
        texto:
          'Comprende regiones de los andes colombianos donde se cultiva café, principalmente en Antioquia, Caldas, Risaralda, Quindío y Valle del Cauca. Representa una cultura, economía y tradición construidas desde el siglo XIX, reconocidas por su valor excepcional.',
        imagen: require('@/assets/curso/tema8/29.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sistema Vial Andino Qhapaq Ñan (2014).',
        texto:
          'Red de caminos de origen inca que conecta varios países andinos. En Colombia, abarca 693 km en el departamento de Nariño. Este sistema refleja avances en ingeniería, organización social y prácticas culturales de las civilizaciones andinas. ',
        imagen: require('@/assets/curso/tema8/30.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
