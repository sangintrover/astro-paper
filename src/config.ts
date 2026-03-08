export const SITE = {
  website: "https://niftylab.pages.dev/", 
  author: "Nifty Admin", // Bisa ganti jadi nama keren lu
  profile: "https://niftylab.pages.dev/", // Biar balik ke web sendiri
  desc: "Practical tech hacks, AI efficiency, and minimalist digital solutions for a smarter life.",
  title: "NiftyLab",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true,
  showBackButton: true, 
  editPost: {
    enabled: false, // Gue saranin false dulu biar pembaca nggak bingung liat tombol edit
    text: "Edit page",
    url: "https://github.com/username-lu/niftylab/edit/main/", // Ganti username-lu dengan punya lu
  },
  dynamicOgImage: true,
  dir: "ltr", 
  lang: "en", 
  timezone: "UTC", // Pakai UTC biar standar Global/Tier 1
} as const;
