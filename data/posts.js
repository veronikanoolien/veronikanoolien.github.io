/* ==============================================
   BLOG POSTS DATA
   ============================================== */

/**
 * WHY SEPARATE FILE?
 * - When you write new blog posts, you only edit THIS file
 * - Easy to copy-paste posts without touching JavaScript logic
 * - Clean separation: data here, logic in script.js
 * 
 * HOW IT WORKS?
 * - This file is loaded BEFORE script.js in index.html
 * - Creates the 'posts' array that script.js uses for rendering
 * - script.js uses this data to display blog posts
 */

/**
 * POSTS ARRAY
 * Contains all your blog posts
 * Each post needs these properties:
 * - id: Unique identifier (used in URL routing like #post/welcome)
 * - category: Which category it belongs to (personal, illustration, reviews, writing)
 * - title: What shows in the preview card and full post
 * - date: ISO format (YYYY-MM-DD) so sorting works correctly
 * - summary: Short preview text (shows on blog list)
 * - content: Full HTML content (shows when user clicks "Read more")
 */
const posts = [
  {
    id: "welcome",
    category: "personal",
    title: "Vítejte na mém blogu",
    date: "2026-01-14",
    summary: "Proč jsem začala psát tento blog a co můžete očekávat.",
    content:
      "<p>Díky, že jste se zastavili! Toto je prostor, kde sdílím aktualizace o své tvorbě, myšlenky a příběhy ze zákulisí.</p>" +
      "<p>Začínám s minimalistickým nastavením: jednoduchý Linktree plus blog renderovaný JavaScriptem. Žádné frameworky, jen základy.</p>"
  },
  {
    id: "plans-2026",
    category: "personal",
    title: "Plány pro rok 2026",
    date: "2026-01-14",
    summary: "Cíle, projekty a to, co mě těší tvořit.",
    content:
      "<ul><li>Pravidelně přispívat</li><li>Experimentovat s novými styly</li><li>Více se propojit s komunitou</li></ul>"
  },
  {
    id: "illustration-tips",
    category: "illustration",
    title: "Tipy pro začínající ilustrátory",
    date: "2026-01-13",
    summary: "Moje nejlepší rady pro ty, kdo začínají s ilustrací.",
    content:
      "<p>Ilustrace je cesta plná učení a experimentování. Zde je několik tipů, které mi pomohly...</p>"
  },
  {
    id: "book-review-1",
    category: "reviews",
    title: "Recenze: Oblíbená fantasy kniha",
    date: "2026-01-12",
    summary: "Mé myšlenky na nejnovější fantasy bestseller.",
    content:
      "<p>Tato kniha mě uchvátila od první stránky...</p>"
  }
];

/**
 * HOW TO ADD A NEW BLOG POST:
 * 
 * 1. Copy this template:
 * {
 *   id: "unique-post-id",
 *   category: "personal",  // or illustration, reviews, writing
 *   title: "Your Post Title",
 *   date: "2026-01-16",    // Today's date in YYYY-MM-DD format
 *   summary: "Short preview text (appears in blog list)",
 *   content: "<p>Full HTML content here...</p>"
 * }
 * 
 * 2. Add it to the posts array (before the closing bracket)
 * 
 * 3. For multiline content, use + to combine strings:
 * content: "<p>Paragraph 1</p>" +
 *          "<p>Paragraph 2</p>" +
 *          "<ul><li>Point 1</li></ul>"
 * 
 * IMPORTANT:
 * - id must be UNIQUE (no duplicates!)
 * - id is used in URL, so avoid spaces/special chars
 * - Use hyphens (post-title) not underscores (post_title)
 * - Date format must be YYYY-MM-DD so it sorts correctly
 */
