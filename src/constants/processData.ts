import svgOp1 from '../../public/icons/opport-1.svg'
import svgOp2 from '../../public/icons/opport-2.svg'
import svgOp3 from '../../public/icons/opport-3.svg'
import svgOp4 from '../../public/icons/opport-4.svg'
import svgAirBnb from '../../public/icons/Airbnb.svg'
import svgAmazon from '../../public/icons/Amazon.svg'
import svgGoogle from '../../public/icons/Google.svg'
import svgInVision from '../../public/icons/InVision.svg'
import svgStripe from '../../public/icons/Stripe.svg'
import svgZendesk from '../../public/icons/Zendesk.svg'
import svgRakuten from '../../public/icons/Rakuten.svg'
import svgHours from '../../public/icons/hours.svg'
import svgPhone from '../../public/icons/phone.svg'
import svgChat from '../../public/icons/chat.svg'

export const processGuid = [
  {
    title: 'Post your job',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies'
  },
  {
    title: 'Manage applicants',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies'
  },
  {
    title: 'Easily find quality matches',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies'
  },
]

export const processHiring = [
  {
    title: 'Build your profile',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies'
  },
  {
    title: 'Search for job openings',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies'
  },
  {
    title: 'Apply for jobs you interested in',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies'
  },
]

export const processOpportunities = [
  {
    title: 'Detailed analytics',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    icon: svgOp1,
    color: '#E1A814'
  },
  {
    title: 'Zoom integration',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    icon: svgOp2,
    color: '#3860E2'
  },
  {
    title: 'Smart testing',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    icon: svgOp3,
    color: '#47D18C'
  },
  {
    title: 'User Rating',
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    icon: svgOp4,
    color: '#A3A93B'
  },

]

export const reviews = [
  {
    icon: svgAirBnb,
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    author: 'Leila Khoury, CEO'
  },
  {
    icon: svgAmazon,
    text: 'We are nost efficient and reliable souce of hiring perocess and ',
    author: 'Leila Khoury, CEO'
  },
  {
    icon: svgGoogle,
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    author: 'Leila Khoury, CEO'
  },
  {
    icon: svgRakuten,
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    author: 'Leila Khoury, CEO'
  },
  {
    icon: svgInVision,
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies. We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    author: 'Leila Khoury, CEO'
  },
  {
    icon: svgStripe,
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    author: 'Leila Khoury, CEO'
  },
  {
    icon: svgZendesk,
    text: 'We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies',
    author: 'Leila Khoury, CEO'
  },
]

export const searchTags = [
  {
    color: '#53C58F',
    label: 'Software Engeneering',
    value: 'software'
  },
  {
    color: '#1F8FFF',
    label: 'Product',
    value: 'product'

  },
  {
    color: '#F59A74',
    label: 'Marketing',
    value: 'marketing'

  },
  {
    color: '#8E66ED',
    label: 'HR, Recruitment',
    value: 'recruitment'
  },

  {
    color: '#53C58F',
    label: 'Design',
    value: 'design'

  },
  {
    color: '#1F8FFF',
    label: 'Finance, Legal & Compliance',
    value: 'finance'

  },
  {
    color: '#F59A74',
    label: 'Operations & Strategy',
    value: 'operations'
  },
  {
    color: '#53C58F',
    label: 'Data',
    value: 'data'
  },
  {
    color: '#8E66ED',
    label: 'Sales & Account Management',
    value: 'sales'
  },
]

export const categoryTags = {
  title: 'Category',
  options: searchTags.map((el) => ({ label: el.label, value: el.value }))
}

