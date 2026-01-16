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
    id: "portrait-1",
    type: "character",
    title: "Portrét - YX",
    image: "https://via.placeholder.com/400x500/667eea/ffffff?text=Portr%C3%A9t+1",
    description: "Portrét fantázijnmí postavy s detailnými rysy a atmosférou."
  },
  {
    id: "landscape-1",
    type: "landscape",
    title: "Krajina - Fantasy svět",
    image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Krajina",
    description: "Paměť inspirovaná fantasy svět a přírodností."
  },
  {
    id: "bookcover-1",
    type: "cover",
    title: "Obálka knihy",
    image: "https://via.placeholder.com/300x450/f59e0b/ffffff?text=Book+Cover",
    description: "Originální návrh obálky pro indie autory."
  },
  {
    id: "concept-1",
    type: "character",
    title: "Design postavy - Concept",
    image: "https://via.placeholder.com/400x400/10b981/ffffff?text=Concept",
    description: "Concept art pro postavu s variacemi a detailními návrhy."
  }
];

/**
 * PORTFOLIO TYPES (Category labels)
 * Maps category keys to display names
 * These appear as filter buttons above the gallery
 */
const portfolioTypes = {
  all: "Vše",              // Show all artwork
  character: "Postavy",    // Character designs, portraits
  landscape: "Krajiny",    // Landscapes, environments
  cover: "Obvázky",        // Book covers
  illustration: "Ilustrace" // General illustrations
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
