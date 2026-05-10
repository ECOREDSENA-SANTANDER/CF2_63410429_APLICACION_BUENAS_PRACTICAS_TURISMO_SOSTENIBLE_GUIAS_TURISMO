<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Herramientas para la gestión sostenible del servicio de guianza turística',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del turismo, las tipologías turísticas, los impactos de la actividad, el desarrollo sostenible y la normatividad aplicable a la guianza turística en Colombia. Asimismo, busca fortalecer el conocimiento sobre el papel del guía como actor clave en la sostenibilidad, promoviendo prácticas responsables que integren aspectos económicos, socioculturales y ambientales, garantizando así un servicio de calidad, ético y comprometido con la conservación del patrimonio y el bienestar de las comunidades.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La sostenibilidad en turismo incluye principalmente las dimensiones:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deportiva, tecnológica y hotelera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comercial, política y recreativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Financiera, administrativa y aeroportuaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Económica, sociocultural y ambiental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende cuáles son las dimensiones de la sostenibilidad.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 2,
          texto:
            'Los indicadores de sostenibilidad propuestos por la OMT permiten:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar las normas de calidad turística.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir únicamente la satisfacción del turista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar la relación del turismo con la economía, la sociedad y el medio ambiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Valorar solo los atractivos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende cuáles son los indicadores de sostenibilidad.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes aspectos hace parte de los indicadores de sostenibilidad en turismo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Participación social.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Diseño de uniformes del guía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Decoración de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Venta de artesanías importadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende y conoce los aspectos que hacen parte de los indicadores de sostenibilidad en turismo.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 4,
          texto:
            'El organismo que acredita entidades certificadoras en criterios de sostenibilidad turística a nivel mundial es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'UNESCO.', esCorrecta: false },
            { id: 'b', texto: 'GSTC.', esCorrecta: true },
            { id: 'c', texto: 'SENA.', esCorrecta: false },
            { id: 'd', texto: 'ICOMOS.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia que comprende cuál es la entidad certificadora en criterios de sostenibilidad turística a nivel mundial.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 5,
          texto: 'Los criterios GSTC están organizados en:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Dos pilares.', esCorrecta: false },
            { id: 'b', texto: 'Tres pilares.', esCorrecta: false },
            { id: 'c', texto: 'Cuatro pilares.', esCorrecta: true },
            { id: 'd', texto: 'Seis pilares.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia que comprende cómo están organizados los criterios GSTC.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 6,
          texto: 'Uno de los pilares de los criterios GSTC es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Publicidad masiva.', esCorrecta: false },
            { id: 'b', texto: 'Recreación urbana.', esCorrecta: false },
            { id: 'c', texto: 'Transporte privado.', esCorrecta: false },
            { id: 'd', texto: 'Gestión sostenible.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia que comprende cuáles son los pilares de los criterios GSTC.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 7,
          texto: 'La sostenibilidad económica en turismo busca:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar los productos locales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asegurar la viabilidad a largo plazo de las actividades turísticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar el turismo sin planificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende el significado de sostenibilidad económica en turismo.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 8,
          texto:
            'Según la NTC 6507:2021, el plan de acción en guianza turística es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una herramienta de planificación estratégica para la prestación del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un requisito exclusivo de restaurantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un documento opcional sin valor operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una encuesta de satisfacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende qué es un plan de acción en guianza turística.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes elementos corresponde a una técnica de presentación del guía de turismo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evaluación de inventarios.', esCorrecta: false },
            { id: 'b', texto: 'Facturación del servicio.', esCorrecta: false },
            { id: 'c', texto: 'Proyección de la voz.', esCorrecta: true },
            { id: 'd', texto: 'Registro de equipaje.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los componentes de las técnicas de presentación del guía de turismo.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 10,
          texto:
            'De acuerdo con la NTC 6507:2021, el guía de turismo no debe conducir grupos de más de:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '15 personas.', esCorrecta: true },
            { id: 'b', texto: '20 personas.', esCorrecta: false },
            { id: 'c', texto: '12 personas.', esCorrecta: false },
            { id: 'd', texto: '10 personas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las técnicas de conducción de grupos de acuerdo a la normatividad.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 11,
          texto:
            'Una de las funciones del guía según el Decreto 1379 de 2021 es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Autorizar vuelos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar al gerente del hotel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar únicamente menús turísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar recorridos turísticos según requerimientos técnicos y normativos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las funciones del guía según el Decreto 1379 de 2021.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 12,
          texto: 'Antes del arribo de viajeros a una terminal, el guía debe:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Esperar en el hotel sin confirmar información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delegar toda la actividad al conductor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar contacto con el operador local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar la información y características de los viajeros.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende las funciones del guía de turismo al acompañar a los viajeros en un terminal de transporte.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 13,
          texto: 'El check-in en un hotel corresponde al proceso de:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Limpieza de habitaciones.', esCorrecta: false },
            { id: 'b', texto: 'Facturación de transporte.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Entrada y recepción del huésped.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Salida y pago final.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia que comprende el significado del proceso de check-in en un hotel.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 14,
          texto:
            'En la construcción de una encuesta de satisfacción, uno de los pasos es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar revisar la estructura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicarla sin prueba piloto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Redactar preguntas claras del cuestionario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la escala de evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los pasos en la construcción de una encuesta de satisfacción.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 15,
          texto:
            'Antes de aplicar formalmente una encuesta de satisfacción, se recomienda:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar el objetivo inicial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Omitir el análisis de resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicarla en redes sociales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Realizar una prueba piloto.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la importancia de aplicar formalmente una encuesta de satisfacción.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 16,
          texto: 'La sostenibilidad sociocultural se relaciona con:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso exclusivo de recursos tecnológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación del patrimonio local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El respeto por la identidad, cultura, valores y tradiciones de las comunidades anfitrionas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El aumento del consumo sin control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los elementos que componen la sostenibilidad sociocultural.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 17,
          texto: 'El Código Ético Mundial para el Turismo promueve:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La explotación del patrimonio cultural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La competencia desleal entre destinos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El beneficio económico sin regulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un turismo equitativo, responsable y sostenible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende los principios del Código Ético Mundial para el Turismo.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 18,
          texto:
            'Según la Ley 397 de 1997, el patrimonio cultural de la Nación está constituido por:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo monumentos arqueológicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente bienes inmuebles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Bienes y valores culturales que expresan la nacionalidad colombiana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente museos y bibliotecas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende cómo está constituido el patrimonio cultural de la nación de acuerdo con la ley 397 de 1997.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 19,
          texto:
            'En el avistamiento de aves, la charla de inducción tiene como propósito principal:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vender productos artesanales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar la interpretación ambiental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el contacto con la naturaleza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Brindar información clave para el desarrollo seguro y adecuado de la actividad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la importancia de la charla inicial en la guianza para la actividad de avistamiento de aves.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante que el guía de turismo aplique herramientas de gestión sostenible en su labor?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque eliminan la necesidad de planear las actividades turísticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque solo se enfocan en aumentar el número de turistas en un destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque facilitan la prestación de un servicio responsable, de calidad y en armonía con el entorno, la cultura y la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque le permiten reemplazar a otros prestadores de servicios turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia que comprende la importancia de que el guía de turismo aplique herramientas de gestión sostenible en su labor.',
          mensaje_incorrecto: 'Se recomienda revisar nuevamente el componente.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
