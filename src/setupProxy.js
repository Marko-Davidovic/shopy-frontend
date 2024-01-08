const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://shopy-backend-tpwy.onrender.com/api',
      changeOrigin: true,
    })
  );
};