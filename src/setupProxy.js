const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api'], {
      target: 'https://ec2-3-39-238-222.ap-northeast-2.compute.amazonaws.com:18068',
      changeOrigin: true,
      onProxyReq: function (proxyReq) {
        proxyReq.setHeader(
          'origin',
          'https://ec2-3-39-238-222.ap-northeast-2.compute.amazonaws.com:18068'
        );
      },
    })
  );
};
