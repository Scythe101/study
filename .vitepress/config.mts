import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Study Notes",
  description: "Notes for studying",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Spanish 4',
        items: [
          { text: 'Imperfect Subjunctive', link: '/spanish4/imperfectsubjunctive' },
          { text: 'If Conditionals', link: '/spanish4/conditionals' },
          { text: 'ESCAPA', link: '/spanish4/escapa' },
          { text: 'CAMELoT', link: '/spanish4/camelot' },
          { text: 'HD³', link: '/spanish4/hd3' },
          { text: 'Lo Que', link: '/spanish4/loque' },
        ]
      },
      { text: 'Spanish 3',
        items: [
          { text: 'Por vs. Para', link: '/spanish3/porvspara' },
          { text: 'Demonstrative Adjectives', link: '/spanish3/demonstrativeadjectives' },
          { text : 'Perfect Tenses', link: '/spanish3/perfecttenses' },
          { text : 'Present Subjunctive', link: '/spanish3/presentsubjunctive'},
          { text : 'Simple Future', link: '/spanish3/simplefuture'},
          { text : 'Conditional/Imperfect Subjunctive Tenses', link: '/spanish3/conditional'}
        ],
      }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Spanish 3',
        collapsed: true,
        items: [
          { text: 'Por vs. Para', link: '/spanish3/porvspara' },
          { text: 'Demonstrative Adjectives', link: '/spanish3/demonstrativeadjectives' },
          { text : 'Perfect Tenses', link: '/spanish3/perfecttenses' },
          { text : 'Present Subjunctive', link: '/spanish3/presentsubjunctive'},
          { text : 'Simple Future', link: '/spanish3/simplefuture'},
          { text : 'Conditional/Imperfect Subjunctive Tenses', link: '/spanish3/conditional'}
        ]
      },
      {
        text: 'Spanish 4',
        collapsed: true,
        items: [
          { text: 'Imperfect Subjunctive', link: '/spanish4/imperfectsubjunctive' },
          { text: 'If Conditionals', link: '/spanish4/conditionals' },
          { text: 'ESCAPA', link: '/spanish4/escapa' },
          { text: 'CAMELoT', link: '/spanish4/camelot' },
          { text: 'HD³', link: '/spanish4/hd3' },
          { text: 'Lo Que', link: '/spanish4/loque' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Scythe101/study' }
    ]
  }

})
