module.exports = {
  title: "A Vuetiful Life",
  description: 'Free Vue Tutorials!',
  themeConfig: {
    nav: [
      { text: 'Google', link: 'https://www.google.com' },
    ],
    sidebar: [
      '/',
      '../pages/videos/'
    ]
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@videos': 'pages/videos'
  //     }
  //   }
  // },
}