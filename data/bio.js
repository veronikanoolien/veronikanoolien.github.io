/* ==============================================
   BIO/CV DATA
   ============================================== */

/**
 * WHY SEPARATE FILE?
 * - Easy to update your CV without touching JavaScript logic
 * - Keep your professional information organized in one place
 * - Clean separation: data here, display logic in script.js
 * 
 * HOW IT WORKS?
 * - This file is loaded BEFORE script.js in index.html
 * - Creates the 'bioData' object that script.js uses for rendering
 * - script.js uses this data to display your full bio/CV page
 */

/**
 * BIO DATA OBJECT
 * Contains all your CV information
 * Edit this to update your bio page
 */
const bioData = {
  // INTRODUCTORY ABOUT TEXT
  about: "Mé úřednické jméno je <i>Veronika Nunhardtová</i>, ale všude jinde se prezentuji jako <i>Veronika Noolien</i> [No:lijen]. V současné době působím jako doktorandka na prezenčním studiu katedry bohemistiky na Univerzitě Jana Evangelisty Purkyně v Ústí nad Labem. Níže si můžete prohlédnout můj životopis.",
  
  // EDUCATION SECTION
  education: [
    {
      degree: "Doktorské studium - Teorie vzdělávání v bohemistice",
      institution: "Univerzita Jana Evangelisty Purkyně v Ústí nad Labem",
      date: "2024 - dosud",
      description: ""
    },
    {
      degree: "Magisterské studium - Učitelství českého jazyka a literatury pro střední školy",
      institution: "Univerzita Jana Evangelisty Purkyně v Ústí nad Labem",
      date: "[2022 - 2024]",
      description: ""
    },
    {
        degree: "Bakalářské studium - Český jazyk a média pro veřejnou sféru",
        institution: "Univerzita Jana Evangelisty Purkyně v Ústí nad Labem",
        date: "[2019 - 2022]",
        description: ""
    }
    // ADD MORE EDUCATION ENTRIES HERE
    // Copy the structure above and add your degrees
  ],
  
  // WORK EXPERIENCE SECTION
  work: [
    {
      title: "Učitel českého jazyka a literatury na ZŠ",
      institution: "Základní škola Litoměřice, Boženy Němcové 2",
      date: "[2024 - 2025]",
      // description: "Výuka českého jazyka, literatury a komunikace."
    },
    {
      title: "Učitel českého jazyka a literatury na SŠ",
      institution: "Vyšší odborná škola, Obchodní akademie, Střední odborná škola a Jazyková škola s právem státní jazykové zkoušky EKONOM, o. p. s.",
      date: "[2024 - 2025]",
      // description: "Výuka českého jazyka, literatury a komunikace."
    },
    {
      title: "Externí knižní editor",
      institution: "Vydavatelství Akvarel",
      date: "[2021 - 2022]",
      description: "Editorská práce na dětských knihách"
    },
    {
      title: "Recenzent knih a redaktor článků",
      institution: "Koňskéknihy.cz",
      date: "[2018 - 2022]",
      description: "Recenze knih a psaní článků pro e-shop Koňskéknihy.cz"
    },
    {
      title: "Recenzent knih pro Luxor",
      institution: "Knihkupectví Luxor",
      date: "[2019]",
      description: "Psaní recenzí knih pro online blog Knihkupectví Luxor"
    },
    {
      title: "Redaktor pro Creativelife.cz",
      institution: "Creativelife.cz",
      date: "[2016]",
      description: "Psaní článků pro kreativní online magazín Creativelife.cz"
    }
    // ADD MORE WORK EXPERIENCE HERE
  ],
  
  // PUBLISHED WORKS SECTION
  publications: {
    // Books you've edited or proofread
    edited: [
      "Hvězdičky z pohádek - Martina Kobylíková (vyjde letos) - Editace/Korekce",
      "Calantar - 1. číslo časopisu (2022) - Korekce",
      "Zlaté české pohádky - Vydavatelství Akvarel (2022) - Editace",
      "Nejkrásnější pohádky - Vydavatelství Akvarel (2022) - Editace",
      "Pohádky Boženy Němcové - Vydavatelství Akvarel (2021) - Editace",
      "Pohádky Boženy Němcové a Karla Jaromíra Erbena - Vydavatelství Akvarel (2021) - Editace",
      "Česká zima - Vydavatelství Akvarel (2021) - Editace"

      // ADD MORE EDITED BOOKS HERE
      // Just add new strings in quotes with commas
    ],
    
    // Your own articles and reviews
    articles: [
      "Literární projekt Čas na čtení - @casnacteni (2019-2025)",
      // "[Název recenze] - [Časopis/Web] ([Rok])"
      // ADD MORE ARTICLES HERE
    ],
    
    // Your illustration work
    illustrations: [
      "Hvězdičky z pohádek - Martina Kobylíková (vyjde letos) - Ilustrace",
      // "[Projekt] - [Popis] ([Rok])",
      // 'Prodejní ilustrace dostupné na <a href="https://www.redbubble.com/people/veronikanoolien" target="_blank">RedBubble</a>'
      // ADD MORE ILLUSTRATION WORK HERE
    ]
  },
  
  // SKILLS/SPECIALIZATIONS SECTION
  skills: [
    "Výuka českého jazyka a literatury",
    "Knižní korekce a editace",
    "Literární recenze",
    "Ilustrace",
    "Didaktika českého jazyka"
    // ADD MORE SKILLS HERE
  ]
};

/**
 * HOW TO UPDATE YOUR BIO:
 * 
 * 1. ADDING EDUCATION:
 * Copy this template and add to the education array:
 * {
 *   degree: "Your degree name",
 *   institution: "University name",
 *   date: "2020-2024" or "Probíhá",
 *   description: "Brief description (optional)"
 * }
 * 
 * 2. ADDING WORK EXPERIENCE:
 * {
 *   title: "Job title",
 *   institution: "Company/School name",
 *   date: "2020 - 2024",
 *   description: "What you did in this role"
 * }
 * 
 * 3. ADDING PUBLICATIONS:
 * Just add new strings to the appropriate array:
 * - edited: for books you've edited/corrected
 * - articles: for your articles and reviews
 * - illustrations: for illustration projects
 * 
 * 4. ADDING SKILLS:
 * Just add new strings to the skills array
 * 
 * IMPORTANT:
 * - Don't forget commas between items!
 * - Keep quotes around text
 * - Last item in each array should NOT have a comma
 */
