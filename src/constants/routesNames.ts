export const routesNames = {
  Index: '/',
  Search: '/search',
  Employers: '/employers',
  Candidates: '/candidates',
  Careers: '/careers',
  About: '/about',
  Faq: '/faq',
  Contacts: '/contacts',
  Blog: '/blog',
  Articles: '/articles',
  PrivacyPolicy: '/privacy-policy',
  Auth: '/auth',
}

export const navList = [
  {
    title: 'Employers',
    list: [
      {
        title: 'For Employers',
        route: routesNames.Employers
      },
      {
        title: 'Find a candidate',
        route: routesNames.Search
      },
    ]
  },
  {
    title: 'Candidates',
    list: [
      {
        title: 'For Candidates',
        route: routesNames.Candidates
      },
      {
        title: 'Careers',
        route: routesNames.Careers
      },
      {
        title: 'Find a job',
        route: routesNames.Search
      },

    ]
  },
  {
    title: 'Company',
    list: [
      {
        title: 'About',
        route: routesNames.About
      },
      {
        title: 'FAQ',
        route: routesNames.Faq
      },
      {
        title: 'Contact us',
        route: routesNames.Contacts
      }
    ]
  },
  {
    title: 'Blog',
    list: [
      {
        title: 'Our Blog',
        route: routesNames.Blog
      },
      {
        title: 'Recent Articles',
        route: ''
      },
    ]
  },
]