export const policyTerms = [
  {
    title: 'Privacy Policy',
    text: 'This Website collects some Personal Data from its Users. Users may be subject to different protection standards and broader standards may, therefore, apply to some.  In order to learn more about the protection criteria, Users can refer to the applicability section.',
    terms: [
      {
        title: 'Types of Data collected',
        text: [
          'The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. ',
          'In addition to the Owner, in some cases, the Data may be accessible to certain types of personsin charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. '
        ],
      },
      {
        title: 'The purposes of processing',
        text: [
          'The Data concerning the User is collected to allow the Owner to provide its Services, as wellas for the following purposes: Analytics, SPAM protection and Contacting the User.',
          'Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document.'
        ],
      },
      {
        title: 'Contacting the User',
        text: [
          'By registering on the mailing list or for the newsletter, the User’s email address will be added tothe contact list of those who may receive email messages containing information of commercial or promotional nature concerning this Website. Your email address might also be added to this list as a result of signing up to this Website or after making a purchase.',
        ],
      },
      {
        title: 'Legal basis of processing',
        text: [
          'Users have given their consent for one or more specific purposes. Note: Under some legislations, the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;',
          'Provision of Data is necessary for the performance of an agreement with the User and/or forany pre-contractual obligations thereof;',
          'Processing is necessary for compliance with a legal obligation to which the Owner is subject;',
          'Processing is related to a task that is carried out in the public interest or in the exerciseof official authority vested in the Owner;',
          'In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.',
        ]
      }
    ]
  },
  {
    title: 'Terms of Service',
    text: 'This Website collects some Personal Data from its Users. Users may be subject to different protection standards and broader standards may, therefore, apply to some.  In order to learn more about the protection criteria, Users can refer to the applicability section.',
    terms: [
      {
        title: 'Types of Data collected',
        text: [
          'The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. ',
          'In addition to the Owner, in some cases, the Data may be accessible to certain types of personsin charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. '
        ],
      },
      {
        title: 'The purposes of processing',
        text: [
          'The Data concerning the User is collected to allow the Owner to provide its Services, as wellas for the following purposes: Analytics, SPAM protection and Contacting the User.',
          'Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document.'
        ],
      },
      {
        title: 'Contacting the User',
        text: [
          'By registering on the mailing list or for the newsletter, the User’s email address will be added tothe contact list of those who may receive email messages containing information of commercial or promotional nature concerning this Website. Your email address might also be added to this list as a result of signing up to this Website or after making a purchase.',
        ],
      },
      {
        title: 'Legal basis of processing',
        text: [
          'Users have given their consent for one or more specific purposes. Note: Under some legislations, the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;',
          'Provision of Data is necessary for the performance of an agreement with the User and/or forany pre-contractual obligations thereof;',
          'Processing is necessary for compliance with a legal obligation to which the Owner is subject;',
          'Processing is related to a task that is carried out in the public interest or in the exerciseof official authority vested in the Owner;',
          'In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.',
        ]
      }
    ]
  },
  {
    title: 'Data Protection Law',
    text: 'This Website collects some Personal Data from its Users. Users may be subject to different protection standards and broader standards may, therefore, apply to some.  In order to learn more about the protection criteria, Users can refer to the applicability section.',
    terms: [
      {
        title: 'Types of Data collected',
        text: [
          'The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. ',
          'In addition to the Owner, in some cases, the Data may be accessible to certain types of personsin charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. '
        ],
      },
      {
        title: 'The purposes of processing',
        text: [
          'The Data concerning the User is collected to allow the Owner to provide its Services, as wellas for the following purposes: Analytics, SPAM protection and Contacting the User.',
          'Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document.'
        ],
      },
      {
        title: 'Contacting the User',
        text: [
          'By registering on the mailing list or for the newsletter, the User’s email address will be added tothe contact list of those who may receive email messages containing information of commercial or promotional nature concerning this Website. Your email address might also be added to this list as a result of signing up to this Website or after making a purchase.',
        ],
      },
      {
        title: 'Legal basis of processing',
        text: [
          'Users have given their consent for one or more specific purposes. Note: Under some legislations, the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;',
          'Provision of Data is necessary for the performance of an agreement with the User and/or forany pre-contractual obligations thereof;',
          'Processing is necessary for compliance with a legal obligation to which the Owner is subject;',
          'Processing is related to a task that is carried out in the public interest or in the exerciseof official authority vested in the Owner;',
          'In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.',
        ]
      }
    ]
  },
  {
    title: 'Subscription',
    text: 'This Website collects some Personal Data from its Users. Users may be subject to different protection standards and broader standards may, therefore, apply to some.  In order to learn more about the protection criteria, Users can refer to the applicability section.',
    terms: [
      {
        title: 'Types of Data collected',
        text: [
          'The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. ',
          'In addition to the Owner, in some cases, the Data may be accessible to certain types of personsin charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. '
        ],
      },
      {
        title: 'The purposes of processing',
        text: [
          'The Data concerning the User is collected to allow the Owner to provide its Services, as wellas for the following purposes: Analytics, SPAM protection and Contacting the User.',
          'Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document.'
        ],
      },
      {
        title: 'Contacting the User',
        text: [
          'By registering on the mailing list or for the newsletter, the User’s email address will be added tothe contact list of those who may receive email messages containing information of commercial or promotional nature concerning this Website. Your email address might also be added to this list as a result of signing up to this Website or after making a purchase.',
        ],
      },
      {
        title: 'Legal basis of processing',
        text: [
          'Users have given their consent for one or more specific purposes. Note: Under some legislations, the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;',
          'Provision of Data is necessary for the performance of an agreement with the User and/or forany pre-contractual obligations thereof;',
          'Processing is necessary for compliance with a legal obligation to which the Owner is subject;',
          'Processing is related to a task that is carried out in the public interest or in the exerciseof official authority vested in the Owner;',
          'In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.',
        ]
      }
    ]
  },
]

