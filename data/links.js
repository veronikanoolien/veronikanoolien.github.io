/* ==============================================
   SOCIAL MEDIA LINKS DATA
   ============================================== */

/**
 * WHY SEPARATE FILE?
 * - Easy to edit social links without touching JavaScript logic
 * - Clean organization (data separated from code)
 * - If you add/remove social platforms, you only edit this file
 * 
 * HOW IT WORKS?
 * - This file is loaded BEFORE script.js in index.html
 * - Creates the 'links' array that script.js uses
 * - script.js can access this data without rewriting it
 */

/**
 * LINKS ARRAY
 * Contains all your social media and external platform links
 * Each link has:
 * - label: What text appears on the button
 * - url: Where the link points to
 */
const links = [
    {
        label: "Instagram",
        url: "https://www.instagram.com/veronika_noolien/"
    },
    {
        label: "RedBubble",
        url: "https://www.redbubble.com/people/noolien"
    },
    {
        label: "GoodReads",
        url: "https://www.goodreads.com/user/show/12345678-veronika-noolien"
    },
    {
        label: "Buy Me a Coffee",
        url: "https://www.buymeacoffee.com/veronikanoolien"
    }
];

/**
 * HOW TO ADD A NEW LINK:
 * 
 * Just add a new object to the array above:
 * {
 *     label: "Your Platform Name",
 *     url: "https://your-platform-url.com/yourprofile"
 * }
 * 
 * Example (Twitter):
 * {
 *     label: "Twitter",
 *     url: "https://twitter.com/yourusername"
 * }
 */

