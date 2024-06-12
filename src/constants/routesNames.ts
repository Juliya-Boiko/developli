export const routesNames = {
  Index: '/',
  Candidated: '/candidates',
  Employers: '/employers',
  Search: '/search',
  Blog: '/blog',
  About: '/about',
  Careers: '/careers',
  Faq: '/faq',
  Contacts: '/contacts',
  PrivacyPolicy: '/privacy-policy',
  Auth: '/auth',
  Jobs: '/jobs'
}

export const navList = [
  {
    title: 'Employers',
    routes: [
      {
        name: 'Start Hiring',
        path: ''
      },
      {
        name: 'Volunteer',
        path: ''
      },
      {
        name: 'Diversity and Inclusion',
        path: ''
      }
    ]
  },
  {
    title: 'Candidates',
    routes: [
      {
        name: 'Get Hired',
        path: ''
      },
      {
        name: 'Internships',
        path: ''
      },
      {
        name: 'Temporary Employment',
        path: ''
      },
      {
        name: 'Graduates',
        path: ''
      },
      {
        name: 'Volunteer',
        path: ''
      },
    ]
  },
  {
    title: 'Company',
    routes: [
      {
        name: 'For Students',
        path: ''
      },
      {
        name: 'Careers',
        path: routesNames.Careers
      },
      {
        name: 'Brand Ambassadors',
        path: ''
      },
      {
        name: 'About',
        path: routesNames.About
      },
      {
        name: 'Resources',
        path: ''
      },
      {
        name: 'Blog',
        path: routesNames.Blog
      },
    ]
  },

]