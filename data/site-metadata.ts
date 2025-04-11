export const SITE_METADATA = {
  title: `DAN_3002 Personal Page & Blog`,
  author: 'DAN_3002 - Nguyễn Đình Anh',
  headerTitle: `DAN_3002 Blog`,
  description:
    'A personal space on the cloud where I document my programming journey, sharing lessons, insights, and resources for fellow developers.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://blog.dan3002.tech',
  siteRepo: 'https://github.com/DAN3002/DAN3002-Blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  email: 'contact@dan3002.tech',
  github: 'https://github.com/DAN3002',
  // x: 'https://x.com/DAN3002',
  // facebook: 'https://facebook.com/DAN3002',
  // youtube: 'https://www.youtube.com/@DAN3002',
  linkedin: 'https://www.linkedin.com/in/DAN3002',
  // threads: 'https://www.threads.net/DAN3002',
  // instagram: 'https://www.instagram.com/DAN3002',
  locale: 'en-US',
  stickyNav: true,

  // New profile information
  profile: {
    name: 'Nguyễn Đình Anh',
    displayName: 'DAN_3002',
    tagline: 'Cloud | Software | AI',
    occupation: {
      title: 'Senior Devops',
      company: 'VPBank',
      companyUrl: 'https://www.vpbank.com.vn/',
    },
    location: {
      city: 'Ha Noi',
      country: 'Vietnam',
      countryCode: 'VN',
      emoji: 'flag-vietnam',
    },
  },

  // goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
  // goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  // imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://analytics.leohuynh.dev/share/c9ErglxqzY5CQJ8g/leohuynh.dev',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}