export const processFaq = [
  {
    title: 'For employers',
    value: 'employers',
    data: [
      {
        question: 'How many steps to get a job?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'What do we need to apply for a job?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'Do we get cv from Developli?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'Can we reschedule the interview meeting?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'Can we apply for all jobs?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
    ]
  },
  {
    title: 'For candidates',
    value: 'candidates',
    data: [
      {
        question: 'Do we get cv from Developli?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'Can we reschedule the interview meeting?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'Can we apply for all jobs?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'How many steps to get a job?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
      {
        question: 'What do we need to apply for a job?',
        answer: 'Et lectus viverra aenean malesuada praesent. Egestas praesent quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida tellus auctor ac, vitae justo.'
      },
    ]
  }
]

export const processSupport = [
  {
    icon: svgPhone,
    linkTitle: '00966 2 6676760',
    linkType: 'tel:+0096626676760',
    name: 'Our 24/7 Customer Services',
  },
  {
    icon: svgHours,
    linkTitle: 'support@developli.com',
    linkType: 'mailto:support@developli.com',
    name: 'Alternative way to get anwser faster.'
  },
  {
    icon: svgChat,
    linkTitle: 'Online-Chat',
    linkType: 'http://http://google.com',
    name: 'Our community ready to help you'
  }
]

export const companySize = [
  {
    value: '0-10',
    label: 'Small (0-10)'
  },
  {
    value: '10-100',
    label: 'Medium (10-100)'
  },
  {
    value: '100-..',
    label: 'Big (100-...)'
  }
]

export const experienceFilters = {
  title: 'Experience Level',
  options: [
    {
      label: '0-2 years',
      value: '0-2'
    },
    {
      label: '3-5 years',
      value: '3-5'
    },
    {
      label: '6-9 years',
      value: '6-9'
    },
    {
      label: '10+ years',
      value: '10-'
    },
  ]
}

export const typeFilters = {
  title: 'Type of employment',
  options: [
    {
      label: 'Fulltime',
      value: 'fulltime'
    },
    {
      label: 'Part-Time',
      value: 'part-Time'
    },
    {
      label: 'Remote',
      value: 'remote'
    },
    {
      label: 'Internship/Trainee',
      value: 'internship/trainee'
    },
    {
      label: 'Hourly',
      value: 'Hourly'
    },
  ]
}

export const salaryRange = {
  title: 'Salary Range',
  options: [
    {
      label: '0-500',
      value: '0-500'
    },
    {
      label: '500-1000',
      value: '500-1000'
    },
    {
      label: '1000-3000',
      value: '1000-3000'
    },
    {
      label: '3000+',
      value: '3000-'
    },
  ]
}

export const jobStatus = {
  title: 'Employment Status',
  options: [
    {
      label: 'Available',
      value: 'available'
    },
    {
      label: 'All',
      value: 'all'
    },
  ]
}

export const jobLocations = {
  title: 'Location',
  options: [
    {
      label: 'Saudi Arabia',
      value: 'Saudi Arabia'
    },
    {
      label: 'United States',
      value: 'United States'
    },
    {
      label: 'Germany',
      value: 'Germany'
    },
    {
      label: 'Australia',
      value: 'Australia'
    },
    {
      label: 'Ukraine',
      value: 'Ukraine'
    },
  ]
}

export const sort = [
  {
    label: 'Most relevant',
    value: 'relevant'
  },
  {
    label: 'Latest',
    value: 'Latest'
  },
]

export const workLevels = [
  'Trainee', 'Junior', 'Middle', 'Senior'
]

export const companies = [
  {
    id: '1',
    companyId: '',

    position: 'Narrative designer',
    avatar: '',

    link: 'Racuten',
    name: 'Invision',

    city: 'Chicago',
    counry: 'USA',

    salary: 25000,

    createdAt: Date.now().toLocaleString(),
    updatedAt: Date.now().toLocaleString(),

    experience: '0-2 years',
    workLevel: 'Senior Level',
    type: 'Fulltime Job',

    description: 'Frogwares is currently looking for a Narrative Designer to join the dynamic team of game designers for its upcoming titles. Our expert team creates games which are highly praised by millions of players, as well as industry experts all over the world.',

    requirements: [
      'At least 3 years of experience on a similar position;',
      'English – Upper intermediate (B2) or higher;',
      'Strong dramatic writing skills in English;',
      'Deep understanding of story structure, non-linear narrative methods;',
      'Passion for video games of various genres, especially for the open-world genre;'
    ]
  },
  {
    id: '2',
    companyId: '',

    position: 'Narrative designer',
    avatar: '',

    link: 'Racuten',
    name: 'Invision',

    city: 'Chicago',
    counry: 'USA',

    salary: 25000,

    createdAt: Date.now().toLocaleString(),
    updatedAt: Date.now().toLocaleString(),

    experience: '0-2 years',
    workLevel: 'Senior Level',
    type: 'Fulltime Job',

    description: 'Frogwares is currently looking for a Narrative Designer to join the dynamic team of game designers for its upcoming titles. Our expert team creates games which are highly praised by millions of players, as well as industry experts all over the world.',

    requirements: [
      'At least 3 years of experience on a similar position;',
      'English – Upper intermediate (B2) or higher;',
      'Strong dramatic writing skills in English;',
      'Deep understanding of story structure, non-linear narrative methods;',
      'Passion for video games of various genres, especially for the open-world genre;'
    ]
  }
]