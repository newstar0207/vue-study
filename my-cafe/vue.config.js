module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
