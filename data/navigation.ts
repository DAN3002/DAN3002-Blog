import { SITE_METADATA } from './site-metadata'

export const HEADER_NAV_LINKS = [
  { href: '/blog', title: 'Blog', emoji: 'writing-hand' },
  // { href: '/snippets', title: 'Snippets', emoji: 'dna' },
  {
    href: `${SITE_METADATA.portfolioUrl}?section=projects`,
    title: 'Projects',
    emoji: 'man-technologist',
  },
  { href: SITE_METADATA.portfolioUrl, title: 'About', emoji: 'billed-cap' },
]

export const MORE_NAV_LINKS = [
  {
    href: `${SITE_METADATA.portfolioUrl}?section=certifications`,
    title: 'Certifications',
    emoji: 'light-bulb',
  },
  {
    href: `${SITE_METADATA.portfolioUrl}?section=achieves`,
    title: 'Achieves',
    emoji: 'sports-medal',
  },
  { href: '/tags', title: 'Tags', emoji: 'label' },
  { href: `${SITE_METADATA.portfolioUrl}?section=contact`, title: 'Contact', emoji: 'envelope' },
]

export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: 'Blog' },
  // { href: '/snippets', title: 'Snippets' },
  // { href: '/projects', title: 'Projects' },
  { href: '/tags', title: 'Tags' },
  { href: '/feed.xml', title: 'RSS Feed' },
]

export const FOOTER_PERSONAL_STUFF = [
  { href: `${SITE_METADATA.portfolioUrl}?section=about`, title: 'About' },
  {
    href: `${SITE_METADATA.portfolioUrl}?section=projects`,
    title: 'Projects',
  },
  { href: `${SITE_METADATA.portfolioUrl}/Resume_Nguyễn%20Đình%20Anh.pdf`, title: 'Resume' },
  {
    href: `${SITE_METADATA.portfolioUrl}?section=certifications`,
    title: 'Certifications',
  },
  {
    href: `${SITE_METADATA.portfolioUrl}?section=achieves`,
    title: 'Achieves',
  },
  // { href: SITE_METADATA.analytics.umamiAnalytics.shareUrl, title: 'Analytics' },
]
