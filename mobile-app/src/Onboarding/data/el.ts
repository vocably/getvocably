import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* άξιος προσοχής\n* σημαντικός\n* εντυπωσιακός',
      translation: 'noteworthy, significant, impressive',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η έλευση σε έναν προορισμό',
          translation: 'arrival, coming',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'el',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example:
            '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.\n* Απάντησε στην ερώτηση.',
          definition: '* αίτημα για πληροφορίες\n* θέση ερώτησης\n* απορία',
          translation: 'question, inquiry',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ερωτώ',
          ipa: 'e.roˈto',
          example: '* Ερωτώ τον δάσκαλο.\n* Ερωτώ για οδηγίες.',
          definition: '* θέτω ερώτηση\n* ζητώ πληροφορίες',
          translation: 'ask, inquire',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις οκτώ.',
          definition: '* κατά κανόνα\n* συχνά\n* γενικά',
          translation: 'usually, frequently, generally',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* άξιος προσοχής\n* σημαντικός\n* εντυπωσιακός',
      translation: 'notable, importante, impresionante',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafi̞ksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η έλευση σε έναν προορισμό',
          translation: 'llegada, arribo',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'el',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ρώτηση',
          ipa: 'ˈro.ti.si',
          example:
            '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.\n* Απάντησε στην ερώτηση.',
          definition:
            '* αίτημα για πληροφορίες\n* ερώτημα\n* αναζήτηση απάντησης',
          translation: 'pregunta, interrogante',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example:
            '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.\n* Απάντησε στην ερώτηση.',
          definition: '* αίτημα για πληροφορίες\n* θέση ζητήματος\n* απορία',
          translation: 'pregunta, consulta',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις 8.',
          definition: '* κατά κανόνα\n* συχνά\n* γενικά',
          translation: 'habitualmente, frecuentemente, generalmente',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* αξιοπρόσεκτος\n* σημαντικός\n* εντυπωσιακός',
      translation: 'remarquable, important, impressionnant',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafi̞ksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που κάποιος φτάνει',
          translation: 'arrivée',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'el',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example:
            '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.\n* Απάντησε στην ερώτηση.',
          definition: '* αίτημα για πληροφορίες\n* θέση για συζήτηση\n* απορία',
          translation: "question, demande d'information, interrogation",
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ζητώ',
          ipa: 'ziˈto',
          example: '* Ζητώ βοήθεια.\n* Ζητώ συγγνώμη.',
          definition: '* αναζητώ\n* επιθυμώ\n* παρακαλώ',
          translation: 'chercher, désirer, demander',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example:
            '* Η καρδιά χτυπά.\n* Έχει καλή καρδιά.\n* Στην καρδιά της πόλης.',
          definition:
            '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων\n* μέση ή κέντρο',
          translation: 'cœur, organe, centre',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* αξιοπρόσεκτος\n* σημαντικός\n* εντυπωσιακός',
      translation: 'bemerkenswert, wichtig, beeindruckend',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που κάποιος φτάνει',
          translation: 'Ankunft, Eintreffen',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'el',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ρώτηση',
          ipa: 'ˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* ερώτημα\n* απορία\n* ζήτημα',
          translation: 'Frage, Anfrage, Thema',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέση ερώτησης\n* απορία',
          translation: 'Frage, Anfrage, Unklarheit',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις οκτώ.',
          definition: '* κατά κανόνα\n* συχνά\n* γενικά',
          translation: 'gewöhnlich, häufig, im Allgemeinen',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: '显著的, 重要的',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η έλευση σε προορισμό',
          translation: '到达, 抵达',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'el',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέση ζητήματος',
          translation: '问题, 询问',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'πρόβλημα',
          ipa: 'ˈpro.vli.ma',
          example: '* Έχεις κάποιο πρόβλημα;\n* Το πρόβλημα λύθηκε.',
          definition: '* κατάσταση που απαιτεί λύση\n* δυσκολία ή εμπόδιο',
          translation: '问题, 困难',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις οκτώ.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: '通常, 经常',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: '值得注意, 重要',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafi̞ksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που κάποιος φτάνει',
          translation: '到達, 抵達',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'el',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'πρόβλημα',
          ipa: 'ˈpro.vli.ma',
          example:
            '* Έχω ένα πρόβλημα με το αυτοκίνητο.\n* Το πρόβλημα λύθηκε γρήγορα.',
          definition: '* κατάσταση που απαιτεί λύση\n* δυσκολία ή εμπόδιο',
          translation: '問題, 困難',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
        {
          language: 'el',
          source: 'ερώτημα',
          ipa: 'eˈrotima',
          example: '* Έχω ένα ερώτημα.\n* Το ερώτημα είναι δύσκολο.',
          definition: '* ερώτηση\n* απορία',
          translation: '問題, 疑問',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: '通常, 經常',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: '注目すべき, 重要な',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafi̞ksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που κάποιος φτάνει',
          translation: '到着, 到着時',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'el',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέση ζητήματος',
          translation: '質問, 問い合わせ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: '通常, よく',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: 'заметный, значительный',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου ήταν στις 10:00.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* το σημείο ή χρόνος που φτάνει κάποιος',
          translation: 'приход, прибытие',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'el',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* θέση ζητήματος',
          translation: 'вопрос, запрос информации',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ζητούμενο',
          ipa: 'ziˈtumeno',
          example:
            '* Το ζητούμενο είναι η ειρήνη.\n* Αυτό είναι το κύριο ζητούμενο.',
          definition: '* απαίτηση\n* στόχος\n* ζητούμενο',
          translation: 'требование, цель, запрашиваемое',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπάει γρήγορα.\n* Έχει καλή καρδιά.',
          definition: '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων',
          translation: 'сердце, центр эмоций',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'notevole, significativo',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* το σημείο ή χρόνος άφιξης',
          translation: 'arrivo, momento di arrivo',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'el',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέση ζητήματος',
          translation: 'domanda, richiesta di informazioni',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'αίτηση',
          ipa: 'ˈetisi',
          example: '* Υπέβαλε αίτηση για δουλειά.\n* Η αίτηση εγκρίθηκε.',
          definition: '* επίσημο αίτημα\n* έντυπο για αίτημα',
          translation: 'richiesta, domanda',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά γρήγορα.\n* Έχει καλή καρδιά.',
          definition: '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων',
          translation: 'cuore, centro emozioni',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* άξιος προσοχής\n* σημαντικός\n* εντυπωσιακός',
      translation: 'notável, significativo, impressionante',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η έλευση σε έναν προορισμό',
          translation: 'chegada, vinda',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'el',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example:
            '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.\n* Απάντησε στην ερώτηση.',
          definition: '* αίτημα για πληροφορίες\n* θέση ερώτησης\n* απορία',
          translation: 'pergunta, questão',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example:
            '* Η καρδιά χτυπάει.\n* Έχει καλή καρδιά.\n* Στην καρδιά της πόλης.',
          definition:
            '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων\n* πυρήνας ή κέντρο',
          translation: 'coração, centro emocional, núcleo',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'جدير بالاهتمام, مهم',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου ήταν ακριβής.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* το σημείο ή χρόνος άφιξης',
          translation: 'وصول, لحظة الوصول',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'el',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example:
            '* Έχω μια ερώτηση για το μάθημα.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέμα προς συζήτηση',
          translation: 'سؤال, استفسار',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώει πρωινό στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'عادةً, غالبًا',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* αξιοπρόσεκτος\n* σημαντικός\n* εντυπωσιακός',
      translation: 'opmerkelijk, belangrijk, indrukwekkend',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafi̞ksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος σε ένα μέρος\n* η στιγμή που κάποιος φτάνει',
          translation: 'aankomst, komst',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'el',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέση για συζήτηση',
          translation: 'vraag, onderwerp',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ζητώ',
          ipa: 'ziˈto',
          example: '* Ζητώ βοήθεια.\n* Ζητώ συγγνώμη.',
          definition: '* αναζητώ\n* επιθυμώ\n* παρακαλώ',
          translation: 'zoeken, wensen, vragen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example:
            '* Η καρδιά χτυπά.\n* Έχει καλή καρδιά.\n* Στην καρδιά της πόλης.',
          definition:
            '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων\n* μέση ή κεντρικό σημείο',
          translation: 'hart, centrum van emoties, middenpunt',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* άξιος προσοχής\n* σημαντικός\n* εντυπωσιακός',
      translation: '주목할 만한, 중요한, 인상적인',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafi̞ksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος σε ένα μέρος\n* η στιγμή που κάποιος φτάνει',
          translation: '도착, 도착 순간',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'el',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.si',
          example:
            '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.\n* Απάντησε στην ερώτηση.',
          definition:
            '* αίτημα για πληροφορίες\n* αναζήτηση απάντησης\n* θέση ερωτήματος',
          translation: '질문, 문의',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις 8.',
          definition: '* κατά κανόνα\n* συχνά\n* γενικά',
          translation: '보통, 일반적으로',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'महत्वपूर्ण, ध्यान देने योग्य',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου ήταν καθυστερημένη.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η έλευση σε έναν προορισμό',
          translation: 'आगमन, पहुँच',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'el',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέμα προς συζήτηση',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ρώτηση',
          ipa: 'ˈro.ti.si',
          example:
            '* Έχω μια ερώτηση για το μάθημα.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέση για συζήτηση',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώει πρωινό στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'आम तौर पर, अक्सर',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: 'önemli, dikkate değer',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition: '* η πράξη του να φτάνει κάποιος\n* ερχομός σε προορισμό',
          translation: 'varış, geliş',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'el',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέση ζητήματος',
          translation: 'soru, soru istemi',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώει πρωινό στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'genellikle, sıklıkla',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: 'anmärkningsvärd, viktig',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiˌksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που κάποιος φτάνει',
          translation: 'ankomst, anländande',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'el',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example:
            '* Έχω μια ερώτηση για το μάθημα.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέμα προς συζήτηση',
          translation: 'fråga, ämne',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ρωτώ',
          ipa: 'roˈto',
          example: '* Ρωτώ τον δάσκαλο.\n* Ρωτάς για το δρόμο.',
          definition: '* ζητώ πληροφορίες\n* κάνω ερώτηση',
          translation: 'fråga, be om information',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά γρήγορα.\n* Έχει καλή καρδιά.',
          definition: '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων',
          translation: 'hjärta, känslocentrum',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* άξιος προσοχής\n* σημαντικός\n* εντυπωσιακός',
      translation: 'merkelig, betydningsfull, imponerende',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafi̞ksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος σε ένα μέρος\n* η στιγμή που κάποιος φτάνει',
          translation: 'ankomst, ankomsten',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'el',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example:
            '* Έχω μια ερώτηση.\n* Κάνε την ερώτησή σου.\n* Απάντησε στην ερώτηση.',
          definition:
            '* αίτημα για πληροφορίες\n* θέση ζητήματος\n* αναζήτηση απάντησης',
          translation: 'spørsmål, forespørsel',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ζητούμενο',
          ipa: 'ziˈtumeno',
          example:
            '* Το ζητούμενο είναι η ειρήνη.\n* Αυτό είναι το ζητούμενο της έρευνας.',
          definition: '* απαίτηση\n* στόχος\n* ζητούμενο',
          translation: 'krav, mål, etterspurt',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά.\n* Έχει καλή καρδιά.',
          definition:
            '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων\n* μέση, κέντρο',
          translation: 'hjerte, sentrum av følelser',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* άξιος προσοχής\n* σημαντικός\n* εντυπωσιακός',
      translation: 'bemærkelsesværdig, vigtig, imponerende',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η είσοδος σε έναν προορισμό',
          translation: 'ankomst',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'el',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* αναζήτηση γνώσης\n* απορία',
          translation: 'spørgsmål, forespørgsel',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ζητούμενο',
          ipa: 'ziˈtumeno',
          example:
            '* Το ζητούμενο είναι η επιτυχία.\n* Αυτό είναι το ζητούμενο της συζήτησης.',
          definition: '* αυτό που ζητείται\n* στόχος\n* επιθυμητό αποτέλεσμα',
          translation: 'efterspørgsel, mål, ønsket resultat',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά.\n* Έχει καλή καρδιά.',
          definition:
            '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων\n* μέση ή κέντρο',
          translation: 'hjerte, følelsescenter, midte',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'huomionarvoinen, merkittävä',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* το σημείο ή χρόνος άφιξης',
          translation: 'saapuminen, saapumispiste',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'el',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* θέση ζητήματος',
          translation: 'kysymys, kysely',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ζητούμενο',
          ipa: 'ziˈtumeno',
          example:
            '* Το ζητούμενο είναι η επιτυχία.\n* Αυτό είναι το κύριο ζητούμενο.',
          definition: '* αυτό που ζητείται\n* στόχος',
          translation: 'haettu, tavoite',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά γρήγορα.\n* Έχει καλή καρδιά.',
          definition: '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων',
          translation: 'sydän, tunteiden keskus',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'قابل توجه, مهم',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου ήταν ακριβής.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που κάποιος φτάνει',
          translation: 'ورود, رسیدن',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'el',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ρώτηση',
          ipa: 'ˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* ερώτημα',
          translation: 'سوال, پرسش',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* θέση ζητήματος',
          translation: 'سوال, پرسش',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά γρήγορα.\n* Έχει καλή καρδιά.',
          definition: '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων',
          translation: 'قلب, مرکز احساسات',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'el',
      source: 'aξιοσημείωτος',
      ipa: 'aksiˈosimiotos',
      example: '* αξιοσημείωτη πρόοδος\n* αξιοσημείωτο γεγονός',
      definition: '* αξιοπρόσεκτος\n* σημαντικός\n* εντυπωσιακός',
      translation: 'godny uwagi, ważny, imponujący',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example: '* Η άφιξη του τρένου\n* Η άφιξη των επισκεπτών',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η είσοδος σε έναν προορισμό',
          translation: 'przybycie, wejście',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'el',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition:
            '* αίτημα για πληροφορίες\n* απορία\n* θέμα προς συζήτηση',
          translation: 'pytanie, zapytanie, temat do dyskusji',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις οκτώ.',
          definition: '* κατά κανόνα\n* συχνά\n* γενικά',
          translation: 'zazwyczaj, często, ogólnie',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'άξιος προσοχής, σημαντικός',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου ήταν ακριβής.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που φτάνει κάποιος',
          translation: 'άφιξη, στιγμή άφιξης',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'el',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'question',
          ipa: 'ˈkwɛs.tʃən',
          example: '* Έχω μια ερώτηση.\n* Αυτό είναι ένα δύσκολο θέμα.',
          definition: '* ερώτηση\n* απορία\n* θέμα',
          translation: 'ερώτηση, απορία',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις οκτώ.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'κατά κανόνα, συχνά',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: 'ראוי לציון, חשוב',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η έλευση σε έναν προορισμό',
          translation: 'הגעה, הגעת יעד',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'el',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* θέση ζητήματος',
          translation: 'שאלה, בקשה למידע',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'αίτηση',
          ipa: 'ˈetisi',
          example: '* Υπέβαλε αίτηση για δουλειά.\n* Η αίτηση εγκρίθηκε.',
          definition: '* επίσημο αίτημα\n* έντυπο για αίτημα',
          translation: 'בקשה, טופס בקשה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά γρήγορα.\n* Έχει καλή καρδιά.',
          definition: '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων',
          translation: 'לב, מרכז רגשות',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: 'น่าจดจำ, สำคัญ',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* το σημείο ή χρόνος άφιξης',
          translation: 'การมาถึง, จุดมาถึง',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'el',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* θέση ζητήματος',
          translation: 'คำถาม, ข้อสงสัย',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώει πρωινό στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'โดยปกติ, บ่อยครั้ง',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksiˈsimios',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'đáng chú ý, quan trọng',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου ήταν έγκαιρη.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition: '* η πράξη του να φτάνει κάποιος\n* το σημείο άφιξης',
          translation: 'đến nơi, điểm đến',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'el',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* θέση ζητήματος',
          translation: 'câu hỏi, thắc mắc',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'el',
          source: 'ρωτώ',
          ipa: 'roˈto',
          example: '* Ρωτώ τον δάσκαλο.\n* Ρωτάς για το μάθημα;',
          definition: '* ζητώ πληροφορίες\n* κάνω ερώτηση',
          translation: 'hỏi, đặt câu hỏi',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'καρδιά',
          ipa: 'karˈðʝa',
          example: '* Η καρδιά χτυπά γρήγορα.\n* Έχει καλή καρδιά.',
          definition: '* όργανο που αντλεί αίμα\n* κέντρο συναισθημάτων',
          translation: 'trái tim, tâm hồn',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'perhatian, penting',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των καλεσμένων.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η στιγμή που κάποιος φτάνει',
          translation: 'kedatangan, tiba',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'el',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* θέση ζητήματος',
          translation: 'pertanyaan, permintaan informasi',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώμε στις οκτώ.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'biasanya, sering',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η επιτυχία του ήταν αξιοσημείωτη.',
      definition: '* αξιοπρόσεκτος\n* σημαντικός',
      translation: 'perlu diperhatikan, penting',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* το σημείο ή χρόνος άφιξης',
          translation: 'ketibaan, tiba',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'el',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈrotisi',
          example: '* Έχω μια ερώτηση.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορία\n* αναζήτηση απάντησης',
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω για τρέξιμο το πρωί.\n* Συνήθως τρώμε στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'biasanya, selalu',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'el',
      source: 'αξιοσημείωτος',
      ipa: 'aksi̯osimíotos',
      example:
        '* Έκανε μια αξιοσημείωτη πρόοδο.\n* Η ομιλία του ήταν αξιοσημείωτη.',
      definition: '* άξιος προσοχής\n* σημαντικός',
      translation: 'значний, помітний',
      partOfSpeech: 'adjective',
      g: 'm',
      tags: [],
    },
    directTranslationExample: {
      text: 'άφιξη',
      sourceLanguage: 'el',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'el',
          source: 'άφιξη',
          ipa: 'ˈafiksi',
          example:
            '* Η άφιξη του τρένου καθυστέρησε.\n* Περιμένουμε την άφιξη των επισκεπτών.',
          definition:
            '* η πράξη του να φτάνει κάποιος\n* η έλευση σε προορισμό',
          translation: 'прибуття, прихід',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'el',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'el',
          source: 'ερώτηση',
          ipa: 'eˈro.ti.si',
          example:
            '* Έχω μια ερώτηση για το μάθημα.\n* Η ερώτηση ήταν δύσκολη.',
          definition: '* αίτημα για πληροφορίες\n* θέμα προς συζήτηση',
          translation: 'запитання, тема для обговорення',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
      results: [
        {
          language: 'el',
          source: 'συνήθως',
          ipa: 'syˈniðos',
          example:
            '* Συνήθως πηγαίνω στο γυμναστήριο.\n* Συνήθως τρώει πρωινό στις 8.',
          definition: '* κατά κανόνα\n* συχνά',
          translation: 'зазвичай, часто',
          partOfSpeech: 'adverb',
          tags: [],
        },
      ],
    },
  },
};
