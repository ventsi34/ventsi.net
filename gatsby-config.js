module.exports = {
    plugins: [
        'gatsby-plugin-eslint',
        'gatsby-plugin-sass',
        {
          resolve: 'gatsby-plugin-web-font-loader',
          options: {
            google: {
              families: ['Baloo Paaji 2'],
            }
          }
        },
    ]
}
