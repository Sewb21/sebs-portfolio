module.exports = {
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          components: "./components",
          styles: "./styles",
          utils: '../utils',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans`
        ],
        display: 'swap'
      }},
  ],
}
