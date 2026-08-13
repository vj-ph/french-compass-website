const books = [
  {
    exam: "TCF IRN",
    market: "France",
    level: "B1",
    title: "Réussir le TCF IRN B1 — Oral et Écrit",
    description: "123 exercices pratiques et 11 examens blancs pour préparer les deux épreuves.",
    focus: "Oral + écrit",
    thumbnail: "tcf_irn_b1_speaking_writing.jpg",
    paperback: { asin: "B0H5M2V456", price: "8,55 €", store: "amazon.fr" },
    ebook: { asin: "B0H5M4H6W8", price: "3,99 €", store: "amazon.fr" }
  },
  {
    exam: "TCF IRN",
    market: "France",
    level: "B1",
    title: "Réussir le TCF IRN B1 — Expression orale",
    description: "Exercices, modèles de réponses et examens blancs pour préparer l'épreuve orale.",
    focus: "Expression orale",
    thumbnail: "tcf_irn_b1_speaking.jpg",
    paperback: { asin: "B0H56MYYVZ", price: "6,44 €", store: "amazon.fr" },
    ebook: { asin: "B0H56LPZ84", price: "2,99 €", store: "amazon.fr" }
  },
  {
    exam: "TCF IRN",
    market: "France",
    level: "B1",
    title: "Réussir le TCF IRN B1 — Expression écrite",
    description: "Tâches guidées, textes modèles et entraînement progressif pour l'épreuve écrite.",
    focus: "Expression écrite",
    thumbnail: "tcf_irn_b1_writing.jpg",
    paperback: { asin: "B0H5M4W9W5", price: "6,44 €", store: "amazon.fr" },
    ebook: { asin: "B0H5M4W9W5", price: "2,99 €", store: "amazon.fr" }
  },
  {
    exam: "TCF IRN",
    market: "France",
    level: "B2",
    title: "Réussir le TCF IRN B2 — Oral et Écrit",
    description: "214 exercices pratiques et 18 examens blancs pour un objectif B2.",
    focus: "Oral + écrit",
    thumbnail: "tcf_irn_b2_speaking_writing.jpg",
    paperback: { asin: "B0HCK917PT", price: "10,54 €", store: "amazon.fr" },
    ebook: { asin: "B0HD8VJFK6", price: "3,99 €", store: "amazon.fr" }
  },
  {
    exam: "TCF IRN",
    market: "France",
    level: "B2",
    title: "Réussir le TCF IRN B2 — Expression orale",
    description: "Entraînement ciblé, réponses modèles et examens blancs pour viser un résultat B2.",
    focus: "Expression orale",
    thumbnail: "tcf_irn_b2_speaking.jpg",
    paperback: { asin: "B0HCKMJ1T7", price: "6,91 €", store: "amazon.fr" },
    ebook: { asin: "B0HD99KRYZ", price: "2,99 €", store: "amazon.fr" }
  },
  {
    exam: "TCF IRN",
    market: "France",
    level: "B2",
    title: "Réussir le TCF IRN B2 — Expression écrite",
    description: "Tâches de type examen, ateliers de langue et révision pour l'épreuve écrite B2.",
    focus: "Expression écrite",
    thumbnail: "tcf_irn_b2_writing.jpg",
    paperback: { asin: "B0HCK965ZH", price: "6,68 €", store: "amazon.fr" },
    ebook: { asin: "B0HD9KGKLK", price: "2,99 €", store: "amazon.fr" }
  },
  {
    exam: "TEF Canada",
    market: "Canada",
    level: "B2",
    title: "TEF Canada — Expression orale",
    description: "60 exercices d'expression orale pour les candidats visant NCLC 7–8.",
    focus: "Expression orale",
    thumbnail: "tef_speaking.jpg",
    paperback: { asin: "B0HDMRP8J1", price: "13,99 $ CA", store: "amazon.ca" },
    ebook: { asin: "B0HDQ31Y3L", price: "4,79 $ CA", store: "amazon.ca" }
  },
  {
    exam: "TEF Canada",
    market: "Canada",
    level: "B2",
    title: "TEF Canada — Expression écrite",
    description: "88 exercices d'expression écrite pour les candidats visant NCLC 7–8.",
    focus: "Expression écrite",
    thumbnail: "tef_writing.jpg",
    paperback: { asin: "B0HDMMYZQY", price: "11,99 $ CA", store: "amazon.ca" },
    ebook: { asin: "B0HDQ1SY9L", price: "3,99 $ CA", store: "amazon.ca" }
  },
  {
    exam: "TEF Canada",
    market: "Canada",
    level: "B2",
    title: "TEF Canada — Expression orale et écrite",
    description: "148 exercices originaux et 8 examens blancs complets dans un seul guide.",
    focus: "Oral + écrit",
    thumbnail: "tef_speaking_writing.jpg",
    paperback: { asin: "B0HDQ95P76", price: "22,99 $ CA", store: "amazon.ca" },
    ebook: { asin: "B0HD2TH22J", price: "7,99 $ CA", store: "amazon.ca" }
  }
];

module.exports = {
  title: "French Compass | Préparation TCF et TEF Canada",
  description: "Guides bilingues de préparation au TCF IRN et au TEF Canada.",
  brand: {
    name: "French Compass",
    tagline: "Apprendre le français. Réussir l'examen."
  },
  languages: [
    { code: "fr", label: "Français", status: "active" },
    { code: "en", label: "English", status: "planned" },
    { code: "ar", label: "العربية", status: "planned" },
    { code: "pa", label: "ਪੰਜਾਬੀ", status: "planned" },
    { code: "zh-Hans", label: "中文", status: "planned" },
    { code: "es", label: "Español", status: "planned" }
  ],
  books
};
