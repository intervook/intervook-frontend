const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api'], {
      target: 'http://ec2-43-201-65-255.ap-northeast-2.compute.amazonaws.com:18068/',
      // target: 'http://192.168.0.21:18068',
      changeOrigin: true,
      onProxyReq: function (proxyReq) {
        proxyReq.setHeader(
          'origin',
          'http://ec2-43-201-65-255.ap-northeast-2.compute.amazonaws.com:18068/'
          // 'http://192.168.0.21:18068'
        );
      },
    })
  );
};
