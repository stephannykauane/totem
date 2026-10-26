import { asset } from '../assets'

// img('arquivo.webp', x, y, largura, altura): imagem solta no cartão, em px do canvas (1080 × 1922)
// opts: { crop: [esq, topo, dir, base] (0 a 1), caption: 'legenda' }
const img = (name, x, y, w, h, opts = {}) => ({ src: asset(name), x, y, w, h, ...opts })

const BIFE = ['A ORIGEM', 'DO BIFE']
const BIFE_SUB = 'RASTREABILIDADE | APROVEITAMENTO DE RESÍDUOS'
const POMAR = ['A CIÊNCIA', 'NO POMAR']
const POMAR_SUB = 'BIOINSUMOS | EDIÇÃO GÊNICA'
const SALADA = ['A ORIGEM', 'DA SALADA']
const DIGITAL = ['O ARROZ COM FEIJÃO', 'DA ERA DIGITAL']

export const screens = {
  // ───────────────────────── início ─────────────────────────
  hub: {
    type: 'hub',
    title: ['O FUTURO ESTÁ', 'NA MESA'],
    subtitle: 'Toque na comida para conhecer tendências tecnológicas\nque estão mudando a produção de alimentos',
    image: asset('prato.png')
  },

  // ───────────────────────── pecuária ─────────────────────────
  pecuaria: {
    type: 'cover',
    title: BIFE,
    subtitle: BIFE_SUB,
    video: asset('pecuaria.mp4'),
    videoPosition: '44% 50%',
    hotspots: [
      { to: 'boi-conectado', x: 853, y: 880 },
      { to: 'residuos', x: 608, y: 1176 },
    ],
  },

  'boi-conectado': {
    type: 'content',
    title: BIFE,
    subtitle: BIFE_SUB,
    heading: 'O BOI CONECTADO',
    background: asset('boi-fundo.png'),
    bgPosition: '45% 50%',
    floatImage: { src: asset('brinco.png'), w: 109, h: 150 }, // brinco
    text: [
      'Os brincos que os animais usam na cena registram a geolocalização e os eventos sanitários de cada um (como vacinas e medicamentos aplicados, exames, doenças etc.). Esses dados compõem um verdadeiro “passaporte digital” para o animal, atestando sua sanidade, bem-estar e sustentabilidade da produção.',
      'Para garantir que esses dados não sejam fraudados, a agroindústria conta com a tecnologia de “blockchain”. Essa tecnologia consiste em uma forma segura e transparente de armazenamento e transmissão de dados criptografados, que não podem ser alterados retroativamente. Isso garante uma informação única de ponta a ponta na cadeia de produção, auditável e inviolável.',
    ],
    images: [
      img('boi1.jpeg', 247, 1138, 117, 156),
      img('boi2.png', 446, 1123, 188, 188),
      img('boi3.jpeg', 715, 1138, 117, 156),
    ],
    back: 'pecuaria',
    nextPage: 'boi-conectado-2',
  },

  'boi-conectado-2': {
    type: 'content',
    title: BIFE,
    subtitle: BIFE_SUB,
    heading: 'O BOI CONECTADO',
    background: asset('boi-fundo.png'),
    bgPosition: '45% 50%',
    text: [
      'Essa arquitetura de confiança é o que destrava prêmios comerciais, linhas de crédito verde e os cobiçados selos ESG. Para a agroindústria e o varejo, essa base de dados pode ser integrada a modelos estatísticos e ferramentas de ciência de dados para otimizar a logística da cadeia de suprimentos, prever gargalos de oferta e combater o desperdício.',
      'E, na ponta final, a experiência se materializa quando o consumidor escaneia um QR Code na embalagem e acessa toda a jornada daquele corte — da fazenda de origem até a gôndola do supermercado.',
    ],
    images: [img('boi4.png', 215, 961, 651, 330)],
    back: 'pecuaria',
    prevPage: 'boi-conectado',
  },

  residuos: {
    type: 'content',
    title: BIFE,
    subtitle: BIFE_SUB,
    heading: 'APROVEITAMENTO DE RESÍDUOS',
    background: asset('boi-fundo.png'),
    bgPosition: '45% 50%',
    text: [
      'O esterco bovino é um velho conhecido da humanidade quando o assunto é aproveitamento de resíduos, mas a grande revolução que está transformando os cochos do Brasil vem das usinas de biocombustíveis.',
      'Com a expansão da produção de etanol de milho no Brasil, um resíduo valioso ganhou protagonismo na pecuária: os Grãos de Destilaria Secos, popularmente conhecidos pela sigla DDG (do inglês Distiller’s Dried Grains).',
    ],
    images: [img('residuo1.png', 242, 1021, 273, 273), img('residuo2.png', 597, 1021, 218, 273)],
    back: 'pecuaria',
    nextPage: 'residuos-2',
  },

  'residuos-2': {
    type: 'content',
    title: BIFE,
    subtitle: BIFE_SUB,
    heading: 'APROVEITAMENTO DE RESÍDUOS',
    background: asset('boi-fundo.png'),
    bgPosition: '45% 50%',
    text: [
      'A grande inovação do DDG reside na sua capacidade de concentrar, de forma **segura e econômica**, os nutrientes essenciais para o gado bovino. O processo de produção de etanol de milho e sorgo fermenta o amido, transformando-o em álcool.',
      'O que resta passa por processo de secagem e forma o DDG, composto por fibras, proteínas, gorduras e minerais altamente concentrados, de alta qualidade e sem os riscos associados ao excesso de cereais (como acidose ruminal).',
    ],
    images: [img('residuo3.png', 369, 961, 343, 343)],
    back: 'pecuaria',
    prevPage: 'residuos',
  },

  // ───────────────────────── pomar ─────────────────────────
  pomar: {
    type: 'cover',
    title: POMAR,
    subtitle: POMAR_SUB,
    video: asset('citricultura.mp4'),
    videoPosition: '71% 50%',
    hotspots: [
      { to: 'bioinsumos', x: 395, y: 1031 },
      { to: 'edicao-genica', x: 668, y: 961 },
    ],
  },

  bioinsumos: {
    type: 'content',
    title: POMAR,
    subtitle: POMAR_SUB,
    heading: 'BIOINSUMOS',
    background: asset('pomar-fundo.png'),
    bgPosition: '71% 50%',
    text: [
      'A névoa que você vê caindo sobre o pomar não carrega defensivos químicos, mas sim um exército vivo de proteção. São microrganismos selecionados para combater pragas e doenças na lavoura.',
      'O chamado **controle biológico** consiste no uso de inimigos naturais – e sua otimização pela pesquisa científica e tecnológica – para combater outros seres vivos que prejudicam a produção agrícola. Podem ser usados, por exemplo, insetos predadores de outros insetos-praga, bactérias que parasitam fungos causadores de doenças ou então fungos que infectam insetos.',
    ],
    images: [
      img('bioinsumos.png', 245, 1034, 590, 164, {
        caption: 'Nas fotos, ninfas do inseto psilídeo (transmissor da doença “greening” na citricultura) colonizadas pelo fungo Beauveria bassiana (PINTO et al., 2012)',
      }),
    ],
    back: 'pomar',
    nextPage: 'bioinsumos-2',
  },

  'bioinsumos-2': {
    type: 'content',
    title: POMAR,
    subtitle: POMAR_SUB,
    heading: 'BIOINSUMOS',
    background: asset('pomar-fundo.png'),
    bgPosition: '71% 50%',
    text: [
      'Contudo, o uso desses defensores naturais é apenas a ponta do iceberg de uma transformação tecnológica muito maior.',
      'Os bioinsumos agrícolas são produtos ou processos desenvolvidos a partir de vegetais, animais ou microrganismos, destinados ao uso na produção, proteção e processamento de produtos agropecuários. São exemplos de bioinsumos:',
    ],
    images: [img('bioinsumos2.png', 291, 881, 492, 394)],
    back: 'pomar',
    prevPage: 'bioinsumos',
  },

  'edicao-genica': {
    type: 'content',
    title: POMAR, // no pptx esta tela dizia "A ORIGEM DO SUCO"
    subtitle: POMAR_SUB,
    heading: 'EDIÇÃO GÊNICA',
    background: asset('pomar-fundo.png'),
    bgPosition: '71% 50%',
    text: [
      'Apesar de ainda não contarmos com esta tecnologia na citricultura brasileira, a edição gênica representa uma fronteira da pesquisa científica e tecnológica com grandes possibilidades para a agricultura.',
      'A edição gênica consiste em um conjunto de tecnologias que permite alterar o DNA de um organismo (como uma planta), adicionando, removendo ou alterando sequências bem específicas do genoma de forma precisa. Ao editar um DNA, o organismo passa a ter uma nova característica (ou perde alguma indesejável).',
    ],
    images: [img('edicao genica.png', 374, 967, 331, 317)],
    back: 'pomar',
    nextPage: 'edicao-genica-2',
  },

  'edicao-genica-2': {
    type: 'content',
    title: POMAR,
    subtitle: POMAR_SUB,
    heading: 'EDIÇÃO GÊNICA',
    background: asset('pomar-fundo.png'),
    bgPosition: '71% 50%',
    text: ['Na agricultura, a edição gênica tem um grande potencial porque:'],
    bullets: [
      'Viabiliza novas soluções genéticas para os desafios da mudança climática global;',
      'Reduz o uso de defensivos por gerar cultivares e variedades mais tolerantes ou resistentes a pragas e doenças;',
      'Permite biofortificar os alimentos, melhorando sua qualidade nutricional;',
      'Reduz perdas de alimentos em razão do aumento de tempo de prateleira.',
    ],
    images: [img('edicao genica 2.png', 370, 957, 341, 317)],
    back: 'pomar',
    prevPage: 'edicao-genica',
  },

  // ───────────────────────── agricultura indoor ─────────────────────────
  indoor: {
    type: 'cover',
    title: SALADA,
    subtitle: 'AGRICULTURA INDOOR',
    video: asset('ag indoor.mp4'),
    hotspots: [{ to: 'cultivo-fechado', x: 540, y: 981 }],
  },

  'cultivo-fechado': {
    type: 'content',
    title: SALADA,
    subtitle: 'AGRICULTURA INDOOR',
    heading: 'CULTIVO EM AMBIENTE FECHADO',
    subheading: '(indoor farming/agricultura indoor)',
    background: asset('indoor.png'),
    text: [
      'Se você costuma comprar hortifruti no supermercado, certamente já perdeu algum tempo escolhendo verduras “menos feias” e tomates mais íntegros, deixando de lado aqueles “machucados” pelo clima, pragas ou transporte.',
      'Mas e se toda a colheita fosse sempre visualmente impecável, saudável e livre de agrotóxicos? Essa é a promessa da agricultura indoor, um verdadeiro oásis tecnológico que blinda a produção das surpresas do tempo.',
      'O cultivo em ambientes protegidos é realizado em estufas ou casas de vegetação em que variáveis como temperatura, umidade, gás carbônico e iluminação podem ser controladas, protegendo os vegetais dos adventos climáticos (chuvas, geadas, seca e calor intenso) e até otimizando seu desenvolvimento.',
    ],
    images: [img('indoor1.JPG', 246, 1098, 259, 173), img('indoor2.JPG', 575, 1098, 259, 173)],
    back: 'indoor',
    nextPage: 'cultivo-protegido',
  },

  'cultivo-protegido': {
    type: 'content',
    title: ['LUZES, CLIMA,', 'SABOR!'],
    subtitle: 'AGRICULTURA INDOOR',
    heading: 'CULTIVO PROTEGIDO',
    subheading: '(indoor farming/agricultura indoor)',
    background: asset('indoor.png'),
    images: [img('ag_indoor.png', 182, 779, 716, 391)],
    back: 'indoor',
    prevPage: 'cultivo-fechado',
  },

  // ───────────────────────── agricultura digital ─────────────────────────
  digital: {
    type: 'cover',
    title: DIGITAL,
    subtitle: 'Internet das Coisas | Inteligência artificial',
    video: asset('digital.mp4'),
    videoPosition: '62% 50%',
    hotspots: [{ to: 'sensores', x: 539, y: 981 }],
  },

  sensores: {
    type: 'content',
    title: DIGITAL,
    subtitle: 'Sensores | Inteligência artificial',
    heading: 'AGRICULTURA DIGITAL – SENSORES',
    background: asset('digital-fundo.png'),
    bgPosition: '62% 50%',
    text: [
      'Sensores embarcados em drones, estações meteorológicas, sondas de umidade no solo, medidor de CO² em armazéns de grãos: todos esses exemplos são dispositivos que detectam, medem e sinalizam determinadas informações para uma máquina ou para o ser humano. São, portanto, aliados no registro de dados para a agricultura e a agroindústria.',
      290, // espaço para as imagens (ajuste se sobrepor)
      'No caso dos drones, os sensores podem detectar estresse hídrico, uma doença ou o foco inicial de uma praga a partir de imagens aéreas da lavoura, como se fosse um “raio-x”, enxergando aquilo que o olhar humano não vê.',
    ],
    images: [
      img('digital1.png', 182, 867, 343, 229),
      img('digital2.png', 465, 910, 161, 161),
      img('digital3.png', 662, 830, 224, 321),
    ],
    back: 'digital',
    nextPage: 'ia',
  },

  ia: {
    type: 'content',
    title: DIGITAL,
    subtitle: 'Sensores | Inteligência artificial',
    heading: 'AGRICULTURA DIGITAL – INTELIGÊNCIA ARTIFICIAL',
    background: asset('digital.png'),
    bgPosition: '62% 50%',
    text: [
      'Para que a imensa quantidade de informações gerada pelos sensores faça sentido, entra em cena a Inteligência Artificial (IA). Enquanto sensores atuam como os “olhos” e “ouvidos” no campo, os algoritmos de IA formam o “cérebro”, responsável por cruzar, processar e interpretar essas informações em frações de segundo.',
      'Os algoritmos reconhecem padrões complexos e, por isso, podem cruzar as imagens capturadas pelo drone com a previsão do tempo e o histórico da área a fim de prever doenças e pragas semanas antes de se tornar visível a olho nu.',
      'Com isso, a agricultura deixa de ser reativa e passa a ser preditiva. O resultado é uma produção muito mais eficiente, com custos reduzidos e um impacto ambiental significativamente menor.',
    ],
    images: [img('mapa.jpg', 368, 1064, 337, 238)],
    back: 'digital',
    prevPage: 'sensores',
    nextPage: 'agro-digital',
  },

  'agro-digital': {
    type: 'content',
    title: DIGITAL,
    subtitle: 'Internet das Coisas | Inteligência artificial',
    heading: 'AGRICULTURA DIGITAL',
    background: asset('digital-fundo.png'),
    bgPosition: '62% 50%',
    text: [
      'No caso do arroz, que tradicionalmente exige um controle hídrico rigoroso, essas tecnologias garantem que a irrigação ocorra na medida exata, economizando água e energia. Já nas lavouras de feijão, permitem que os agricultores apliquem nutrientes e defensivos apenas nas áreas onde a planta realmente precisa.',
    ],
    images: [img('arroz_feijao.png', 165, 864, 749, 350)],
    back: 'digital',
    prevPage: 'ia',
  },

  // ───────────────────────── institucional ─────────────────────────
  'quem-somos': {
    type: 'about',
    title: ['IF GOIANO', 'UNIDADE EMBRAPII'],
    polo: 'Unidade do IF Goiano dedicada à captação e gestão de projetos de pesquisa e desenvolvimento de novas tecnologias em parceria com a iniciativa privada e com fomento da Embrapii',
  },

  contato: {
    type: 'contact',
    title: ['IF GOIANO', 'UNIDADE EMBRAPII'],
    subtitle: 'CONTATO',
    items: [
      { icon: asset('contato1.png'), x: 95, y: 514, text: 'ifgoiano.edu.br/polodeinovacao' },
      { icon: asset('contato2.png'), x: 592, y: 514, text: 'polo.inovacao@ifgoiano.edu.br' }, // confirme o e-mail
      { icon: asset('contato3.png'), x: 95, y: 634, text: 'poloifgoiano' },
      { icon: asset('contato4.png'), x: 589, y: 635, text: '(64) 9 9285-0946' },
    ],
  },
}
