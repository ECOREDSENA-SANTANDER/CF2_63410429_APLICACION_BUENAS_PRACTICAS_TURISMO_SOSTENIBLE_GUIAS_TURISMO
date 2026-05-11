<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Operación del servicio en contextos turísticos

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-3.d-none.d-lg-block
            img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema4/2.svg')
          .col-lg-9
            p.mb-0 La operación del servicio en contextos turísticos comprende el conjunto de acciones que el guía de turismo realiza para garantizar una atención organizada, segura y de calidad en los diferentes momentos del servicio. Las acciones incluyen la recepción de los viajeros, su traslado, el acompañamiento durante la estadía y la coordinación de actividades en los distintos escenarios donde se desarrolla la experiencia turística, como terminales de transporte, establecimientos de alojamiento y destinos de visita. 
        p.mb-0 En este proceso, el guía cumple un rol clave como facilitador, orientador y mediador entre el visitante, los prestadores de servicios y el entorno; su desempeño influye directamente en la percepción del servicio, la satisfacción del usuario y la imagen del destino. Por ello, es fundamental que actúe con planificación, responsabilidad, capacidad de respuesta y enfoque en la calidad del servicio. 
      .col-lg-5.d-none.d-lg-block
        .bg1.p-4
          img(src='@/assets/curso/tema4/1.png', alt='')


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Llegada y salida de hoteles 

    p.mb-4 El guía de turismo desempeña un papel fundamental como facilitador durante los procesos de llegada y salida de los viajeros en los establecimientos de alojamiento; su función consiste en orientar, acompañar y coordinar las actividades relacionadas con el #[em check-in] y el #[em check-out], asegurando que estos se desarrollen de manera ágil, organizada y confortable para el huésped.
    
    .row.justify-content-center.mb-lg-5.mb-4
      .col-lg-6.col-md-6.mb-lg-0.mb-4
        .bg10.p-lg-5.p-4.h-100
          img.mb-4.img-t(src='@/assets/curso/tema4/3.svg')
          p.mb-0 El #[em check-in] corresponde al proceso de ingreso y recepción de los visitantes en el hotel. Generalmente, se realiza en la recepción a las 2:00 p. m. aproximadamente, aunque puede variar según las políticas del establecimiento. Durante este procedimiento, se registran los datos personales del huésped, se valida o formaliza la reserva, se entregan las llaves o tarjetas de acceso y se brinda información relevante sobre los servicios, instalaciones y normas del lugar.  
      .col-lg-6.col-md-6.mb-lg-0.mb-4
        .bg11.p-lg-5.p-4.h-100
          img.mb-4.img-t(src='@/assets/curso/tema4/4.svg')
          p.mb-0 Por su parte, el #[em check-out] hace referencia al proceso de salida del huésped, el cual suele efectuarse hacia las 12:00 m, aproximadamente; en esta etapa, se entregan las llaves o tarjetas de acceso y se realiza el pago de consumos adicionales, si los hay. El incumplimiento del horario establecido puede generar cargos adicionales, conforme a las políticas internas del establecimiento. 

    p.mb-4 El guía de turismo debe anticiparse a las necesidades del viajero, brindando orientación clara antes, durante y después de la estadía, con el propósito de garantizar una experiencia satisfactoria y evitar inconvenientes durante estos procesos. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        .titulo-sexto
          h5 Tabla 5. 
          | Aspectos clave en la llegada y salida de hoteles
        .tabla-a.t4.tab1.mb-2
          table
            thead
              tr
                th Momento
                th Acciones del guía de turismo
            tbody
              tr.bgr
                td Antes del #[em check-in]
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Verificar que el hotel cumpla con los servicios previamente acordados con la agencia de viajes.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Coordinar con el establecimiento los detalles de la llegada del grupo.
              tr
                td Durante el #[em check-in]
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Facilitar el registro de los viajeros, apoyando la entrega de documentos de identificación.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Acompañar la asignación de habitaciones.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Recordar a los viajeros portar documento de identidad o pasaporte.
              tr.bgr
                td Durante la estadía
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Informar sobre políticas del hotel (horarios, servicios, normas internas) para evitar incumplimientos.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Mantener comunicación con la agencia en caso de requerir activación de protocolos de servicio.
              tr
                td Antes del #[em check-out]
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Informar con anticipación la hora de salida establecida por el hotel.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Verificar que los viajeros estén preparados para el proceso de salida.
              tr.bgr
                td Durante el #[em check-out]
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Es necesario confirmar que se realice la entrega de llaves o tarjetas de ingreso.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Verificar el pago de consumos adicionales.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Apoyar en la coordinación de salida del grupo.
              tr
                td Situaciones especiales
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Informar oportunamente al hotel en caso de retrasos de los viajeros.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Gestionar soluciones en coordinación con la agencia y el establecimiento.
        figcaption Nota: adaptación de González Molina et al., (2023).


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Llegada y salida de restaurantes 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema4/5.svg')
      .col-lg-11.col-md-10
        p.mb-0 El guía de turismo desempeña un papel clave en la experiencia del visitante dentro de los establecimientos gastronómicos. Su función no se limita al acompañamiento, sino que incluye orientar, facilitar la interacción con el servicio y apoyar en momentos estratégicos como la llegada, la permanencia y la salida del restaurante. De acuerdo con el Ministerio de Comercio, Industria y Turismo (MinCIT, 2022) y los lineamientos de calidad del ICONTEC, el guía actúa como mediador para garantizar que la atención se desarrolle de manera organizada, clara y satisfactoria. 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 6. 
          | Rol del guía en el servicio de restaurante
        .tabla-a.tab3
          table
            thead
              tr
                th Momento del servicio
                th Función del guía
                th Acciones del guía
                th Orientación o verificación
                th Propósito
            tbody
              tr
                td Llegada al restaurante
                td Recibir, verificar y orientar.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Recibir al grupo de manera cordial.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Verificar reserva, número de personas y horario.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Coordinar el ingreso con el personal del establecimiento.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Facilitar la organización del grupo.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Ubicación de mesas.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Baños.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Normas del lugar.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Tiempo estimado de atención.
                td Organizar el ingreso y generar confianza en el visitante.
              tr
                td Durante la permanencia
                td Acompañar y mediar.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Mantenerse atento a las necesidades del visitante.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Apoyar la comunicación con el restaurante.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Garantizar acompañamiento permanente.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Menú.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Ingredientes.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Restricciones alimentarias.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Tiempos de servicio.
                td Garantizar una experiencia cómoda, clara y satisfactoria.
              tr
                td Salida del restaurante
                td Supervisar y cerrar el servicio.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Verificar que el grupo esté completo.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Revisar objetos personales.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Apoyar el proceso de pago si es necesario.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Confirmar que no hubo inconvenientes.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Organizar la continuidad del itinerario.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Estado final del servicio.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Cumplimiento del itinerario.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Coordinación de salida del grupo.
                td Evitar inconvenientes y dar continuidad organizada al recorrido.

    .bg12.mb-0
      .row.justify-content-center.align-items-center
        .col-lg-7(data-aos="fade-left")
          .p-4
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-3.d-none.d-lg-block
                img(src='@/assets/curso/tema4/7.svg')
              .col-lg-9
                p.mb-0 Orientar al visitante en la llegada y salida del restaurante es una tarea que exige del guía de turismo habilidades de comunicación, organización y servicio. Más que acompañar físicamente al grupo, el guía debe generar confianza, brindar información útil y facilitar que el servicio se preste en condiciones de orden, comodidad y buen trato. Así, su labor fortalece la calidad de la experiencia turística y responde a su función profesional de orientar, instruir y asistir al visitante durante el desarrollo del recorrido (MinCIT, 2022). 
        .col-lg-5.col-md-9.col-12.mb-lg-0.mb-0(data-aos="fade-right")
          img(src='@/assets/curso/tema4/6.png')
        

    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Llegada y salida de embarcaciones (marítimas, fluviales). 

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        .bg4.p-4
          img.img-t(src='@/assets/curso/tema4/8.png', alt='')
      .col-lg-7
        p.mb-4 El guía de turismo cumple un rol fundamental en la coordinación y acompañamiento del visitante durante los procesos de embarque y desembarque. Su función principal es orientar, prevenir riesgos y garantizar que el servicio se desarrolle de manera segura, organizada y acorde con la normatividad vigente. 
        .bg2.p-4
          p.mb-0.mb-lg-1.mt-lg-2.mx-lg-2 Desde el inicio, el guía debe asegurar condiciones básicas del servicio, brindar información clara y facilitar la movilidad del grupo, especialmente en espacios como muelles o embarcaderos, donde existen mayores riesgos. En este contexto, entidades como la Dirección General Marítima enfatizan la importancia de utilizar transporte autorizado, verificar condiciones de seguridad y cumplir las normas de navegación.

    p.mb-4 Durante todo el proceso, el guía actúa como mediador entre el visitante y los operadores del servicio, manteniendo una actitud preventiva, atenta y profesional. Esto permite que la experiencia sea organizada, segura y satisfactoria, en coherencia con los lineamientos del Ministerio de Comercio, Industria y Turismo. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 7. 
          | Acciones del guía en el servicio de embarcaciones
        .tabla-a.tab3
          table
            thead
              tr
                th Momento del servicio
                th Función del guía
                th Acciones del guía
                th Aspectos
                th Propósito
            tbody
              tr
                td Llegada (arribo / desembarque)
                td Recibir, orientar y prevenir riesgos.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Recibir al grupo de manera cordial.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Verificar número de pasajeros, horario y punto de desembarque.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Confirmar ruta y condiciones del servicio.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Organizar el desplazamiento en muelle o embarcadero.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Normas de seguridad.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Movilización segura en el muelle.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Manejo del equipaje.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Condiciones del entorno (clima, superficie, señalización).
                td Garantizar un ingreso seguro, organizado y generar confianza en el visitante.
              tr
                td Durante el embarque o desembarque
                td Acompañar, coordinar y mediar.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Supervisar que el abordaje o descenso se realice de forma segura.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Apoyar a personas con necesidades especiales.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Coordinar con el personal de la embarcación.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Evitar desorden o improvisación.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Cumplimiento de protocolos de seguridad.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Uso adecuado de accesos (rampas, escaleras).
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Organización del grupo.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Comunicación con la tripulación.
                td Prevenir riesgos y asegurar un proceso ordenado y controlado.
              tr
                td Salida (zarpe o cierre del servicio)
                td Supervisar, verificar y dar continuidad.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Confirmar que todos los pasajeros estén completos.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Verificar que no queden pertenencias.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Orientar sobre la siguiente actividad.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Asegurar el cierre organizado del servicio.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Estado final del grupo.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Cumplimiento del itinerario.
                    li.d-flex.mb-2
                      i.fas.fa-circle
                      p.mb-0 Información sobre rutas, horarios y próximos destinos.
                td Evitar inconvenientes y garantizar continuidad eficiente del recorrido.



























</template>

<script>
export default {
  name: 'Tema4',
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
