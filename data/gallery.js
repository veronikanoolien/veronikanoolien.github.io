/* ==============================================
   PORTFOLIO / GALLERY DATA
   ============================================== */

/**
 * WHY SEPARATE FILE?
 * - Easy to add/edit artwork without touching code
 * - When you create new illustrations, just add them here
 * - Clean organization (data separate from logic)
 * 
 * HOW IT WORKS?
 * - This file is loaded BEFORE script.js in index.html
 * - Creates 'portfolio' array and 'portfolioTypes' object
 * - script.js uses these to display and filter artwork
 */

/**
 * PORTFOLIO ARRAY
 * Contains all your artwork pieces
 * Each artwork needs:
 * - id: Unique identifier (e.g., "portrait-1")
 * - type: Category for filtering (character, landscape, cover, illustration)
 * - title: Artwork name (shows in gallery and modal)
 * - image: URL to the artwork image
 * - description: Full description (shows in modal when clicked)
 */
const portfolio = [
  
   {
    id: "optimusprime",
    type: "fanart",
    title: "Optimus Prime",
    image: "pictures/Optimus Prime.jpg",
    description: "Ilustrace do pohádkové knížky Hvězdičky z pohádek od Martiny Kobylíkové",
    featured: true
  },
   {
    id: "datel",
    type: "animals",
    title: "Ilustrace k pohádce - Datel",
    image: "pictures/datel.jpg",
    description: "Ilustrace do pohádkové knížky Hvězdičky z pohádek od Martiny Kobylíkové",
  },
   {
    id: "spnfanart",
    type: "fanart",
    title: "Chevrolet Impala 1967 - Supernatural",
    image: "pictures/impala.jpg",
    description: "Fan art k seriálu Supernatural (Lovci duchů) - Chevrolet Impala 1967.",
    featured: true
  },
  {
    id: "animal-1",
    type: "animal",
    title: "Můra a hvězdy",
    image: "pictures/moth_stars.png",
    description: "Obrázek můry s hvězdnou oblohou v pozadí.",
  },
  {
    id: "bookcover-1",
    type: "cover",
    title: "Skákala rybička po moři",
    image: "pictures/fishy_cover.jpg",
    description: "Vzorový návrh obálky pro pohádkovou knihu."
  },
  {
    id: "bookcover-2",
    type: "cover",
    title: "Malý princ",
    image: "pictures/little_prince.jpg",
    description: "Návrh obálky pro knihu Malý princ."
  }
];

/**
 * PORTFOLIO TYPES (Category labels)
 * Maps category keys to display names
 * These appear as filter buttons above the gallery
 */
const portfolioTypes = {
  all: "Vše",              // Show all artwork
  fanart: "Fan art",       // Fan art illustrations
  character: "Postavy",    // Character designs, portraits
  animal: "Zvířata",    // Animals
  cover: "Obálky",        // Book covers
  illustration: "Rostliny" // Plant illustrations
};

/**
 * HOW TO ADD NEW ARTWORK:
 * 
 * 1. Get your image URL:
 *    - Upload to imgur.com or similar (free image hosting)
 *    - Copy the image URL
 * 
 * 2. Copy this template:
 * {
 *   id: "unique-id",
 *   type: "character",    // or landscape, cover, illustration
 *   title: "Artwork Title",
 *   image: "https://your-image-url.jpg",
 *   description: "Detailed description of the artwork"
 * }
 * 
 * 3. Add it to the portfolio array
 * 
 * IMPORTANT:
 * - id must be UNIQUE
 * - type must match one in portfolioTypes keys (all, character, landscape, cover, illustration)
 * - image must be a valid URL (http or https)
 * - Use high-quality images for professional look
 * 
 * EXAMPLE WITH YOUR REAL IMAGE:
 * {
 *   id: "my-illustration-1",
 *   type: "illustration",
 *   title: "My Beautiful Illustration",
 *   image: "https://imgur.com/example.jpg",
 *   description: "This is my first professional illustration..."
 * }
 */
