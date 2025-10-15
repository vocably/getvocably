import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke kleuren',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'remarkable, notable, striking',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben vijf kilo aangekomen.',
          definition:
            '* bereiken van een plaats\n* gewicht toenemen\n* naderen',
          translation: 'to arrive, to gain weight, to approach',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'the question, the inquiry, the issue',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'vragen',
          ipa: 'ˈvraːɣə(n)',
          example:
            '* Ik vraag het.\n* Hij vraagt om hulp.\n* Zij vragen naar de weg.',
          definition: '* iets willen weten\n* verzoeken om iets\n* ondervragen',
          translation: 'to ask, to request, to interrogate',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'skipped, omitted',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Hij sloeg het ontbijt over.\n* De leraar sloeg een hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'to skip, to pass, to omit',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke kleuren',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'notable, llamativo, extraordinario',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt aan.\n* Ik ben aangekomen.\n* Ze kwam laat aan.',
          definition: '* arriveren\n* gewicht toenemen\n* bereiken',
          translation: 'llegar, aumentar de peso, alcanzar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'nl',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'la pregunta, el problema, el tema',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'omitido, no tratado',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example: '* een maaltijd overslaan\n* een hoofdstuk overslaan',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'omitir, saltar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke resultaten',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'remarquable, notable, frappant',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'arriver, prendre du poids',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'nl',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'la question, le problème, le sujet',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'ondervraging',
          ipa: 'ˌɔndərˈvraːɣɪŋ',
          example:
            '* De ondervraging duurde uren.\n* Hij werd onderworpen aan een strenge ondervraging.',
          definition:
            '* het stellen van vragen\n* verhoor door politie of autoriteiten',
          translation: 'interrogation, questionnement',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'omis, non traité',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example: '* Hij sloeg de les over.\n* Ze sloegen het hoofdstuk over.',
          definition: '* niet meedoen\n* niet behandelen\n* niet raken',
          translation: 'sauter, omettre, ignorer',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke verschillen',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'besonders, auffällig, aufmerksamkeitsstark',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben aangekomen.',
          definition: '* bereiken van een plaats\n* toenemen in gewicht',
          translation: 'ankommen, zunehmen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'nl',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'die Frage, das Anliegen, das Thema',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'ausgelassen, nicht behandelt',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Hij besloot het ontbijt over te slaan.\n* De leraar sloeg het hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'auslassen, überspringen, nicht behandeln',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: '特别, 显著',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: '到达, 增加体重',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'nl',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'het probleem',
          ipa: '/ˈproːbleːm/',
          example:
            '* Het probleem is opgelost.\n* We hebben een probleem met de auto.',
          definition: '* moeilijkheid\n* vraagstuk',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: '问题, 请求',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: '遗漏的, 未处理的',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: '跳过, 省略',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: '特別的, 引人注目的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: '到達, 增重',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'nl',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'het probleem',
          ipa: '/ˈproːbleːm/',
          example:
            '* Het probleem is opgelost.\n* We hebben een probleem met de auto.',
          definition: '* moeilijkheid\n* vraagstuk',
          translation: '問題, 困難',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: '問題, 詢問',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: '未包含, 未處理',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg het hoofdstuk over.\n* Ze sloegen de rij over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: '跳過, 忽略, 省略',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: '特別な, 目立つ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: '到着する, 体重が増える',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'nl',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag was moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: '質問, 問い',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: '省略された, 扱われていない',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: '省略する, スキップする, 無視する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'замечательный, выдающийся',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben vijf kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'прибывать, набирать вес',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag was moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'вопрос, проблема',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'пропущенный, необработанный',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'пропустить, не делать, не рассматривать',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'notevole, eccellente',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'arrivare, aumentare di peso',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'nl',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'la domanda, la questione',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'ondervraging',
          ipa: 'ˌɔndərˈvraːɣɪŋ',
          example:
            '* De ondervraging duurde uren.\n* Hij was nerveus voor de ondervraging.',
          definition: '* het stellen van vragen\n* verhoor door autoriteiten',
          translation: 'interrogatorio, interrogazione',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'trascurato, non trattato',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'saltare, trascurare, passare',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke resultaten',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'notável, extraordinário, chamativo',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben aangekomen.',
          definition: '* arriveren\n* gewicht toenemen\n* bereiken',
          translation: 'chegar, ganhar peso, alcançar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'nl',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'a pergunta, a questão',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'não incluído, não tratado',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Hij sloeg het ontbijt over.\n* De leraar sloeg een hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'pular, omitir',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'مRemarkable, ملفت للنظر',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'الوصول, زيادة الوزن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'nl',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag was moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'السؤال, المشكلة',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example: 'De stap is overgeslagen.',
          definition: 'iets dat niet is meegenomen of behandeld',
          translation: 'مُتَجَاهَل',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.\n* Ze besloot de vergadering over te slaan.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'تجاهل, تجاوز, عدم المعالجة',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke kleuren',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'bijzonder, opvallend, aandacht trekkend',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'arriveren, gewicht toenemen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'nl',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'question',
          ipa: '/ˈkʋɛs.ti/',
          example:
            '* De vraag is moeilijk.\n* Dit is een interessante kwestie.',
          definition: '* vraag\n* probleem\n* onderwerp van discussie',
          translation: 'vraag, probleem, onderwerp van discussie',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'nl',
          source: 'to ask',
          ipa: '/ˈvraːɣə(n)/',
          example:
            '* Hij vraagt om hulp.\n* Ze vraagt naar de weg.\n* Kun je dat nog eens vragen?',
          definition:
            '* verzoeken om informatie\n* iets willen weten\n* een vraag stellen',
          translation: 'vragen, informeren, ondervragen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De maaltijd werd overgeslagen.\n* Hij heeft de les overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'niet meegenomen, niet behandeld',
          partOfSpeech: '',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Hij sloeg het ontbijt over.\n* Ze besloot de vergadering over te slaan.',
          definition: '* niet doen\n* niet behandelen\n* niet meenemen',
          translation: 'overslaan, vergeten, achterwege laten',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke kleuren',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: '특별한, 눈에 띄는, 주목받는',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: '도착하다, 체중 증가',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'nl',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: '질문, 문제, 토론 주제',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: '누락된, 처리되지 않은',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Hij sloeg het ontbijt over.\n* De leraar sloeg een hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: '건너뛰다, 생략하다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'विशेष, ध्यान आकर्षित करने वाला',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'आना, वजन बढ़ाना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'nl',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'छोड़ दिया, अनदेखा',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.\n* Ze besloot de vergadering over te slaan.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'छोड़ना, अनदेखा करना, गुजरना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'özel, dikkate değer',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'varmak, kilo almak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'nl',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'soru, talep',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'atlanan, işlenmeyen',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg het hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'atlamak, geçmek, işlememek',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'anmärkningsvärd, märklig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'ankomma, öka i vikt',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'nl',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'fråga, problemställning',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'vragen',
          ipa: '/ˈvraːɣə(n)/',
          example: '* Ik wil iets vragen.\n* Hij vraagt om hulp.',
          definition: '* iets willen weten\n* verzoeken om iets',
          translation: 'att fråga, fråga om',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'utelämnad, förbisedd',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'hoppa över, förbigå, utlämna',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke kleuren',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'spesiell, iøynefallende, oppmerksomhetsskapende',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt aan.\n* Ik ben aangekomen.\n* Ze komen morgen aan.',
          definition: '* arriveren\n* gewicht toenemen\n* naderen',
          translation: 'å komme nærmere, å gå opp i vekt',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'nl',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'spørsmål, problemstilling, diskusjonstema',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'utelatt, behandlet ikke',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Hij sloeg het ontbijt over.\n* De leraar sloeg een hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'å hoppe over, å unngå, å overse',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke kleuren',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'bemærkelsesværdig, iøjnefaldende, opmærksomhedsskabende',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt aan.\n* Ik ben aangekomen.\n* We komen om 10 uur aan.',
          definition: '* arriveren\n* gewicht toenemen\n* bereiken',
          translation: 'ankomme, tage på, nå',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'nl',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'spørgsmål, problemstilling, diskussionsemne',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'overset, udeladt',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example: '* een hoofdstuk overslaan\n* de lunch overslaan',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'springe over, forsømme, udelade',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'erityinen, huomattava',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'saapua, painonnousu',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'nl',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'kysymys, ongelma',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'ohitettu, käsittelemätön',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'ohittaa, jättää tekemättä, käsittelemättä',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'خاص, قابل توجه',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben vijf kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'رسیدن, افزایش وزن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'nl',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag was moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'سوال, پرسش',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'نادیده گرفته شده, عدم رسیدگی',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'رد کردن, گذشتن, بررسی نکردن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example: '* een opmerkelijke prestatie\n* opmerkelijke resultaten',
      definition: '* bijzonder\n* opvallend\n* aandacht trekkend',
      translation: 'szczególny, wyrazisty, przyciągający uwagę',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example: '* De trein komt aan.\n* Ik ben aangekomen.',
          definition: '* bereiken van een plaats\n* toenemen in gewicht',
          translation: 'przybyć, przytyć',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'nl',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example:
            '* een vraag stellen\n* de vraag beantwoorden\n* een moeilijke vraag',
          definition:
            '* verzoek om informatie\n* probleemstelling\n* onderwerp van discussie',
          translation: 'pytanie, problem, temat',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərˌsxlaːɣə(n)',
          example: '* Hij werd overgeslagen.\n* De les is overgeslagen.',
          definition: '* niet deelnemen\n* niet behandelen\n* overslaan',
          translation: 'pominąć, nie uczestniczyć, nie rozpatrywać',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Hij besloot het ontbijt over te slaan.\n* De leraar sloeg het hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'pominąć, ominąć, zignorować',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'ιδιαίτερος, εντυπωσιακός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om vijf uur aan.\n* Ik ben vijf kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'φτάνω, παίρνω βάρος',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'nl',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'η ερώτηση, το πρόβλημα',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'παραλειφθείς, μη εξετασμένος',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg het hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'παραλείπω, αγνοώ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'בולט, מיוחד',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'להגיע, לעלות במשקל',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'nl',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag was moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'שאלה, בעיה',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'ondervraging',
          ipa: 'ˌɔndərˈvraːɣɪŋ',
          example:
            '* De ondervraging duurde uren.\n* Hij was nerveus voor de ondervraging.',
          definition: '* het stellen van vragen\n* verhoor door autoriteiten',
          translation: 'חקירה, שאלות',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'לא נלקח, לא טופל',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'לדלג, להחמיץ, לא לטפל',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'น่าทึ่ง, โดดเด่น',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'มาถึง, เพิ่มน้ำหนัก',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'nl',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'คำถาม, ปัญหา',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'ข้ามไป, ไม่ได้รับการพิจารณา',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.\n* Ze besloot de vergadering over te slaan.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'ข้าม, ละเว้น, ไม่ทำ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'đặc biệt, nổi bật',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'đến, tăng cân',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'nl',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag was moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'câu hỏi, vấn đề',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'bỏ qua, không xử lý',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˌoːvərˈslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.\n* De bal sloeg de muur over.',
          definition: '* niet doen\n* niet behandelen\n* niet raken',
          translation: 'bỏ qua, không làm',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'istimewa, menarik',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'datang, menambah berat',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'nl',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag was moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'pertanyaan, masalah',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* Hij heeft de maaltijd overgeslagen.\n* De vraag werd overgeslagen.',
          definition: '* niet deelnemen\n* niet behandelen',
          translation: 'tidak ikut, tidak dibahas',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'melewatkan, mengabaikan, tidak melakukan',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'istimewa, menonjol',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːnˌkoːmə(n)',
          example:
            '* De trein komt om 10 uur aan.\n* Ik ben 5 kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'tiba, menambah berat',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'nl',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'terlepas, tidak ditangani',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Hij besloot het ontbijt over te slaan.\n* De leraar sloeg het hoofdstuk over.\n* Ze sloegen de introductie over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'mengabaikan, melewati, tidak membahas',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrklək',
      example:
        '* Een opmerkelijke prestatie.\n* Dat is een opmerkelijk verhaal.',
      definition: '* bijzonder\n* opvallend',
      translation: 'особливий, помітний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈaːŋˌkoːmə(n)',
          example:
            '* De trein komt om vijf uur aan.\n* Ik ben vijf kilo aangekomen.',
          definition: '* arriveren\n* gewicht toenemen',
          translation: 'прибути, набирати вагу',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'nl',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: '/vraːx/',
          example: '* Hij stelde een vraag.\n* De vraag is moeilijk.',
          definition: '* verzoek om informatie\n* probleemstelling',
          translation: 'питання, запит',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: 'ˈoːvərɣəˌslaːɣə(n)',
          example:
            '* De les werd overgeslagen.\n* Het hoofdstuk is overgeslagen.',
          definition: '* niet meegenomen\n* niet behandeld',
          translation: 'пропущений, необроблений',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈoːvərˌslaːn',
          example:
            '* Ik sla het ontbijt over.\n* De leraar sloeg dat hoofdstuk over.',
          definition: '* niet doen\n* voorbijgaan\n* niet behandelen',
          translation: 'пропустити, не робити, не розглядати',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
};
