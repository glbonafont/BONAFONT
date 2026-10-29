export type Language = 'ca' | 'es' | 'en';

interface Translations {
  hero: {
    subtitle: string;
    explore: string;
  };
  menu: {
    home: string;
    about: string;
    years: string;
    language: string;
  };
  about: {
    title: string;
    back: string;
    name: string;
    title_role: string;
    bio1: string;
    bio2: string;
    bio3: string;
    bio4: string;
    bio5: string;
    bio6: string;
    innovationTitle: string;
    innovationIntro: string;
    innovationPoint1: string;
    innovationPoint2: string;
    innovationPoint3: string;
    innovationConclusion: string;
    contactTitle: string;
    contactText: string;
    contactButton: string;
  };
  modal: {
    title: string;
    contactButton: string;
    text1: string;
    text2: string;
  };
  signalsModal: {
    title: string;
    intro: string;
    footer: string;
  };
  impactButton: string;
  signalsButton: string;
  footer: {
    subtitle: string;
  };
  trends: Array<{
    id: number;
    title: string;
    subtopics: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  }>;
}

export const translations: Record<Language, Translations> = {
  ca: {
    hero: {
      subtitle: 'trends 2026',
      explore: 'EXPLORA'
    },
    menu: {
      home: 'Home',
      about: 'Qui sóc',
      years: 'Tots els anys',
      language: 'Idioma'
    },
    about: {
      title: 'Qui sóc',
      back: 'TORNAR',
      name: 'Guillem López Bonafont',
      title_role: 'Design and Digital Product Senior Manager, Product Strategy and UX Craft Lead at Accenture Song',
      bio1: 'Estem moldejats per allò que vivim, i la meva carrera m\'ha portat per tots els costats d\'aquesta professió.',
      bio2: 'Vaig entrar al món digital el 2006 al Districte de la Innovació de Barcelona, treballant com a freelance per a empreses tecnològiques amb un enfocament fort en la entrega.',
      bio3: 'En 2009, vaig passar a consultories de estratègia digital de petit format (BCF, Cink), on vaig aprendre a assumir cada rol en el disseny de serveis i vaig construir un compromís profund amb els clients.',
      bio4: 'En 2012, vaig unir-me a consultories internacionals (LLYC, RS), on el treball en equip, l\'especialització i l\'excel·lència rigorosa van ser essencials per al meu creixement.',
      bio5: 'Des del 2022, formo part d\'una de les agències digitals més grans del món, on lidero la visió de futur i aplico tot el que he après al llarg del camí.',
      bio6: 'Especialitzo-me en Estratègia de Producte Digital. Creo visions imaginatives i orientades al futur i les converteixo en oportunitats reals connectant comportaments emergents, moviments de mercat, nous models de negoci i tecnologies creatives.',
      innovationTitle: 'La Innovació com a Estratègia',
      innovationIntro: 'La meva especialització se centra en l\'Estratègia de Producte Digital. La meva aportació es basa en generar visions imaginatives que es transformen en oportunitats tangibles. Aquesta tasca es realitza aprofitant:',
      innovationPoint1: 'Les noves tendències de comportament.',
      innovationPoint2: 'Els moviments dinàmics del mercat.',
      innovationPoint3: 'La viabilitat de nous models de negoci a partir de l\'ús de tecnologies creatives.',
      innovationConclusion: 'En una paraula, la meva feina és sinònim d\'innovació: portar el coneixement del present per construir el producte digital reeixit del demà.',
      contactTitle: 'Parlem de tendències',
      contactText: 'Si vols explorar com aquestes tendències poden impactar el teu projecte o negoci, estiguem en contacte.',
      contactButton: 'CONTACTA\'M'
    },
    modal: {
      title: 'Com m\'impactarà a mi?',
      contactButton: 'COMENTEM-HO',
      text1: 'Aquesta tendència tindrà un impacte significatiu en la teva forma de viure, treballar i relacionar-te amb l\'entorn. Les transformacions que planteja requereixen una reflexió profunda sobre com adaptar-te i aprofitar les noves oportunitats que emergeixen.',
      text2: 'Vols explorar com aquesta tendència pot afectar específicament el teu cas? Parlem-ne.'
    },
    signalsModal: {
      title: 'Signals',
      intro: 'These are some of the most relevant signals indicating the evolution of this trend:',
      footer: 'These links will take you to external sources that document the evolution of this trend.'
    },
    impactButton: 'COM M\'IMPACTARÀ A MI?',
    signalsButton: 'SENYALS',
    footer: {
      subtitle: 'trends 2026'
    },
    trends: [
      {
        id: 1,
        title: 'Un nou mapa lingüístic',
        subtopics: [
          {
            id: '1.1',
            title: 'La desaparició d\'una llengua comuna',
            description: 'La penetració de les eines de traducció instantània a partir de la IA i l\'extensió de nous dispositius wearables com ulleres de realitat mixta provocarà la desaparició de la necessitat d\'una llengua comuna per comunicar-se. Les barreres culturals entre occident i orient es reduiran facilitant el canvi d\'un ordre mundial cada vegada més evident.'
          },
          {
            id: '1.2',
            title: 'La desterritorialització de la llengua',
            description: 'La mobilització geogràfica provocarà que les comunitats lingüístiques es localitzin en territoris tradicionalment adscrits a altres llengües. La desaparició de les llengües minoritàries dependerà principalment de la concentració de fluxes migratoris cap a les mateixes àrees i no del suport institucional incapaç de traspassar fronteres.'
          }
        ]
      },
      {
        id: 2,
        title: 'Un nou valor afegit',
        subtopics: [
          {
            id: '2.1',
            title: 'La productivitat de l\'espera',
            description: 'L\'espera, tradicionalment vista com a temps perdut, es converteix en l\'únic espai productiu capaç de generar avantatge competitiu. La IA generativa ens fa iguals en tot, però com siguem capaços d\'aprofitar els pocs segons que tarda en generar resultats marcarà la diferència.'
          },
          {
            id: '2.2',
            title: 'La revalorització de la creativitat',
            description: 'La IA ens porta a la uniformització com ja ho porten fent tots els avenços tecnològics basats en l\'escalabilitat que l\'han precedit. Davant aquesta evidència, l\'únic recurs que tenen els negocis per destacar és posar en valor la producció manual o anar contra-tendència per ser els millor posicionats en el moment del canvi d\'hàbits. En qualsevol cas, la gestió basada en la preservació del capital i l\'equilibri pressupostari ja ha començat a desaparèixer.'
          }
        ]
      },
      {
        id: 3,
        title: 'Un nou rol de l\'Administració Pública',
        subtopics: [
          {
            id: '3.1',
            title: 'La gestió del canvi com a nou pilar de l\'Estat del Benestar',
            description: 'Les realitats demogràfiques canviants i la major autonomia tecnològica de la ciutadania faran que l\'Estat del Benestar evolucioni: ja no es tracta només de garantir serveis, sinó de gestionar la transformació constant com a responsabilitat pública fonamental. El governs que primer van centrar esforços en definir procediments administratius garantistes i fa anys que estan centrats en la comunicació, ara hauran d\'afegir un nou focus: capacitar a la ciutadania per afrontar els nous reptes. Un ciutadà es podrà autodiagnosticar, autoeducar i fins i tot autoproduir els seus propis recursos, però no entendrà perquè al seu barri ja no es parla la seva llengua o perquè ha de fer un tràmit per obtenir un certificat que li pertany a ell. És cosa de l\'Administració fer-lo partícip dels canvis i donar-li eines per entendre el perquè de tot plegat.'
          },
          {
            id: '3.2',
            title: 'La llibertat d\'elecció com a nova llibertat fonamental',
            description: 'La llibertat d\'elecció emergeix com un dret fonamental del segle XXI. Les regles antimonopoli i de lliure mercat són inútils davant l\'evident concentració de poder que estan provocant les economies d\'escala. L\'oligarquia empresarial i financera ens porta cap a un escenari on les persones físiques deixaran de ser propietaris dels béns que consumeixen (vehicles, habitatges, etc.) i passaran a ser mers subscriptors d\'ecosistemes empresarials obsessionats amb donar tranquil·litat als seus accionistes. Davant això, poder escollir será el dret a protegir. Escollir lliurement no entre dues opcions d\'un mateix estil de vida, sinó en poder decidir sobre l\'estil de vida que un vol viure.'
          }
        ]
      },
      {
        id: 4,
        title: 'Un nou paper de les marques',
        subtopics: [
          {
            id: '4.1',
            title: 'La hiperatomització de les marques',
            description: 'Una persona, una marca. En els inicis de la globalització, les marques es diferenciaven perquè tenien productes o mètodes de producció diferenciats. A mesura que els productes s\'han anat uniformitzant, l\'experiència de marca ha pres major rellevància. Avui el disseny, el màrqueting i els serveis són el pilar de diferenciació, però amb la IA generativa aquests tres també corren perill d\'estandaritzar-se. Davant això, el què pren valor és qui hi ha darrere. La persona. Per això cada vegada més les empreses es converteixen en mers aparadors dels seus treballadors, que és qui són capaços d\'atraure clients a partir d\'afinitats i complicitats que van més enllà de producte o servei.'
          },
          {
            id: '4.2',
            title: 'L\'auge dels clústers de marca com a estructuradors d\'identitats',
            description: 'Les marques individuals deixen pas a constel·lacions de marques que, juntes, defineixen identitats complexes. Som el que consumim, però de forma múltiple i canviant.'
          }
        ]
      }
    ]
  },
  es: {
    hero: {
      subtitle: 'tendencias 2026',
      explore: 'EXPLORA'
    },
    menu: {
      home: 'Inicio',
      about: 'Quién soy',
      years: 'Todos los años',
      language: 'Idioma'
    },
    about: {
      title: 'Quién soy',
      back: 'VOLVER',
      name: 'Guillem López Bonafont',
      title_role: 'Design and Digital Product Senior Manager, Product Strategy and UX Craft Lead at Accenture Song',
      bio1: 'Estoy moldeado por lo que he vivido, y mi carrera me ha llevado por todos los lados de esta profesión.',
      bio2: 'Entré al mundo digital en 2006 en el Distrito de la Innovación de Barcelona, trabajando como freelance para empresas tecnológicas con un enfoque fuerte en la entrega.',
      bio3: 'En 2009, pasé a consultoras de estrategia digital de pequeño formato (BCF, Cink), donde aprendí a asumir cada rol en el diseño de servicios y construí un compromiso profundo con los clientes.',
      bio4: 'En 2012, me uní a consultorías internacionales (LLYC, RS), donde el trabajo en equipo, la especialización y la excelencia rigurosa fueron esenciales para mi crecimiento.',
      bio5: 'Desde 2022, formo parte de una de las agencias digitales más grandes del mundo, donde lidero la visión de futuro y aplico todo lo que he aprendido a lo largo del camino.',
      bio6: 'Especializo en Estrategia de Producto Digital. Creo visiones imaginativas y orientadas al futuro y las convierto en oportunidades reales conectando comportamientos emergentes, movimientos de mercado, nuevos modelos de negocio y tecnologías creativas.',
      innovationTitle: 'La Innovación como Estrategia',
      innovationIntro: 'Mi especialización se centra en la Estrategia de Producto Digital. Mi aportación se basa en generar visiones imaginativas que se transforman en oportunidades tangibles. Esta tarea se realiza aprovechando:',
      innovationPoint1: 'Las nuevas tendencias de comportamiento.',
      innovationPoint2: 'Los movimientos dinámicos del mercado.',
      innovationPoint3: 'La viabilidad de nuevos modelos de negocio a partir del uso de tecnologías creativas.',
      innovationConclusion: 'En una palabra, mi trabajo es sinónimo de innovación: llevar el conocimiento del presente para construir el producto digital exitoso del mañana.',
      contactTitle: 'Hablemos de tendencias',
      contactText: 'Si quieres explorar cómo estas tendencias pueden impactar tu proyecto o negocio, estemos en contacto.',
      contactButton: 'CONTÁCTAME'
    },
    modal: {
      title: '¿Cómo me impactará a mí?',
      contactButton: 'HABLEMOS',
      text1: 'Esta tendencia tendrá un impacto significativo en tu forma de vivir, trabajar y relacionarte con el entorno. Las transformaciones que plantea requieren una reflexión profunda sobre cómo adaptarte y aprovechar las nuevas oportunidades que emergen.',
      text2: '¿Quieres explorar cómo esta tendencia puede afectar específicamente tu caso? Hablemos.'
    },
    signalsModal: {
      title: 'Signals',
      intro: 'These are some of the most relevant signals indicating the evolution of this trend:',
      footer: 'These links will take you to external sources that document the evolution of this trend.'
    },
    impactButton: '¿CÓMO ME IMPACTARÁ A MÍ?',
    signalsButton: 'SEÑALES',
    footer: {
      subtitle: 'trends 2026'
    },
    trends: [
      {
        id: 1,
        title: 'Un nuevo mapa lingüístico',
        subtopics: [
          {
            id: '1.1',
            title: 'La desaparición de una lengua común',
            description: 'La penetración de las herramientas de traducción instantánea a partir de la IA y la extensión de nuevos dispositivos wearables como gafas de realidad mixta provocará la desaparición de la necesidad de una lengua común para comunicarse. Las barreras culturales entre occidente y oriente se reducirán facilitando el cambio de un orden mundial cada vez más evidente.'
          },
          {
            id: '1.2',
            title: 'La desterritorialización de la lengua',
            description: 'La movilización geográfica provocará que las comunidades lingüísticas se localicen en territorios tradicionalmente adscritos a otras lenguas. La desaparición de las lenguas minoritarias dependerá principalmente de la concentración de flujos migratorios hacia las mismas áreas y no del apoyo institucional incapaz de traspasar fronteras.'
          }
        ]
      },
      {
        id: 2,
        title: 'Un nuevo valor añadido',
        subtopics: [
          {
            id: '2.1',
            title: 'La productividad de la espera',
            description: 'La espera, tradicionalmente vista como tiempo perdido, se convierte en el único espacio productivo capaz de generar ventaja competitiva. La IA generativa nos hace iguales en todo, pero cómo seamos capaces de aprovechar los pocos segundos que tarda en generar resultados marcará la diferencia.'
          },
          {
            id: '2.2',
            title: 'La revalorización de la creatividad',
            description: 'La IA nos lleva a la uniformización como ya lo vienen haciendo todos los avances tecnológicos basados en la escalabilidad que la han precedido. Ante esta evidencia, el único recurso que tienen los negocios para destacar es poner en valor la producción manual o ir contra-tendencia para ser los mejor posicionados en el momento del cambio de hábitos. En cualquier caso, la gestión basada en la preservación del capital y el equilibrio presupuestario ya ha comenzado a desaparecer.'
          }
        ]
      },
      {
        id: 3,
        title: 'Un nuevo rol de la Administración Pública',
        subtopics: [
          {
            id: '3.1',
            title: 'La gestión del cambio como nuevo pilar del Estado del Bienestar',
            description: 'Las realidades demográficas cambiantes y la mayor autonomía tecnológica de la ciudadanía harán que el Estado del Bienestar evolucione: ya no se trata solo de garantizar servicios, sino de gestionar la transformación constante como responsabilidad pública fundamental. Los gobiernos que primero centraron esfuerzos en definir procedimientos administrativos garantistas y hace años que están centrados en la comunicación, ahora deberán añadir un nuevo foco: capacitar a la ciudadanía para afrontar los nuevos retos. Un ciudadano podrá autodiagnosticarse, autoeducarse e incluso autoproducir sus propios recursos, pero no entenderá por qué en su barrio ya no se habla su lengua o por qué tiene que hacer un trámite para obtener un certificado que le pertenece a él. Es cosa de la Administración hacerlo partícipe de los cambios y darle herramientas para entender el porqué de todo ello.'
          },
          {
            id: '3.2',
            title: 'La libertad de elección como nueva libertad fundamental',
            description: 'La libertad de elección emerge como un derecho fundamental del siglo XXI. Las reglas antimonopolio y de libre mercado son inútiles ante la evidente concentración de poder que están provocando las economías de escala. La oligarquía empresarial y financiera nos lleva hacia un escenario donde las personas físicas dejarán de ser propietarios de los bienes que consumen (vehículos, viviendas, etc.) y pasarán a ser meros suscriptores de ecosistemas empresariales obsesionados con dar tranquilidad a sus accionistas. Ante esto, poder elegir será el derecho a proteger. Elegir libremente no entre dos opciones de un mismo estilo de vida, sino poder decidir sobre el estilo de vida que uno quiere vivir.'
          }
        ]
      },
      {
        id: 4,
        title: 'Un nuevo papel de las marcas',
        subtopics: [
          {
            id: '4.1',
            title: 'La hiperatomización de las marcas',
            description: 'Una persona, una marca. En los inicios de la globalización, las marcas se diferenciaban porque tenían productos o métodos de producción diferenciados. A medida que los productos se han ido uniformizando, la experiencia de marca ha tomado mayor relevancia. Hoy el diseño, el marketing y los servicios son el pilar de diferenciación, pero con la IA generativa estos tres también corren peligro de estandarizarse. Ante esto, lo que toma valor es quién hay detrás. La persona. Por eso cada vez más las empresas se convierten en meros escaparates de sus trabajadores, que son quienes son capaces de atraer clientes a partir de afinidades y complicidades que van más allá del producto o servicio.'
          },
          {
            id: '4.2',
            title: 'El auge de los clústeres de marca como estructuradores de identidades',
            description: 'Las marcas individuales dejan paso a constelaciones de marcas que, juntas, definen identidades complejas. Somos lo que consumimos, pero de forma múltiple y cambiante.'
          }
        ]
      }
    ]
  },
  en: {
    hero: {
      subtitle: 'trends 2026',
      explore: 'EXPLORE'
    },
    menu: {
      home: 'Home',
      about: 'About me',
      years: 'All years',
      language: 'Language'
    },
    about: {
      title: 'About me',
      back: 'BACK',
      name: 'Guillem López Bonafont',
      title_role: 'Design and Digital Product Senior Manager, Product Strategy and UX Craft Lead at Accenture Song',
      bio1: 'I am shaped by what I\'ve lived, and my career has taken me through every side of this profession.',
      bio2: 'I entered the digital world in 2006 in Barcelona\'s Innovation District, freelancing for tech companies with a strong focus on delivery.',
      bio3: 'In 2009, I moved into small digital strategy consultancies (BCF, Cink), where I learned to take on every role in service design and built a deep commitment to clients.',
      bio4: 'In 2012, I joined international consultancies (LLYC, RS), where teamwork, specialization, and rigorous excellence became essential to my growth.',
      bio5: 'Since 2022, I\'ve been part of one of the world\'s largest digital agencies, where I lead future vision and apply everything I\'ve learned along the way.',
      bio6: 'I specialize in Digital Product Strategy. I create imaginative, forward-looking visions and turn them into real opportunities by connecting emerging behaviors, market shifts, new business models, and creative technologies.',
      innovationTitle: 'Innovation as Strategy',
      innovationIntro: 'My specialization focuses on Digital Product Strategy. My contribution is based on generating imaginative visions that transform into tangible opportunities. This task is carried out by leveraging:',
      innovationPoint1: 'New behavioral trends.',
      innovationPoint2: 'Dynamic market movements.',
      innovationPoint3: 'The viability of new business models through the use of creative technologies.',
      innovationConclusion: 'In one word, my work is synonymous with innovation: bringing knowledge from the present to build the successful digital product of tomorrow.',
      contactTitle: 'Let\'s talk about trends',
      contactText: 'If you want to explore how these trends can impact your project or business, let\'s get in touch.',
      contactButton: 'CONTACT ME'
    },
    modal: {
      title: 'How will it impact me?',
      contactButton: 'LET\'S DISCUSS',
      text1: 'This trend will have a significant impact on your way of living, working and relating to your environment. The transformations it proposes require deep reflection on how to adapt and take advantage of the emerging opportunities.',
      text2: 'Want to explore how this trend can specifically affect your case? Let\'s talk.'
    },
    signalsModal: {
      title: 'Signals',
      intro: 'These are some of the most relevant signals indicating the evolution of this trend:',
      footer: 'These links will take you to external sources that document the evolution of this trend.'
    },
    impactButton: 'HOW WILL IT IMPACT ME?',
    signalsButton: 'SIGNALS',
    footer: {
      subtitle: 'trends 2026'
    },
    trends: [
      {
        id: 1,
        title: 'A new linguistic map',
        subtopics: [
          {
            id: '1.1',
            title: 'The disappearance of a common language',
            description: 'The penetration of AI-powered instant translation tools and the expansion of new wearable devices like mixed reality glasses will lead to the disappearance of the need for a common language to communicate. Cultural barriers between East and West will diminish, facilitating the shift to an increasingly evident new world order.'
          },
          {
            id: '1.2',
            title: 'The deterritorialization of language',
            description: 'Geographic mobilization will cause linguistic communities to be located in territories traditionally assigned to other languages. The disappearance of minority languages will depend mainly on the concentration of migratory flows to the same areas and not on institutional support unable to cross borders.'
          }
        ]
      },
      {
        id: 2,
        title: 'A new added value',
        subtopics: [
          {
            id: '2.1',
            title: 'The productivity of waiting',
            description: 'Waiting, traditionally seen as wasted time, becomes the only productive space capable of generating competitive advantage. Generative AI makes us equal in everything, but how we are able to take advantage of the few seconds it takes to generate results will make the difference.'
          },
          {
            id: '2.2',
            title: 'The revaluation of creativity',
            description: 'AI leads us to uniformization as all scalability-based technological advances that have preceded it have been doing. Faced with this evidence, the only resource that businesses have to stand out is to value manual production or go against the trend to be best positioned at the moment of habit change. In any case, management based on capital preservation and budget balance has already begun to disappear.'
          }
        ]
      },
      {
        id: 3,
        title: 'A new role for Public Administration',
        subtopics: [
          {
            id: '3.1',
            title: 'Change management as a new pillar of the Welfare State',
            description: 'Changing demographic realities and the greater technological autonomy of citizens will make the Welfare State evolve: it is no longer just about guaranteeing services, but managing constant transformation as a fundamental public responsibility. Governments that first focused efforts on defining guarantee administrative procedures and have been focused on communication for years, will now have to add a new focus: empowering citizens to face new challenges. A citizen will be able to self-diagnose, self-educate and even self-produce their own resources, but will not understand why their language is no longer spoken in their neighborhood or why they have to process a certificate that belongs to them. It is the Administration\'s responsibility to involve them in the changes and give them tools to understand the why of it all.'
          },
          {
            id: '3.2',
            title: 'Freedom of choice as a new fundamental freedom',
            description: 'Freedom of choice emerges as a fundamental right of the 21st century. Antitrust and free market rules are useless in the face of the evident concentration of power being caused by economies of scale. The business and financial oligarchy leads us to a scenario where individuals will cease to be owners of the goods they consume (vehicles, housing, etc.) and will become mere subscribers to business ecosystems obsessed with giving peace of mind to their shareholders. Faced with this, being able to choose will be the right to protect. Choosing freely not between two options of the same lifestyle, but being able to decide on the lifestyle one wants to live.'
          }
        ]
      },
      {
        id: 4,
        title: 'A new role for brands',
        subtopics: [
          {
            id: '4.1',
            title: 'The hyperatomization of brands',
            description: 'One person, one brand. In the early days of globalization, brands differentiated themselves because they had differentiated products or production methods. As products have become more uniform, the brand experience has gained greater relevance. Today, design, marketing and services are the pillar of differentiation, but with generative AI these three are also in danger of standardization. Faced with this, what gains value is who is behind it. The person. That is why increasingly companies become mere showcases of their workers, who are the ones capable of attracting clients based on affinities and complicities that go beyond product or service.'
          },
          {
            id: '4.2',
            title: 'The rise of brand clusters as identity structurers',
            description: 'Individual brands give way to constellations of brands that, together, define complex identities. We are what we consume, but in a multiple and changing way.'
          }
        ]
      }
    ]
  }
};