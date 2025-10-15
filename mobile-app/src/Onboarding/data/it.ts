import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'notable, significant, remarkable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'ar.riˈva.re',
          example: '* Arrivo domani.\n* È arrivato tardi.\n* Arriviamo presto.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'arrive, reach, achieve',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'it',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'the question, the inquiry, the query',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: '/kwesˈtjoːne/',
          example:
            '* La questione è complessa.\n* Affrontiamo la questione.\n* La questione è aperta.',
          definition:
            '* argomento di discussione\n* problema da risolvere\n* tema di dibattito',
          translation: 'the issue, the question, the matter',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            "* manutenzione dell'auto\n* costi di manutenzione\n* programma di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari\n* conservazione di un bene',
          translation: 'maintenance, upkeep, repair',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'notable, significativo',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example: '* Arrivo domani.\n* È arrivato tardi.\n* Arriviamo presto.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'llegar, alcanzar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'it',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'la pregunta, el interrogante',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'interrogativo',
          ipa: 'interroˈɡativo',
          example: '* tono interrogativo\n* sguardo interrogativo',
          definition:
            "* che esprime una domanda\n* relativo a un'interrogazione",
          translation: 'interrogativo, de interrogación',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjoːne/',
          example: "* manutenzione dell'auto\n* costi di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari',
          translation: 'mantenimiento, cura y reparación',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'remarquable, important, significatif',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arriver',
          ipa: 'arˈrivɛre',
          example:
            '* arrivare a casa\n* arrivare in tempo\n* arrivare al successo',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'arriver, atteindre, réussir',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'it',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'la question, la demande',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: '/kwesˈsjone/',
          example:
            '* la questione è complessa\n* affrontare la questione\n* risolvere la questione',
          definition:
            '* problema da risolvere\n* argomento di discussione\n* interrogativo',
          translation: 'la question, le problème',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example: "* manutenzione dell'auto\n* costi di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* rilevante',
      translation: 'bemerkenswert, erheblich, bedeutend',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/arːiˈvare/',
          example: '* Arrivo domani.\n* Quando arrivi?\n* È arrivato tardi.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'ankommen, erreichen, erlangen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'it',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'die Frage, die Anfrage, das Anliegen',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogazione",
          ipa: 'linteroɡatˈtsjone',
          example:
            "* L'interrogazione è domani.\n* Ha superato l'interrogazione.\n* L'interrogazione parlamentare è stata presentata.",
          definition:
            '* domanda formale\n* esame orale\n* richiesta di informazioni',
          translation: 'die Befragung, die mündliche Prüfung, die Anfrage',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example: '* manutenzione della macchina\n* costi di manutenzione',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* rilevante\n* significativo',
      translation: '显著的, 重要的, 值得注意的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivare in tempo.\n* Arrivare a casa.\n* Arrivare al successo.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: '到达, 抵达, 取得',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'it',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'il problema',
          ipa: 'il proˈblema',
          example:
            '* risolvere un problema\n* affrontare un problema\n* problema complesso',
          definition: '* questione da risolvere\n* difficoltà\n* complicazione',
          translation: '问题, 难题, 困难',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: '/la kwesˈtjoːne/',
          example: '* La questione è complessa.\n* Affrontiamo la questione.',
          definition: '* problema da risolvere\n* argomento di discussione',
          translation: '问题, 议题',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjoːne/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition: '* cura e riparazione\n* conservazione in buono stato',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition: '* degno di nota\n* significativo\n* importante',
      translation: '顯著, 重要, 意義深遠',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivo a casa alle 18.\n* Quando arriverai a Roma?\n* È arrivato primo in gara.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: '到達, 抵達, 達成',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'it',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'il problema',
          ipa: 'il proˈblema',
          example:
            '* risolvere un problema\n* affrontare un problema\n* problema complesso',
          definition: '* questione da risolvere\n* difficoltà\n* complicazione',
          translation: '問題, 困難, 複雜',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: '/la kwesˈtjoːne/',
          example: '* La questione è complessa.\n* Affrontiamo la questione.',
          definition: '* problema da risolvere\n* argomento di discussione',
          translation: '問題, 議題',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtentsjone/',
          example:
            "* La manutenzione dell'auto è importante.\n* Effettuare la manutenzione regolare.",
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* significativo\n* importante',
      translation: '注目すべき, 重要な, 意味のある',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivo a casa alle 18.\n* Quando arriverai?\n* È arrivato primo alla gara.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: '到着する, 場所に達する, 結果を得る',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'it',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* La domanda è chiara.\n* Ho una domanda per te.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: '質問, 問い',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogazione",
          ipa: '/interroɡatˈtsjone/',
          example:
            "* L'interrogazione è stata difficile.\n* Ho preparato l'interrogazione di storia.\n* L'interrogazione parlamentare è stata presentata.",
          definition:
            '* domanda formale\n* esame orale\n* richiesta di informazioni',
          translation: '質問, 口頭試験, 情報の要求',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'メンテナンス, 保守',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* significativo\n* importante',
      translation: 'заметный, значительный, важный',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivo a casa alle 18.\n* Quando arriverai a Roma?\n* Finalmente è arrivato il pacco.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'прибыть, достигнуть, добраться',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'it',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'доманда',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è stata chiara.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* istanza',
          translation: 'вопрос, запрос, просьба',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: '/la kwesˈtjoːne/',
          example: '* La questione è complessa.\n* Affrontiamo la questione.',
          definition: '* problema da risolvere\n* argomento di discussione',
          translation: 'вопрос, проблема',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition: '* cura e riparazione\n* conservazione in buono stato',
          translation: 'обслуживание, ремонт',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'importante, significativo, rilevante',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivare in tempo.\n* Arrivare a casa.\n* Arrivare al successo.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation:
            'giungere a destinazione, raggiungere un luogo, conseguire un risultato',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'it',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'question',
          ipa: '/kwesˈtʃone/',
          example: '* La questione è complessa.\n* Affrontiamo la questione.',
          definition: '* problema da risolvere\n* argomento di discussione',
          translation: 'problema, argomento',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'it',
          source: 'demand',
          ipa: '/deˈmand/',
          example:
            '* La domanda di lavoro è alta.\n* Ha fatto una richiesta formale.',
          definition: '* richiesta\n* domanda',
          translation: 'richiesta, domanda',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'cura, conservazione',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'notável, significativo, importante',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/arːiˈvare/',
          example:
            '* Arrivo domani.\n* È arrivato tardi.\n* Arriviamo al punto.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'chegar, alcançar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'it',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'a pergunta, a questão, o interrogativo',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'interrogação',
          ipa: 'interroɡaˈt͡sjoːne',
          example:
            "* L'interrogazione è stata difficile.\n* Ha risposto bene all'interrogazione.",
          definition: '* atto di interrogare\n* domanda\n* esame orale',
          translation: 'interrogação, pergunta, exame oral',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            "* manutenzione dell'auto\n* costi di manutenzione\n* servizio di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari\n* conservazione di un bene',
          translation: 'manutenção, conservação',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'ملحوظ, بارز, مهم',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example: '* Arrivo a casa alle 18.\n* Quando arrivi in ufficio?',
          definition: '* giungere a destinazione\n* raggiungere un luogo',
          translation: 'الوصول, بلوغ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'it',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* La domanda è chiara.\n* Ho una domanda per te.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'سؤال, استفسار, استعلام',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'الصيانة, الترميم',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* rilevante',
      translation: 'opmerkelijk, belangrijk, relevant',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'ar.riˈva.re',
          example:
            '* arrivare a casa\n* arrivare in tempo\n* arrivare al successo',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'aankomen, bereiken, verwezenlijken',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'it',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'de vraag, de aanvraag, de kwestie',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la richiesta',
          ipa: 'riˈkjɛsta',
          example:
            '* fare una richiesta\n* accettare una richiesta\n* rifiutare una richiesta',
          definition:
            '* domanda formale\n* richiesta di informazioni\n* domanda di favore',
          translation: 'verzoek, aanvraag, informatieaanvraag',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtentsjone/',
          example:
            "* manutenzione dell'auto\n* costi di manutenzione\n* programma di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari\n* conservazione di un bene',
          translation: 'onderhoud, onderhoudswerk',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* rilevante',
      translation: '주목할 만한, 중요한, 관련된',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/arːiˈvare/',
          example:
            '* arrivare a casa\n* arrivare in tempo\n* arrivare al successo',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: '도착하다, 장소에 도달하다, 목표를 달성하다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'it',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: '질문, 문의, 질의',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            "* la manutenzione dell'auto\n* manutenzione ordinaria\n* costi di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari\n* conservazione di un bene',
          translation: '유지보수, 기계 수리, 자산 관리',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'महत्वपूर्ण, विशेष, प्रमुख',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example: '* Arrivo a casa alle 18.\n* Quando arrivi in ufficio?',
          definition: '* giungere a destinazione\n* raggiungere un luogo',
          translation: 'पहुंचना, स्थान पर पहुंचना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'it',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* La domanda è chiara.\n* Ho una domanda per te.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'interrogativo',
          ipa: 'interroˈɡativo',
          example: '* tono interrogativo\n* frase interrogativa',
          definition:
            "* che esprime una domanda\n* relativo a un'interrogazione",
          translation: 'प्रश्नात्मक, सवाल से संबंधित',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'रखरखाव, सुधार',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* importante\n* significativo',
      translation: 'önemli, kayda değer, anlamlı',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivare in tempo.\n* Arrivare a casa.\n* Arrivare al successo.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'varmak, ulaşmak, sonuç elde etmek',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'it',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è semplice.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'soru, talep',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition: '* cura e riparazione\n* conservazione in buono stato',
          translation: 'bakım, onarım',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* significativo\n* importante',
      translation: 'anmärkningsvärd, betydande, viktig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example: '* Arrivo domani.\n* Quando arrivi?',
          definition: '* giungere a destinazione\n* raggiungere un luogo',
          translation: 'anlända, nå',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'it',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* La domanda è chiara.\n* Ho una domanda per te.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'fråga, begäran',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la richiesta',
          ipa: 'riˈkjɛsta',
          example:
            '* Ho fatto una richiesta di informazioni.\n* La richiesta è stata accettata.\n* Ricevono molte richieste ogni giorno.',
          definition: '* domanda\n* sollecitazione\n* pretesa',
          translation: 'begäran, förfrågan, ansökan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'underhåll, vård',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'betydelig, merkverdig, viktig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/arːiˈvare/',
          example:
            '* Arrivo domani.\n* È arrivato tardi.\n* Arriviamo in tempo.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'ankomme, nå, oppnå',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'it',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'spørsmål, forespørsel, interrogativ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogativo",
          ipa: 'interroˈɡativo',
          example: "* L'interrogativo rimane.\n* Un interrogativo importante.",
          definition: '* domanda\n* quesito\n* dubbio',
          translation: 'spørsmål, interrogativ',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example: "* manutenzione dell'auto\n* costi di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari',
          translation: 'vedlikehold, reparasjon',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'bemærkelsesværdig, betydningsfuld, vigtig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* arrivare a casa\n* arrivare in tempo\n* arrivare al successo',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'ankomme, nå, opnå',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'it',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* fare una domanda\n* rispondere alla domanda\n* domanda di lavoro',
          definition:
            '* richiesta di informazioni\n* quesito\n* richiesta di qualcosa',
          translation: 'spørgsmål, anmodning',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogativo",
          ipa: 'interroˈɡativo',
          example: "* L'interrogativo rimane.\n* Un interrogativo importante.",
          definition: '* domanda\n* quesito\n* dubbio',
          translation: 'spørgsmål, interrogativ',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            "* manutenzione dell'auto\n* costi di manutenzione\n* programma di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari\n* conservazione di un bene',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* significativo\n* importante',
      translation: 'huomattava, merkittävä, tärkeä',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivo a casa alle 18.\n* Quando arriverai?\n* È arrivato primo in gara.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'saapua, päästä perille, saavuttaa',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'it',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* La domanda è chiara.\n* Ho una domanda per te.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'kysymys, pyyntö, kysely',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: '/la kwesˈtjoːne/',
          example: '* La questione è complessa.\n* Affrontiamo la questione.',
          definition: '* problema da risolvere\n* argomento di discussione',
          translation: 'kysymys, ongelma',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/la manuˈtentsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'huolto, ylläpito',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* significativo\n* importante',
      translation: 'قابل توجه, معنی دار, مهم',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example: '* Arrivare in tempo.\n* Arrivare al successo.',
          definition: '* giungere a destinazione\n* raggiungere un obiettivo',
          translation: 'رسیدن, دستیابی به هدف',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'it',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è difficile.\n* Rispondi alla domanda.',
          definition:
            '* richiesta di informazioni\n* quesito da risolvere\n* richiesta di qualcosa',
          translation: 'سوال, درخواست, پرسش',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: '/kwesˈtjoːne/',
          example: '* La questione è complessa.\n* Affrontiamo la questione.',
          definition: '* problema da risolvere\n* argomento di discussione',
          translation: 'مسئله, موضوع بحث',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'نگهداری, تعمیر و نگهداری',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'znaczący, ważny, istotny',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* arrivare a casa\n* arrivare in tempo\n* arrivare al successo',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un obiettivo',
          translation: 'przybyć, dotrzeć, osiągnąć',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'it',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* fare una domanda\n* rispondere alla domanda',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'pytanie, zapytanie, interrogacja',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            "* manutenzione dell'auto\n* costi di manutenzione\n* servizio di manutenzione",
          definition:
            '* azione di mantenere in buono stato\n* cura e riparazione di macchinari\n* conservazione di un bene',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'σημαντικός, αξιοσημείωτος',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            "* Sono arrivato a casa.\n* L'autobus arriva alle 8.\n* Arrivare al successo.",
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'φτάνω, καταφθάνω, επιτυγχάνω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'it',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* La domanda è chiara.\n* Ho una domanda per te.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'η ερώτηση, το ερώτημα, η αίτηση',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
          translation: 'συντήρηση, επισκευή',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* significativo',
      translation: 'בולט, חשוב, משמעותי',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivare in tempo.\n* Arrivare a casa.\n* Arrivare al successo.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'להגיע, לשוב, להשיג',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'it',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è stata chiara.\n* Rispondi alla domanda.',
          definition:
            '* richiesta di informazioni\n* quesito\n* richiesta formale',
          translation: 'שאלה, בקשה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la richiesta',
          ipa: 'riˈkjɛsta',
          example:
            '* Ho fatto una richiesta di aiuto.\n* La richiesta è stata accettata.\n* Ricevuto una richiesta urgente.',
          definition: '* domanda\n* sollecitazione\n* pretesa',
          translation: 'בקשה, דרישה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition:
            '* cura e riparazione di qualcosa\n* conservazione in buono stato',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* importante\n* significativo',
      translation: 'สำคัญ, มีความหมาย, น่าจดจำ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivare in tempo.\n* Arrivare a casa.\n* Arrivare al successo.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'มาถึง, ไปถึง, บรรลุ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'it',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è difficile.\n* Rispondi alla domanda.',
          definition:
            '* richiesta di informazioni\n* quesito da risolvere\n* richiesta di qualcosa',
          translation: 'คำถาม, คำขอ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition: '* cura e riparazione\n* conservazione in buono stato',
          translation: 'การบำรุงรักษา, การดูแลรักษา',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition: '* degno di nota\n* importante\n* rilevante',
      translation: 'đáng chú ý, quan trọng, nổi bật',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            "* Sono arrivato a casa.\n* L'autobus arriva alle 8.\n* Arrivare al successo.",
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'đến nơi, đạt được, đến',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'it',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example: '* Ho una domanda per te.\n* La domanda è difficile.',
          definition: '* richiesta di informazioni\n* quesito da risolvere',
          translation: 'câu hỏi, yêu cầu',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjoːne/',
          example:
            "* La manutenzione dell'auto è essenziale.\n* Richiede manutenzione regolare.",
          definition: '* cura e riparazione\n* conservazione in buono stato',
          translation: 'bảo trì, bảo dưỡng',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* importante\n* significativo',
      translation: 'penting, signifikan, perlu dicatat',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example:
            '* Arrivare in tempo.\n* Arrivare a casa.\n* Arrivare al successo.',
          definition:
            '* giungere a destinazione\n* raggiungere un luogo\n* conseguire un risultato',
          translation: 'tiba, sampai, mencapai',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'it',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è difficile.\n* Ha fatto una domanda al professore.',
          definition:
            '* richiesta di informazioni\n* quesito da risolvere\n* richiesta formale',
          translation: 'pertanyaan, permintaan, soal',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtentsjone/',
          example:
            "* La manutenzione dell'auto è essenziale.\n* Richiede manutenzione regolare.",
          definition: '* cura e riparazione\n* conservazione in buono stato',
          translation: 'perawatan, pemeliharaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtɛvole',
      example: '* un risultato notevole\n* un progresso notevole',
      definition:
        '* che merita attenzione\n* di grande importanza\n* rilevante',
      translation: 'penting, signifikan',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example: '* Arrivo a casa alle 18.\n* Quando arrivi in ufficio?',
          definition: '* giungere a destinazione\n* raggiungere un luogo',
          translation: 'tiba, sampai',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'it',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è semplice.\n* Rispondi alla domanda.',
          definition: '* richiesta di informazioni\n* quesito\n* interrogativo',
          translation: 'soalan, permintaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjone/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition: '* cura e riparazione\n* conservazione in buono stato',
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
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: '* un risultato notevole\n* un miglioramento notevole',
      definition: '* degno di nota\n* importante\n* significativo',
      translation: 'значний, важливий, помітний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: '/ar.riˈva.re/',
          example: '* Arrivare in tempo.\n* Arrivare al successo.',
          definition: '* giungere a destinazione\n* raggiungere un obiettivo',
          translation: 'прибути, досягти',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'it',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'доманда',
          ipa: '/doˈmanda/',
          example:
            '* Ho una domanda per te.\n* La domanda è semplice.\n* Rispondi alla domanda.',
          definition:
            '* richiesta di informazioni\n* quesito\n* interrogazione',
          translation: 'запит, питання, інтерrogація',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: '/manuˈtɛntsjoːne/',
          example:
            '* La manutenzione della macchina è essenziale.\n* Richiede manutenzione regolare.',
          definition: '* cura e riparazione\n* conservazione in buono stato',
          translation: 'обслуговування, утримання в хорошому стані',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
};
