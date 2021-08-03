module.exports = {
  devServer: {
    proxy: { // /api 로 시작되는 요청 주소 정의
      '/api':{
        target: 'http://localhost:3000/api',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },

  // 배포위치
  // npm run build 로 가능
  outputDir: '../backend/public',

  transpileDependencies: [
    'vuetify'
  ]
}
