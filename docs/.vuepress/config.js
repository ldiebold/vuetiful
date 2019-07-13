module.exports = {
  title: "A Vuetiful Life",
  description: 'Free Vue Tutorials!',
  themeConfig: {
    nav: [
      {
        text: 'Podcast',
        link: 'https://www.vuetifullife.com/podcast'
      },
      {
        text: 'Social',
        items: [
          // - Twitter
          // - Facebook
          {
            text: 'Twitch',
            link: 'https://www.twitch.tv/vuetiful'
          },
          {
            text: 'YouTube',
            link: 'https://www.youtube.com/channel/UCmRBQ7JshWJss0hZnj3K_Bg'
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/LukeDiebold'
          }
        ]
      },
    ],
    sidebar: [
      // Welcome
      '/welcome.md',
      {
        // Tutorials
        title: 'Tutorials',
        collapsable: true,
        children: [
          // Intermediate
          {
            title: 'Intermediate',
            collapsable: true,
            children: [
              '/intermediate/patterns/',
              '/intermediate/quasar/',
            ]
          },
          // Advanced
          {
            title: 'Advanced',
            collapsable: true,
            children: [
              '/advanced/vuex-orm/'
            ]
          },
          // Tooling
          {
            title: 'Tooling',
            collapsable: true,
            children: [
              '/tooling/vs-code/',
            ]
          }
        ]
      },
      '/podcast.md'
    ],
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@videos': 'pages/videos'
  //     }
  //   }
  // },
}