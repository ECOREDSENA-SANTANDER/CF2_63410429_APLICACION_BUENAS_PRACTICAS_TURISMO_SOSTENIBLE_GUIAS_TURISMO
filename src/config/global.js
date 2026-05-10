export default {
  global: {
    Name:
      'Herramientas para la gestión sostenible del servicio de guianza turística',
    Description:
      'El componente formativo herramientas para la gestión sostenible del servicio de guianza turística, desarrolla en el aprendiz la capacidad para aplicar herramientas que orientan la gestión sostenible del servicio de guianza turística, integrando las dimensiones económica, sociocultural y ambiental. Asimismo, fortalece la organización del servicio, la atención al usuario y la implementación de normas técnicas de calidad vigentes en el sector turístico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Indicadores y fundamentos de sostenibilidad en turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sostenibilidad económica y gestión empresarial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sostenibilidad sociocultural',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sostenibilidad y gestión ambiental ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión del servicio de guianza turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Conocimiento integral y cumplimiento normativo del guía de turismo ',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Operación del servicio en contextos turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Chequeo de turistas con y sin equipaje en terminales',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Operación del servicio en contextos turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Llegada y salida de hoteles',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Llegada y salida de restaurantes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Llegada y salida de embarcaciones (marítimas, fluviales).',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Modelos y tipos de encuesta de satisfacción de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Código de ética del turismo y del guía de turismo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Carta sobre turismo cultural ICOMOS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Patrimonio cultural local',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo:
              'Elementos prácticos para una adecuada interpretación de patrimonio (natural y cultural)',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Pasos a seguir en un proceso interpretativo del patrimonio natural y cultural',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo:
              'Registro de estado de conservación de los atractivos turísticos ',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Fichas necesarias en turismo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo:
          'Pautas y normas de comportamiento en sitios de patrimonio natural (espacios rurales y áreas protegidas)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de desarrollar la actividad turística de manera responsable, equilibrando los aspectos económicos, socioculturales y ambientales para beneficiar a las generaciones presentes y futuras.',
    },
    {
      termino: 'Guianza turística',
      significado:
        'Servicio profesional mediante el cual un guía orienta, acompaña, informa y asiste a los visitantes durante una experiencia turística.',
    },
    {
      termino: 'Indicadores',
      significado:
        'Herramientas o variables que permiten medir, analizar y evaluar el comportamiento del turismo en un destino.',
    },
    {
      termino: 'Gestión empresarial',
      significado:
        'Conjunto de acciones de planeación, organización y control que permiten que una empresa turística funcione de manera eficiente y sostenible.',
    },
    {
      termino: 'Calidad',
      significado:
        'Condición que refleja el cumplimiento adecuado de los requisitos del servicio y la satisfacción de las necesidades del usuario.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Conjunto de bienes, manifestaciones, saberes y valores naturales o culturales que tienen importancia para una comunidad o nación.',
    },
    {
      termino: 'Interpretación',
      significado:
        'Proceso de comunicación que ayuda a revelar el significado y valor del patrimonio natural y cultural a los visitantes.',
    },
    {
      termino: 'Comunidad local',
      significado:
        'Grupo de personas que habita un territorio y que conserva costumbres, saberes, tradiciones e identidad propias.',
    },
    {
      termino: 'Satisfacción',
      significado:
        'Nivel de conformidad o percepción positiva que tiene el usuario frente al servicio recibido.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Instrumento utilizado para recolectar información sobre opiniones, percepciones o experiencias de los usuarios.',
    },
    {
      termino: 'Sociocultural',
      significado:
        'Dimensión de la sostenibilidad relacionada con la cultura, las tradiciones, la identidad y la participación de las comunidades.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'Acciones orientadas a prevenir, mitigar, controlar y compensar los impactos que una actividad genera sobre el medio ambiente.',
    },
    {
      termino: 'Conservación',
      significado:
        'Protección y cuidado de los recursos naturales y culturales para asegurar su permanencia en el tiempo.',
    },
    {
      termino: 'Avistamiento',
      significado:
        'Actividad de observación e identificación de fauna, especialmente aves, en su hábitat natural.',
    },
    {
      termino: 'Ética',
      significado:
        'Conjunto de principios y valores que orientan la conducta responsable, respetuosa y profesional del guía de turismo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Consejo Internacional de Monumentos y Sitios (ICOMOS). (1999). Carta internacional sobre turismo cultural: La gestión del turismo en los sitios con patrimonio significativo.',
      link: '',
    },
    {
      referencia:
        'Fundación para la Conservación y el Desarrollo Sostenible (FCDS). (2021). Manual de operación turística para el avistamiento de aves. Proyecto Guaviare Turismo Comunitario y Desarrollo Sostenible.',
      link:
        'https://fcds.org.co/wp-content/uploads/2021/02/manual-operacion-turismo.pdf',
    },
    {
      referencia:
        'González Molina, J. F., Atehortúa López, J. E., Garcés Gil, D. F., Miranda Gómez, J. F., Murcia Santos, V., Molina Giraldo, E. (2023). Planificación y ejecución de actividades de guianza turística en el departamento de Caldas. Servicio Nacional de Aprendizaje (SENA).',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/8529/Planificacion_actividades_guianza_turistica.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2021). Requisitos para la prestación del servicio de guionaje (guianza) turístico (NTC 6507).',
      link: '',
    },
    {
      referencia:
        'Lazo Cruz, C. E. & Arróspide Tehuay, G. (2011). Guía de Interpretación del Patrimonio Natural y Cultural. Proyecto Perú Biodiverso (PBD). Ministerio de Comercio Exterior y Turismo (MINCETUR).',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2020). Metodología para la elaboración del inventario de atractivos turísticos.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo y Ministerio de Cultura. (2007). Política de turismo cultural: Identidad y desarrollo competitivo del patrimonio. MinCIT; MinCultura.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Relaciones Exteriores. (s. f.). Patrimonio mundial de Colombia.',
      link: '',
    },
    {
      referencia:
        'Paredes Leguizamón, G., Osorio Dussán, C. E., Rodríguez, S., Galvis, N., Víquez, A., Ladino, R., Niño, L. N., Jarro Fajardo, E. C., Sinning, A. (2015). Áreas protegidas en Planes de Desarrollo Municipales y Departamentales: Kit de planeación territorial. Departamento Nacional de Planeación (DNP). Parques Nacionales Naturales de Colombia.',
      link:
        'https://old.parquesnacionales.gov.co/portal/wp-content/uploads/2015/07/KPT_Lineamientos-Areas-Protegidas-en-PD.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Celmira Pereira Franco',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
