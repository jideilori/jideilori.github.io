const portfolioData = {
  projects: [
    {
      id: 'most-recent-projects',
      title: 'Most Recent Projects',
      projects: [
        {
          id: 'housezzy-studio',
          name: 'Housezzy Studio',
          url: 'https://housezzy.com',
          image: 'images/projects/housezzy.png',
          description: 'An architectural and engineering firm.'
        }, {
          id: 'ability-design',
          name: 'Ability Design',
          url: 'https://abilitydesign.co',
          image: 'images/projects/ability-design.png',
          description: 'A modern branding business.'
        }, {
          id: 'cortell',
          name: 'CoreTell',
          url: 'https://coretell.blogspot.com',
          image: 'images/projects/coretell.png',
          description: 'A new age blogging platform for latest tech updates.'
        }
      ]
    }, {
      id: 'other-projects',
      title: 'Other Project',
      projects: [
        {
          id: 'career-strive',
          name: 'Career Strive',
          url: '',
          image: 'images/projects/career-strive.png',
          description: 'A computer based testing and selection system for employment.'
        }, {
          id: 'form-template-search-app',
          name: 'Form Template Search App',
          url: 'https://astongemmy.github.io/form-template-search',
          image: 'images/projects/form-template-search.png',
          description: 'A simple React app for finding suitable form template.'
        }
      ]
    }
  ],
  clients: [
    {
      name: 'Housezzy Studio',
      image: 'images/clients/housezzy-1.png',
      color: 'text-yellow-600',
      bgColor: 'bg-white',
      borderColor: 'border-yellow-500'
    }, {
      name: 'Ability Design',
      image: 'images/clients/ability-design.svg',
      color: 'text-green-500',
      bgColor: 'bg-green-500',
      borderColor: 'border-green-500'
    }
  ]
}

export default portfolioData;