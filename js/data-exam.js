// Fiche de l'épreuve TOEIC Listening & Reading.
// Chiffres conformes au format officiel ETS : 200 questions, 2 h de test
// (45 min d'écoute + 75 min de lecture), score de 10 à 990.

const EXAM = {
  // Chiffres mis en avant en haut de page
  keyFigures: [
    { v: '200', l: 'questions' },
    { v: '2 h', l: 'de test effectif' },
    { v: '10–990', l: 'score final' },
    { v: '0', l: 'point négatif' }
  ],

  // Déroulé d'une session, de l'arrivée à la sortie
  timeline: [
    { t: '~30 min', h: 'Accueil et formalités',
      d: "Vérification d'identité, émargement, installation, puis questionnaire biographique et consignes. Ce temps ne compte pas dans les 2 h d'épreuve, mais il faut le prévoir : compte environ 2 h 30 sur place au total." },
    { t: '45 min', h: 'Section Listening — 100 questions',
      d: "Durée imposée : l'enregistrement défile en continu, tu ne peux ni revenir en arrière ni mettre en pause. Les quatre parties s'enchaînent sans interruption. C'est le rythme de l'audio qui impose le tien." },
    { t: '75 min', h: 'Section Reading — 100 questions',
      d: "Durée libre à l'intérieur de la section : tu gères ton temps comme tu veux entre les Parts 5, 6 et 7, et tu peux revenir sur une question. C'est ici que la gestion du temps fait la différence." },
    { t: '', h: 'Résultats',
      d: "Les résultats officiels arrivent généralement sous une dizaine de jours. Le certificat est reconnu pendant deux ans — c'est la durée de validité admise par la plupart des écoles et des employeurs." }
  ],

  // Les sept parties, dans l'ordre de l'examen
  parts: [
    { id: 1, section: 'listening', icon: 'image',
      name: 'Part 1 — Photographies', q: 6, choices: 4,
      what: "Une photo est imprimée dans ton livret. Tu entends quatre phrases qui ne sont PAS écrites, et tu choisis celle qui décrit le mieux l'image.",
      traps: [
        "Un objet visible sur la photo mais une action fausse : la tasse est là, mais l'homme ne boit pas.",
        "« is being + participe passé » décrit une action en cours effectuée par quelqu'un — faux si personne n'agit sur l'objet.",
        "Les mots qui se ressemblent à l'oral : coffee / copy, walk / work."
      ],
      tip: "Décris mentalement la photo avant que l'audio démarre : qui, quelle action, quels objets. Tu sauras alors quoi éliminer." },
    { id: 2, section: 'listening', icon: 'headphones',
      name: 'Part 2 — Question / réponse', q: 25, choices: 3,
      what: "Une question ou une affirmation, puis trois réponses possibles. Rien n'est écrit : ni la question, ni les réponses. C'est la seule partie à trois choix.",
      traps: [
        "Une question en WH- (Where, When, Who, Why, How) n'a JAMAIS de réponse par Yes ou No.",
        "Une question alternative (« taxi or subway ? ») appelle un choix, jamais un « yes ».",
        "Un mot de la question répété dans une mauvaise réponse : report / airport."
      ],
      tip: "Concentre-toi sur le tout premier mot de la question : il détermine à lui seul le type de réponse attendu." },
    { id: 3, section: 'listening', icon: 'headphones',
      name: 'Part 3 — Conversations', q: 39, choices: 4,
      what: "Treize conversations entre deux ou trois personnes, trois questions chacune. Les questions et leurs choix sont écrits dans le livret, la conversation ne l'est pas.",
      traps: [
        "Attendre la fin pour répondre : les réponses arrivent dans l'ordre des questions.",
        "Les questions sur l'intention (« What does the woman imply ? ») : la réponse est dans le ton, pas dans un mot isolé.",
        "Certaines conversations renvoient à un document (planning, facture) imprimé à côté."
      ],
      tip: "Lis les trois questions pendant l'introduction audio. Tu sauras quoi guetter au lieu de tout écouter." },
    { id: 4, section: 'listening', icon: 'volume',
      name: 'Part 4 — Exposés courts', q: 30, choices: 4,
      what: "Dix monologues — annonce, message vocal, extrait de réunion, publicité — avec trois questions chacun. Même principe que la Part 3, mais une seule voix.",
      traps: [
        "Le contexte se donne dans les premières secondes : rater le début, c'est rater les trois questions.",
        "« What will the speaker probably do next ? » : la réponse est dans les toutes dernières phrases."
      ],
      tip: "Même méthode qu'en Part 3 : lire les questions d'abord. Et répondre pendant la pause, jamais pendant l'audio suivant." },
    { id: 5, section: 'reading', icon: 'note',
      name: 'Part 5 — Phrases à compléter', q: 30, choices: 4,
      what: "Une phrase à trou, quatre propositions. Grammaire, vocabulaire et prépositions. C'est la partie la plus rapide à traiter.",
      traps: [
        "Les familles de mots (agree / agreement / agreeable) : c'est la POSITION dans la phrase qui tranche, pas le sens.",
        "Les prépositions figées, qui s'apprennent par cœur : responsible for, subject to, result in.",
        "Deux réponses synonymes ? Élimine les deux : il ne peut y en avoir qu'une de bonne."
      ],
      tip: "Vise 25 à 30 secondes par question, pas plus. Lis d'abord les quatre choix : s'ils ne diffèrent que par la terminaison, dix secondes suffisent." },
    { id: 6, section: 'reading', icon: 'pen',
      name: 'Part 6 — Textes à compléter', q: 16, choices: 4,
      what: "Quatre textes courts (courriel, note de service, annonce) avec quatre trous chacun. Trois trous portent sur un mot, un quatrième sur une phrase entière à insérer.",
      traps: [
        "La question « phrase complète » exige de lire ce qui précède ET ce qui suit : c'est de la cohérence, pas de la grammaire.",
        "Le temps verbal dépend souvent d'une information donnée plusieurs lignes plus haut."
      ],
      tip: "Ne traite pas les trous isolément. Lis le texte en entier une fois, vite, avant de remplir." },
    { id: 7, section: 'reading', icon: 'doc',
      name: 'Part 7 — Compréhension de textes', q: 54, choices: 4,
      what: "La partie la plus longue de l'examen. Des textes isolés d'abord, puis des ensembles de deux ou trois documents liés entre eux (une annonce et la réponse d'un client, par exemple).",
      traps: [
        "Les questions « NOT mentioned » : il faut vérifier les trois éléments présents pour trouver le quatrième.",
        "Sur les documents multiples, la réponse croise deux textes : une date dans l'un, une condition dans l'autre.",
        "Les pièges recopient les mots du texte avec un sens faux ; la bonne réponse, elle, reformule."
      ],
      tip: "Lis les questions avant le texte, puis balaie à la recherche de l'information. Garde environ une minute par question." }
  ],

  // Barème et notation
  scoring: [
    { h: 'Aucun point négatif',
      d: "Une mauvaise réponse vaut exactement autant qu'une case vide : zéro. Il n'y a donc jamais de raison de laisser un blanc. Dans les dernières secondes, remplis tout, même au hasard." },
    { h: 'Deux scores de 5 à 495',
      d: "Listening et Reading sont notés séparément, chacun de 5 à 495 points. Le total va donc de 10 à 990. Un score de 0 n'existe pas." },
    { h: 'Une note convertie, pas un pourcentage',
      d: "Le nombre de bonnes réponses est converti en score selon une table qui varie légèrement d'une session à l'autre, pour que les sessions restent comparables. Tes scores estimés sur la plateforme sont donc des ordres de grandeur, pas des prédictions exactes." },
    { h: 'Les repères usuels',
      d: "785 et plus correspond au niveau C1 du cadre européen, 945 et plus au niveau C2. La plupart des écoles de commerce demandent entre 750 et 850 ; beaucoup de masters se contentent de 700 à 800." }
  ],

  // À savoir le jour J
  practical: [
    "Apporte une pièce d'identité en cours de validité : sans elle, l'accès à la salle est refusé.",
    "Les réponses se cochent au crayon à papier sur une feuille optique. Prévois un crayon HB et une gomme.",
    "Aucun appareil électronique n'est autorisé, montre connectée comprise. Pas de dictionnaire, pas de brouillon personnel.",
    "L'audio de la section Listening passe une seule fois, en salle, pour tout le monde en même temps. Place-toi correctement si tu as le choix.",
    "Arrive en avance : les retardataires ne sont pas admis une fois la session commencée."
  ]
};
