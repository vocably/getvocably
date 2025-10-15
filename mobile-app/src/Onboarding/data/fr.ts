import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* une performance remarquable',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: 'remarkable, noteworthy, exceptional',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à ses fins.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'arrive, happen, succeed',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'fr',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question\n* répondre à une question',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: 'question, issue, topic',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'interrogation',
          ipa: 'ɛ̃.te.ʁɔ.ɡa.sjɔ̃',
          example:
            "* l'interrogation du témoin\n* une interrogation écrite\n* répondre à une interrogation",
          definition:
            '* action de poser des questions\n* examen oral ou écrit\n* questionnement insistant',
          translation: 'questioning, test, interrogation',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien régulier",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'maintenance, interview, care',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* une performance remarquable',
      definition: "* digne d'attention\n* extraordinaire\n* notable",
      translation: 'notable, extraordinario',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à ses fins.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'llegar, suceder, lograr',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'fr',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question\n* répondre à une question',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: 'pregunta, cuestión',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "* faire une demande\n* demande d'emploi",
          definition: '* action de demander\n* requête\n* sollicitation',
          translation: 'solicitud, petición, demanda',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien téléphonique",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'mantenimiento, entrevista, cuidado',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* un événement remarquable',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: 'digne d attention, exceptionnel, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive demain.\n* Un accident est arrivé.\n* Elle est arrivée au sommet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'atteindre, se produire, réussir',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'fr',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example:
            '* poser une question\n* répondre à une question\n* question difficile',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: "demande d'information, problème, sujet",
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'interrogation',
          ipa: 'ɛ̃.te.ʁɔ.ɡa.sjɔ̃',
          example:
            "* l'interrogation du témoin\n* passer une interrogation\n* répondre à une interrogation",
          definition:
            '* action de poser des questions\n* examen oral ou écrit\n* questionnement insistant',
          translation: 'questionnement, examen, interrogation insistant',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien annuel",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* réunion pour évaluation',
          translation: 'maintenance, conversation, évaluation',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* une découverte remarquable',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: 'bemerkenswert, außergewöhnlich, nennenswert',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive demain.\n* Un accident est arrivé.\n* Elle est arrivée au sommet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'ankommen, geschehen, erfolgen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'fr',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example:
            '* poser une question\n* répondre à une question\n* question difficile',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: 'Frage, Anfrage, Thema',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "* faire une demande\n* demande d'emploi",
          definition: '* action de demander\n* requête\n* sollicitation',
          translation: 'Anfrage, Gesuch, Bitte',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien régulier\n* entretien téléphonique",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'Wartung, Gespräch, Pflege',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: '显著的, 卓越的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir son projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: '到达, 发生, 成功',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'fr',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'problème',
          ipa: 'pʁɔ.blɛm',
          example: "* Il a résolu le problème.\n* C'est un problème complexe.",
          definition: '* question difficile\n* situation compliquée',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: '问题, 疑问',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: '维护, 谈话',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Un paysage remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: '卓越的, 引人注目的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: '到達, 發生, 成功',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'fr',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'problème',
          ipa: 'pʁɔ.blɛm',
          example: "* Il a résolu le problème.\n* C'est un problème complexe.",
          definition: '* question difficile\n* situation compliquée',
          translation: '問題, 困境',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: '問題, 詢問',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: '維護, 會談',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: '注目すべき, 卓越した',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: '到着する, 起こる, 成功する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'fr',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: '質問, 問題',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.\n* L'entretien de la voiture coûte cher.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'メンテナンス, 面接, 手入れ',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* extraordinaire",
      translation: 'замечательный, выдающийся',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'прибыть, произойти, успеть',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'fr',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'вопрос, проблема',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.\n* L'entretien a duré une heure.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* réunion pour évaluation',
          translation: 'обслуживание, беседа, собеседование',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'notevole, eccezionale',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'arrivare, succedere, riuscire',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'fr',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'domanda',
          ipa: 'dɔ.mɑ̃d',
          example: '* faire une demande\n* répondre à une demande',
          definition: '* requête\n* question\n* sollicitation',
          translation: 'richiesta, domanda, sollecitazione',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'də.mɑ̃d',
          example:
            "* faire une demande\n* demande d'emploi\n* demande de renseignements",
          definition: '* action de demander\n* requête\n* sollicitation',
          translation: 'richiesta, domanda',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Un entretien d'embauche est prévu.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'manutenzione, colloquio',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarcável',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un exploit remarquable\n* une performance remarquable',
      definition: "* digne d'attention\n* extraordinaire\n* notable",
      translation: 'notável, extraordinário',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à ses fins.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'chegar, acontecer, ter sucesso',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'fr',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'questão',
          ipa: 'kɛs.tjɔ̃',
          example:
            '* La question est complexe.\n* Il a posé une question.\n* Répondre à une question.',
          definition:
            '* problème à résoudre\n* sujet de discussion\n* interrogation',
          translation: 'questão, assunto, interrogação',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien avec le directeur",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'manutenção, entrevista, cuidado',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Un paysage remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'ملحوظ, استثنائي',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir son projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'يصل, يحدث, ينجح',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'fr',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'سؤال, مشكلة',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'صيانة, مقابلة',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* une performance remarquable',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: 'opmerkelijk, uitzonderlijk, noemenswaardig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive demain.\n* Un accident est arrivé.\n* Elle arrive à comprendre.',
          definition:
            '* atteindre un lieu\n* se produire\n* parvenir à un état',
          translation: 'aankomen, gebeuren, bereiken',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'fr',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛs.tjɔ̃',
          example:
            '* poser une question\n* répondre à une question\n* question difficile',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: 'vraag, probleem, onderwerp',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'də.mɑ̃d',
          example: "* faire une demande\n* demande d'emploi",
          definition: '* action de demander\n* requête\n* sollicitation',
          translation: 'verzoek, aanvraag, sollicitatie',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien téléphonique",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* discussion pour un emploi',
          translation: 'onderhoud, gesprek, sollicitatie',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* une performance remarquable',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: '주목할 만한, 예외적인, 주목할 가치가 있는',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à ses fins.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: '도착하다, 발생하다, 성공하다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'fr',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛs.tjɔ̃',
          example: '* poser une question\n* répondre à une question',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: '질문, 문제, 토론 주제',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien avec le directeur",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: '유지, 면담, 관리',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Un paysage remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'उल्लेखनीय, असाधारण',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir son projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'पहुंचना, घटना, सफल होना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'fr',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Un entretien d'embauche est prévu.\n* Ils ont eu un entretien avec le directeur.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* réunion pour évaluer',
          translation: 'रखरखाव, औपचारिक बातचीत, मूल्यांकन बैठक',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Un paysage remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'dikkate değer, olağanüstü',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir son projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'varmak, olmak, başarmak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'fr',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* sujet de discussion",
          translation: 'soru, konu',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'bakım, görüşme',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Un paysage remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'anmärkningsvärd, exceptionell',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir son projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'anlända, hända, lyckas',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'fr',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛs.tjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'fråga, problem',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'də.mɑ̃d',
          example:
            "* faire une demande\n* demande d'emploi\n* demande de renseignements",
          definition: '* action de demander\n* requête\n* sollicitation',
          translation: 'begäran, förfrågan, ansökan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'underhåll, samtal',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un exploit remarquable\n* un talent remarquable',
      definition: "* digne d'attention\n* extraordinaire\n* notable",
      translation: 'bemerkelsesverdig, ekstraordinær, notabel',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à comprendre.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'ankomme, skje, lykkes',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'fr',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛs.tjɔ̃',
          example: '* poser une question\n* répondre à une question',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: 'spørsmål, problem, diskusjonstema',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien régulier",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'vedlikehold, intervju, omsorg',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* un événement remarquable',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: 'bemærkelsesværdig, exceptionel, notabel',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à ses fins.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'ankomme, ske, lykkes',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'fr',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question\n* répondre à une question',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: 'spørgsmål, problem, emne',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien avec le directeur",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'vedligeholdelse, samtale, omsorg',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'huomionarvoinen, poikkeuksellinen',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir son projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'saapua, tapahtua, onnistua',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'fr',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'kysymys, ongelma',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.\n* L'entretien annuel a eu lieu hier.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* réunion pour évaluer',
          translation: 'huolto, keskustelu, arviointikokous',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'قابل توجه, استثنایی',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'رسیدن, اتفاق افتادن, موفق شدن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'fr',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'سوال, پرسش',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Un entretien d'embauche est prévu.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'نگهداری, مصاحبه',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* un talent remarquable\n* une découverte remarquable',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: 'godny uwagi, wyjątkowy, znaczący',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'a.ʁi.ve',
          example:
            '* Il arrive demain.\n* Un accident est arrivé.\n* Elle est arrivée à ses fins.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'przybyć, zdarzyć się, odnieść sukces',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'fr',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example:
            '* poser une question\n* répondre à une question\n* question difficile',
          definition:
            "* demande d'information\n* problème à résoudre\n* sujet de discussion",
          translation: 'pytanie, kwestia, temat',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* entretien d'embauche\n* entretien du jardin\n* entretien régulier",
          definition:
            '* action de maintenir en bon état\n* conversation formelle\n* soin apporté à quelque chose',
          translation: 'utrzymanie, rozmowa, opieka',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'σημαντικός, εξαιρετικός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'φτάνω, συμβαίνω, επιτυγχάνω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'fr',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'ερώτηση, ζητούμενο',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'συντήρηση, συζήτηση',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Un paysage remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'ראוי לציון, יוצא דופן',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'להגיע, לקרות, להצליח',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'fr',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'שאלה, בעיה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'də.mɑ̃d',
          example:
            "* faire une demande\n* demande d'emploi\n* demande de renseignements",
          definition: '* action de demander\n* requête\n* sollicitation',
          translation: 'בקשה, דרישה, שאלה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'תחזוקה, שיחה רשמית',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'น่าทึ่ง, โดดเด่น',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'มาถึง, เกิดขึ้น, ประสบความสำเร็จ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'fr',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'คำถาม, ปัญหา',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'การบำรุงรักษา, การสนทนาทางการ',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel\n* notable",
      translation: 'đáng chú ý, nổi bật, đặc biệt',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir son projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'đến, xảy ra, thành công',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'fr',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* La question du jour.',
          definition: "* demande d'information\n* sujet de discussion",
          translation: 'câu hỏi, vấn đề',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'bảo trì, cuộc trò chuyện',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'menarik, istimewa',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'datang, terjadi, berhasil',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'fr',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'pertanyaan, masalah',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'perawatan, wawancara',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Une personne remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'menarik, luar biasa',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'tiba, berlaku, berjaya',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'fr',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: 'penyelenggaraan, perbualan formal',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʁə.maʁ.kabl',
      example: '* Un exploit remarquable.\n* Un paysage remarquable.',
      definition: "* digne d'attention\n* exceptionnel",
      translation: 'помітний, винятковий',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʁive',
          example:
            '* Il arrive à Paris.\n* Un accident est arrivé.\n* Elle arrive à finir le projet.',
          definition: '* atteindre un lieu\n* se produire\n* réussir',
          translation: 'прибути, відбутися, досягти',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'fr',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* Poser une question.\n* Répondre à une question.',
          definition: "* demande d'information\n* problème à résoudre",
          translation: 'питання, запит',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃.tʁə.tjɛ̃',
          example:
            "* L'entretien du jardin est nécessaire.\n* Il a passé un entretien d'embauche.",
          definition:
            '* action de maintenir en bon état\n* conversation formelle',
          translation: "обслуговування, інтерв'ю",
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
};
