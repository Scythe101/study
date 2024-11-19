import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Study Notes",
  description: "Notes for studying",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Spanish 3',
        items: [
          { text: 'Por vs. Para', link: '/spanish3/porvspara' },
          { text: 'Demonstrative Adjectives', link: '/spanish3/demonstrativeadjectives' },
          { text : 'Perfect Tenses', link: '/spanish3/perfecttenses' },
          { text : 'Present Subjunctive', link: '/spanish3/presentsubjunctive'},
          { text : 'Simple Future', link: '/spanish3/simplefuture'}
        ],
      }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Spanish 3',
        collapsed: false,
        items: [
          { text: 'Por vs. Para', link: '/spanish3/porvspara' },
          { text: 'Demonstrative Adjectives', link: '/spanish3/demonstrativeadjectives' },
          { text : 'Perfect Tenses', link: '/spanish3/perfecttenses' },
          { text : 'Present Subjunctive', link: '/spanish3/presentsubjunctive'},
          { text : 'Simple Future', link: '/spanish3/simplefuture'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Scythe101/study' }
    ]
  }

})
