import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* contribuição notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'notable, extraordinary, distinct',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Cheguei cedo.\n* Ela chegou ao topo.\n* Quando você chega?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'arrive, reach, come',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'pt',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɨɾˈɡũtɐ/ (Portugal), /peʁˈɡũtɐ/ (Brazil)',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.\n* Ela tinha uma pergunta importante.',
          definition:
            '* Interrogação feita para obter informação\n* Questão levantada para discussão\n* Dúvida ou incerteza',
          translation: 'question, inquiry',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão foi discutida.\n* Ele respondeu à questão.\n* A questão é complexa.',
          definition: '* pergunta\n* assunto a ser resolvido\n* problema',
          translation: 'question, issue, problem',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Realizaram a manutenção do sistema.\n* A manutenção preventiva evita problemas.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* cuidado contínuo',
          translation: 'maintenance, upkeep',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* um autor notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'notable, extraordinario, distinto',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Cheguei cedo.\n* Ela chegou ao topo.\n* O trem chegou na hora.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'llegar, alcanzar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'pt',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.\n* Ela tinha uma pergunta importante.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão\n* Dúvida ou incerteza',
          translation: 'pregunta, interrogante',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele levantou uma questão importante.',
          definition: '* pergunta\n* assunto a ser resolvido\n* problema',
          translation: 'pregunta, asunto, problema',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* cuidado contínuo',
          translation: 'mantenimiento, conservación',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* um progresso notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'remarquable, extraordinaire, distinct',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example: '* Cheguei cedo.\n* Ela chegou ao topo.\n* O trem chegou.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'arriver, atteindre, se présenter',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'pt',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Responda à questão.\n* Questão de tempo.',
          definition: '* pergunta\n* assunto\n* problema',
          translation: 'question, sujet, problème',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.\n* Ela tinha uma pergunta importante.',
          definition:
            '* Interrogação feita para obter informação\n* Questão ou dúvida levantada\n* Assunto ou tema a ser discutido',
          translation: 'question, interrogation',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Realizar manutenção preventiva.\n* Manutenção de sistemas informáticos.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* suporte contínuo para funcionamento',
          translation: 'entretien, maintenance',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* contribuição notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'bemerkenswert, außergewöhnlich, distinguished',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example: '* Cheguei cedo.\n* Ela chegou ao topo.\n* O trem chegou.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'ankommen, erreichen, anwesend sein',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'pt',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example: '* Fiz uma pergunta.\n* Responda à pergunta.',
          definition: '* interrogação\n* questão\n* dúvida',
          translation: 'Frage, Anfrage, Zweifel',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Responda à questão.\n* Questão de tempo.',
          definition:
            '* pergunta\n* problema a ser resolvido\n* assunto em discussão',
          translation: 'Frage, Problem, Thema',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* ação de sustentar ou preservar',
          translation: 'Wartung, Instandhaltung',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: '显著的, 非凡的, 独特的',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao aeroporto.\n* Quando você chega?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: '到达, 抵达, 出现',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'pt',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele respondeu à questão.\n* Discutimos a questão.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: '问题, 事项',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'problema',
          ipa: '/pɾoˈblemɐ/',
          example: '* Ele resolveu o problema.\n* O problema é complexo.',
          definition: '* questão difícil\n* situação complicada',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽj̃sɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: '维护, 保养',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: '值得注意的, 非凡的, 卓越的',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou ao aeroporto.\n* Chegamos tarde à festa.\n* Quando você vai chegar?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: '到達, 抵達, 出現',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'pt',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'problema',
          ipa: '/pɾoˈblemɐ/',
          example:
            '* Ele encontrou um problema no projeto.\n* Resolver o problema levou horas.',
          definition: '* questão difícil de resolver\n* situação complicada',
          translation: '問題, 困難的情況',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão foi resolvida rapidamente.\n* Discutiram a questão durante horas.\n* A questão número três era difícil.',
          definition:
            '* problema a ser resolvido\n* assunto em discussão\n* pergunta em prova',
          translation: '問題, 議題, 考題',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: '維護, 保養',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: '注目すべき, 特別な, 卓越した',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele vai chegar amanhã.\n* Chegamos ao topo da montanha.\n* Quando você chegou?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: '到着する, 達する, 現れる',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'pt',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi difícil de responder.',
          definition:
            '* Interrogação feita para obter informação.\n* Questão proposta em exame ou teste.',
          translation: '質問, クエスチョン',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão foi discutida na reunião.\n* Ele respondeu à questão com confiança.',
          definition: '* pergunta\n* assunto a ser resolvido\n* problema',
          translation: '質問, 問題, 事柄',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'メンテナンス, 維持, 保守',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'замечательный, выдающийся, особенный',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao aeroporto.\n* Quando você chega?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'прибыть, достигнуть, появиться',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'pt',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão levantada para discussão',
          translation: 'вопрос, запрос',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão foi discutida na reunião.\n* Ele respondeu à questão corretamente.',
          definition:
            '* pergunta\n* problema a ser resolvido\n* assunto em discussão',
          translation: 'вопрос, проблема, тема',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: '/mɐnɐˈtẽsɐ̃w̃/',
          example:
            '* A manutenção do carro é essencial.\n* Ele cuida da manutenção do jardim.\n* Recebeu manutenção dos pais.',
          definition:
            '* ato de manter\n* conservação de algo\n* suporte financeiro',
          translation: 'поддержка, сохранение, финансовая поддержка',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'notevole, straordinario, distinto',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou ao aeroporto.\n* Chegamos tarde à festa.\n* Quando você chega?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'arrivare, giungere, presentarsi',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'pt',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'demanda',
          ipa: '/deˈmɐ̃dɐ/',
          example:
            '* A demanda por eletricidade aumentou.\n* Ele fez uma demanda ao tribunal.\n* A demanda supera a oferta.',
          definition:
            '* necessidade de bens ou serviços\n* solicitação formal\n* procura no mercado',
          translation: 'domanda, richiesta, richiesta di mercato',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão',
          translation: 'domanda, interrogativo',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'manutenzione, mantenimento, cura continua',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* um autor notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'digno de nota, extraordinário, distinto',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegado',
          ipa: 'ʃɨˈɡadu',
          example:
            '* Ele é um chegado da família.\n* O novo chegado foi bem recebido.',
          definition: '* alguém que chegou\n* recém-chegado\n* próximo, íntimo',
          translation: 'chegado, recém chegado, próximo íntimo',
          partOfSpeech: '',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'pt',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'question',
          ipa: '/kwɛsˈtʃɐ̃w̃/',
          example:
            '* Fiz uma question sobre o tema.\n* A question foi respondida rapidamente.',
          definition: '* interrogação\n* dúvida\n* assunto a ser discutido',
          translation: 'interrogação, dúvida, assunto a ser discutido',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Realizar manutenção preventiva.\n* Manutenção de rotina no sistema.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* cuidado contínuo para evitar falhas',
          translation: 'manutenção, conservação, cuidado contínuo',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'ملحوظ, استثنائي, متميز',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele vai chegar amanhã.\n* Chegamos ao topo da montanha.\n* Quando você chegou?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'الوصول, القدوم, الحضور',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'pt',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão ou dúvida',
          translation: 'سؤال, استفسار',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: 'keʃˈtɐ̃w̃',
          example:
            '* A questão foi resolvida.\n* Ele levantou uma questão importante.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'سؤال, مشكلة, موضوع',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'صيانة, حفاظ على',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* contribuição notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'opmerkelijk, buitengewoon, uitzonderlijk',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Cheguei cedo.\n* Ela chegou ao topo.\n* Quando você chega?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'aankomen, bereiken, aanwezig zijn',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'pt',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi difícil de responder.\n* Ela tinha uma pergunta sobre o tema.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão\n* Dúvida ou incerteza',
          translation: 'vraag, ondervraging',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Responda à questão.\n* Questão de tempo.',
          definition:
            '* pergunta\n* assunto a ser discutido\n* problema a ser resolvido',
          translation: 'vraag, onderwerp, probleem',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* ação de sustentar ou preservar',
          translation: 'onderhoud, conservatie',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* contribuição notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: '주목할 만한, 비범한, 특별한',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example: '* Cheguei cedo.\n* Ela chegou ao topo.\n* O trem chegou.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: '도착하다, 이르다, 오다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'pt',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta era difícil de responder.\n* Ela tinha uma pergunta sobre o tema.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão\n* Dúvida ou incerteza',
          translation: '질문, 물음',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele levantou uma questão importante.',
          definition:
            '* pergunta\n* problema a ser resolvido\n* assunto em discussão',
          translation: '질문, 문제, 논의 사항',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Realizaram a manutenção do sistema.\n* A manutenção preventiva evita problemas.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* cuidado contínuo para preservar o funcionamento',
          translation: '유지, 보수',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'उल्लेखनीय, असाधारण, विशिष्ट',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao topo.\n* Ela chegou à festa.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'पहुंचना, आना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'pt',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition: '* interrogação\n* questão\n* dúvida',
          translation: 'प्रश्न, सवाल, संदेह',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele respondeu à questão.\n* Discutimos a questão em reunião.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'प्रश्न, समस्या, विषय',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'रखरखाव, संरक्षण, देखभाल',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'dikkate değer, olağanüstü, seçkin',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao fim.\n* Ela chegou ao trabalho.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'varmak, ulaşmak, gelmek',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'pt',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação.\n* Questão proposta para reflexão.',
          translation: 'soru, soru işareti',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example: '* A questão é complexa.\n* Responda à questão.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'soru, problem, konu',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'bakım, koruma, sürdürme',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'anmärkningsvärd, extraordinär, distinkt',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou ao aeroporto.\n* A carta chegou ontem.\n* Chegamos cedo à festa.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'ankomma, nå',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'pt',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão ou dúvida',
          translation: 'fråga, frågeställning',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão foi discutida na reunião.\n* Ele levantou uma questão importante.',
          definition: '* pergunta\n* assunto a ser resolvido\n* problema',
          translation: 'fråga, ärende, problem',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado regular',
          translation: 'underhåll, hållande',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* contribuição notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'bemerkelsesverdig, ekstraordinær, distinkt',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example: '* Cheguei cedo.\n* Ela chegou ao topo.\n* O trem chegou.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'ankomme, nå, komme',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'pt',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.\n* Ela tinha uma pergunta importante.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão\n* Dúvida ou incerteza',
          translation: 'spørsmål, forespørsel, usikkerhet',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Responda à questão.\n* Questão de tempo.',
          definition:
            '* pergunta\n* assunto a ser resolvido\n* problema\n* tema de discussão',
          translation: 'spørsmål, problem, tema, sak',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* cuidado contínuo',
          translation: 'vedlikehold, bevaring',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* contribuição notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'bemærkelsesværdig, ekstraordinær, distinkt',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example: '* Cheguei cedo.\n* Ela chegou ao topo.\n* O trem chegou.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'ankomme, nå, være til stede',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'pt',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.\n* Ela tinha uma pergunta importante.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão\n* Dúvida ou incerteza',
          translation: 'spørgsmål, forespørgsel, tvivl',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele levantou uma questão importante.',
          definition:
            '* pergunta\n* assunto a ser resolvido\n* problema\n* tema de debate',
          translation: 'spørgsmål, problem, emne, tema',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.\n* A manutenção do jardim é feita semanalmente.',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* ação de sustentar ou preservar',
          translation: 'vedligeholdelse, reparation',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'huomattava, erityinen, poikkeuksellinen',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao aeroporto.\n* Quando você vai chegar?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'saapua, perille tulla, olla läsnä',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'pt',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi difícil de responder.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão',
          translation: 'kysymys, kysymys esitettäväksi',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão foi resolvida.\n* Ele levantou uma questão importante.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'kysymys, ongelma, aihe',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'ylläpito, huolto',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'قابل توجه, استثنایی, متمایز',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao aeroporto.\n* Quando você vai chegar?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'رسیدن, حضور یافتن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'pt',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition: '* interrogação\n* questão\n* dúvida',
          translation: 'سوال, پرسش, سوالات',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele respondeu à questão.\n* Discutimos a questão.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'سوال, مسئله, موضوع',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: 'نگهداری, حفظ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* um feito notável\n* contribuição notável',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'godny uwagi, ekstraordynarny, wybitny',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Cheguei cedo.\n* Ele chegou ao topo.\n* Ela chegou em casa.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'przybyć, dotrzeć, pojawić się',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'pt',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.\n* Ela tinha uma pergunta importante.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão\n* Dúvida ou incerteza',
          translation: 'pytanie, zapytanie, kwestia',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* manutenção do carro\n* manutenção preventiva\n* manutenção de software',
          definition:
            '* ato de manter algo em bom estado\n* conservação de equipamentos ou sistemas\n* cuidado contínuo para evitar falhas',
          translation: 'utrzymanie, konserwacja',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'σημαντικός, εξαιρετικός, διακεκριμένος',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou ao aeroporto.\n* Chegamos tarde à festa.\n* Ela chegou ao topo da montanha.',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'φτάνω, καταφθάνω, παρίσταμαι',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'pt',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão',
          translation: 'ερώτηση, ερώτημα',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'interrogação',
          ipa: 'ĩ.tɛ.ʁo.ɡa.ˈsɐ̃w̃',
          example:
            '* Ele fez uma interrogação sobre o assunto.\n* Coloque uma interrogação no final da frase.',
          definition: "* ato de perguntar\n* sinal gráfico '?'",
          translation: 'ερώτηση, σημείο ερωτήματος',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: 'συντήρηση, διατήρηση',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example:
        '* Ele fez um trabalho notável.\n* A paisagem é notável pela sua beleza.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'ניכר, יוצא דופן, ראוי לתשומת לב',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao topo da montanha.\n* Quando você vai chegar?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'להגיע, לְהִתְיַשֵּׁב',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'pt',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition: '* interrogação\n* questão\n* dúvida',
          translation: 'שאלה, תשאול, ספק',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'interrogação',
          ipa: 'ĩ.te.ʁo.ɡaˈsɐ̃w',
          example:
            '* Ele fez uma interrogação sobre o assunto.\n* A frase termina com uma interrogação.',
          definition: "* ato de perguntar\n* sinal gráfico '?'",
          translation: 'שאלה, סימן שאלה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: 'תחזוקה, שימור',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'น่าทึ่ง, โดดเด่น, น่าจดจำ',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele vai chegar amanhã.\n* Chegamos ao topo da montanha.\n* Quando você chegou?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'มาถึง, ถึง, ปรากฏ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'pt',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão ou dúvida',
          translation: 'คำถาม, ข้อสงสัย',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele respondeu à questão.\n* Discutimos a questão em reunião.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'คำถาม, ปัญหา, เรื่อง',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'การบำรุงรักษา, การดูแล, การรักษา',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'đáng chú ý, phi thường, khác biệt',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele vai chegar amanhã.\n* Chegamos ao topo da montanha.\n* Quando você chegou?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'đến, tới, đạt',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'pt',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão ou dúvida',
          translation: 'câu hỏi, thắc mắc',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão foi resolvida.\n* Ele levantou uma questão importante.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'câu hỏi, vấn đề, chủ đề',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition:
            '* ato de manter\n* conservação de algo\n* cuidado contínuo',
          translation: 'bảo trì, duy trì, bảo dưỡng',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'terkemuka, luar biasa, istimewa',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao topo da montanha.\n* Quando você vai chegar?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'tiba, sampai, datang',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'pt',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão ou dúvida',
          translation: 'pertanyaan, tanya',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: 'pemeliharaan, perawatan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de nota\n* extraordinário\n* distinto',
      translation: 'terkemuka, luar biasa, berbeza',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele chegou cedo.\n* Chegamos ao aeroporto.\n* Quando você vai chegar?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: 'tiba, sampai, hadir',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'pt',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ele fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition: '* interrogação\n* questão\n* dúvida',
          translation: 'soalan, pertanyaan, tanya',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: '/keʃˈtɐ̃w̃/',
          example:
            '* A questão é complexa.\n* Ele respondeu à questão.\n* Discutimos a questão em reunião.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'soalan, masalah, topik',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: 'penyelenggaraan, pemeliharaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'pt',
      source: 'notável',
      ipa: 'noˈtavɛw',
      example: '* Um feito notável.\n* Ela é uma cientista notável.',
      definition: '* digno de atenção\n* extraordinário\n* distinto',
      translation: 'значний, видатний, екстраординарний',
      partOfSpeech: 'adjective',
      g: 'm-f',
      tags: [],
    },
    directTranslationExample: {
      text: 'chegar',
      sourceLanguage: 'pt',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'pt',
          source: 'chegar',
          ipa: 'ʃeˈɡaɾ',
          example:
            '* Ele vai chegar amanhã.\n* Chegamos ao topo da montanha.\n* Quando você chegou?',
          definition:
            '* alcançar um destino\n* atingir um ponto\n* vir a estar presente',
          translation: "досягти, прибути, з'явитися",
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'pt',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'pt',
          source: 'pergunta',
          ipa: '/pɛɾˈɡũtɐ/',
          example:
            '* Ela fez uma pergunta ao professor.\n* A pergunta foi clara e direta.',
          definition:
            '* Interrogação feita para obter informação\n* Questão proposta para reflexão',
          translation: 'питання, запитання',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'pt',
          source: 'questão',
          ipa: 'keʃˈtɐ̃w̃',
          example:
            '* A questão foi resolvida.\n* Ele levantou uma questão importante.',
          definition: '* pergunta\n* problema\n* assunto',
          translation: 'питання, проблема, тема',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
      results: [
        {
          language: 'pt',
          source: 'manutenção',
          ipa: 'mɐnɐˈtẽsɐ̃w̃',
          example:
            '* A manutenção do carro é essencial.\n* Ele trabalha na manutenção de computadores.',
          definition: '* ato de manter\n* conservação de algo',
          translation: 'утримання, обслуговування',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
};
