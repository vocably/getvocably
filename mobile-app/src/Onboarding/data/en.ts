import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example:
        '* a remarkable achievement\n* remarkable talent\n* remarkable progress',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'noteworthy, extraordinary, significant',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She finally arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'arrive, conclude, happen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'en',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            "* She asked a question.\n* The question of funding remains.\n* There's no question about it.",
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion\n* doubt or uncertainty about something',
          translation: 'inquiry, issue, doubt',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: '/ˈkwɪəri/',
          example:
            '* She had a query about the schedule.\n* The query was answered promptly.\n* He raised a query during the meeting.',
          definition: '* a question\n* an inquiry\n* a doubt',
          translation: 'question, inquiry, doubt',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* approach the city\n* approach a problem',
          definition: '* come near or nearer to\n* begin to deal with',
          translation: 'approach, address',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'method, arrival',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'notable, extraordinario, digno de atención',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She finally arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'llegar, arribar, suceder',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'en',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'pregunta, cuestión',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: '/æsk/',
          example: '* ask a question\n* ask for help\n* ask about the event',
          definition:
            '* to request information\n* to seek permission\n* to inquire',
          translation: 'preguntar, pedir permiso, indagar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* a new approach to teaching\n* the approach of winter\n* a scientific approach',
          definition:
            '* a way of dealing with something\n* an act of coming near\n* a method or procedure',
          translation: 'enfoque, acercamiento, método',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* approach the door\n* approach a problem\n* approach someone for help',
          definition:
            '* come near or nearer to\n* begin to deal with\n* make a proposal or request',
          translation: 'acercarse, abordar, proponer',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example:
        '* a remarkable achievement\n* remarkable talent\n* remarkable progress',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'remarquable, extraordinaire, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to happen or occur',
          translation: 'arriver, parvenir, survenir',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'en',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'question, interrogation',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: '/ˈkwɪəri/',
          example:
            '* She had a query about the schedule.\n* The query was answered promptly.\n* He raised a query during the meeting.',
          definition: '* a question\n* an inquiry\n* a doubt',
          translation: 'question, demande, doute',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* approach the door\n* approach a problem',
          definition: '* come near or nearer to\n* begin to deal with',
          translation: "approcher, s'attaquer à",
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* a new approach to teaching\n* the approach of winter\n* the approach to the house',
          definition:
            '* a way of dealing with something\n* an act of coming near\n* a path or road leading to a place',
          translation: 'approche, chemin',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑːrkəbl',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'bemerkenswert, außergewöhnlich, nennenswert',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'ankommen, gelangen, eintreten',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'en',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            "* She asked a question.\n* The question of funding remains.\n* There's no question about it.",
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion\n* doubt or uncertainty about something',
          translation: 'Frage, Angelegenheit, Zweifel',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'inquiry',
          ipa: '/ɪnˈkwaɪəri/',
          example:
            '* The inquiry revealed new facts.\n* She made an inquiry about the job.',
          definition:
            '* an act of asking for information\n* an official investigation',
          translation: 'Anfrage, Ermittlung',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* a new approach to teaching\n* the approach of winter\n* a scientific approach',
          definition:
            '* a way of dealing with something\n* an act of coming near\n* a method or procedure',
          translation: 'Ansatz, Herangehensweise, Annäherung',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* approach the door\n* approach a problem',
          definition: '* come near or nearer to\n* begin to deal with',
          translation: 'nähern, angehen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* her talent is remarkable',
      definition: '* worthy of attention\n* extraordinary',
      translation: '显著的, 非凡的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They arrived at the airport.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: '到达, 抵达',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'en',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: '问题, 疑问',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'problem',
          ipa: '/ˈprɒbləm/',
          example:
            '* The problem was difficult to solve.\n* She faced a problem at work.',
          definition:
            '* a matter or situation regarded as unwelcome or harmful\n* a question proposed for solution',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example:
            '* The train is approaching the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: '接近, 靠近',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: '方法, 接近',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: '卓越的, 非凡的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* The package arrived yesterday.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: '到達, 抵達',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'en',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'problem',
          ipa: '/ˈprɒbləm/',
          example:
            '* The problem was difficult to solve.\n* She faced a problem at work.',
          definition:
            '* a matter or situation regarded as unwelcome or harmful\n* a question proposed for solution',
          translation: '問題, 難題',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: '問題, 詢問',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem logically.',
          definition: '* come near\n* begin to deal with',
          translation: '接近, 靠近',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: '方法, 接近',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: '注目すべき, 非凡な',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: '到着する, 結論に達する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'en',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence worded to elicit information\n* a matter requiring resolution',
          translation: '質問, 問題',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: '/ˈkwɪəri/',
          example:
            '* She had a query about the schedule.\n* The query was answered promptly.',
          definition: '* a question\n* a request for information',
          translation: '質問, 問い合わせ',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'アプローチ, 接近',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train is approaching the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* begin to deal with',
          translation: '近づく, 取り組む',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'замечательный, выдающийся',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* The package arrived yesterday.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'прибыть, дойти до заключения',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'вопрос, дело',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: '/ˈkwɪəri/',
          example:
            '* She had a query about the schedule.\n* The query was answered promptly.',
          definition: '* a question\n* an inquiry',
          translation: 'вопрос, запрос',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'подход, приближение',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'подходить, приступать',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable progress',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'notevole, straordinario',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They arrived at the airport.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'arrivare, giungere',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'en',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'domanda, questione',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'demand',
          ipa: '/dɪˈmænd/',
          example:
            '* The demand for new technology is high.\n* She made a demand for a refund.',
          definition:
            '* an insistent request\n* the desire for goods or services',
          translation: 'richiesta, domanda',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'approccio, avvicinamento',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* deal with',
          translation: 'avvicinarsi, affrontare',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'notável, extraordinário',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'chegar, chegar a uma conclusão, ocorrer',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'en',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.\n* There is no question about it.',
          definition:
            '* a sentence worded or expressed so as to elicit information\n* a matter requiring resolution or discussion\n* doubt or uncertainty about something',
          translation: 'pergunta, questão, dúvida',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: '/æsk/',
          example: '* ask a question\n* ask for help\n* ask to leave',
          definition:
            '* to request information\n* to inquire\n* to request permission\n* to invite',
          translation: 'perguntar, inquirir, pedir permissão, convidar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* approach the door\n* approach a problem',
          definition: '* come near or nearer to\n* begin to deal with',
          translation: 'aproximar-se, abordar',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* a new approach to teaching\n* the approach of winter\n* the approach to the house',
          definition:
            '* a way of dealing with something\n* an act of coming near\n* a path or road leading to a place',
          translation: 'abordagem, aproximação, caminho',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'ملحوظ, استثنائي',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* We arrived at a decision.',
          definition: '* reach a destination\n* come to a conclusion',
          translation: 'يصل, يصل إلى استنتاج',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'en',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence worded to elicit information\n* a matter requiring resolution',
          translation: 'سؤال, مسألة',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'نهج, اقتراب',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train is approaching the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* begin to deal with',
          translation: 'يقترب, يتعامل مع',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑːrkəbl',
      example:
        '* a remarkable achievement\n* remarkable talent\n* remarkable progress',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'opmerkelijk, bijzonder, noemenswaardig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'aankomen, concluderen, gebeuren',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'en',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.\n* There is no question about it.',
          definition:
            '* a sentence worded or expressed so as to elicit information\n* a matter requiring resolution or discussion\n* doubt or uncertainty about something',
          translation: 'vraag, kwestie, twijfel',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: '/æsk/',
          example: '* ask a question\n* ask for help\n* ask to leave',
          definition:
            '* to request information\n* to inquire\n* to request permission\n* to invite',
          translation: 'vragen, informeren, toestemming vragen, uitnodigen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'benadering, nadering',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* approach the door\n* approach a problem\n* approach someone for help',
          definition:
            '* come near or nearer to\n* begin to deal with\n* make a proposal or request',
          translation: 'benaderen, naderen, aanpakken',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: '주목할 만한, 비범한, 주목할 가치가 있는',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She finally arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: '도착하다, 결론에 도달하다, 발생하다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'en',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: '질문, 문제',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: '/ˈkwɪəri/',
          example:
            '* She had a query about the schedule.\n* The query was answered promptly.\n* He raised a query during the meeting.',
          definition: '* a question\n* an inquiry\n* a doubt',
          translation: '질문, 문의, 의문',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* approach the door\n* approach a problem\n* approach someone for help',
          definition:
            '* come near or nearer to\n* begin to deal with\n* make a proposal or request',
          translation: '접근하다, 다루기 시작하다, 제안하다',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* a new approach to teaching\n* the approach of winter\n* a scientific approach',
          definition:
            '* a way of dealing with something\n* an act of coming near\n* a method or procedure',
          translation: '접근, 방법',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* her talent is remarkable',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'असाधारण, विशेष',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They arrived at the airport.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'पहुंचना, निष्कर्ष पर आना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'en',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence worded to elicit information\n* a matter requiring resolution',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: '/ˈkwɪəri/',
          example:
            '* She had a query about the schedule.\n* The query was answered promptly.',
          definition: '* a question\n* an inquiry',
          translation: 'प्रश्न, जांच',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'नज़दीक आना, सामना करना',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'पद्धति, निकटता',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'dikkate değer, olağanüstü',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They arrived at the airport.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'varmak, ulaşmak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'en',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'soru, mesele',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'yaklaşım, yaklaşma',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'yaklaşmak, ele almak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* her talent is remarkable',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'anmärkningsvärd, extraordinär',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* The package arrived yesterday.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'anlända, komma fram',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'en',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence worded to elicit information\n* a matter requiring resolution',
          translation: 'fråga, ärende',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: '/æsk/',
          example:
            '* She asked about the schedule.\n* He asked to leave early.\n* They asked if it was true.',
          definition:
            '* request information\n* seek permission\n* pose a question',
          translation: 'fråga, be om, ställa en fråga',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'metod, närmande',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'närma, ta itu med',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example:
        '* a remarkable achievement\n* remarkable talent\n* remarkable progress',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'bemerkelsesverdig, enestående, notabel',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'ankomme, komme til en konklusjon, skje',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'en',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            "* She asked a question.\n* The question of funding remains.\n* There's no question about it.",
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion\n* doubt or uncertainty about something',
          translation: 'spørsmål, problem, tvil',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'tilnærming, nærming',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* approach the door\n* approach a problem',
          definition: '* come near or nearer to\n* begin to deal with',
          translation: 'nærme, tilnærme seg',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example:
        '* a remarkable achievement\n* remarkable talent\n* remarkable progress',
      definition: '* worthy of attention\n* extraordinary\n* notable',
      translation: 'bemærkelsesværdig, usædvanlig, notabel',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'ankomme, nå, forekomme',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'en',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            "* She asked a question.\n* The question of funding remains.\n* There's no question about it.",
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion\n* doubt or uncertainty about something',
          translation: 'spørgsmål, problem, tvivl',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* a new approach to teaching\n* the approach of winter\n* a scientific approach',
          definition:
            '* a way of dealing with something\n* an act of coming near\n* a method or procedure',
          translation: 'tilgang, metode, fremgangsmåde',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* approach the door\n* approach a problem\n* approach someone for help',
          definition:
            '* come near or nearer to\n* begin to deal with\n* make a proposal or request',
          translation: 'nærme, tilgå, henvende sig',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'huomionarvoinen, poikkeuksellinen',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'saapua, päätyä',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'en',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'kysymys, asia',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'lähestyä, ryhtyä',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'lähestymistapa, lähestyminen',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'قابل توجه, استثنایی',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'رسیدن, به نتیجه رسیدن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'en',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'سوال, پرسش',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'رویکرد, نزدیکی',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train is approaching the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* begin to deal with',
          translation: 'نزدیک شدن, مواجه شدن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'wyjątkowy, godny uwagi',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            '* They arrive at noon.\n* The package arrived yesterday.\n* She arrived at a decision.',
          definition:
            '* to reach a destination\n* to come to a conclusion\n* to occur or happen',
          translation: 'przybyć, dojść, zdarzyć się',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'en',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.\n* There is no question about it.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion\n* doubt or uncertainty about something',
          translation: 'pytanie, kwestia, wątpliwość',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* a new approach to teaching\n* the approach of winter\n* a scientific approach',
          definition:
            '* a way of dealing with something\n* an act of coming near\n* a method or procedure',
          translation: 'podejście, zbliżenie, metoda',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* approach the door\n* approach a problem\n* approach someone for help',
          definition:
            '* come near or nearer to\n* begin to deal with\n* make a proposal or request',
          translation: 'zbliżać się, przystępować, proponować',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'σημαντικός, εξαιρετικός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* We arrived at a decision.',
          definition: '* reach a destination\n* come to a conclusion',
          translation: 'φτάνω, καταλήγω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'en',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'ερώτηση, θέμα',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'προσέγγιση',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'πλησιάζω, προσεγγίζω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable progress',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'מרשים, יוצא דופן',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at the airport.\n* We arrive at a decision.',
          definition: '* reach a destination\n* come to a conclusion',
          translation: 'להגיע, לסיים',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'en',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence worded to elicit information\n* a matter requiring resolution',
          translation: 'שאלה, עניין',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'inquiry',
          ipa: '/ɪnˈkwaɪəri/',
          example:
            '* The inquiry revealed new evidence.\n* She made an inquiry about the job.',
          definition:
            '* act of asking for information\n* official investigation',
          translation: 'שאלה, חקירה',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'גישה, קרבה',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'לגשת, להתקרב',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'น่าทึ่ง, โดดเด่น',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They will arrive at noon.\n* The package arrived yesterday.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'มาถึง, ถึงจุดหมาย',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'en',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'คำถาม, ประเด็น',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train is approaching the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* begin to deal with',
          translation: 'เข้าใกล้, เริ่มจัดการกับ',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'วิธีการ, การเข้ามาใกล้',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'đáng chú ý, phi thường',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'đến, đạt được',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'en',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence worded to elicit information\n* a matter requiring resolution',
          translation: 'câu hỏi, vấn đề',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train approaches the station.\n* She approached the problem carefully.',
          definition: '* come near\n* begin to deal with',
          translation: 'tiếp cận, đến gần',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'cách tiếp cận, sự tiếp cận',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* her talent is remarkable',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'menarik, luar biasa',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They arrived at the airport.\n* She arrived at a decision.',
          definition: '* reach a destination\n* come to a conclusion',
          translation: 'tiba, sampai',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'en',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question.\n* The question remains unanswered.',
          definition:
            '* a sentence worded to elicit information\n* a matter requiring resolution',
          translation: 'pertanyaan, masalah',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'pendekatan, cara mendekati',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train is approaching the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* begin to deal with',
          translation: 'mendekati, menghadapi',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'menarik, luar biasa',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example: '* They arrive at noon.\n* The package arrived yesterday.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'tiba, sampai',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'en',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'pendekatan',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* The train is approaching the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* begin to deal with',
          translation: 'mendekati, menghampiri',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: '/rɪˈmɑːrkəbl/',
      example: '* a remarkable achievement\n* remarkable talent',
      definition: '* worthy of attention\n* extraordinary',
      translation: 'значний, видатний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: '/əˈraɪv/',
          example:
            '* They arrived at the airport.\n* She arrived at a decision.',
          definition: '* to reach a destination\n* to come to a conclusion',
          translation: 'прибути, достигти',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'en',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: '/ˈkwɛs.tʃən/',
          example:
            '* She asked a question about the project.\n* The question of funding remains unresolved.',
          definition:
            '* a sentence or phrase used to find out information\n* a matter requiring resolution or discussion',
          translation: 'питання, запитання',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example: '* a new approach to teaching\n* the approach of winter',
          definition:
            '* a way of dealing with something\n* an act of coming near',
          translation: 'підхід, наближення',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: '/əˈproʊtʃ/',
          example:
            '* The train is approaching the station.\n* We need to approach the problem differently.',
          definition: '* come near\n* begin to deal with',
          translation: 'підходити, звертатися',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
};
