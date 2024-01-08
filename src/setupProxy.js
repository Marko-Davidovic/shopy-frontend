const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://shy-rose-horse-hat.cyclic.app/api',
      changeOrigin: true,
    })
  );
};