export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5c1b704e0db184468fa4b8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-34mieh1h',
                  apiId: 'aed4fa69-352d-4c2b-b1bd-af8591050999'
                },
                {
                  buildHookId: '5d5c1b705cb7a89097580f80',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5otamn1j',
                  apiId: '08c31b63-9cac-4b2e-b599-ecfa2a98b9e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gravityatl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5otamn1j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
